import { describe, expect, it } from "vitest";
import {
  completedExerciseCount,
  emptyProgress,
  parseProgress,
  recordExerciseResult,
  recordSpeakingPractice,
} from "@/lib/progress";

describe("progress model", () => {
  it("falls back safely for invalid or unknown persisted data", () => {
    expect(parseProgress("not json")).toEqual(emptyProgress());
    expect(parseProgress(JSON.stringify({ version: 2, lessons: {} }))).toEqual(
      emptyProgress(),
    );
  });

  it("records attempts while preserving a previously correct result", () => {
    let state = emptyProgress();
    state = recordExerciseResult(state, "lesson", "exercise", true);
    state = recordExerciseResult(state, "lesson", "exercise", false);

    expect(state.lessons.lesson.exercises.exercise).toEqual({
      attempts: 2,
      correct: true,
    });
    expect(completedExerciseCount(state, "lesson")).toBe(1);
  });

  it("records speaking rehearsal separately from exercise correctness", () => {
    const state = recordSpeakingPractice(emptyProgress(), "lesson", 1);
    expect(state.lessons.lesson.speaking["1"]).toBe(true);
    expect(completedExerciseCount(state, "lesson")).toBe(0);
  });
});
