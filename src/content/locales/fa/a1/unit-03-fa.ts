import { nounsArticlesLesson } from "@/content/a1/unit-03-nouns-articles";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit03Persian = buildPersianLessonLocalization(nounsArticlesLesson, {
  title: "اسم، جنس دستوری، آرتیکل و جمع",
  purpose:
    "هر اسم آلمانی را به‌صورت یک بسته یاد بگیر: آرتیکل + اسم + شکل جمع. این کار عبارت‌های اسمیِ Nominativ را برای حالت‌های دستوری بعدی قابل‌اعتماد می‌کند.",
  formula: [
    {
      label: "بستهٔ واژگانی",
      note: "اسم را تنها حفظ نکن؛ آرتیکل و شکل جمع را هم از همان ابتدا کنار آن نگه دار.",
    },
    {
      label: "آرتیکل نامعین",
      note: "در Nominativ پایه، مؤنث با eine مشخص می‌شود و مذکر و خنثی از ein استفاده می‌کنند.",
    },
  ],
  meaning: [
    "اسم‌های آلمانی جنس دستوری دارند: مذکر، مؤنث یا خنثی.",
    "آرتیکل معین در Nominativ به‌ترتیب der، die یا das است؛ برای جمع از die استفاده می‌شود.",
    "برای ساخت جمع فقط یک پایان ثابت وجود ندارد؛ بنابراین بهتر است شکل جمع را همراه با هر اسم یاد بگیری.",
  ],
  usage: [
    {
      title: "آدم‌ها و چیزها را نام ببر",
      body: "در «Das ist ein Tisch.» و «Die Lampe ist neu.» آرتیکل بخشی از عبارت اسمی است و اطلاعات دستوری اسم را نشان می‌دهد.",
    },
    {
      title: "جمع را همان موقع یاد بگیر",
      body: "der Apfel → die Äpfel، die Frau → die Frauen، das Auto → die Autos. اسم‌های مختلف الگوهای جمع متفاوتی دارند.",
    },
    {
      title: "برای فاعل از Nominativ استفاده کن",
      body: "در «Der Mann arbeitet.» و «Die Kinder spielen.» عبارت‌های اسمی فاعل‌اند و شکل آرتیکل Nominativ را دارند.",
    },
  ],
  recognitionCues: [
    {
      label: "حرف بزرگ در آغاز اسم",
      note: "اسم‌های آلمانی با حرف اول بزرگ نوشته می‌شوند.",
    },
    {
      label: "der / die / das",
      note: "در شکل پایهٔ Nominativ، آرتیکل سرنخ مهمی برای جنس دستوری اسم است.",
    },
    {
      label: "die برای جمع",
      note: "همهٔ اسم‌های جمع در Nominativ با آرتیکل معین die می‌آیند.",
    },
  ],
  paradigms: [
    {
      title: "نمای کلی آرتیکل‌ها در Nominativ",
      columns: ["تعداد / جنس", "معین", "نامعین", "مثال"],
      rowLabels: ["مذکر", "مؤنث", "خنثی", "جمع"],
    },
  ],
  examples: [
    { translation: "قهوه داغ است." },
    { translation: "آپارتمان کوچک است." },
    { translation: "کتاب جالب است." },
    { translation: "یک مرد اینجا منتظر است." },
    { translation: "بچه‌ها بیرون بازی می‌کنند." },
    {
      translation: "آرتیکل اشتباه است → آرتیکل درستِ اسم مؤنث.",
      note: "Frau از نظر دستوری مؤنث است، پس در Nominativ با die می‌آید.",
    },
  ],
  contrasts: [
    {
      explanation:
        "هر دو اسم در جمع آرتیکل die دارند، اما خود اسم‌ها جمع را به شکل متفاوتی می‌سازند. شکل جمع را همراه با خود اسم حفظ کن.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — اسمِ بدون آرتیکل یاد نگیر",
      body: "هر بار اسم تازه‌ای مرور می‌کنی، آرتیکل را هم با آن بگو و بنویس. اگر شکل جمع کاربردی است، آن را هم اضافه کن. این عادت برای تغییرات حالت دستوری در درس‌های بعد ضروری می‌شود.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "Frau از نظر دستوری مؤنث است؛ بنابراین آرتیکل معین پایهٔ آن die است.",
    },
    {
      explanation:
        "جمع فقط با عوض‌کردن آرتیکل ساخته نمی‌شود؛ خود اسم هم ممکن است پایان یا شکل متفاوتی پیدا کند: das Auto → die Autos.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "سه چیز نزدیکت را به آلمانی همراه با آرتیکل‌شان نام ببر.",
      support: "der ... / die ... / das ...",
    },
    {
      prompt: "به آلمانی بگو یکی از آن چیزها نو یا قدیمی است.",
      support: "Der/Die/Das ... ist neu/alt.",
    },
    {
      prompt: "یک اسم مفرد و شکل جمع آن را بگو.",
      support: "der/die/das ... → die ...",
    },
  ],
  exercises: [
    {
      id: "u03-noun-01",
      prompt: "آرتیکل درست را انتخاب کن: ___ Frau arbeitet hier.",
      explanation:
        "Frau مؤنث است؛ بنابراین آرتیکل معین آن در Nominativ برابر die است.",
    },
  ],
});
