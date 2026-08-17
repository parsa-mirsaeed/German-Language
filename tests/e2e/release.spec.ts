import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const canonicalLesson = "/a1/accusative-articles";
const bridgeLesson = "/a1/perfect-basics-a1-review";

async function expectNoDocumentOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test("reading layer remains useful without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto("/a1");
  await expect(page.getByRole("heading", { level: 1, name: "German A1" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open lesson" })).toHaveCount(12);

  await page.goto(canonicalLesson);
  await expect(page.getByRole("heading", { level: 1, name: "Akkusativ: der wird den" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Formula / structure", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Examples", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Common mistakes", exact: true })).toBeVisible();

  await context.close();
});

test("representative launch routes pass axe", async ({ page }) => {
  for (const route of ["/", "/a1", bridgeLesson]) {
    await page.goto(route);
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(accessibility.violations, `axe violations on ${route}`).toEqual([]);
  }
});

test("representative mobile and desktop routes do not overflow the document", async ({ page }) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1440, height: 1000 },
  ]) {
    await page.setViewportSize(viewport);
    for (const route of ["/a1", canonicalLesson, bridgeLesson]) {
      await page.goto(route);
      await expectNoDocumentOverflow(page);
    }
  }
});

test("keyboard-only practice and speaking path remains operable", async ({ page }) => {
  await page.goto(canonicalLesson);

  const firstPractice = page.locator(".practice-block").first();
  const correctChoice = firstPractice.getByLabel("den", { exact: true });
  await correctChoice.focus();
  await page.keyboard.press("Space");
  await expect(correctChoice).toBeChecked();

  const submit = firstPractice.getByRole("button", { name: "Check answer" });
  await submit.focus();
  await page.keyboard.press("Enter");
  await expect(firstPractice.getByText("Correct", { exact: true })).toBeVisible();

  const speaking = page.getByTestId("speaking-mode");
  const practiceButton = speaking.getByRole("button", { name: "Mark practiced" });
  await practiceButton.focus();
  await page.keyboard.press("Enter");
  await expect(speaking.getByRole("button", { name: /Practiced/ })).toBeVisible();
});
