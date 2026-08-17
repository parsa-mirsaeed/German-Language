import type { GrammarLesson } from "@/content/schema/content-types";

export const presentTenseLesson = {
  id: "a1-u02-present-tense",
  level: "A1.1",
  unit: 2,
  slug: "present-tense-conjugation",
  title: {
    de: "Präsens: Verben konjugieren",
    en: "Present tense and verb conjugation",
  },
  purpose:
    "Choose the correct present-tense verb ending for the subject and use common A1 verbs in simple statements and questions.",
  requires: ["a1-u01-verb-second"],
  introduces: ["present-tense", "verb-stem", "personal-endings"],
  formula: [
    {
      label: "Regular verb",
      pattern: "Verbstamm + Personalendung",
      note: "For lernen, remove -en to get the stem lern-, then add the ending for the subject.",
    },
    {
      label: "Core endings",
      pattern: "ich -e · du -st · er/sie/es -t · wir -en · ihr -t · sie/Sie -en",
    },
  ],
  meaning: [
    "German present-tense verbs change form to match the subject.",
    "The ending helps show who is doing the action, so the verb form and subject belong together.",
    "The present tense covers many everyday A1 meanings, including routines and what is happening now.",
  ],
  usage: [
    {
      title: "Build from the stem",
      body: "lernen → lern-: ich lerne, du lernst, er lernt. Keep the stem and change the ending.",
    },
    {
      title: "Match plural subjects",
      body: "wir lernen and sie lernen use -en; ihr lernt uses -t.",
    },
    {
      title: "Use common irregular forms as whole patterns",
      body: "sein is highly frequent and irregular: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.",
    },
  ],
  recognitionCues: [
    {
      label: "subject pronoun",
      note: "First identify ich, du, er/sie/es, wir, ihr, or sie/Sie.",
    },
    {
      label: "verb stem",
      note: "Many infinitives end in -en; removing -en reveals the working stem.",
    },
  ],
  paradigms: [
    {
      title: "lernen in the present tense",
      columns: ["Person", "Form", "Example"],
      rows: [
        ["ich", "lerne", "Ich lerne Deutsch."],
        ["du", "lernst", "Du lernst schnell."],
        ["er / sie / es", "lernt", "Sie lernt heute."],
        ["wir", "lernen", "Wir lernen zusammen."],
        ["ihr", "lernt", "Ihr lernt viel."],
        ["sie / Sie", "lernen", "Sie lernen Deutsch."],
      ],
    },
  ],
  examples: [
    {
      de: "Ich lerne Deutsch.",
      en: "I learn German.",
      focusTokens: ["lerne"],
      kind: "affirmative",
    },
    {
      de: "Du arbeitest heute.",
      en: "You work today.",
      focusTokens: ["arbeitest"],
      kind: "affirmative",
    },
    {
      de: "Mara wohnt in Basel.",
      en: "Mara lives in Basel.",
      focusTokens: ["wohnt"],
      kind: "context",
    },
    {
      de: "Wir machen eine Pause.",
      en: "We take a break.",
      focusTokens: ["machen"],
      kind: "affirmative",
    },
    {
      de: "Seid ihr müde?",
      en: "Are you all tired?",
      focusTokens: ["Seid"],
      kind: "question",
    },
    {
      de: "Du lernen Deutsch. → Du lernst Deutsch.",
      en: "Incorrect infinitive form → correct du form.",
      focusTokens: ["lernen", "lernst"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "Ich lerne Deutsch.",
      right: "Du lernst Deutsch.",
      explanation:
        "The lexical meaning stays the same, but the ending changes because the subject changes from ich to du.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — hear subject and ending together",
      body: "Practice pronoun + verb as one speaking unit: ich lerne, du lernst, wir lernen. This builds faster retrieval than memorizing endings alone.",
      fa: "ضمیر و فعل را با هم تمرین کن: ich lerne، du lernst، wir lernen. این کار بازیابی فرم درست را سریع‌تر می‌کند.",
    },
  ],
  commonMistakes: [
    {
      wrong: "Du lernen Deutsch.",
      correct: "Du lernst Deutsch.",
      explanation:
        "The infinitive lernen does not match du. A regular du form normally takes -st.",
    },
    {
      wrong: "Wir lernt Deutsch.",
      correct: "Wir lernen Deutsch.",
      explanation:
        "The wir form of a regular verb normally matches the infinitive ending -en.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Say what language you are learning.",
      support: "Ich lerne ...",
    },
    {
      prompt: "Ask another person what they are doing today.",
      support: "Was machst du heute?",
    },
    {
      prompt: "Say one activity you and another person do together.",
      support: "Wir ... zusammen.",
    },
  ],
  exercises: [
    {
      id: "u02-present-01",
      type: "multiple-choice",
      prompt: "Choose the correct form: Du ___ Deutsch.",
      options: ["lerne", "lernst", "lernen"],
      answer: "lernst",
      explanation:
        "For a regular verb, the du form normally takes -st: du lernst.",
    },
  ],
  references: [
    {
      label: "Repository engineering plan",
      note: "Unit 2 follows the planned present-tense and conjugation progression.",
    },
    {
      label: "Duden — grammar knowledge for learners",
      url: "https://www.duden.de/sprachwissen/fuer-lernende",
      note: "Grammar cross-check; lesson wording and examples are original.",
    },
  ],
} satisfies GrammarLesson;
