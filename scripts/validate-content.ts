import { a1Lessons } from "../src/content/a1";
import { a1UnitMap } from "../src/content/a1/unit-map";
import { lessonSchema } from "../src/content/schema/lesson-schema";
import { a1SearchIndex } from "../src/lib/search";

const errors: string[] = [];
const ids = new Set<string>();
const slugs = new Set<string>();
const exerciseIds = new Set<string>();
const introduced = new Set<string>();
const completedLessonIds = new Set<string>();

if (a1Lessons.length !== 12) {
  errors.push(`Expected exactly 12 A1 lessons; found ${a1Lessons.length}`);
}

if (a1UnitMap.length !== 12) {
  errors.push(`Expected exactly 12 unit-map entries; found ${a1UnitMap.length}`);
}

for (let unit = 1; unit <= 12; unit += 1) {
  const lessonsForUnit = a1Lessons.filter((lesson) => lesson.unit === unit);
  if (lessonsForUnit.length !== 1) {
    errors.push(
      `Unit ${unit}: expected exactly one lesson, found ${lessonsForUnit.length}`,
    );
  }

  if (!a1UnitMap.some((entry) => entry.unit === unit)) {
    errors.push(`Unit ${unit}: missing from unit map`);
  }
}

if (a1Lessons.find((lesson) => lesson.unit === 12)?.level !== "A1-bridge") {
  errors.push("Unit 12: Perfekt integration must stay explicitly labeled A1-bridge");
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

  for (const exercise of lesson.exercises) {
    if (exerciseIds.has(exercise.id)) {
      errors.push(`${exercise.id}: duplicate exercise id across lessons`);
    }
    exerciseIds.add(exercise.id);
  }

  if (lesson.examples.length < 5) {
    errors.push(`${lesson.id}: complete A1 lessons need at least 5 examples`);
  }
  if (lesson.commonMistakes.length < 2) {
    errors.push(`${lesson.id}: complete A1 lessons need at least 2 common mistakes`);
  }
  if (lesson.speakingPrompts.length < 2) {
    errors.push(`${lesson.id}: complete A1 lessons need at least 2 speaking prompts`);
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

const lessonRoutes = a1Lessons
  .map((lesson) => `/a1/${lesson.slug}`)
  .sort();
const searchRoutes = a1SearchIndex.map((document) => document.href).sort();

if (JSON.stringify(searchRoutes) !== JSON.stringify(lessonRoutes)) {
  errors.push("Search-index routes do not exactly match the validated lesson routes");
}

if (errors.length > 0) {
  console.error("Content validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed for ${a1Lessons.length} lessons, ${exerciseIds.size} exercises, and a matching ${a1SearchIndex.length}-document search index.`,
);
