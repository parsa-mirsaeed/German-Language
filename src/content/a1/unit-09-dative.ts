import type { GrammarLesson } from "@/content/schema/content-types";

export const dativeLesson = {
  id: "a1-u09-dative",
  level: "A1.2",
  unit: 9,
  slug: "dative-case-prepositions",
  title: { de: "Dativ: dem, der, den", en: "Dative and dative prepositions" },
  purpose:
    "Recognize the dative case in common A1 patterns and use core dative articles after frequent prepositions such as mit, bei, von, zu, and aus.",
  requires: ["a1-u08-separable-verbs", "accusative-case"],
  introduces: ["dative-case", "dative-articles", "dative-prepositions"],
  formula: [
    {
      label: "Definite articles",
      pattern: "der → dem · die → der · das → dem · die (Plural) → den",
      note: "Dative article forms look different from the nominative/accusative patterns learners already know.",
    },
    {
      label: "Common fixed prepositions",
      pattern: "mit / bei / von / zu / aus + Dativ",
      note: "At A1, treat these prepositions as strong case signals.",
    },
  ],
  meaning: [
    "Dative is another German case. At A1 it is especially visible after a set of frequent prepositions.",
    "The article form changes to show the case: mit dem Bus, bei der Arbeit, aus dem Haus.",
    "Plural dative commonly uses den and often adds -n to the noun when the plural does not already end in -n or -s.",
  ],
  usage: [
    { title: "Transport and accompaniment with mit", body: "Ich fahre mit dem Bus. Ich lerne mit meiner Freundin. mit requires dative." },
    { title: "Location/context with bei", body: "Er ist bei der Arbeit. Wir wohnen bei unseren Eltern. bei is followed by dative." },
    { title: "Origin and movement with aus/von/zu", body: "Sie kommt aus dem Büro. Ich gehe zu der Ärztin. These prepositions also trigger dative." },
  ],
  recognitionCues: [
    { label: "mit · bei · von · zu · aus", note: "When one of these appears, inspect the following noun phrase for dative form." },
    { label: "dem / der / den", note: "These article shapes are strong beginner cues for a dative noun phrase." },
  ],
  paradigms: [
    {
      title: "Definite articles in the dative",
      columns: ["Gender / number", "Nominative", "Dative", "Example"],
      rows: [
        ["Masculine", "der", "dem", "mit dem Mann"],
        ["Feminine", "die", "der", "bei der Frau"],
        ["Neuter", "das", "dem", "aus dem Haus"],
        ["Plural", "die", "den", "mit den Freunden"],
      ],
    },
  ],
  examples: [
    { de: "Ich fahre mit dem Bus.", en: "I travel by bus.", focusTokens: ["mit dem Bus"], kind: "affirmative" },
    { de: "Sie spricht mit der Lehrerin.", en: "She speaks with the teacher.", focusTokens: ["mit der Lehrerin"], kind: "affirmative" },
    { de: "Wir kommen aus dem Büro.", en: "We come from the office.", focusTokens: ["aus dem Büro"], kind: "context" },
    { de: "Bist du bei deinen Eltern?", en: "Are you at your parents' place?", focusTokens: ["bei deinen Eltern"], kind: "question" },
    { de: "Er fährt nicht mit dem Auto.", en: "He is not traveling by car.", focusTokens: ["nicht", "mit dem Auto"], kind: "negative" },
    { de: "Ich fahre mit den Bus. → Ich fahre mit dem Bus.", en: "Wrong dative article → correct masculine dative article.", focusTokens: ["den", "dem"], kind: "correction" },
  ],
  contrasts: [
    {
      left: "Ich sehe den Bus.",
      right: "Ich fahre mit dem Bus.",
      explanation: "den Bus is masculine accusative as a direct object; mit dem Bus is masculine dative because mit requires dative.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — let the preposition choose first",
      body: "For fixed dative prepositions, do not re-solve the whole sentence every time. Recognize mit/bei/von/zu/aus, then immediately switch the following noun phrase into dative.",
      fa: "در حروف اضافهٔ ثابت داتیو، خود حرف اضافه علامت اصلی است: mit/bei/von/zu/aus را دیدی، عبارت اسمی بعدی را داتیو بساز.",
    },
  ],
  commonMistakes: [
    { wrong: "mit den Bus", correct: "mit dem Bus", explanation: "Bus is masculine singular; the masculine dative definite article is dem." },
    { wrong: "bei die Arbeit", correct: "bei der Arbeit", explanation: "bei requires dative; feminine die changes to der in the dative." },
  ],
  speakingPrompts: [
    { prompt: "Say how you travel to work or school.", support: "Ich fahre mit dem/der ..." },
    { prompt: "Say who you speak or learn with.", support: "Ich spreche/lerne mit ..." },
    { prompt: "Say where you are coming from.", support: "Ich komme aus ..." },
  ],
  exercises: [
    {
      id: "u09-dat-01",
      type: "multiple-choice",
      prompt: "Choose the correct article: Ich fahre mit ___ Bus.",
      options: ["den", "dem", "der"],
      answer: "dem",
      explanation: "mit requires dative, and Bus is masculine singular: mit dem Bus.",
    },
  ],
  references: [
    { label: "Repository engineering plan", note: "Unit 9 follows the planned dative and fixed dative-preposition progression." },
    { label: "Duden — grammar knowledge for learners", url: "https://www.duden.de/sprachwissen/fuer-lernende", note: "Grammar cross-check; wording and examples are original." },
  ],
} satisfies GrammarLesson;
