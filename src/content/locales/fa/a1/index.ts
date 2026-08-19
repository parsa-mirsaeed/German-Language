import type { LessonLocalization } from "@/i18n/content-localization";
import { unit01Persian } from "./unit-01-fa";
import { unit02Persian } from "./unit-02-fa";
import { unit03Persian } from "./unit-03-fa";
import { unit04Persian } from "./unit-04-fa";
import { unit05Persian } from "./unit-05-fa";
import { unit06Persian } from "./unit-06-fa";
import { unit07Persian } from "./unit-07-fa";
import { unit08Persian } from "./unit-08-fa";

export const persianA1Localizations: Readonly<Record<string, LessonLocalization>> = {
  [unit01Persian.lessonId]: unit01Persian,
  [unit02Persian.lessonId]: unit02Persian,
  [unit03Persian.lessonId]: unit03Persian,
  [unit04Persian.lessonId]: unit04Persian,
  [unit05Persian.lessonId]: unit05Persian,
  [unit06Persian.lessonId]: unit06Persian,
  [unit07Persian.lessonId]: unit07Persian,
  [unit08Persian.lessonId]: unit08Persian,
};
