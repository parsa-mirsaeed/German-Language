import type { GrammarLesson } from "@/content/schema/content-types";
import { persianA1Localizations } from "@/content/locales/fa/a1";
import { resolveLessonLocalization } from "@/i18n/content-localization";
import type { Locale } from "@/i18n/config";

export function resolveReleasedLessonLocalization(
  lesson: GrammarLesson,
  locale: Locale,
) {
  const persian = persianA1Localizations[lesson.id];

  if (locale === "fa" && (!persian || persian.status !== "complete")) {
    throw new Error(`Missing complete Persian localization for ${lesson.id}`);
  }

  return resolveLessonLocalization(lesson, locale, persian);
}
