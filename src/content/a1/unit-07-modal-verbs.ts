import type { GrammarLesson } from "@/content/schema/content-types";

export const modalVerbsLesson = {
  id: "a1-u07-modal-verbs",
  level: "A1.2",
  unit: 7,
  slug: "modal-verbs-sentence-bracket",
  title: { de: "Modalverben und Satzklammer", en: "Modal verbs and the sentence bracket" },
  purpose:
    "Express ability, necessity, permission, and polite wishes with common modal verbs while keeping the infinitive at the end of a simple main clause.",
  requires: ["a1-u06-possession-pronouns"],
  introduces: ["modal-verbs", "sentence-bracket", "infinitive-final"],
  formula: [
    {
      label: "Main-clause modal pattern",
      pattern: "Position 1 + Modalverb + ... + Infinitiv",
      note: "The conjugated modal is the finite verb in position 2; the lexical infinitive closes the sentence.",
    },
  ],
  meaning: [
    "Modal verbs add meanings such as can, must, may, or would like to another action.",
    "The modal is conjugated for the subject; the second verb normally stays as an infinitive at the end.",
  ],
  usage: [
    {
      title: "Ability with können",
      body: "Ich kann Deutsch sprechen. kann is finite; sprechen stays as the infinitive at the end.",
    },
    {
      title: "Necessity with müssen",
      body: "Wir müssen heute arbeiten. The modal carries person/number and the lexical verb closes the sentence.",
    },
    {
      title: "Polite wishes with möchten",
      body: "Ich möchte einen Tee bestellen. möchten is especially useful for polite A1 service situations.",
    },
  ],
  recognitionCues: [
    { label: "kann / muss / möchte", note: "A conjugated modal near position 2 predicts an infinitive later in the clause." },
    { label: "final infinitive", note: "Look to the right edge for forms such as lernen, arbeiten, bestellen, gehen." },
  ],
  paradigms: [
    {
      title: "Core modal forms",
      columns: ["Person", "können", "müssen", "möchten"],
      rows: [
        ["ich", "kann", "muss", "möchte"],
        ["du", "kannst", "musst", "möchtest"],
        ["er / sie / es", "kann", "muss", "möchte"],
        ["wir", "können", "müssen", "möchten"],
        ["ihr", "könnt", "müsst", "möchtet"],
        ["sie / Sie", "können", "müssen", "möchten"],
      ],
    },
  ],
  examples: [
    { de: "Ich kann gut schwimmen.", en: "I can swim well.", focusTokens: ["kann", "schwimmen"], kind: "affirmative" },
    { de: "Du musst heute arbeiten.", en: "You must work today.", focusTokens: ["musst", "arbeiten"], kind: "context" },
    { de: "Wir möchten zwei Kaffee bestellen.", en: "We would like to order two coffees.", focusTokens: ["möchten", "bestellen"], kind: "affirmative" },
    { de: "Kannst du morgen kommen?", en: "Can you come tomorrow?", focusTokens: ["Kannst", "kommen"], kind: "question" },
    { de: "Ich kann heute nicht kommen.", en: "I cannot come today.", focusTokens: ["kann", "nicht", "kommen"], kind: "negative" },
    { de: "Ich muss arbeiten heute. → Ich muss heute arbeiten.", en: "Awkward beginner order → clear sentence-bracket order.", focusTokens: ["muss", "arbeiten"], kind: "correction" },
  ],
  contrasts: [
    {
      left: "Ich arbeite heute.",
      right: "Ich muss heute arbeiten.",
      explanation: "Without a modal, arbeite is finite in position 2. With müssen, muss becomes finite and arbeiten moves to the end as an infinitive.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — hear the bracket",
      body: "Have learners pause mentally after the modal and predict the infinitive at the end. The left and right verb parts make a useful visual bracket.",
      fa: "بعد از فعل مُدال انتظار داشته باش که مصدر در انتهای جمله بیاید؛ دو بخش فعل مثل یک پرانتز جمله را نگه می‌دارند.",
    },
  ],
  commonMistakes: [
    { wrong: "Ich kann spreche Deutsch.", correct: "Ich kann Deutsch sprechen.", explanation: "After a modal, the lexical verb stays in the infinitive: sprechen, not spreche." },
    { wrong: "Wir müssen arbeiten heute.", correct: "Wir müssen heute arbeiten.", explanation: "In the basic A1 pattern, the infinitive cleanly closes the clause after the middle information." },
  ],
  speakingPrompts: [
    { prompt: "Say one thing you can do.", support: "Ich kann ..." },
    { prompt: "Say one thing you must do today.", support: "Ich muss heute ..." },
    { prompt: "Politely order one item.", support: "Ich möchte ... bestellen." },
  ],
  exercises: [
    {
      id: "u07-modal-01",
      type: "multiple-choice",
      prompt: "Choose the correct sentence.",
      options: ["Ich kann Deutsch spreche.", "Ich kann Deutsch sprechen.", "Ich sprechen kann Deutsch."],
      answer: "Ich kann Deutsch sprechen.",
      explanation: "The modal kann is finite; sprechen remains an infinitive at the end.",
    },
  ],
  references: [
    { label: "Repository engineering plan", note: "Unit 7 follows the planned modal-verb and sentence-bracket progression." },
    { label: "Duden — grammar knowledge for learners", url: "https://www.duden.de/sprachwissen/fuer-lernende", note: "Grammar cross-check; wording and examples are original." },
  ],
} satisfies GrammarLesson;
