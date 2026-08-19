import { modalVerbsLesson } from "@/content/a1/unit-07-modal-verbs";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit07Persian = buildPersianLessonLocalization(modalVerbsLesson, {
  title: "افعال مُدال و قاب جمله",
  purpose:
    "با فعل‌های مُدال پرکاربرد، توانایی، ضرورت، اجازه و خواستهٔ مؤدبانه را بیان کن و در جملهٔ اصلی ساده، مصدر را در انتهای جمله نگه دار.",
  formula: [
    {
      label: "الگوی فعل مُدال در جملهٔ اصلی",
      note: "فعل مُدالِ صرف‌شده همان فعل اصلیِ جایگاه دوم است؛ فعل معنایی به صورت مصدر در انتهای جمله می‌آید و قاب را می‌بندد.",
    },
  ],
  meaning: [
    "فعل‌های مُدال به یک عمل معنی‌هایی مثل «توانستن»، «باید»، «اجازه داشتن» یا «مایل بودن» اضافه می‌کنند.",
    "فعل مُدال با فاعل صرف می‌شود؛ فعل دوم معمولاً به شکل مصدر در انتهای جمله باقی می‌ماند.",
  ],
  usage: [
    {
      title: "توانایی با können",
      body: "در «Ich kann Deutsch sprechen.» واژهٔ kann فعلِ صرف‌شده است و sprechen به شکل مصدر در انتهای جمله می‌آید. ترجمهٔ طبیعی فارسی ممکن است ترتیب دیگری داشته باشد؛ ترتیب آلمانی را جداگانه یاد بگیر.",
    },
    {
      title: "ضرورت با müssen",
      body: "Wir müssen heute arbeiten. فعل مُدال شخص و تعداد را نشان می‌دهد و فعل اصلیِ arbeiten انتهای جمله را می‌بندد.",
    },
    {
      title: "خواستهٔ مؤدبانه با möchten",
      body: "Ich möchte einen Tee bestellen. möchten در موقعیت‌های خدماتی و سفارش‌دادنِ سطح A1 بسیار کاربردی است.",
    },
  ],
  recognitionCues: [
    {
      label: "kann / muss / möchte",
      note: "وقتی یک فعل مُدالِ صرف‌شده نزدیک جایگاه دوم می‌بینی، انتظار داشته باش یک مصدر بعدتر در جمله بیاید.",
    },
    {
      label: "مصدر در انتهای جمله",
      note: "لبهٔ راست جمله را برای شکل‌هایی مثل lernen، arbeiten، bestellen یا gehen بررسی کن.",
    },
  ],
  paradigms: [
    {
      title: "شکل‌های اصلی افعال مُدال",
      columns: ["شخص", "können", "müssen", "möchten"],
      rowLabels: ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"],
    },
  ],
  examples: [
    { translation: "من خوب شنا می‌کنم / می‌توانم خوب شنا کنم." },
    { translation: "تو باید امروز کار کنی." },
    { translation: "ما می‌خواهیم دو قهوه سفارش بدهیم." },
    { translation: "می‌توانی فردا بیایی؟" },
    { translation: "امروز نمی‌توانم بیایم." },
    {
      translation: "ترتیب مبتدیِ نامناسب → قاب روشنِ جمله با مصدر در پایان.",
      note: "در الگوی پایه، اطلاعات میانی مثل heute پیش از مصدر نهایی می‌آید.",
    },
  ],
  contrasts: [
    {
      explanation:
        "بدون فعل مُدال، arbeite فعلِ صرف‌شده در جایگاه دوم است. با müssen، شکل muss فعلِ صرف‌شده می‌شود و arbeiten به صورت مصدر به انتهای جمله می‌رود.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — قاب را بشنو",
      body: "بعد از شنیدن فعل مُدال، در ذهنت منتظر مصدرِ انتهای جمله باش. دو بخش فعلی مثل دو لبهٔ یک قاب، اطلاعات میانی جمله را در بر می‌گیرند.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "بعد از فعل مُدال، فعل معنایی به شکل مصدر می‌ماند: sprechen، نه spreche.",
    },
    {
      explanation:
        "در الگوی پایهٔ A1، مصدر بهتر است بعد از اطلاعات میانی در انتهای جمله قرار بگیرد: Wir müssen heute arbeiten.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی یک کاری را بگو که می‌توانی انجام بدهی.",
      support: "Ich kann ...",
    },
    {
      prompt: "یک کاری را بگو که امروز باید انجام بدهی.",
      support: "Ich muss heute ...",
    },
    {
      prompt: "یک چیز را مؤدبانه سفارش بده.",
      support: "Ich möchte ... bestellen.",
    },
  ],
  exercises: [
    {
      id: "u07-modal-01",
      prompt: "جملهٔ درست را انتخاب کن.",
      explanation:
        "kann فعلِ صرف‌شده است و sprechen به شکل مصدر در انتهای جمله باقی می‌ماند.",
    },
  ],
});
