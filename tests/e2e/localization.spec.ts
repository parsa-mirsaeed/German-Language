import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const persianLesson = "/fa/a1/accusative-articles";

test("Persian home and map render native RTL application copy", async ({ page }) => {
  await page.goto("/fa");
  await expect(page.locator("html")).toHaveAttribute("lang", "fa");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.getByRole("heading", { level: 1, name: "گرامر را ببین؛ جمله را بساز." })).toBeVisible();
  await page.getByRole("link", { name: "باز کردن کتاب A1" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "آلمانی A1" })).toBeVisible();
  await expect(page.getByRole("link", { name: "باز کردن درس" })).toHaveCount(12);
  await expect(page.getByText("آکوزاتیو و مفعول مستقیم", { exact: true })).toBeVisible();
});

test("Persian lesson localizes UI while pending teaching copy is explicitly English", async ({ page }) => {
  await page.goto(persianLesson);
  await expect(page.getByRole("heading", { name: "فرمول / ساختار", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "اشتباه‌های رایج", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "انتقال به گفتار", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "تمرین کوتاه", exact: true })).toBeVisible();
  await expect(page.getByText(/متن آموزشی فارسی این درس هنوز/)).toBeVisible();
  await expect(page.locator(".lesson-purpose")).toHaveAttribute("lang", "en");
  await expect(page.locator(".lesson-purpose")).toHaveAttribute("dir", "ltr");
  await expect(page.getByRole("heading", { level: 1, name: "Akkusativ: der wird den" })).toHaveAttribute("lang", "de");
});

test("Persian interactive controls, practice, speaking and search are localized", async ({ page }) => {
  await page.goto(persianLesson);
  await expect(page.getByText("ریل فعل در جایگاه دوم", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "بررسی پاسخ" }).first()).toBeVisible();
  await expect(page.getByText("حالت گفتاری", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "جست‌وجو" }).click();
  const dialog = page.getByRole("dialog", { name: "جست‌وجو در کتاب گرامر" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("searchbox", { name: "جست‌وجو در آلمانی A1" })).toBeFocused();

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
});
