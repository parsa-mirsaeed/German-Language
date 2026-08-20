import { dativeLesson } from "@/content/a1/unit-09-dative";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit09Persian = buildPersianLessonLocalization(dativeLesson, {
  title: "داتیو و حرف‌های اضافهٔ داتیو",
  purpose:
    "حالت Dativ را در الگوهای رایج A1 تشخیص بده و آرتیکل‌های اصلی داتیو را بعد از حرف‌های اضافهٔ پرکاربردی مثل mit، bei، von، zu و aus درست به‌کار ببر.",
  formula: [
    {
      label: "آرتیکل‌های معین",
      note: "شکل آرتیکل‌های Dativ با الگوهای Nominativ و Akkusativ که قبلاً دیده‌ای فرق دارد.",
    },
    {
      label: "حرف‌های اضافهٔ ثابت و پرکاربرد",
      note: "در A1 این حرف‌های اضافه را نشانه‌های قوی Dativ در نظر بگیر: mit / bei / von / zu / aus.",
    },
  ],
  meaning: [
    "Dativ یکی دیگر از حالت‌های دستوری آلمانی است. در سطح A1، این حالت به‌ویژه بعد از مجموعه‌ای از حرف‌های اضافهٔ پرکاربرد دیده می‌شود.",
    "شکل آرتیکل برای نشان‌دادن حالت تغییر می‌کند: mit dem Bus، bei der Arbeit، aus dem Haus.",
    "در جمعِ Dativ معمولاً از den استفاده می‌شود و اگر شکل جمع از قبل به ‎-n یا ‎-s ختم نشود، اغلب خود اسم هم ‎-n می‌گیرد.",
  ],
  usage: [
    {
      title: "رفت‌وآمد و همراهی با mit",
      body: "Ich fahre mit dem Bus. Ich lerne mit meiner Freundin. حرف اضافهٔ mit همیشه Dativ می‌خواهد.",
    },
    {
      title: "مکان یا بافت با bei",
      body: "Er ist bei der Arbeit. Wir wohnen bei unseren Eltern. بعد از bei عبارت اسمی در Dativ می‌آید.",
    },
    {
      title: "مبدأ و حرکت با aus / von / zu",
      body: "Sie kommt aus dem Büro. Ich gehe zu der Ärztin. این حرف‌های اضافه هم Dativ می‌گیرند.",
    },
  ],
  recognitionCues: [
    {
      label: "mit · bei · von · zu · aus",
      note: "وقتی یکی از این حرف‌های اضافه را دیدی، عبارت اسمی بعد از آن را برای شکل Dativ بررسی کن.",
    },
    {
      label: "dem / der / den",
      note: "این شکل‌های آرتیکل از سرنخ‌های واضح و مقدماتیِ یک عبارت Dativ هستند. فارسی معادلِ حالت دستوریِ یک‌به‌یک برای Dativ ندارد؛ این شکل‌های آلمانی را به‌عنوان نشانه‌های خودِ زبان یاد بگیر.",
    },
  ],
  paradigms: [
    {
      title: "آرتیکل‌های معین در Dativ",
      columns: ["جنس / تعداد", "Nominativ", "Dativ", "مثال"],
      rowLabels: ["مذکر", "مؤنث", "خنثی", "جمع"],
    },
  ],
  examples: [
    { translation: "من با اتوبوس رفت‌وآمد می‌کنم / می‌روم." },
    { translation: "او با معلم زن صحبت می‌کند." },
    { translation: "ما از دفتر می‌آییم." },
    { translation: "پیشِ پدر و مادرت هستی؟" },
    { translation: "او با ماشین رفت‌وآمد نمی‌کند." },
    {
      translation: "آرتیکل داتیو اشتباه است → آرتیکل درستِ داتیو برای اسم مذکر.",
      note: "بعد از mit و برای Bus مذکرِ مفرد، شکل درست mit dem Bus است.",
    },
  ],
  contrasts: [
    {
      explanation:
        "در «Ich sehe den Bus.» عبارت den Bus مفعول مستقیمِ مذکر در Akkusativ است. در «Ich fahre mit dem Bus.» حرف اضافهٔ mit باعث می‌شود همان اسم به شکل Dativ یعنی dem Bus بیاید.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — اول بگذار حرف اضافه حالت را انتخاب کند",
      body: "برای حرف‌های اضافهٔ ثابتِ داتیو لازم نیست هر بار کل جمله را از نو تحلیل کنی. mit/bei/von/zu/aus را که دیدی، عبارت اسمی بعدی را مستقیماً به Dativ ببر. در فارسی دنبال یک نشانگر ثابتِ معادل Dativ نباش؛ الگوی آلمانی را حفظ کن.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "Bus مذکرِ مفرد است؛ آرتیکل معینِ مذکر در Dativ برابر dem است: mit dem Bus.",
    },
    {
      explanation:
        "bei همیشه Dativ می‌گیرد؛ بنابراین die Arbeit به bei der Arbeit تبدیل می‌شود.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی بگو با چه وسیله‌ای به محل کار یا کلاس می‌روی.",
      support: "Ich fahre mit dem/der ...",
    },
    {
      prompt: "به آلمانی بگو با چه کسی صحبت می‌کنی یا درس می‌خوانی.",
      support: "Ich spreche/lerne mit ...",
    },
    {
      prompt: "به آلمانی بگو از کجا می‌آیی.",
      support: "Ich komme aus ...",
    },
  ],
  exercises: [
    {
      id: "u09-dat-01",
      prompt: "آرتیکل درست را انتخاب کن: Ich fahre mit ___ Bus.",
      explanation:
        "mit همیشه Dativ می‌گیرد و Bus مذکرِ مفرد است؛ بنابراین عبارت درست mit dem Bus است.",
    },
  ],
});
