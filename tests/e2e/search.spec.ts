import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const searchButton = { name: /Search/i };

test("Ctrl+K opens local search and routes a deterministic result", async ({ page }) => {
  await page.goto("/a1");

  await page.keyboard.press("Control+K");
  const dialog = page.getByRole("dialog", { name: "Search the grammar book" });
  await expect(dialog).toBeVisible();

  const input = dialog.getByRole("searchbox", { name: "Search German A1" });
  await expect(input).toBeFocused();
  await input.fill("dative");

  const result = dialog.getByRole("link", { name: /Dativ: dem, der, den/i });
  await expect(result).toBeVisible();
  await result.click();

  await expect(
    page.getByRole("heading", { level: 1, name: "Dativ: dem, der, den" }),
  ).toBeVisible();
});

test("search finds example text and remains available from a lesson", async ({ page }) => {
  await page.goto("/a1/verb-second-basics");
  await page.getByRole("button", searchButton).click();

  const dialog = page.getByRole("dialog", { name: "Search the grammar book" });
  await dialog.getByRole("searchbox", { name: "Search German A1" }).fill("mit dem Bus");

  await expect(dialog.getByRole("link", { name: /Dativ: dem, der, den/i })).toBeVisible();
});

test("search Escape restores focus and the open dialog passes axe", async ({ page }) => {
  await page.goto("/a1");
  const trigger = page.getByRole("button", searchButton);
  await trigger.focus();
  await page.keyboard.press("Enter");

  const dialog = page.getByRole("dialog", { name: "Search the grammar book" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("searchbox", { name: "Search German A1" }).fill("modal");

  const accessibility = await new AxeBuilder({ page })
    .include(".search-dialog")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("search level filter narrows the local index", async ({ page }) => {
  await page.goto("/a1");
  await page.getByRole("button", searchButton).click();

  const dialog = page.getByRole("dialog", { name: "Search the grammar book" });
  await dialog.getByRole("searchbox", { name: "Search German A1" }).fill("ich");
  await dialog.getByRole("combobox", { name: "Filter search by level" }).selectOption("A1.2");

  const results = dialog.locator(".search-result");
  await expect(results.first()).toBeVisible();
  const badges = await results.locator(".search-result-unit").allTextContents();
  expect(badges.length).toBeGreaterThan(0);
  expect(badges.every((badge) => badge.includes("A1.2"))).toBe(true);
});
