export const PROGRESS_STORAGE_KEY = "german-a1-progress:v1";

export type ExerciseProgress = {
  attempts: number;
  correct: boolean;
};

export type LessonProgress = {
  exercises: Record<string, ExerciseProgress>;
  speaking: Record<string, boolean>;
};

export type ProgressState = {
  version: 1;
  lessons: Record<string, LessonProgress>;
};

export function emptyProgress(): ProgressState {
  return { version: 1, lessons: {} };
}

function emptyLessonProgress(): LessonProgress {
  return { exercises: {}, speaking: {} };
}

export function parseProgress(raw: string | null): ProgressState {
  if (!raw) {
    return emptyProgress();
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (parsed.version !== 1 || !parsed.lessons || typeof parsed.lessons !== "object") {
      return emptyProgress();
    }
    return parsed as ProgressState;
  } catch {
    return emptyProgress();
  }
}

export function readProgress(): ProgressState {
  if (typeof window === "undefined") {
    return emptyProgress();
  }
  return parseProgress(window.localStorage.getItem(PROGRESS_STORAGE_KEY));
}

export function writeProgress(progress: ProgressState): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

export function recordExerciseResult(
  progress: ProgressState,
  lessonId: string,
  exerciseId: string,
  correct: boolean,
): ProgressState {
  const lesson = progress.lessons[lessonId] ?? emptyLessonProgress();
  const previous = lesson.exercises[exerciseId];

  return {
    ...progress,
    lessons: {
      ...progress.lessons,
      [lessonId]: {
        ...lesson,
        exercises: {
          ...lesson.exercises,
          [exerciseId]: {
            attempts: (previous?.attempts ?? 0) + 1,
            correct: Boolean(previous?.correct || correct),
          },
        },
      },
    },
  };
}

export function recordSpeakingPractice(
  progress: ProgressState,
  lessonId: string,
  promptIndex: number,
): ProgressState {
  const lesson = progress.lessons[lessonId] ?? emptyLessonProgress();

  return {
    ...progress,
    lessons: {
      ...progress.lessons,
      [lessonId]: {
        ...lesson,
        speaking: {
          ...lesson.speaking,
          [String(promptIndex)]: true,
        },
      },
    },
  };
}

export function completedExerciseCount(
  progress: ProgressState,
  lessonId: string,
): number {
  const exerciseProgress = progress.lessons[lessonId]?.exercises ?? {};
  return Object.values(exerciseProgress).filter((item) => item.correct).length;
}
