import type { GrammarLesson } from "@/content/schema/content-types";

export const accusativeCanonicalLesson = {
  id: "a1-u05-accusative-articles",
  level: "A1.1",
  unit: 5,
  slug: "accusative-articles",
  title: {
    de: "Akkusativ: der wird den",
    en: "Accusative articles for direct objects",
  },
  purpose:
    "Recognize a direct object and make the article changes that German needs in the accusative case, especially masculine der/ein → den/einen.",
  requires: [
    "a1-u01-verb-second",
    "nominative-articles",
    "nicht-kein-basics",
  ],
  introduces: [
    "accusative-case",
    "direct-object",
    "accusative-articles",
  ],
  formula: [
    {
      label: "Sentence pattern",
      pattern: "Subjekt (Nominativ) + Verb + direktes Objekt (Akkusativ)",
      note: "Ask: who is doing the action, and what or whom does the action directly affect?",
    },
    {
      label: "Masculine article change",
      pattern: "der → den   ·   ein → einen   ·   kein → keinen",
      note: "Masculine articles show the clearest accusative change at A1.",
    },
  ],
  meaning: [
    "The accusative marks a noun phrase that functions as the direct object in many everyday sentences.",
    "For beginners, the most visible article change is masculine: der becomes den, and ein becomes einen.",
    "Feminine die/eine, neuter das/ein, and plural die do not change in the same way.",
  ],
  usage: [
    {
      title: "Find the subject first",
      body: "In “Der Mann kauft den Kaffee”, der Mann performs the action, so it is nominative. den Kaffee receives the action directly, so it is accusative.",
    },
    {
      title: "Watch masculine nouns",
      body: "Masculine nouns make the new case easiest to see: der Hund → Ich sehe den Hund; ein Bruder → Ich habe einen Bruder.",
    },
    {
      title: "Do not change every article",
      body: "The feminine and neuter article shapes stay the same here: Ich sehe die Frau. Ich brauche das Ticket.",
    },
    {
      title: "kein follows the ein pattern",
      body: "For a masculine direct object, kein becomes keinen: Ich habe keinen Hund.",
    },
  ],
  recognitionCues: [
    {
      label: "Wen? / Was?",
      note: "A useful beginner check for the direct object: whom? / what?",
    },
    {
      label: "haben · brauchen · kaufen",
      note: "These common A1 verbs often introduce a direct object.",
    },
    {
      label: "sehen · bestellen",
      note: "Also useful for noticing accusative noun phrases in everyday examples.",
    },
  ],
  paradigms: [
    {
      title: "Articles: Nominativ → Akkusativ",
      columns: ["Gender", "Nominativ", "Akkusativ", "Mini example"],
      rows: [
        ["Masculine", "der / ein", "den / einen", "Ich sehe den Mann."],
        ["Feminine", "die / eine", "die / eine", "Ich sehe die Frau."],
        ["Neuter", "das / ein", "das / ein", "Ich brauche das Ticket."],
        ["Plural", "die / —", "die / —", "Ich kaufe die Äpfel."],
      ],
    },
  ],
  examples: [
    {
      de: "Ich kaufe den Kaffee.",
      en: "I am buying the coffee.",
      focusTokens: ["den"],
      kind: "affirmative",
    },
    {
      de: "Sie hat einen Bruder.",
      en: "She has a brother.",
      focusTokens: ["einen"],
      kind: "affirmative",
    },
    {
      de: "Wir sehen die Frau.",
      en: "We see the woman.",
      focusTokens: ["die"],
      note: "Feminine die does not visibly change from nominative to accusative.",
      kind: "affirmative",
    },
    {
      de: "Er braucht das Ticket.",
      en: "He needs the ticket.",
      focusTokens: ["das"],
      note: "Neuter das also keeps the same visible article form.",
      kind: "affirmative",
    },
    {
      de: "Ich habe keinen Hund.",
      en: "I do not have a dog.",
      focusTokens: ["keinen"],
      kind: "negative",
    },
    {
      de: "Hast du einen Termin?",
      en: "Do you have an appointment?",
      focusTokens: ["einen"],
      kind: "question",
    },
    {
      de: "Im Café bestellt Lea einen Tee.",
      en: "At the café, Lea orders a tea.",
      focusTokens: ["einen"],
      kind: "context",
    },
    {
      de: "Ich sehe der Mann. → Ich sehe den Mann.",
      en: "I see the man. → corrected accusative article.",
      focusTokens: ["der", "den"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "Der Mann kommt.",
      right: "Ich sehe den Mann.",
      explanation:
        "In the first sentence, der Mann is the subject (nominative). In the second, den Mann is the direct object (accusative).",
    },
    {
      left: "Das ist ein Hund.",
      right: "Ich habe einen Hund.",
      explanation:
        "ein Hund is nominative after sein; einen Hund is masculine accusative after haben.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — the one change to see first",
      body: "At A1, do not try to memorize every case ending at once. Make the masculine article change visually automatic first: der/ein → den/einen.",
      fa: "برای شروع، مهم‌ترین تغییر را سریع تشخیص بده: در آکوزاتیوِ مذکر، der به den و ein به einen تبدیل می‌شود. لازم نیست همهٔ حالت‌ها را یک‌باره حفظ کنی.",
    },
    {
      title: "Memory check",
      body: "Find the actor, then find the directly affected thing/person. If that direct object is masculine, inspect its article.",
      fa: "اول انجام‌دهندهٔ کار را پیدا کن، بعد مفعول مستقیم را. اگر مفعول مذکر است، شکل آرتیکل را بررسی کن.",
    },
  ],
  commonMistakes: [
    {
      wrong: "Ich habe ein Bruder.",
      correct: "Ich habe einen Bruder.",
      explanation:
        "Bruder is masculine and is the direct object of haben, so ein changes to einen.",
    },
    {
      wrong: "Ich sehe den Frau.",
      correct: "Ich sehe die Frau.",
      explanation:
        "Do not apply den to every direct object. Frau is feminine, so die remains die in the accusative.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Say one thing you have using a masculine noun.",
      support: "Ich habe einen ...",
    },
    {
      prompt: "Say one thing you need today.",
      support: "Ich brauche das / die / den ...",
    },
    {
      prompt: "Ask another person whether they have an appointment.",
      support: "Hast du einen Termin?",
    },
    {
      prompt: "Make one negative sentence with a masculine noun.",
      support: "Ich habe keinen ...",
    },
  ],
  exercises: [
    {
      id: "u05-akk-01",
      type: "multiple-choice",
      prompt: "Choose the correct article: Ich kaufe ___ Apfel.",
      options: ["der", "den", "das"],
      answer: "den",
      explanation:
        "Apfel is masculine, and it is the direct object of kaufen. The masculine accusative definite article is den.",
    },
  ],
  references: [
    {
      label: "Repository engineering plan",
      note: "Canonical PR02 lesson authored to the required German lesson contract.",
    },
    {
      label: "Duden — grammar knowledge for learners",
      url: "https://www.duden.de/sprachwissen/fuer-lernende",
      note: "Used as an authoritative grammar cross-check; wording and examples here are original.",
    },
  ],
} satisfies GrammarLesson;
