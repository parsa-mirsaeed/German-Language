import { placeDirectionLesson } from "@/content/a1/unit-10-place-direction";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit10Persian = buildPersianLessonLocalization(placeDirectionLesson, {
  title: "مکان یا جهت؟ حرف‌های اضافهٔ دوحالته",
  purpose:
    "با چند حرف اضافهٔ دوحالتهٔ پرکاربرد بین مکان ثابت و مقصد فرق بگذار: برای جایی که چیزی هست Dativ و برای جایی که چیزی به آن حرکت می‌کند Akkusativ را انتخاب کن.",
  formula: [
    {
      label: "مکان ثابت",
      note: "وقتی عبارت یک مکان ثابت را توصیف می‌کند، از Dativ استفاده کن: in der Küche، auf dem Tisch.",
    },
    {
      label: "مقصد",
      note: "وقتی عبارت مقصدِ حرکت را می‌گوید، از Akkusativ استفاده کن: in die Küche، auf den Tisch.",
    },
  ],
  meaning: [
    "بعضی حرف‌های اضافهٔ رایج—مثل in، auf، an، unter، über، vor، hinter، neben و zwischen—می‌توانند هم با Dativ و هم با Akkusativ بیایند.",
    "در A1 تصمیم اصلی معنایی است: مکان به سؤال Wo? جواب می‌دهد و Dativ می‌گیرد؛ مقصد یا جهت به Wohin? جواب می‌دهد و Akkusativ می‌گیرد.",
    "صرفِ وجود حرکت به‌تنهایی به معنی Akkusativ نیست؛ عبارت باید حرکت به‌سوی یک مقصد را بیان کند.",
  ],
  usage: [
    {
      title: "بگو چیزی کجاست",
      body: "Das Buch liegt auf dem Tisch. این عبارت به Wo? جواب می‌دهد و Dativ می‌گیرد.",
    },
    {
      title: "بگو چیزی به کجا می‌رود",
      body: "Ich lege das Buch auf den Tisch. این عبارت به Wohin? جواب می‌دهد و مقصد را نام می‌برد، پس Akkusativ می‌گیرد.",
    },
    {
      title: "دربارهٔ اتاق‌ها و ساختمان‌ها صحبت کن",
      body: "Ich bin in der Küche. Ich gehe in die Küche. این جفت، تفاوتِ مکان ثابت و مقصد را روشن نشان می‌دهد.",
    },
  ],
  recognitionCues: [
    {
      label: "Wo?",
      note: "پاسخِ مربوط به مکان با یک حرف اضافهٔ دوحالته معمولاً Dativ را پیش‌بینی می‌کند.",
    },
    {
      label: "Wohin?",
      note: "پاسخِ مربوط به مقصد با یک حرف اضافهٔ دوحالته معمولاً Akkusativ را پیش‌بینی می‌کند.",
    },
    {
      label: "in · auf · an",
      note: "این حرف‌های اضافهٔ دوحالتهٔ بسیار رایج، مثال‌های خوبی برای شروع این الگو هستند.",
    },
  ],
  paradigms: [
    {
      title: "مکان در برابر مقصد",
      columns: ["سؤال", "حالت", "مذکر", "مؤنث", "خنثی"],
      rowLabels: ["Wo?", "Wohin?"],
    },
  ],
  examples: [
    { translation: "من در آشپزخانه هستم." },
    { translation: "من دارم به داخل آشپزخانه می‌روم." },
    { translation: "گوشی روی میز قرار دارد." },
    { translation: "گوشی را روی میز می‌گذاری؟" },
    { translation: "کلید داخل کیف نیست." },
    {
      translation: "حالتِ مکان → حالتِ مقصد.",
      note: "gehen در این جمله مقصد را بیان می‌کند، پس in die Küche لازم است.",
    },
  ],
  contrasts: [
    {
      explanation:
        "در جملهٔ اول، عبارت مکانِ تصویر را بیان می‌کند و Dativ می‌گیرد. در جملهٔ دوم، عبارت مقصدِ عملِ آویزان‌کردن را بیان می‌کند و Akkusativ می‌گیرد.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — Wo یا Wohin؟",
      body: "این الگو را به شکل «حرکت در برابر بدون حرکت» یاد نگیر. سؤال معنایی درست را تمرین کن: مکان ثابت (Wo?) در برابر مقصد (Wohin?). فارسی می‌تواند به فهم «کجا؟ / به کجا؟» کمک کند، اما انتخاب آرتیکل همچنان یک الگوی آلمانی است.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "sein در این جمله مکان را توصیف می‌کند، پس in با Dativ می‌آید: in der Küche.",
    },
    {
      explanation:
        "این عبارت مقصدِ gehen را می‌گوید، پس in با Akkusativ می‌آید: in die Küche.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی بگو گوشی‌ات کجاست.",
      support: "Mein Handy ist/liegt auf/in ...",
    },
    {
      prompt: "به آلمانی بگو الان به کجا می‌روی.",
      support: "Ich gehe in/auf ...",
    },
    {
      prompt: "با همان اتاق یا شیء یک جفت Wo?/Wohin? بساز.",
      support: "Ich bin ... / Ich gehe ...",
    },
  ],
  exercises: [
    {
      id: "u10-place-01",
      prompt: "عبارت درست را انتخاب کن: Ich bin ___.",
      explanation:
        "Ich bin یک مکان را توصیف می‌کند (Wo?)، بنابراین حرف اضافهٔ دوحالتهٔ in با Dativ می‌آید: in der Küche.",
    },
  ],
});
