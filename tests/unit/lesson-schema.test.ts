import { describe, expect, it } from "vitest";
import { lessonSchema } from "@/content/schema/lesson-schema";

const baseLesson = {
  id: "schema-test",
  level: "A1.1" as const,
  unit: 1,
  slug: "schema-test",
  title: { de: "Test", en: "Test" },
  purpose: "Test lesson schema behavior.",
  requires: [],
  introduces: ["test"],
  formula: [{ pattern: "test" }],
  meaning: ["test"],
  usage: [{ title: "test", body: "test" }],
  examples: [
    {
      de: "Ich lerne.",
      en: "I learn.",
      focusTokens: ["lerne"],
      kind: "affirmative" as const,
    },
  ],
  commonMistakes: [
    { wrong: "x", correct: "y", explanation: "test" },
  ],
  speakingPrompts: [{ prompt: "test" }],
  references: [{ label: "test" }],
};

describe("lesson exercise schema", () => {
  it("rejects sentence-builder answers that overuse a token bank entry", () => {
    const parsed = lessonSchema.safeParse({
      ...baseLesson,
      exercises: [
        {
          id: "builder",
          type: "sentence-builder",
          prompt: "Build it",
          tokens: ["ich", "lerne"],
          answer: ["ich", "ich"],
          explanation: "test",
        },
      ],
    });

    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      expect(parsed.error.issues.some((issue) => issue.message.includes("token bank"))).toBe(
        true,
      );
    }
  });
});
