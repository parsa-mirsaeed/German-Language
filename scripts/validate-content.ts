import { a1Lessons } from "../src/content/a1";
import { lessonSchema } from "../src/content/schema/lesson-schema";

const errors: string[] = [];
const ids = new Set<string>();
const slugs = new Set<string>();

for (const lesson of a1Lessons) {
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
}

if (errors.length > 0) {
  console.error("Content validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Content validation passed for ${a1Lessons.length} lesson fixture(s).`);
