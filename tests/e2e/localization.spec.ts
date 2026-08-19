import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const persianLesson = "/fa/a1/accusative-articles";
const completedPersianBatch = [
  ["/fa/a1/verb-second-basics", "موتور جملهٔ آلمانی: فعل در جایگاه دوم", "من آلمانی یاد می‌گیرم.", "Ich lerne Deutsch."],
  ["/fa/a1/present-tense-conjugation", "زمان حال: صرف فعل در Präsens", "من آلمانی یاد می‌گیرم.", "Ich lerne Deutsch."],
  ["/fa/a1/nouns-gender-articles-plurals", "اسم، جنس دستوری، آرتیکل و جمع", "قهوه داغ است.", "Der Kaffee ist heiß."],
  ["/fa/a1/negation-nicht-kein", "منفی‌سازی با nicht و kein", "من ماشین ندارم.", "Ich habe kein Auto."],
] as const;

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

test("Persian Units 1 through 4 render complete native teaching copy", async ({ page }) => {
  for (const [route, localizedTitle, translation, german] of completedPersianBatch) {
    await page.goto(route);
    await expect(page.locator(".localization-pending")).toHaveCount(0);
    await expect(page.locator(".lesson-english-title")).toHaveText(localizedTitle);
    await expect(page.locator(".lesson-purpose")).toHaveAttribute("lang", "fa");
    await expect(page.locator(".lesson-purpose")).toHaveAttribute("dir", "rtl");
    await expect(page.getByText(translation, { exact: true })).toBeVisible();
    const germanExample = page.locator('.example-de[lang="de"]').filter({ hasText: german }).first();
    await expect(germanExample).toBeVisible();
    await expect(germanExample).toHaveAttribute("dir", "ltr");
  }
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
  const input = dialog.getByRole("searchbox", { name: "جست‌وجو در آلمانی A1" });
  await expect(input).toBeFocused();
  await input.fill("مفعول مستقیم");
  await expect(dialog.getByRole("link", { name: /Akkusativ: der wird den/i })).toBeVisible();

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
});
