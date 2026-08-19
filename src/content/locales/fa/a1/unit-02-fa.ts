import { presentTenseLesson } from "@/content/a1/unit-02-present-tense";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit02Persian = buildPersianLessonLocalization(presentTenseLesson, {
  title: "زمان حال: صرف فعل در Präsens",
  purpose:
    "پایانِ درست فعل را بر اساس فاعل انتخاب کن و فعل‌های پرکاربرد سطح A1 را در جمله‌ها و سؤال‌های ساده به‌درستی صرف کن.",
  formula: [
    {
      label: "فعل باقاعده",
      note: "برای lernen، ‎-en را بردار تا ریشهٔ lern- به دست بیاید؛ سپس پایان متناسب با فاعل را اضافه کن.",
    },
    {
      label: "پایان‌های اصلی",
      note: "ضمیر و شکل فعل را با هم به‌صورت یک واحد تمرین کن، نه اینکه فقط فهرست پایان‌ها را جداگانه حفظ کنی.",
    },
  ],
  meaning: [
    "فعل آلمانی در زمان حال شکلش را عوض می‌کند تا با فاعل هماهنگ شود.",
    "پایان فعل کمک می‌کند بفهمیم چه کسی کار را انجام می‌دهد؛ فاعل و شکل فعل باید با هم سازگار باشند.",
    "Präsens در سطح A1 برای بسیاری از موقعیت‌های روزمره به‌کار می‌رود، از عادت‌ها تا کاری که همین حالا انجام می‌شود.",
  ],
  usage: [
    {
      title: "از ریشهٔ فعل بساز",
      body: "lernen → lern-: برای ich می‌شود lerne، برای du می‌شود lernst و برای er/sie/es می‌شود lernt. ریشه می‌ماند و پایان تغییر می‌کند.",
    },
    {
      title: "فاعل‌های جمع را درست هماهنگ کن",
      body: "wir lernen و sie lernen پایان ‎-en دارند؛ اما ihr lernt با ‎-t ساخته می‌شود.",
    },
    {
      title: "شکل‌های بی‌قاعدهٔ خیلی پرکاربرد را یک‌جا یاد بگیر",
      body: "فعل sein بسیار پرکاربرد و بی‌قاعده است: ich bin، du bist، er/sie/es ist، wir sind، ihr seid، sie/Sie sind.",
    },
  ],
  recognitionCues: [
    {
      label: "ضمیر فاعلی",
      note: "اول مشخص کن فاعل ich، du، er/sie/es، wir، ihr یا sie/Sie است.",
    },
    {
      label: "ریشهٔ فعل",
      note: "بسیاری از مصدرها با ‎-en تمام می‌شوند؛ با حذف آن می‌توان ریشهٔ کاری فعل را دید.",
    },
  ],
  paradigms: [
    {
      title: "صرف lernen در زمان حال",
      columns: ["شخص", "شکل فعل", "مثال"],
      rowLabels: ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"],
    },
  ],
  examples: [
    { translation: "من آلمانی یاد می‌گیرم." },
    { translation: "تو امروز کار می‌کنی." },
    { translation: "مارا در بازل زندگی می‌کند." },
    { translation: "ما یک استراحت می‌کنیم." },
    { translation: "آیا شماها خسته‌اید؟" },
    {
      translation: "شکل مصدر نادرست است → شکل درست برای du.",
      note: "با du، فعل باقاعده معمولاً پایان ‎-st می‌گیرد.",
    },
  ],
  contrasts: [
    {
      explanation:
        "معنای اصلی فعل یکی است، اما چون فاعل از ich به du عوض شده، پایان فعل نیز از lerne به lernst تغییر می‌کند.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — ضمیر و فعل را با هم بشنو",
      body: "ترکیب ضمیر + فعل را یک واحد گفتاری تمرین کن: ich lerne، du lernst، wir lernen. این روش معمولاً از حفظ‌کردن جداگانهٔ پایان‌ها، بازیابی شکل درست را سریع‌تر می‌کند.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "مصدر lernen با du هماهنگ نیست. شکل باقاعدهٔ du معمولاً پایان ‎-st می‌گیرد: du lernst.",
    },
    {
      explanation:
        "برای wir، شکل فعل باقاعده معمولاً همان پایان ‎-en مصدر را دارد: wir lernen.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی بگو چه زبانی یاد می‌گیری.",
      support: "Ich lerne ...",
    },
    {
      prompt: "از یک نفر بپرس امروز چه کار می‌کند.",
      support: "Was machst du heute?",
    },
    {
      prompt: "یک کاری را بگو که تو و یک نفر دیگر با هم انجام می‌دهید.",
      support: "Wir ... zusammen.",
    },
  ],
  exercises: [
    {
      id: "u02-present-01",
      prompt: "شکل درست را انتخاب کن: Du ___ Deutsch.",
      explanation:
        "برای یک فعل باقاعده، شکل du معمولاً ‎-st می‌گیرد: du lernst.",
    },
  ],
});
