import { accusativeExerciseLesson } from "@/content/a1/unit-05-exercise-rich";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit05Persian = buildPersianLessonLocalization(accusativeExerciseLesson, {
  title: "آکوزاتیو: وقتی der به den تبدیل می‌شود",
  purpose:
    "مفعول مستقیم را تشخیص بده و تغییر آرتیکل‌هایی را که آلمانی در حالت Akkusativ لازم دارد انجام بده؛ به‌ویژه تغییر روشنِ مذکر der/ein → den/einen.",
  formula: [
    {
      label: "الگوی جمله",
      note: "اول بپرس چه کسی کار را انجام می‌دهد؛ بعد ببین عمل مستقیماً روی چه شخص یا چیزی انجام می‌شود.",
    },
    {
      label: "تغییر آرتیکل مذکر",
      note: "در سطح A1، تغییر آرتیکل‌های مذکر واضح‌ترین نشانهٔ Akkusativ است.",
    },
  ],
  meaning: [
    "در بسیاری از جمله‌های روزمره، Akkusativ عبارت اسمی‌ای را مشخص می‌کند که نقش مفعول مستقیم دارد.",
    "برای شروع، واضح‌ترین تغییر در مذکر دیده می‌شود: der به den و ein به einen تبدیل می‌شود.",
    "در این الگوی پایه، die/eine برای مؤنث، das/ein برای خنثی و die برای جمع همان شکل ظاهری را حفظ می‌کنند.",
  ],
  usage: [
    {
      title: "اول فاعل را پیدا کن",
      body: "در «Der Mann kauft den Kaffee.» عبارت der Mann انجام‌دهندهٔ کار و Nominativ است؛ den Kaffee چیزی است که مستقیماً خریداری می‌شود و Akkusativ است.",
    },
    {
      title: "روی اسم‌های مذکر حساس باش",
      body: "در مذکر تغییر حالت را راحت‌تر می‌بینی: der Hund → Ich sehe den Hund و ein Bruder → Ich habe einen Bruder.",
    },
    {
      title: "همهٔ آرتیکل‌ها را به den تبدیل نکن",
      body: "مؤنث و خنثی در اینجا شکل ظاهری‌شان را حفظ می‌کنند: Ich sehe die Frau. Ich brauche das Ticket.",
    },
    {
      title: "kein از الگوی ein پیروی می‌کند",
      body: "برای مفعول مستقیم مذکر، kein به keinen تبدیل می‌شود: Ich habe keinen Hund.",
    },
  ],
  recognitionCues: [
    {
      label: "Wen? / Was?",
      note: "برای شروع می‌توانی بپرسی «چه کسی را؟ / چه چیزی را؟» تا مفعول مستقیم را پیدا کنی. «را» در فارسی فقط یک سرنخ معنایی مفید است؛ معادل دستوری Akkusativ نیست.",
    },
    {
      label: "haben · brauchen · kaufen",
      note: "این فعل‌های پرکاربرد A1 اغلب یک مفعول مستقیم همراه دارند.",
    },
    {
      label: "sehen · bestellen",
      note: "این فعل‌ها هم برای دیدن عبارت‌های Akkusativ در مثال‌های روزمره مفیدند.",
    },
  ],
  paradigms: [
    {
      title: "آرتیکل‌ها: Nominativ → Akkusativ",
      columns: ["جنس", "Nominativ", "Akkusativ", "مثال کوتاه"],
      rowLabels: ["مذکر", "مؤنث", "خنثی", "جمع"],
    },
  ],
  examples: [
    { translation: "من قهوه را می‌خرم." },
    { translation: "او یک برادر دارد." },
    {
      translation: "ما آن زن را می‌بینیم.",
      note: "die مؤنث از Nominativ به Akkusativ تغییر ظاهری نمی‌کند.",
    },
    {
      translation: "او به بلیت نیاز دارد.",
      note: "das خنثی هم در این حالت همان شکل ظاهری را حفظ می‌کند.",
    },
    { translation: "من سگ ندارم." },
    { translation: "وقتِ ملاقات داری؟" },
    { translation: "لیا در کافه یک چای سفارش می‌دهد." },
    {
      translation: "من آن مرد را می‌بینم. → آرتیکل Akkusativ اصلاح شده است.",
      note: "در جملهٔ آلمانی، der Mann به‌عنوان مفعول مستقیم باید den Mann شود.",
    },
  ],
  contrasts: [
    {
      explanation:
        "در جملهٔ اول der Mann فاعل و Nominativ است. در جملهٔ دوم همان اسم مفعول مستقیم شده و به شکل den Mann در Akkusativ آمده است.",
    },
    {
      explanation:
        "در «Das ist ein Hund.» عبارت ein Hund در Nominativ است؛ بعد از haben، همان اسم به‌عنوان مفعول مستقیم مذکر به einen Hund تبدیل می‌شود.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — اول فقط یک تغییر را خودکار کن",
      body: "در A1 لازم نیست همهٔ پایان‌های حالت‌های دستوری را یک‌جا حفظ کنی. اول تغییر مذکر را با چشم و گوش خودکار کن: der/ein → den/einen.",
    },
    {
      title: "بررسی سریع حافظه",
      body: "اول انجام‌دهندهٔ کار را پیدا کن، بعد شخص یا چیزی را که عمل مستقیماً روی آن انجام می‌شود. اگر آن مفعول مذکر است، آرتیکلش را بررسی کن.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "Bruder مذکر و مفعول مستقیمِ haben است؛ بنابراین ein باید به einen تبدیل شود.",
    },
    {
      explanation:
        "den برای هر مفعولی استفاده نمی‌شود. Frau مؤنث است، پس die در Akkusativ همچنان die می‌ماند.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "با یک اسم مذکر، به آلمانی بگو چه چیزی داری.",
      support: "Ich habe einen ...",
    },
    {
      prompt: "به آلمانی یک چیزی را بگو که امروز به آن نیاز داری.",
      support: "Ich brauche das / die / den ...",
    },
    {
      prompt: "از یک نفر بپرس آیا وقتِ ملاقات دارد.",
      support: "Hast du einen Termin?",
    },
    {
      prompt: "با یک اسم مذکر یک جملهٔ منفی بساز.",
      support: "Ich habe keinen ...",
    },
  ],
  exercises: [
    {
      id: "u05-akk-01",
      prompt: "آرتیکل درست را انتخاب کن: Ich kaufe ___ Apfel.",
      explanation:
        "Apfel مذکر و مفعول مستقیمِ kaufen است؛ آرتیکل معین مذکر در Akkusativ برابر den است.",
    },
    {
      id: "u05-akk-02",
      prompt: "جمله را کامل کن: Ich habe ___ Bruder.",
      explanation:
        "Bruder مذکر و مفعول مستقیمِ haben است؛ بنابراین ein به einen تبدیل می‌شود.",
    },
    {
      id: "u05-akk-03",
      prompt: "جمله‌ای بساز با این معنی: امروز به بلیت نیاز دارم.",
      explanation:
        "Heute جایگاه اول را می‌گیرد، brauche فعلِ صرف‌شده در جایگاه دوم می‌ماند و das Ticket مفعول مستقیم خنثی در Akkusativ است.",
    },
    {
      id: "u05-akk-04",
      prompt: "خطای Akkusativ را اصلاح کن.",
      explanation:
        "Mann مذکر و مفعول مستقیمِ sehen است؛ بنابراین der باید به den تبدیل شود.",
    },
  ],
});
