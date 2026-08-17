import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const canonicalLesson = "/a1/accusative-articles";
const fullA1Route = [
  ["/a1/verb-second-basics", "Verb auf Position 2"],
  ["/a1/present-tense-conjugation", "Präsens: Verben konjugieren"],
  ["/a1/nouns-gender-articles-plurals", "Nomen, Genus und Artikel"],
  ["/a1/negation-nicht-kein", "Negation: nicht und kein"],
  [canonicalLesson, "Akkusativ: der wird den"],
  ["/a1/possession-and-pronouns", "Possession: mein, dein, sein, ihr"],
  ["/a1/modal-verbs-sentence-bracket", "Modalverben und Satzklammer"],
  ["/a1/separable-verbs-time-word-order", "Trennbare Verben und Zeit"],
  ["/a1/dative-case-prepositions", "Dativ: dem, der, den"],
  ["/a1/place-direction-two-way-prepositions", "Ort oder Richtung?"],
  ["/a1/commands-requests-connectors", "Bitten, Aufforderungen und Konnektoren"],
  ["/a1/perfect-basics-a1-review", "Perfekt und A1-Integration"],
] as const;

test("A1 map exposes the complete 12-unit study route", async ({ page }) => {
  await page.goto("/a1");
  await expect(page.getByRole("heading", { level: 1, name: "German A1" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open lesson" })).toHaveCount(12);
  await page.locator('a[href="/a1/perfect-basics-a1-review"]').click();
  await expect(page.getByRole("heading", { level: 1, name: "Perfekt und A1-Integration" })).toBeVisible();
  await expect(page.getByText(/A1-bridge/)).toBeVisible();
});

test("every A1 lesson is direct-linkable and satisfies the visible lesson contract", async ({ page }) => {
  for (const [route, title] of fullA1Route) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
    for (const heading of [
      "Formula / structure",
      "Meaning",
      "Usage",
      "Examples",
      "Common mistakes",
      "Speaking transfer",
      "Micro practice",
    ]) {
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    }
  }
});

test("canonical lesson exposes the complete learning sequence and passes axe", async ({ page }) => {
  await page.goto(canonicalLesson);
  for (const heading of [
    "Formula / structure",
    "Meaning",
    "Usage",
    "Examples",
    "Interactive grammar lab",
    "Common mistakes",
    "Speaking transfer",
    "Micro practice",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
  await expect(page.getByText(/مهم‌ترین تغییر/)).toBeVisible();
  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
});

test("grammar interaction engine supports keyboard-first transformations", async ({ page }) => {
  await page.goto(canonicalLesson);
  await page.getByRole("heading", { name: "Interactive grammar lab" }).scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Heute", exact: true }).click();
  await expect(page.getByText("heute trinke ich den Kaffee.")).toBeVisible();
  await page.getByRole("button", { name: "Perfekt", exact: true }).click();
  await expect(page.getByText(/Ich habe gestern Kaffee getrunken/)).toBeVisible();
  await page.getByRole("button", { name: "Dativ", exact: true }).click();
  await expect(page.locator(".article-morph strong")).toHaveText("dem");
  const caseToken = page.getByRole("button", { name: /die Frau Subject lane/i, exact: true });
  await caseToken.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByText(/die Frau: Object lane · Akkusativ/)).toBeVisible();
  const accessibility = await new AxeBuilder({ page })
    .include(".interaction-labs")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
});

test("exercise modes grade deterministically and progress survives reload", async ({ page }) => {
  await page.goto(canonicalLesson);
  const blocks = page.locator(".practice-block");
  await expect(blocks).toHaveCount(4);

  const multipleChoice = blocks.nth(0);
  await multipleChoice.getByLabel("den", { exact: true }).check();
  await expect(multipleChoice.getByText("Correct", { exact: true })).toHaveCount(0);
  await multipleChoice.getByRole("button", { name: "Check answer" }).click();
  await expect(multipleChoice.getByText("Correct", { exact: true })).toBeVisible();

  const fillBlank = blocks.nth(1);
  await fillBlank.getByLabel("Your answer").fill("einen");
  await fillBlank.getByRole("button", { name: "Check answer" }).click();
  await expect(fillBlank.getByText("Correct", { exact: true })).toBeVisible();

  const builder = blocks.nth(2);
  for (const token of ["Heute", "brauche", "ich", "das", "Ticket."]) {
    await builder.getByRole("button", { name: token, exact: true }).click();
  }
  await builder.getByRole("button", { name: "Check answer" }).click();
  await expect(builder.getByText("Correct", { exact: true })).toBeVisible();

  const correction = blocks.nth(3);
  await correction.getByLabel("Correct sentence").fill("Ich sehe den Mann.");
  await correction.getByRole("button", { name: "Check answer" }).click();
  await expect(correction.getByText("Correct", { exact: true })).toBeVisible();

  await expect(page.getByText("4/4 correct", { exact: true })).toBeVisible();

  const speaking = page.getByTestId("speaking-mode");
  await expect(speaking.getByText(/no microphone scoring/i)).toBeVisible();
  await speaking.getByRole("button", { name: "Mark practiced" }).click();
  await expect(speaking.getByRole("button", { name: /Practiced/ })).toBeVisible();

  const accessibility = await new AxeBuilder({ page })
    .include(".practice-engine")
    .include(".speaking-mode")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);

  await page.reload();
  await expect(page.getByText("4/4 correct", { exact: true })).toBeVisible();
  await expect(page.locator(".practice-complete")).toHaveCount(4);
  await expect(page.getByTestId("speaking-mode").getByRole("button", { name: /Practiced/ })).toBeVisible();
});

test("noncanonical lessons do not leak prototype grammar labs", async ({ page }) => {
  await page.goto("/a1/modal-verbs-sentence-bracket");
  await expect(page.getByRole("heading", { name: "Interactive grammar lab" })).toHaveCount(0);
});

test("mobile contents sheet is keyboard reachable and accessible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(canonicalLesson);
  const trigger = page.getByRole("button", { name: /contents/i });
  await trigger.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog", { name: "Contents" });
  await expect(dialog).toBeVisible();
  const accessibility = await new AxeBuilder({ page })
    .include(".contents-sheet")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("reduced motion keeps lesson, navigation, grammar labs, and practice usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(canonicalLesson);
  await expect(page.locator("body")).toHaveAttribute("data-motion-policy", "reduced-ready");
  await expect(page.getByRole("heading", { level: 1, name: "Akkusativ: der wird den" })).toBeVisible();
  await page.getByRole("button", { name: /contents/i }).click();
  await expect(page.getByRole("dialog", { name: "Contents" })).toBeVisible();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Heute", exact: true }).click();
  await expect(page.getByText("heute trinke ich den Kaffee.")).toBeVisible();
  await expect(page.locator(".article-morph strong")).toHaveCSS("animation-name", "none");
  await page.locator(".practice-block").first().getByLabel("den", { exact: true }).check();
  await page.locator(".practice-block").first().getByRole("button", { name: "Check answer" }).click();
  await expect(page.locator(".practice-block").first().getByText("Correct", { exact: true })).toBeVisible();
});
