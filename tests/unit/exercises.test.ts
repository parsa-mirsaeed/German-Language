import { describe, expect, it } from "vitest";
import type { Exercise } from "@/content/schema/content-types";
import { gradeExercise, normalizeAnswer } from "@/lib/exercises";

const exercises: Exercise[] = [
  {
    id: "mc",
    type: "multiple-choice",
    prompt: "Choose",
    options: ["der", "den"],
    answer: "den",
    explanation: "x",
  },
  {
    id: "blank",
    type: "fill-blank",
    prompt: "Fill",
    answers: ["einen", "EINEN"],
    explanation: "x",
  },
  {
    id: "builder",
    type: "sentence-builder",
    prompt: "Build",
    tokens: ["Heute", "lerne", "ich"],
    answer: ["Heute", "lerne", "ich"],
    explanation: "x",
  },
  {
    id: "correction",
    type: "error-correction",
    prompt: "Correct",
    incorrect: "Ich sehe der Mann.",
    answer: "Ich sehe den Mann.",
    explanation: "x",
  },
];

describe("exercise grading", () => {
  it("normalizes harmless spacing, case, and terminal punctuation", () => {
    expect(normalizeAnswer("  ICH   sehe DEN Mann! ")).toBe("ich sehe den mann");
  });

  it("grades multiple choice deterministically", () => {
    expect(gradeExercise(exercises[0], "den").correct).toBe(true);
    expect(gradeExercise(exercises[0], "der").correct).toBe(false);
  });

  it("accepts configured fill-blank alternatives", () => {
    expect(gradeExercise(exercises[1], "Einen").correct).toBe(true);
  });

  it("requires exact sentence-builder token order", () => {
    expect(gradeExercise(exercises[2], ["Heute", "lerne", "ich"]).correct).toBe(true);
    expect(gradeExercise(exercises[2], ["Heute", "ich", "lerne"]).correct).toBe(false);
  });

  it("grades error correction by normalized sentence text", () => {
    expect(gradeExercise(exercises[3], "ich sehe den mann").correct).toBe(true);
  });
});
