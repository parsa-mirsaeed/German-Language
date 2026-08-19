import { negationLesson } from "@/content/a1/unit-04-negation";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit04Persian = buildPersianLessonLocalization(negationLesson, {
  title: "منفی‌سازی با nicht و kein",
  purpose:
    "برای منفی‌های رایج سطح A1 بین nicht و kein انتخاب کن و منفی را طوری در جمله قرار بده که روشن باشد دقیقاً چه چیزی رد یا منفی می‌شود.",
  formula: [
    {
      label: "هیچ / یک اسم نیست",
      note: "برای بسیاری از عبارت‌های اسمی که در حالت مثبت ein/eine یا بدون آرتیکل می‌آیند، از kein استفاده کن.",
    },
    {
      label: "نه / نیست",
      note: "nicht معمولاً صفت، عمل، مکان، زمان یا بخش دیگری از جمله را منفی می‌کند که یک عبارت اسمیِ نامعین نیست.",
    },
  ],
  meaning: [
    "kein مثل یک آرتیکل منفی رفتار می‌کند: ein Auto → kein Auto و eine Schwester → keine Schwester.",
    "nicht معنی کلی «نه / نیست» می‌دهد و برای منفی‌کردن بسیاری از بخش‌های دیگر جمله استفاده می‌شود.",
    "در سطح A1 اول بررسی کن آیا چیزی که می‌خواهی منفی کنی یک عبارت اسمی با الگوی ein است یا نه؛ این سؤال معمولاً انتخاب بین kein و nicht را ساده می‌کند.",
  ],
  usage: [
    {
      title: "یک اسم نامعین را منفی کن",
      body: "Ich habe ein Auto → Ich habe kein Auto. برای اسم مؤنث: Das ist eine Katze → Das ist keine Katze.",
    },
    {
      title: "یک صفت را منفی کن",
      body: "در «Der Kaffee ist nicht kalt.» واژهٔ kalt صفت است، پس nicht انتخاب طبیعی است.",
    },
    {
      title: "مکان یا یک عبارت دیگر را منفی کن",
      body: "در «Ich wohne nicht in Berlin.» منفی روی عبارت مکانی in Berlin است، بنابراین از nicht استفاده می‌شود.",
    },
  ],
  recognitionCues: [
    {
      label: "اسم با ein / eine",
      note: "اگر جملهٔ مثبت ein/eine دارد، شکل منفی آن اغلب kein/keine است.",
    },
    {
      label: "صفت یا عبارت مکانی",
      note: "nicht معمولاً اطلاعاتی مثل müde، heute یا in Berlin را منفی می‌کند.",
    },
  ],
  paradigms: [
    {
      title: "kein در Nominativ",
      columns: ["جنس / تعداد", "مثبت", "منفی", "مثال"],
      rowLabels: ["مذکر", "مؤنث", "خنثی", "جمع"],
    },
  ],
  examples: [
    { translation: "من ماشین ندارم." },
    { translation: "آن یک گربه نیست." },
    { translation: "چای داغ نیست." },
    { translation: "ما در زوریخ زندگی نمی‌کنیم." },
    { translation: "امروز کار نمی‌کنم." },
    {
      translation: "منفی‌کردن اسم با nicht نادرست است → الگوی درست با kein.",
      note: "در این جمله Auto یک عبارت اسمیِ نامعین است، پس kein لازم است.",
    },
  ],
  contrasts: [
    {
      explanation:
        "kein وجود یا مالکیتِ یک اسم نامعین را منفی می‌کند؛ اما nicht در جملهٔ دوم صفتِ neu را منفی می‌کند.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — اول هدف منفی را پیدا کن",
      body: "قبل از انتخاب واژه از خودت بپرس: دارم می‌گویم «هیچ / یک اسم نیست»، یا دارم دربارهٔ کیفیت، مکان، زمان یا یک عمل می‌گویم «نه»؟ در حالت اول معمولاً kein و در حالت دوم معمولاً nicht می‌آید.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "Auto اینجا یک عبارت اسمیِ نامعین است؛ آلمانی برای چنین منفی‌ای از آرتیکل منفی kein استفاده می‌کند.",
    },
    {
      explanation:
        "kalt صفت است، نه اسم؛ بنابراین باید از nicht استفاده شود.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی یک چیزی را بگو که نداری.",
      support: "Ich habe kein/keine ...",
    },
    {
      prompt: "به آلمانی یک جایی را بگو که در آن زندگی نمی‌کنی.",
      support: "Ich wohne nicht in ...",
    },
    {
      prompt: "یک چیز را با یک صفت منفی توصیف کن.",
      support: "Der/Die/Das ... ist nicht ...",
    },
  ],
  exercises: [
    {
      id: "u04-neg-01",
      prompt: "منفی درست را انتخاب کن: Ich habe ___ Fahrrad.",
      explanation:
        "Fahrrad خنثی است و این عبارت اسمی از الگوی ein پیروی می‌کند؛ در این جملهٔ پایه شکل منفی مناسب kein است.",
    },
  ],
});
