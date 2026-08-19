import { possessionPronounsLesson } from "@/content/a1/unit-06-possession-pronouns";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit06Persian = buildPersianLessonLocalization(possessionPronounsLesson, {
  title: "مالکیت: mein، dein، sein و ihr",
  purpose:
    "با ضمیرهای ملکیِ اصلی دربارهٔ خانواده، وسایل و مالکیت صحبت کن و آن‌ها را به ضمیرهای شخصی‌ای که از قبل به‌عنوان فاعل می‌شناسی وصل کن.",
  formula: [
    {
      label: "مالک → ریشهٔ ملکی",
      note: "اول شکل ملکی را از روی مالک انتخاب کن؛ بعد شکل ظاهری آن را با اسم بعدی هماهنگ کن.",
    },
    {
      label: "الگوی پایه در Nominativ",
      note: "در شکل‌های پایه، مذکر/خنثی در برابر مؤنث/جمع تقریباً همان تفاوت ظاهری ein/eine را نشان می‌دهد.",
    },
  ],
  meaning: [
    "ضمیرهای ملکی نشان می‌دهند چیزی به چه کسی تعلق دارد: mein یعنی «مال من / ـم»، dein یعنی «مال تو / ـت»، و sein و ihr بسته به مالک معنی «مال او / مال آن‌ها» می‌دهند.",
    "مالک ریشه را تعیین می‌کند: mein-، dein-، sein-، ihr-. اسم بعدی تعیین می‌کند چه پایان یا شکل ظاهری لازم است.",
    "در سطح A1 بهتر است این شکل‌ها را همراه با واژگان خانواده و وسایل روزمره تمرین کنی تا هنگام صحبت سریع‌تر به ذهنت برسند.",
  ],
  usage: [
    {
      title: "دربارهٔ خانواده صحبت کن",
      body: "Das ist meine Schwester. Mein Bruder wohnt in Bern. جنس دستوری اسم در این عبارت‌های پایه تعیین می‌کند mein یا meine ببینی.",
    },
    {
      title: "دربارهٔ وسایل طرف مقابل سؤال کن",
      body: "Ist das dein Handy? Wie heißt deine Mutter? وقتی با یک نفر آشنا و مفرد صحبت می‌کنی از dein/deine استفاده می‌شود.",
    },
    {
      title: "مالکِ سوم‌شخص را مشخص کن",
      body: "Paul sucht sein Ticket. Lea besucht ihre Familie. ریشهٔ ضمیر ملکی از مالک می‌آید، نه از جنس چیزی که مالکیتش بیان می‌شود.",
    },
  ],
  recognitionCues: [
    {
      label: "ضمیرِ مالک",
      note: "اول بپرس چه کسی مالک این عبارت اسمی است: ich، du، er، sie و ...",
    },
    {
      label: "اسم بعد از ضمیر ملکی",
      note: "پس از انتخاب ریشه، جنس و تعداد اسم بعدی را بررسی کن تا شکل ظاهری مناسب را انتخاب کنی.",
    },
  ],
  paradigms: [
    {
      title: "ریشه‌های اصلی ملکی",
      columns: ["مالک", "ریشهٔ ملکی", "مثال مذکر/خنثی", "مثال مؤنث/جمع"],
      rowLabels: ["ich", "du", "er", "sie"],
    },
  ],
  examples: [
    { translation: "این برادر من است." },
    { translation: "خواهرم در بازل درس می‌خواند." },
    { translation: "این گوشی توست؟" },
    { translation: "پاول دنبال بلیت خودش می‌گردد." },
    { translation: "لیا به دیدن خانواده‌اش می‌رود." },
    {
      translation: "شکل ضمیر ملکی اشتباه است → شکل پایهٔ درست برای اسم مذکر.",
      note: "Bruder مذکر است؛ در این عبارت پایه mein بدون ‎-e می‌آید.",
    },
  ],
  contrasts: [
    {
      explanation:
        "مالک در هر دو جمله ich است، پس ریشهٔ mein- ثابت می‌ماند؛ اما چون Bruder مذکر و Schwester مؤنث است، شکل ظاهری mein/meine تغییر می‌کند.",
    },
    {
      explanation:
        "Ticket در هر دو جمله همان اسم خنثی است؛ چیزی که تغییر می‌کند مالک است: Paul با er → sein و Lea با sie → ihr.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — مالکیت را در دو تصمیم حل کن",
      body: "مرحلهٔ اول: ریشهٔ ضمیر ملکی را از روی مالک انتخاب کن. مرحلهٔ دوم: شکل آن را با اسم بعدی هماهنگ کن. جدا نگه‌داشتن این دو تصمیم جلوی بسیاری از خطاهای مبتدی را می‌گیرد.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "Bruder مذکر است؛ در این عبارت پایهٔ Nominativ، mein پایان ‎-e نمی‌گیرد.",
    },
    {
      explanation:
        "مالک Lea است و به ضمیر sie برمی‌گردد؛ بنابراین ریشهٔ ملکی ihr- لازم است، نه sein-.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "یک عضو خانواده‌ات را به آلمانی معرفی کن.",
      support: "Das ist mein/meine ...",
    },
    {
      prompt: "از یک دوست بپرس آیا یک وسیله مال اوست.",
      support: "Ist das dein/deine ...?",
    },
    {
      prompt: "به آلمانی بگو یکی از وسایلت کجاست.",
      support: "Mein/Meine ... ist ...",
    },
  ],
  exercises: [
    {
      id: "u06-poss-01",
      prompt: "شکل درست را انتخاب کن: Das ist ___ Schwester.",
      explanation:
        "Schwester مؤنث است؛ بنابراین شکل پایهٔ ضمیر ملکی در Nominativ برابر meine است.",
    },
  ],
});
