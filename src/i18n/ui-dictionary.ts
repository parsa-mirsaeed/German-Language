import type { Locale } from "@/i18n/config";

export type UiDictionary = {
  locale: Locale;
  brand: string;
  language: string;
  home: {
    eyebrow: string;
    title: string;
    body: string;
    openBook: string;
  };
  map: {
    eyebrow: string;
    title: string;
    body: string;
    routeStamp: string;
    openLesson: string;
    planned: string;
  };
  navigation: {
    contents: string;
    bookContents: string;
    backToMap: string;
    onThisPage: string;
    search: string;
  };
  lesson: {
    unit: string;
    grammarSnapshot: string;
    subject: string;
    directObject: string;
    sections: {
      formula: string;
      meaning: string;
      usage: string;
      recognition: string;
      table: string;
      examples: string;
      contrast: string;
      interaction: string;
      mistakes: string;
      speaking: string;
      practice: string;
    };
    interactionLead: string;
    speakingLead: string;
    sourceNotes: string;
  };
  practice: {
    label: string;
    checkAnswer: string;
    correct: string;
    tryAgain: string;
    yourAnswer: string;
    correctSentence: string;
    clear: string;
    progress: string;
  };
  speaking: {
    mode: string;
    noMicrophone: string;
    showSupport: string;
    hideSupport: string;
    markPracticed: string;
    practiced: string;
  };
  search: {
    dialogTitle: string;
    inputLabel: string;
    placeholder: string;
    close: string;
    filterLabel: string;
    allLevels: string;
    noResultsTitle: string;
    noResultsBody: string;
  };
};

export const englishUiDictionary: UiDictionary = {
  locale: "en",
  brand: "German A1 Grammar",
  language: "Language",
  home: {
    eyebrow: "German, one system at a time",
    title: "See the grammar. Build the sentence.",
    body: "A structured German A1 book designed around formula, meaning, usage, recognition, examples, mistakes, speaking, and practice — without scattering one topic across ten screens.",
    openBook: "Open the A1 book",
  },
  map: {
    eyebrow: "12-unit grammar atlas",
    title: "German A1",
    body: "One visible route from first sentence structure to completed-past storytelling. Open lessons stay complete on one coherent surface.",
    routeStamp: "12 units · one system",
    openLesson: "Open lesson",
    planned: "Planned",
  },
  navigation: {
    contents: "Contents",
    bookContents: "A1 book contents",
    backToMap: "Back to the A1 map",
    onThisPage: "On this page",
    search: "Search",
  },
  lesson: {
    unit: "Unit",
    grammarSnapshot: "Grammar snapshot",
    subject: "subject",
    directObject: "direct object",
    sections: {
      formula: "Formula / structure",
      meaning: "Meaning",
      usage: "Usage",
      recognition: "Recognition cues",
      table: "Case / conjugation board",
      examples: "Examples",
      contrast: "Contrast",
      interaction: "Interactive grammar lab",
      mistakes: "Common mistakes",
      speaking: "Speaking transfer",
      practice: "Micro practice",
    },
    interactionLead: "Manipulate the structure, then say the resulting German sentence aloud. Every interaction has a keyboard-first alternative and remains usable with reduced motion.",
    speakingLead: "Say these aloud. Speaking mode is self-rehearsal: support is optional and no microphone or transcription score is used.",
    sourceNotes: "A1 alignment / source notes",
  },
  practice: {
    label: "Practice",
    checkAnswer: "Check answer",
    correct: "Correct",
    tryAgain: "Try again",
    yourAnswer: "Your answer",
    correctSentence: "Correct sentence",
    clear: "Clear",
    progress: "Progress",
  },
  speaking: {
    mode: "Speaking mode",
    noMicrophone: "No microphone scoring",
    showSupport: "Show support",
    hideSupport: "Hide support",
    markPracticed: "Mark practiced",
    practiced: "Practiced",
  },
  search: {
    dialogTitle: "Search the grammar book",
    inputLabel: "Search German A1",
    placeholder: "Search a topic, form, or example…",
    close: "Close",
    filterLabel: "Filter search by level",
    allLevels: "All levels",
    noResultsTitle: "No matching lesson yet",
    noResultsBody: "Try a German grammar term, an English concept, or a phrase from an example.",
  },
};
