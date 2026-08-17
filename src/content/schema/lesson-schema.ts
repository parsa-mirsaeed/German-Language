import { z } from "zod";

const nonEmptyString = z.string().trim().min(1);

const formulaBlockSchema = z.object({
  label: nonEmptyString.optional(),
  pattern: nonEmptyString,
  note: nonEmptyString.optional(),
});

const usageBlockSchema = z.object({
  title: nonEmptyString,
  body: nonEmptyString,
});

const cueBlockSchema = z.object({
  label: nonEmptyString,
  note: nonEmptyString.optional(),
});

const grammarTableSchema = z.object({
  title: nonEmptyString,
  columns: z.array(nonEmptyString).min(1),
  rows: z.array(z.array(nonEmptyString).min(1)).min(1),
});

const exampleSchema = z.object({
  de: nonEmptyString,
  en: nonEmptyString,
  focusTokens: z.array(nonEmptyString),
  faNote: nonEmptyString.optional(),
  note: nonEmptyString.optional(),
  kind: z.enum([
    "affirmative",
    "negative",
    "question",
    "context",
    "correction",
  ]),
});

const contrastBlockSchema = z.object({
  left: nonEmptyString,
  right: nonEmptyString,
  explanation: nonEmptyString,
});

const teacherNoteSchema = z.object({
  title: nonEmptyString,
  body: nonEmptyString,
  fa: nonEmptyString.optional(),
});

const mistakeSchema = z.object({
  wrong: nonEmptyString,
  correct: nonEmptyString,
  explanation: nonEmptyString,
});

const speakingPromptSchema = z.object({
  prompt: nonEmptyString,
  support: nonEmptyString.optional(),
});

const exerciseBase = {
  id: nonEmptyString,
  prompt: nonEmptyString,
  explanation: nonEmptyString,
};

const multipleChoiceExerciseSchema = z.object({
  ...exerciseBase,
  type: z.literal("multiple-choice"),
  options: z.array(nonEmptyString).min(2),
  answer: nonEmptyString,
});

const fillBlankExerciseSchema = z.object({
  ...exerciseBase,
  type: z.literal("fill-blank"),
  answers: z.array(nonEmptyString).min(1),
  placeholder: nonEmptyString.optional(),
});

const sentenceBuilderExerciseSchema = z.object({
  ...exerciseBase,
  type: z.literal("sentence-builder"),
  tokens: z.array(nonEmptyString).min(2),
  answer: z.array(nonEmptyString).min(2),
});

const errorCorrectionExerciseSchema = z.object({
  ...exerciseBase,
  type: z.literal("error-correction"),
  incorrect: nonEmptyString,
  answer: nonEmptyString,
});

const exerciseSchema = z.discriminatedUnion("type", [
  multipleChoiceExerciseSchema,
  fillBlankExerciseSchema,
  sentenceBuilderExerciseSchema,
  errorCorrectionExerciseSchema,
]);

const contentReferenceSchema = z.object({
  label: nonEmptyString,
  url: z.url().optional(),
  note: nonEmptyString.optional(),
});

export const lessonSchema = z
  .object({
    id: nonEmptyString,
    level: z.enum(["A1.1", "A1.2", "A1-bridge"]),
    unit: z.number().int().min(1).max(12),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.object({
      de: nonEmptyString,
      en: nonEmptyString,
    }),
    purpose: nonEmptyString,
    requires: z.array(nonEmptyString),
    introduces: z.array(nonEmptyString).min(1),
    formula: z.array(formulaBlockSchema).min(1).optional(),
    meaning: z.array(nonEmptyString).min(1),
    usage: z.array(usageBlockSchema).min(1),
    recognitionCues: z.array(cueBlockSchema).min(1).optional(),
    paradigms: z.array(grammarTableSchema).min(1).optional(),
    examples: z.array(exampleSchema).min(1),
    contrasts: z.array(contrastBlockSchema).min(1).optional(),
    teacherNotes: z.array(teacherNoteSchema).min(1).optional(),
    commonMistakes: z.array(mistakeSchema).min(1),
    speakingPrompts: z.array(speakingPromptSchema).min(1),
    exercises: z.array(exerciseSchema).min(1),
    references: z.array(contentReferenceSchema).min(1),
  })
  .superRefine((lesson, ctx) => {
    for (const exercise of lesson.exercises) {
      if (
        exercise.type === "multiple-choice" &&
        !exercise.options.includes(exercise.answer)
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["exercises", exercise.id, "answer"],
          message: "Multiple-choice answer must appear in options.",
        });
      }

      if (
        exercise.type === "sentence-builder" &&
        exercise.answer.some((token) => !exercise.tokens.includes(token))
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["exercises", exercise.id, "answer"],
          message: "Sentence-builder answer tokens must come from the token bank.",
        });
      }
    }

    if (lesson.requires.includes(lesson.id)) {
      ctx.addIssue({
        code: "custom",
        path: ["requires"],
        message: "A lesson cannot require itself.",
      });
    }
  });
