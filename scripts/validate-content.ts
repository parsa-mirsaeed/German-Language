import { a1Lessons } from "../src/content/a1";
import { lessonSchema } from "../src/content/schema/lesson-schema";

const errors: string[] = [];
const ids = new Set<string>();
const slugs = new Set<string>();
const introduced = new Set<string>();
const completedLessonIds = new Set<string>();

for (const unit of [1, 2, 3, 4, 5, 6]) {
  if (!a1Lessons.some((lesson) => lesson.unit === unit)) {
    errors.push(`Unit ${unit}: missing required PR04 lesson coverage`);
  }
}

for (const lesson of [...a1Lessons].sort((a, b) => a.unit - b.unit)) {
  const parsed = lessonSchema.safeParse(lesson);

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      errors.push(
        `${lesson.id}: ${issue.path.join(".") || "lesson"} — ${issue.message}`,
      );
    }
  }

  if (ids.has(lesson.id)) {
    errors.push(`${lesson.id}: duplicate lesson id`);
  }
  ids.add(lesson.id);

  if (slugs.has(lesson.slug)) {
    errors.push(`${lesson.slug}: duplicate lesson slug`);
  }
  slugs.add(lesson.slug);

  const exampleSet = new Set<string>();
  for (const example of lesson.examples) {
    const normalized = example.de.trim().toLocaleLowerCase("de");
    if (exampleSet.has(normalized)) {
      errors.push(`${lesson.id}: duplicate German example “${example.de}”`);
    }
    exampleSet.add(normalized);
  }

  if (lesson.unit <= 6) {
    if (lesson.examples.length < 5) {
      errors.push(`${lesson.id}: Unit 1–6 lessons need at least 5 examples`);
    }
    if (lesson.commonMistakes.length < 2) {
      errors.push(`${lesson.id}: Unit 1–6 lessons need at least 2 common mistakes`);
    }
    if (lesson.speakingPrompts.length < 2) {
      errors.push(`${lesson.id}: Unit 1–6 lessons need at least 2 speaking prompts`);
    }
  }

  for (const requirement of lesson.requires) {
    if (!completedLessonIds.has(requirement) && !introduced.has(requirement)) {
      errors.push(
        `${lesson.id}: prerequisite “${requirement}” is unresolved or introduced too late`,
      );
    }
  }

  completedLessonIds.add(lesson.id);
  for (const concept of lesson.introduces) {
    introduced.add(concept);
  }
}

if (errors.length > 0) {
  console.error("Content validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed for ${a1Lessons.length} lessons with prerequisite and coverage checks.`,
);
