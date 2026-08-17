import { unit01SampleLesson } from "./unit-01-sample";
import { presentTenseLesson } from "./unit-02-present-tense";
import { nounsArticlesLesson } from "./unit-03-nouns-articles";
import { negationLesson } from "./unit-04-negation";
import { accusativeCanonicalLesson } from "./unit-05-accusative-canonical";
import { possessionPronounsLesson } from "./unit-06-possession-pronouns";
import { modalVerbsLesson } from "./unit-07-modal-verbs";
import { separableVerbsLesson } from "./unit-08-separable-verbs";
import { dativeLesson } from "./unit-09-dative";
import { placeDirectionLesson } from "./unit-10-place-direction";
import { requestsConnectorsLesson } from "./unit-11-requests-connectors";
import { perfectIntegrationLesson } from "./unit-12-perfect-integration";

export const a1Lessons = [
  unit01SampleLesson,
  presentTenseLesson,
  nounsArticlesLesson,
  negationLesson,
  accusativeCanonicalLesson,
  possessionPronounsLesson,
  modalVerbsLesson,
  separableVerbsLesson,
  dativeLesson,
  placeDirectionLesson,
  requestsConnectorsLesson,
  perfectIntegrationLesson,
] as const;
