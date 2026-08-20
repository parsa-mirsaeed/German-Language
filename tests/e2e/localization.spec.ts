import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const completedPersianLessons = [
  ["/fa/a1/verb-second-basics", "موتور جملهٔ آلمانی: فعل در جایگاه دوم", "من آلمانی یاد می‌گیرم.", "Ich lerne Deutsch."],
  ["/fa/a1/present-tense-conjugation", "زمان حال: صرف فعل در Präsens", "من آلمانی یاد می‌گیرم.", "Ich lerne Deutsch."],
  ["/fa/a1/nouns-gender-articles-plurals", "اسم، جنس دستوری، آرتیکل و جمع", "قهوه داغ است.", "Der Kaffee ist heiß."],
  ["/fa/a1/negation-nicht-kein", "منفی‌سازی با nicht و kein", "من ماشین ندارم.", "Ich habe kein Auto."],
  ["/fa/a1/accusative-articles", "آکوزاتیو: وقتی der به den تبدیل می‌شود", "من قهوه را می‌خرم.", "Ich kaufe den Kaffee."],
  ["/fa/a1/possession-and-pronouns", "مالکیت: mein، dein، sein و ihr", "این برادر من است.", "Das ist mein Bruder."],
  ["/fa/a1/modal-verbs-sentence-bracket", "افعال مُدال و قاب جمله", "تو باید امروز کار کنی.", "Du musst heute arbeiten."],
  ["/fa/a1/separable-verbs-time-word-order", "افعال جداشدنی، زمان و ترتیب واژه‌ها", "من ساعت هفت بیدار می‌شوم.", "Ich stehe um sieben Uhr auf."],
  ["/fa/a1/dative-case-prepositions", "داتیو و حرف‌های اضافهٔ داتیو", "من با اتوبوس رفت‌وآمد می‌کنم / می‌روم.", "Ich fahre mit dem Bus."],
  ["/fa/a1/place-direction-two-way-prepositions", "مکان یا جهت؟ حرف‌های اضافهٔ دوحالته", "من در آشپزخانه هستم.", "Ich bin in der Küche."],
  ["/fa/a1/commands-requests-connectors", "درخواست‌ها، دستورها و پیونددهنده‌ها", "لطفاً بیا داخل!", "Komm bitte rein!"],
  ["/fa/a1/perfect-basics-a1-review", "Perfekt و جمع‌بندی A1", "آلمانی یاد گرفتم / خواندم.", "Ich habe Deutsch gelernt."],
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

test("all 12 Persian lessons render complete native teaching copy", async ({ page }) => {
  for (const [route, localizedTitle, translation, german] of completedPersianLessons) {
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

test("Persian interactive controls, practice, speaking and search are localized", async ({ page }) => {
  await page.goto("/fa/a1/accusative-articles");
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
