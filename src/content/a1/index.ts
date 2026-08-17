import { unit01SampleLesson } from "./unit-01-sample";
import { presentTenseLesson } from "./unit-02-present-tense";
import { nounsArticlesLesson } from "./unit-03-nouns-articles";
import { negationLesson } from "./unit-04-negation";
import { accusativeCanonicalLesson } from "./unit-05-accusative-canonical";
import { possessionPronounsLesson } from "./unit-06-possession-pronouns";

export const a1Lessons = [
  unit01SampleLesson,
  presentTenseLesson,
  nounsArticlesLesson,
  negationLesson,
  accusativeCanonicalLesson,
  possessionPronounsLesson,
] as const;
