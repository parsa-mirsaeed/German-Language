import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const canonicalLesson = "/a1/accusative-articles";

test("A1 map opens the canonical lesson", async ({ page }) => {
  await page.goto("/a1");

  await expect(
    page.getByRole("heading", { level: 1, name: "German A1" }),
  ).toBeVisible();

  await page.getByRole("link", { name: /Open canonical lesson/i }).click();

  await expect(
    page.getByRole("heading", { level: 1, name: "Akkusativ: der wird den" }),
  ).toBeVisible();
  await expect(page.getByText(/der → den/)).toBeVisible();
});

test("canonical lesson exposes the complete learning sequence and passes axe", async ({
  page,
}) => {
  await page.goto(canonicalLesson);

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

  await expect(page.getByText(/مهم‌ترین تغییر/)).toBeVisible();

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(accessibility.violations).toEqual([]);
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

test("reduced motion keeps the lesson and navigation fully usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(canonicalLesson);

  await expect(page.locator("body")).toHaveAttribute(
    "data-motion-policy",
    "reduced-ready",
  );
  await expect(
    page.getByRole("heading", { level: 1, name: "Akkusativ: der wird den" }),
  ).toBeVisible();

  await page.getByRole("button", { name: /contents/i }).click();
  await expect(page.getByRole("dialog", { name: "Contents" })).toBeVisible();
});
