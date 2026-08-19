import { describe, expect, it } from "vitest";
import { accusativeCanonicalLesson } from "@/content/a1/unit-05-accusative-canonical";
import {
  buildEnglishLessonLocalization,
  lessonLocalizationKeys,
  resolveLessonLocalization,
  validateLessonLocalization,
} from "@/i18n/content-localization";

describe("lesson localization contract", () => {
  it("derives a complete English localization from canonical content", () => {
    const copy = buildEnglishLessonLocalization(accusativeCanonicalLesson);
    expect(copy.status).toBe("complete");
    expect(copy.locale).toBe("en");
    expect(validateLessonLocalization(accusativeCanonicalLesson, copy)).toEqual([]);
    expect(copy.examples[0]).toMatchObject({ id: "example-1" });
    expect(copy.exercises[0].id).toBe(accusativeCanonicalLesson.exercises[0].id);
  });

  it("uses deterministic structural localization ids", () => {
    const keys = lessonLocalizationKeys(accusativeCanonicalLesson);
    expect(keys.formula).toEqual(["formula-1", "formula-2"]);
    expect(keys.meaning).toEqual(["meaning-1", "meaning-2", "meaning-3"]);
    expect(keys.exercises).toEqual(
      accusativeCanonicalLesson.exercises.map((exercise) => exercise.id),
    );
  });

  it("rejects incomplete overlays marked complete", () => {
    const copy = buildEnglishLessonLocalization(accusativeCanonicalLesson);
    const incomplete = {
      ...copy,
      locale: "fa" as const,
      meaning: copy.meaning.slice(0, 1),
    };
    expect(validateLessonLocalization(accusativeCanonicalLesson, incomplete)).toContain(
      "meaning: missing ids: meaning-2, meaning-3",
    );
  });

  it("falls back explicitly when Persian copy is not authored", () => {
    const resolved = resolveLessonLocalization(accusativeCanonicalLesson, "fa");
    expect(resolved.requestedLocale).toBe("fa");
    expect(resolved.contentLocale).toBe("en");
    expect(resolved.isFallback).toBe(true);
  });
});
