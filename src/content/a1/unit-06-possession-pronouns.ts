import type { GrammarLesson } from "@/content/schema/content-types";

export const possessionPronounsLesson = {
  id: "a1-u06-possession-pronouns",
  level: "A1.1",
  unit: 6,
  slug: "possession-and-pronouns",
  title: {
    de: "Possession: mein, dein, sein, ihr",
    en: "Possession and pronoun systems",
  },
  purpose:
    "Describe family, belongings, and ownership with the core possessive determiners and connect them to the personal pronouns learners already use as subjects.",
  requires: ["a1-u05-accusative-articles"],
  introduces: ["possessive-determiners", "mein-dein", "third-person-possession"],
  formula: [
    {
      label: "Owner → possessive",
      pattern: "ich → mein · du → dein · er → sein · sie → ihr",
      note: "Choose the possessive from the owner first; then choose the ending/form that fits the following noun phrase.",
    },
    {
      label: "Basic nominative pattern",
      pattern: "mein Bruder · meine Schwester · mein Kind · meine Freunde",
      note: "The basic forms follow the same visible masculine/neuter versus feminine/plural pattern as ein/eine.",
    },
  ],
  meaning: [
    "Possessive determiners show who something belongs to: mein means my, dein means your, sein means his/its, and ihr means her/their depending on context.",
    "The owner determines the stem (mein-, dein-, sein-, ihr-); the following noun determines the visible ending/form.",
    "At A1, learning possessives next to familiar family and object vocabulary makes the system easier to retrieve while speaking.",
  ],
  usage: [
    {
      title: "Talk about family",
      body: "Das ist meine Schwester. Mein Bruder wohnt in Bern. The noun's gender determines mein versus meine in these basic nominative phrases.",
    },
    {
      title: "Ask about another person's things",
      body: "Ist das dein Handy? Wie heißt deine Mutter? Use dein/deine when speaking to one familiar person.",
    },
    {
      title: "Refer to third-person owners",
      body: "Paul sucht sein Ticket. Lea besucht ihre Familie. The possessive stem follows the owner, not the possessed object's gender.",
    },
  ],
  recognitionCues: [
    {
      label: "owner pronoun",
      note: "Ask who owns the noun phrase: ich, du, er, sie ...",
    },
    {
      label: "following noun",
      note: "After choosing the stem, inspect the noun's gender/number to choose the visible form.",
    },
  ],
  paradigms: [
    {
      title: "Core possessive stems",
      columns: ["Owner", "Possessive", "Masculine/neuter example", "Feminine/plural example"],
      rows: [
        ["ich", "mein-", "mein Bruder / mein Kind", "meine Schwester / meine Freunde"],
        ["du", "dein-", "dein Bruder / dein Kind", "deine Schwester / deine Freunde"],
        ["er", "sein-", "sein Bruder / sein Kind", "seine Schwester / seine Freunde"],
        ["sie", "ihr-", "ihr Bruder / ihr Kind", "ihre Schwester / ihre Freunde"],
      ],
    },
  ],
  examples: [
    {
      de: "Das ist mein Bruder.",
      en: "That is my brother.",
      focusTokens: ["mein"],
      kind: "affirmative",
    },
    {
      de: "Meine Schwester studiert in Basel.",
      en: "My sister studies in Basel.",
      focusTokens: ["Meine"],
      kind: "context",
    },
    {
      de: "Ist das dein Handy?",
      en: "Is that your phone?",
      focusTokens: ["dein"],
      kind: "question",
    },
    {
      de: "Paul sucht sein Ticket.",
      en: "Paul is looking for his ticket.",
      focusTokens: ["sein"],
      kind: "affirmative",
    },
    {
      de: "Lea besucht ihre Familie.",
      en: "Lea visits her family.",
      focusTokens: ["ihre"],
      kind: "affirmative",
    },
    {
      de: "Das ist meine Bruder. → Das ist mein Bruder.",
      en: "Wrong possessive form → correct masculine basic form.",
      focusTokens: ["meine", "mein"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "Das ist mein Bruder.",
      right: "Das ist meine Schwester.",
      explanation:
        "The owner stays ich, so the stem mein- stays the same. The visible form changes because Bruder is masculine and Schwester is feminine.",
    },
    {
      left: "Paul sucht sein Ticket.",
      right: "Lea sucht ihr Ticket.",
      explanation:
        "Ticket is the same neuter noun in both sentences; the possessive changes because the owner changes from Paul (er) to Lea (sie).",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — solve possession in two decisions",
      body: "First choose the possessive stem from the owner. Second choose the visible form from the following noun. Keeping these decisions separate prevents many beginner errors.",
      fa: "مالکیت را در دو مرحله حل کن: اول ریشهٔ ضمیر ملکی را از روی مالک انتخاب کن، بعد شکل آن را با اسم بعدی هماهنگ کن.",
    },
  ],
  commonMistakes: [
    {
      wrong: "Das ist meine Bruder.",
      correct: "Das ist mein Bruder.",
      explanation:
        "Bruder is masculine; in this basic nominative phrase, mein has no -e ending.",
    },
    {
      wrong: "Lea sucht sein Ticket.",
      correct: "Lea sucht ihr Ticket.",
      explanation:
        "The owner is Lea (sie), so the possessive stem is ihr-, not sein-.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Introduce one family member.",
      support: "Das ist mein/meine ...",
    },
    {
      prompt: "Ask a friend whether an object is theirs.",
      support: "Ist das dein/deine ...?",
    },
    {
      prompt: "Say where one of your belongings is.",
      support: "Mein/Meine ... ist ...",
    },
  ],
  exercises: [
    {
      id: "u06-poss-01",
      type: "multiple-choice",
      prompt: "Choose the correct form: Das ist ___ Schwester.",
      options: ["mein", "meine", "meinen"],
      answer: "meine",
      explanation:
        "Schwester is feminine, so the basic nominative possessive form is meine.",
    },
  ],
  references: [
    {
      label: "Repository engineering plan",
      note: "Unit 6 follows the planned possession and pronoun-system progression.",
    },
    {
      label: "Duden — grammar knowledge for learners",
      url: "https://www.duden.de/sprachwissen/fuer-lernende",
      note: "Grammar cross-check; lesson wording and examples are original.",
    },
  ],
} satisfies GrammarLesson;
