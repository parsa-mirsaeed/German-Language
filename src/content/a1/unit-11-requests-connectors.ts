import type { GrammarLesson } from "@/content/schema/content-types";

export const requestsConnectorsLesson = {
  id: "a1-u11-requests-connectors",
  level: "A1.2",
  unit: 11,
  slug: "commands-requests-connectors",
  title: { de: "Bitten, Aufforderungen und Konnektoren", en: "Commands, requests, and connectors" },
  purpose:
    "Make simple useful requests and commands, then connect A1 ideas with und, aber, and denn without losing clear sentence structure.",
  requires: ["a1-u10-place-direction"],
  introduces: ["imperative-basics", "polite-requests", "und-aber-denn"],
  formula: [
    {
      label: "Familiar singular command",
      pattern: "Verbstamm (+ e) + ...!",
      note: "Common A1 commands often begin directly with the verb: Komm bitte! Mach die Tür zu!",
    },
    {
      label: "Polite request",
      pattern: "Können Sie bitte + ... + Infinitiv?",
      note: "This reuses the modal sentence bracket for polite service and help situations.",
    },
    {
      label: "Simple connectors",
      pattern: "Satz + und/aber/denn + Satz",
      note: "With these basic coordinating connectors, each clause keeps normal main-clause word order.",
    },
  ],
  meaning: [
    "Imperatives tell or invite someone to do something; bitte can soften them.",
    "A modal question with können is a reliable polite A1 request pattern.",
    "und adds information, aber contrasts it, and denn gives a simple reason while preserving main-clause order.",
  ],
  usage: [
    { title: "Everyday instructions", body: "Komm bitte rein. Warte einen Moment. Short verb-first commands are common in practical situations." },
    { title: "Polite help requests", body: "Können Sie mir bitte helfen? combines polite Sie, können, bitte, and a final infinitive." },
    { title: "Connect two complete ideas", body: "Ich lerne Deutsch, aber ich spreche noch langsam. Both sides keep the finite verb in their normal main-clause position." },
  ],
  recognitionCues: [
    { label: "verb first + !", note: "A short verb-first clause often signals an imperative." },
    { label: "Können Sie bitte ...?", note: "A strong reusable pattern for polite requests." },
    { label: "und · aber · denn", note: "These connectors join equal main clauses and do not push the finite verb to the end." },
  ],
  paradigms: [
    {
      title: "Useful request patterns",
      columns: ["Situation", "Pattern", "Example"],
      rows: [
        ["du command", "Verb first", "Komm bitte rein!"],
        ["ihr command", "ihr-form without ihr", "Kommt bitte rein!"],
        ["Sie command", "Verb + Sie", "Kommen Sie bitte rein!"],
        ["polite question", "Können Sie ...?", "Können Sie mir helfen?"],
      ],
    },
  ],
  examples: [
    { de: "Komm bitte rein!", en: "Please come in!", focusTokens: ["Komm", "bitte"], kind: "affirmative" },
    { de: "Warten Sie bitte hier!", en: "Please wait here!", focusTokens: ["Warten Sie", "bitte"], kind: "context" },
    { de: "Können Sie mir bitte helfen?", en: "Could you please help me?", focusTokens: ["Können Sie", "helfen"], kind: "question" },
    { de: "Ich trinke Tee und Lea trinkt Kaffee.", en: "I drink tea and Lea drinks coffee.", focusTokens: ["und"], kind: "affirmative" },
    { de: "Ich bin müde, aber ich arbeite noch.", en: "I am tired, but I am still working.", focusTokens: ["aber"], kind: "context" },
    { de: "Ich bleibe zu Hause, denn ich bin krank.", en: "I stay at home because I am ill.", focusTokens: ["denn"], kind: "context" },
  ],
  contrasts: [
    {
      left: "Komm bitte rein!",
      right: "Können Sie bitte reinkommen?",
      explanation: "The first is a familiar direct command; the second is a polite request to Sie and uses the modal bracket.",
    },
    {
      left: "Ich lerne Deutsch und ich übe jeden Tag.",
      right: "Ich lerne Deutsch, aber ich spreche noch langsam.",
      explanation: "und adds a parallel fact; aber marks a contrast. Both connectors preserve main-clause word order.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — separate politeness from grammar load",
      body: "Give learners one reliable polite pattern—Können Sie bitte ...?—before expanding request styles. It recycles modal syntax instead of creating a new system.",
      fa: "برای درخواست مؤدبانه یک الگوی مطمئن داشته باش: «Können Sie bitte ...?»؛ این الگو همان ساختار فعل مُدال را دوباره استفاده می‌کند.",
    },
  ],
  commonMistakes: [
    { wrong: "Du komm bitte rein!", correct: "Komm bitte rein!", explanation: "In the basic familiar singular imperative, the subject pronoun du is normally omitted." },
    { wrong: "Ich bin müde, aber spreche ich Deutsch.", correct: "Ich bin müde, aber ich spreche Deutsch.", explanation: "aber coordinates two main clauses; the second clause keeps normal subject + finite verb order here." },
  ],
  speakingPrompts: [
    { prompt: "Ask someone politely to help you.", support: "Können Sie mir bitte helfen?" },
    { prompt: "Give one friendly instruction with bitte.", support: "... bitte!" },
    { prompt: "Connect two facts with aber.", support: "Ich ..., aber ich ..." },
  ],
  exercises: [
    {
      id: "u11-request-01",
      type: "multiple-choice",
      prompt: "Choose the polite request.",
      options: ["Sie helfen mir!", "Können Sie mir bitte helfen?", "Hilfst Sie bitte mir?"],
      answer: "Können Sie mir bitte helfen?",
      explanation: "Können Sie bitte ... + infinitive is a reliable polite A1 request pattern.",
    },
  ],
  references: [
    { label: "Repository engineering plan", note: "Unit 11 follows the planned commands, requests, and connector progression." },
    { label: "Duden — grammar knowledge for learners", url: "https://www.duden.de/sprachwissen/fuer-lernende", note: "Grammar cross-check; wording and examples are original." },
  ],
} satisfies GrammarLesson;
