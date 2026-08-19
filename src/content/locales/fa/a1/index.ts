import type { LessonLocalization } from "@/i18n/content-localization";
import { unit01Persian } from "./unit-01-fa";
import { unit02Persian } from "./unit-02-fa";
import { unit03Persian } from "./unit-03-fa";
import { unit04Persian } from "./unit-04-fa";

export const persianA1Localizations: Readonly<Record<string, LessonLocalization>> = {
  [unit01Persian.lessonId]: unit01Persian,
  [unit02Persian.lessonId]: unit02Persian,
  [unit03Persian.lessonId]: unit03Persian,
  [unit04Persian.lessonId]: unit04Persian,
};
