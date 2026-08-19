import { placeDirectionLesson } from "@/content/a1/unit-10-place-direction";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit10Persian = buildPersianLessonLocalization(placeDirectionLesson, {
  title: "مکان یا جهت؟ Wo، Wohin و حرف‌های اضافهٔ دوحالته",
  purpose:
    "بین موقعیت ثابت و حرکت به‌سوی یک مقصد فرق بگذار و از حرف‌های اضافهٔ دوحالتهٔ پرکاربرد با Dativ برای «کجا؟» و Akkusativ برای «به کجا؟» استفاده کن.",
  formula: [
    {
      label: "موقعیت ثابت",
      note: "وقتی دربارهٔ جای ثابت می‌پرسی یا می‌گویی چیزی کجاست، Wo? معمولاً با Dativ می‌آید.",
    },
    {
      label: "حرکت به مقصد",
      note: "وقتی حرکت به داخل/روی/کنار یک مقصد مطرح است، Wohin? معمولاً با Akkusativ می‌آید.",
    },
  ],
  meaning: [
    "حرف‌های اضافه‌ای مثل in، an، auf، unter، über، vor، hinter، neben و zwischen می‌توانند با Dativ یا Akkusativ بیایند.",
    "انتخاب حالت در این درس به جنس اسم مربوط نیست؛ اول باید بفهمی جمله موقعیت ثابت را توصیف می‌کند یا حرکت به‌سوی مقصد را.",
    "فارسی اغلب این تفاوت را با واژه‌هایی مثل «در/روی» در برابر «به/داخلِ/رویِ ... رفتن» نشان می‌دهد. از این تفاوت معنایی برای انتخاب حالت آلمانی استفاده کن، نه برای ترجمهٔ مکانیکی آرتیکل‌ها.",
  ],
  usage: [
    {
      title: "بگو چیزی کجاست",
      body: "Das Buch liegt auf dem Tisch. چون کتاب روی میز قرار دارد و مقصدی در کار نیست، auf با Dativ می‌آید.",
    },
    {
      title: "بگو چیزی به کجا می‌رود",
      body: "Ich lege das Buch auf den Tisch. اینجا کتاب به سمت سطح میز منتقل می‌شود، پس auf با Akkusativ می‌آید.",
    },
    {
      title: "Wo و Wohin را به‌عنوان سؤال راهنما استفاده کن",
      body: "Wo? یعنی «کجا؟» برای موقعیت ثابت؛ Wohin? یعنی «به کجا؟» برای مقصد حرکت. این جفت برای تصمیم‌گیری سریع در A1 بسیار مفید است.",
    },
  ],
  recognitionCues: [
    {
      label: "Wo?",
      note: "اگر پاسخ فقط محل قرارگرفتن را می‌گوید، الگوی Dativ را بررسی کن.",
    },
    {
      label: "Wohin?",
      note: "اگر پاسخ مقصد یا حرکت به یک محل را می‌گوید، الگوی Akkusativ را بررسی کن.",
    },
    {
      label: "liegen / sein ↔ legen / stellen / gehen",
      note: "فعل‌های حالت و مکان در برابر فعل‌های انتقال/حرکت می‌توانند سرنخ معنایی خوبی باشند.",
    },
  ],
  paradigms: [
    {
      title: "مکان در برابر جهت",
      columns: ["پرسش", "معنی", "حالت", "مثال"],
      rowLabels: ["Wo?", "Wohin?"],
    },
  ],
  examples: [
    { translation: "کتاب روی میز است." },
    { translation: "کتاب را روی میز می‌گذارم." },
    { translation: "ما در سینما هستیم." },
    { translation: "امشب به سینما می‌رویم." },
    { translation: "گربه زیر صندلی خوابیده است." },
    {
      translation: "حالت نادرست برای موقعیت ثابت → Dativ درست.",
      note: "چون سؤال «کجا؟» است و حرکتی به مقصد وجود ندارد، auf dem Tisch لازم است.",
    },
  ],
  contrasts: [
    {
      explanation:
        "حرف اضافهٔ auf در هر دو جمله یکی است. در جملهٔ اول کتاب روی میز قرار دارد، پس Dativ می‌آید؛ در جملهٔ دوم کتاب به روی میز منتقل می‌شود، پس Akkusativ می‌آید.",
    },
    {
      explanation:
        "im Kino موقعیت ثابت را نشان می‌دهد؛ ins Kino مقصد حرکت را. تفاوت اصلی معنایی «در کجا» در برابر «به کجا» است.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — اول صحنه را تصور کن",
      body: "قبل از فکرکردن به جدول آرتیکل‌ها، صحنه را تصور کن: چیزی از قبل آنجاست یا به آنجا می‌رود؟ وقتی این تصمیم روشن باشد، انتخاب Dativ/Akkusativ بسیار ساده‌تر می‌شود.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "liegen موقعیت ثابت را توصیف می‌کند؛ برای auf + اسم مذکر Tisch در این معنی، Dativ یعنی auf dem Tisch لازم است.",
    },
    {
      explanation:
        "gehen به مقصد اشاره می‌کند؛ در این الگو in + das Kino به شکل Akkusativِ فشردهٔ ins Kino می‌آید.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی بگو یک وسیلهٔ نزدیکت کجاست.",
      support: "... ist/liegt auf/in/neben dem/der ...",
    },
    {
      prompt: "به آلمانی بگو امروز یا امشب به کجا می‌روی.",
      support: "Ich gehe heute/Abends in ...",
    },
    {
      prompt: "یک جفت جمله بساز: اول Wo، بعد Wohin با همان مکان.",
      support: "Ich bin ... / Ich gehe ...",
    },
  ],
  exercises: [
    {
      id: "u10-place-01",
      prompt: "شکل درست را انتخاب کن: Das Buch liegt auf ___ Tisch.",
      explanation:
        "liegen موقعیت ثابت را نشان می‌دهد؛ بنابراین auf با Dativ می‌آید و Tisch مذکر به dem Tisch تبدیل می‌شود.",
    },
  ],
});
