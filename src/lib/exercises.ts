import type { Exercise } from "@/content/schema/content-types";

export type ExerciseResponse = string | string[];

export type GradeResult = {
  correct: boolean;
  expected: string;
};

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("de")
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "");
}

export function expectedExerciseAnswer(exercise: Exercise): string {
  switch (exercise.type) {
    case "multiple-choice":
    case "error-correction":
      return exercise.answer;
    case "fill-blank":
      return exercise.answers[0];
    case "sentence-builder":
      return exercise.answer.join(" ");
  }
}

export function gradeExercise(
  exercise: Exercise,
  response: ExerciseResponse,
): GradeResult {
  if (exercise.type === "sentence-builder") {
    const submitted = Array.isArray(response) ? response : response.split(/\s+/);
    return {
      correct:
        submitted.length === exercise.answer.length &&
        submitted.every((token, index) => token === exercise.answer[index]),
      expected: exercise.answer.join(" "),
    };
  }

  const submitted = normalizeAnswer(Array.isArray(response) ? response.join(" ") : response);

  if (exercise.type === "fill-blank") {
    return {
      correct: exercise.answers.some(
        (answer) => normalizeAnswer(answer) === submitted,
      ),
      expected: exercise.answers[0],
    };
  }

  return {
    correct: normalizeAnswer(exercise.answer) === submitted,
    expected: exercise.answer,
  };
}
