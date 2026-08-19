import { dativeLesson } from "@/content/a1/unit-09-dative";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit09Persian = buildPersianLessonLocalization(dativeLesson, {
  title: "داتیو: dem، der و den",
  purpose:
    "دومین حالت دستوری مهم در A1 را تشخیص بده: آرتیکل‌های Dativ را برای گیرنده‌ها، بعضی فعل‌های پرکاربرد و حرف‌های اضافه‌ای که همیشه Dativ می‌گیرند به‌درستی انتخاب کن.",
  formula: [
    {
      label: "آرتیکل معین در Dativ",
      note: "در مذکر و خنثی dem، در مؤنث der و در جمع den می‌بینی؛ جمع معمولاً خود اسم هم ‎-n می‌گیرد اگر از قبل با n/s تمام نشده باشد.",
    },
    {
      label: "آرتیکل نامعین در Dativ",
      note: "ein/eine در Dativ به einem/einer تبدیل می‌شود؛ شکل دقیق به جنس اسم بستگی دارد.",
    },
  ],
  meaning: [
    "Dativ در بسیاری از جمله‌ها گیرنده یا شخصی را نشان می‌دهد که چیزی به او داده، گفته یا ارائه می‌شود؛ اما این فقط یکی از کاربردهای آن است.",
    "بعضی حرف‌های اضافه مثل mit، bei، nach، aus، zu و von همیشه Dativ می‌خواهند.",
    "فارسی حالت دستوریِ مستقلی دقیقاً معادل Dativ ندارد؛ پس آن را از روی نقش عبارت و الگوهای ثابت آلمانی یاد بگیر، نه با جست‌وجوی یک پسوند یا واژهٔ فارسی ثابت.",
  ],
  usage: [
    {
      title: "گیرنده را نشان بده",
      body: "در «Ich gebe dem Mann das Buch.» عبارت dem Mann گیرنده است و به Dativ می‌رود؛ das Buch چیزی است که داده می‌شود.",
    },
    {
      title: "با حرف‌های اضافهٔ داتیو کار کن",
      body: "mit dem Bus، bei der Arbeit و zu einem Arzt نمونه‌های روزمره‌ای هستند که حرف اضافه مستقیماً Dativ را تعیین می‌کند.",
    },
    {
      title: "عبارت‌های پرکاربرد را یک‌جا یاد بگیر",
      body: "بعضی فعل‌ها و ترکیب‌ها در آلمانی الگوی داتیو دارند. در A1 بهتر است نمونه‌های پرتکرار را به‌صورت عبارت کامل تمرین کنی.",
    },
  ],
  recognitionCues: [
    {
      label: "mit · bei · nach · aus · zu · von",
      note: "این حرف‌های اضافه در الگوی پایه همیشه Dativ می‌گیرند.",
    },
    {
      label: "Wem? · dem / der / einem / einer",
      note: "Wem? یعنی «به چه کسی / برای چه کسی؟» می‌تواند برای پیدا کردن گیرنده کمک کند؛ شکل‌هایی مثل dem، der، einem و einer هم از نشانه‌های دیداری مهم Dativ هستند. این‌ها ابزار تشخیص‌اند، نه ترجمهٔ یک‌به‌یک فارسی.",
    },
  ],
  paradigms: [
    {
      title: "آرتیکل‌ها در Dativ",
      columns: ["جنس / تعداد", "معین", "نامعین", "مثال"],
      rowLabels: ["مذکر", "مؤنث", "خنثی", "جمع"],
    },
  ],
  examples: [
    { translation: "من با اتوبوس می‌آیم." },
    { translation: "او پیشِ خواهرش است." },
    { translation: "ما بعد از کلاس به خانه می‌رویم." },
    { translation: "من آن کتاب را به مرد می‌دهم." },
    { translation: "آیا با یک دوست صحبت می‌کنی؟" },
    {
      translation: "شکل Akkusativ/پایه نادرست است → شکل Dativ درست بعد از mit.",
      note: "mit همیشه Dativ می‌گیرد؛ برای اسم مذکر der Mann، شکل درست mit dem Mann است.",
    },
  ],
  contrasts: [
    {
      explanation:
        "در جملهٔ اول den Mann مفعول مستقیم در Akkusativ است. در جملهٔ دوم dem Mann گیرنده و Dativ است. نقش جمله تعیین می‌کند کدام حالت لازم است.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — Dativ را به یک ترجمهٔ فارسی تقلیل نده",
      body: "از فارسی برای فهم موقعیت استفاده کن، اما دنبال یک نشانگر ثابتِ معادل Dativ نباش. حرف اضافه، فعل و نقش گیرنده را به‌عنوان سرنخ‌های آلمانی تمرین کن.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "mit یک حرف اضافهٔ همیشه‌داتیو است؛ برای اسم مذکر Bus، der باید به dem تبدیل شود: mit dem Bus.",
    },
    {
      explanation:
        "در این جمله، dem Mann گیرندهٔ عمل geben است؛ شکل Akkusativ یعنی den Mann برای این نقش مناسب نیست.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی بگو با چه وسیله‌ای به محل کار یا کلاس می‌روی.",
      support: "Ich fahre mit dem/der ...",
    },
    {
      prompt: "یک جمله با bei یا zu بساز.",
      support: "Ich bin bei ... / Ich gehe zu ...",
    },
    {
      prompt: "به آلمانی بگو چیزی را به چه کسی می‌دهی.",
      support: "Ich gebe dem/der ... ...",
    },
  ],
  exercises: [
    {
      id: "u09-dat-01",
      prompt: "عبارت درست را انتخاب کن: Ich fahre ___ Bus.",
      explanation:
        "mit همیشه Dativ می‌گیرد؛ Bus مذکر است، بنابراین شکل درست mit dem Bus است.",
    },
  ],
});
