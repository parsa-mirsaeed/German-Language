import type { GrammarLesson } from "@/content/schema/content-types";
import { accusativeCanonicalLesson } from "./unit-05-accusative-canonical";

export const accusativeExerciseLesson = {
  ...accusativeCanonicalLesson,
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
    {
      id: "u05-akk-02",
      type: "fill-blank",
      prompt: "Complete the sentence: Ich habe ___ Bruder.",
      answers: ["einen"],
      placeholder: "missing article",
      explanation:
        "Bruder is masculine and functions as the direct object of haben, so ein becomes einen.",
    },
    {
      id: "u05-akk-03",
      type: "sentence-builder",
      prompt: "Build a sentence meaning: Today I need the ticket.",
      tokens: ["Heute", "brauche", "ich", "das", "Ticket."],
      answer: ["Heute", "brauche", "ich", "das", "Ticket."],
      explanation:
        "Heute fills position 1, brauche remains the finite verb in position 2, and das Ticket is the neuter accusative direct object.",
    },
    {
      id: "u05-akk-04",
      type: "error-correction",
      prompt: "Correct the accusative error.",
      incorrect: "Ich sehe der Mann.",
      answer: "Ich sehe den Mann.",
      explanation:
        "Mann is masculine and the direct object of sehen, so der changes to den.",
    },
  ],
} satisfies GrammarLesson;
