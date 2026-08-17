export const PROGRESS_STORAGE_KEY = "german-a1-progress:v1";
const PROGRESS_CHANGE_EVENT = "german-a1-progress-change";

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

const SERVER_PROGRESS = emptyProgress();
let cachedRaw: string | null | undefined;
let cachedProgress: ProgressState = SERVER_PROGRESS;

function emptyLessonProgress(): LessonProgress {
  return { exercises: {}, speaking: {} };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseProgress(raw: string | null): ProgressState {
  if (!raw) {
    return emptyProgress();
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed) || parsed.version !== 1 || !isRecord(parsed.lessons)) {
      return emptyProgress();
    }

    const lessons: Record<string, LessonProgress> = {};

    for (const [lessonId, lessonValue] of Object.entries(parsed.lessons)) {
      if (!isRecord(lessonValue)) {
        continue;
      }

      const lesson = emptyLessonProgress();

      if (isRecord(lessonValue.exercises)) {
        for (const [exerciseId, exerciseValue] of Object.entries(
          lessonValue.exercises,
        )) {
          if (
            isRecord(exerciseValue) &&
            Number.isInteger(exerciseValue.attempts) &&
            typeof exerciseValue.attempts === "number" &&
            exerciseValue.attempts >= 0 &&
            typeof exerciseValue.correct === "boolean"
          ) {
            lesson.exercises[exerciseId] = {
              attempts: exerciseValue.attempts,
              correct: exerciseValue.correct,
            };
          }
        }
      }

      if (isRecord(lessonValue.speaking)) {
        for (const [promptIndex, practiced] of Object.entries(
          lessonValue.speaking,
        )) {
          if (typeof practiced === "boolean") {
            lesson.speaking[promptIndex] = practiced;
          }
        }
      }

      lessons[lessonId] = lesson;
    }

    return { version: 1, lessons };
  } catch {
    return emptyProgress();
  }
}

export function getServerProgressSnapshot(): ProgressState {
  return SERVER_PROGRESS;
}

export function getProgressSnapshot(): ProgressState {
  if (typeof window === "undefined") {
    return SERVER_PROGRESS;
  }

  const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedProgress = parseProgress(raw);
  }
  return cachedProgress;
}

export function readProgress(): ProgressState {
  return getProgressSnapshot();
}

export function subscribeProgress(callback: () => void): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const onProgressChange = () => callback();
  const onStorage = (event: StorageEvent) => {
    if (event.key === PROGRESS_STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener(PROGRESS_CHANGE_EVENT, onProgressChange);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(PROGRESS_CHANGE_EVENT, onProgressChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function writeProgress(progress: ProgressState): void {
  if (typeof window === "undefined") {
    return;
  }

  const raw = JSON.stringify(progress);
  cachedRaw = raw;
  cachedProgress = progress;
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, raw);
  window.dispatchEvent(new Event(PROGRESS_CHANGE_EVENT));
}

export function updateProgress(
  updater: (current: ProgressState) => ProgressState,
): void {
  if (typeof window === "undefined") {
    return;
  }

  writeProgress(updater(getProgressSnapshot()));
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
