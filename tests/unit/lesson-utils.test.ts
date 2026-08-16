import { describe, expect, it } from "vitest";
import { unit01SampleLesson } from "@/content/a1/unit-01-sample";
import {
  getLessonBySlug,
  getUnitLessons,
  lessonProgressLabel,
} from "@/lib/content/lesson-utils";

describe("lesson content helpers", () => {
  const lessons = [unit01SampleLesson];

  it("finds a lesson by slug", () => {
    expect(getLessonBySlug(lessons, "verb-second-basics")?.id).toBe(
      "a1-u01-verb-second",
    );
  });

  it("filters lessons by unit", () => {
    expect(getUnitLessons(lessons, 1)).toHaveLength(1);
    expect(getUnitLessons(lessons, 2)).toHaveLength(0);
  });

  it("bounds progress labels safely", () => {
    expect(lessonProgressLabel(4, 3)).toBe("3 of 3");
    expect(lessonProgressLabel(-1, 3)).toBe("0 of 3");
    expect(lessonProgressLabel(2, 0)).toBe("0 of 0");
  });
});
