import { describe, expect, it } from "vitest";
import { accusativeCanonicalLesson } from "@/content/a1/unit-05-accusative-canonical";
import {
  buildEnglishLessonLocalization,
  lessonLocalizationKeys,
  resolveLessonLocalization,
  validateLessonLocalization,
} from "@/i18n/content-localization";
import { applyLessonLocalization } from "@/i18n/localized-lesson-view";
import { resolveReleasedLessonLocalization } from "@/i18n/released-localization";

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
    expect(keys.exercises).toEqual(accusativeCanonicalLesson.exercises.map((exercise) => exercise.id));
  });

  it("rejects incomplete overlays marked complete", () => {
    const copy = buildEnglishLessonLocalization(accusativeCanonicalLesson);
    const incomplete = { ...copy, locale: "fa" as const, meaning: copy.meaning.slice(0, 1) };
    expect(validateLessonLocalization(accusativeCanonicalLesson, incomplete)).toContain(
      "meaning: missing ids: meaning-2, meaning-3",
    );
  });

  it("keeps explicit authoring fallback available before release", () => {
    const resolved = resolveLessonLocalization(accusativeCanonicalLesson, "fa");
    expect(resolved.requestedLocale).toBe("fa");
    expect(resolved.contentLocale).toBe("en");
    expect(resolved.isFallback).toBe(true);
  });

  it("requires complete Persian copy on released Persian routes", () => {
    const resolved = resolveReleasedLessonLocalization(accusativeCanonicalLesson, "fa");
    expect(resolved.contentLocale).toBe("fa");
    expect(resolved.isFallback).toBe(false);

    const missingLesson = {
      ...accusativeCanonicalLesson,
      id: "a1-missing-release-localization",
    };
    expect(() => resolveReleasedLessonLocalization(missingLesson, "fa")).toThrow(
      "Missing complete Persian localization for a1-missing-release-localization",
    );
  });

  it("applies localized blocks by stable ID even if localization arrays are reordered", () => {
    const copy = buildEnglishLessonLocalization(accusativeCanonicalLesson);
    const reordered = {
      ...copy,
      locale: "fa" as const,
      examples: [...copy.examples].reverse().map((example) => ({
        ...example,
        translation: `FA:${example.id}`,
      })),
    };
    const view = applyLessonLocalization(accusativeCanonicalLesson, reordered);
    expect(view.examples[0].en).toBe("FA:example-1");
    expect(view.examples.at(-1)?.en).toBe(`FA:example-${copy.examples.length}`);
  });

  it("preserves canonical blocks that are missing from a draft overlay", () => {
    const copy = buildEnglishLessonLocalization(accusativeCanonicalLesson);
    const draft = {
      ...copy,
      locale: "fa" as const,
      status: "draft" as const,
      meaning: [{ id: "meaning-2", text: "ترجمهٔ آزمایشی" }],
      usage: [],
    };
    const view = applyLessonLocalization(accusativeCanonicalLesson, draft);
    expect(view.meaning).toEqual([
      accusativeCanonicalLesson.meaning[0],
      "ترجمهٔ آزمایشی",
      accusativeCanonicalLesson.meaning[2],
    ]);
    expect(view.usage).toEqual(accusativeCanonicalLesson.usage);
  });
});
