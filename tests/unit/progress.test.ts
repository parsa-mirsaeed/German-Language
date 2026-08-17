/** @vitest-environment jsdom */

import { beforeEach, describe, expect, it } from "vitest";
import {
  completedExerciseCount,
  emptyProgress,
  getProgressSnapshot,
  parseProgress,
  recordExerciseResult,
  recordSpeakingPractice,
  updateProgress,
  writeProgress,
} from "@/lib/progress";

describe("progress model", () => {
  beforeEach(() => {
    window.localStorage.clear();
    getProgressSnapshot();
  });

  it("falls back safely for invalid or unknown persisted data", () => {
    expect(parseProgress("not json")).toEqual(emptyProgress());
    expect(parseProgress(JSON.stringify({ version: 2, lessons: {} }))).toEqual(
      emptyProgress(),
    );
  });

  it("normalizes partial or corrupted nested progress records", () => {
    const parsed = parseProgress(
      JSON.stringify({
        version: 1,
        lessons: {
          u05: {
            exercises: {
              good: { attempts: 2, correct: true },
              broken: { attempts: "many", correct: "yes" },
            },
          },
          badLesson: "not an object",
        },
      }),
    );

    expect(parsed.lessons.u05).toEqual({
      exercises: { good: { attempts: 2, correct: true } },
      speaking: {},
    });
    expect(parsed.lessons.badLesson).toBeUndefined();
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

  it("merges sequential component-style mutations with the latest persisted state", () => {
    writeProgress(
      recordExerciseResult(emptyProgress(), "lesson", "exercise", true),
    );

    updateProgress((current) => recordSpeakingPractice(current, "lesson", 0));

    const persisted = getProgressSnapshot();
    expect(persisted.lessons.lesson.exercises.exercise.correct).toBe(true);
    expect(persisted.lessons.lesson.speaking["0"]).toBe(true);
  });
});
