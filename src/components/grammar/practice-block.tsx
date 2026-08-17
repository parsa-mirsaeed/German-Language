"use client";

import { useState, useSyncExternalStore } from "react";
import type { Exercise } from "@/content/schema/content-types";
import {
  expectedExerciseAnswer,
  gradeExercise,
  type ExerciseResponse,
  type GradeResult,
} from "@/lib/exercises";
import {
  completedExerciseCount,
  getProgressSnapshot,
  getServerProgressSnapshot,
  recordExerciseResult,
  subscribeProgress,
  updateProgress,
} from "@/lib/progress";

type PracticeBlockProps = {
  exercises: Exercise[];
  lessonId: string;
};

type ResponseState = Record<string, ExerciseResponse>;
type ResultState = Record<string, GradeResult>;

function exerciseTypeLabel(exercise: Exercise): string {
  switch (exercise.type) {
    case "multiple-choice":
      return "Multiple choice";
    case "fill-blank":
      return "Fill in the blank";
    case "sentence-builder":
      return "Sentence builder";
    case "error-correction":
      return "Error correction";
  }
}

export function PracticeBlock({ exercises, lessonId }: PracticeBlockProps) {
  const [responses, setResponses] = useState<ResponseState>({});
  const [results, setResults] = useState<ResultState>({});
  const progress = useSyncExternalStore(
    subscribeProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );

  function updateResponse(exerciseId: string, value: ExerciseResponse) {
    setResponses((current) => ({ ...current, [exerciseId]: value }));
    setResults((current) => {
      if (!(exerciseId in current)) {
        return current;
      }
      const next = { ...current };
      delete next[exerciseId];
      return next;
    });
  }

  function submit(exercise: Exercise) {
    const response = responses[exercise.id] ?? (exercise.type === "sentence-builder" ? [] : "");
    const result = gradeExercise(exercise, response);
    setResults((current) => ({ ...current, [exercise.id]: result }));

    updateProgress((current) =>
      recordExerciseResult(current, lessonId, exercise.id, result.correct),
    );
  }

  const completed = completedExerciseCount(progress, lessonId);

  return (
    <div className="practice-engine" data-testid="practice-engine">
      <div className="practice-progress" aria-live="polite">
        <span>Lesson practice</span>
        <strong>
          {completed}/{exercises.length} correct
        </strong>
      </div>

      <div className="practice-stack">
        {exercises.map((exercise, index) => {
          const response = responses[exercise.id];
          const result = results[exercise.id];
          const persistedCorrect = Boolean(
            progress.lessons[lessonId]?.exercises[exercise.id]?.correct,
          );

          return (
            <section className="practice-block" key={exercise.id}>
              <div className="practice-block-head">
                <div>
                  <p className="practice-label">
                    Micro practice {index + 1} · {exerciseTypeLabel(exercise)}
                  </p>
                  <h3>{exercise.prompt}</h3>
                </div>
                {persistedCorrect ? (
                  <span className="practice-complete">Completed</span>
                ) : null}
              </div>

              {exercise.type === "multiple-choice" ? (
                <fieldset className="practice-choice-group">
                  <legend className="sr-only">Choose one answer</legend>
                  {exercise.options.map((option) => (
                    <label key={option}>
                      <input
                        checked={response === option}
                        name={exercise.id}
                        onChange={() => updateResponse(exercise.id, option)}
                        type="radio"
                        value={option}
                      />
                      <span lang="de">{option}</span>
                    </label>
                  ))}
                </fieldset>
              ) : null}

              {exercise.type === "fill-blank" ? (
                <label className="practice-text-field">
                  <span>Your answer</span>
                  <input
                    autoComplete="off"
                    lang="de"
                    onChange={(event) => updateResponse(exercise.id, event.target.value)}
                    placeholder={exercise.placeholder ?? "Type the missing German form"}
                    type="text"
                    value={typeof response === "string" ? response : ""}
                  />
                </label>
              ) : null}

              {exercise.type === "sentence-builder" ? (
                <SentenceBuilder
                  answer={Array.isArray(response) ? response : []}
                  exercise={exercise}
                  onChange={(value) => updateResponse(exercise.id, value)}
                />
              ) : null}

              {exercise.type === "error-correction" ? (
                <div className="practice-correction">
                  <p className="practice-incorrect" lang="de">
                    <span>Fix:</span> {exercise.incorrect}
                  </p>
                  <label className="practice-text-field">
                    <span>Correct sentence</span>
                    <input
                      autoComplete="off"
                      lang="de"
                      onChange={(event) => updateResponse(exercise.id, event.target.value)}
                      type="text"
                      value={typeof response === "string" ? response : ""}
                    />
                  </label>
                </div>
              ) : null}

              <button
                className="practice-submit"
                onClick={() => submit(exercise)}
                type="button"
              >
                Check answer
              </button>

              {result ? (
                <div
                  aria-live="polite"
                  className={result.correct ? "practice-feedback is-correct" : "practice-feedback is-incorrect"}
                >
                  <strong>{result.correct ? "Correct" : "Not yet"}</strong>
                  {!result.correct ? (
                    <p>
                      <span>Expected:</span>{" "}
                      <b lang="de">{result.expected || expectedExerciseAnswer(exercise)}</b>
                    </p>
                  ) : null}
                  <p>{exercise.explanation}</p>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}

type SentenceBuilderProps = {
  exercise: Extract<Exercise, { type: "sentence-builder" }>;
  answer: string[];
  onChange: (value: string[]) => void;
};

function SentenceBuilder({ exercise, answer, onChange }: SentenceBuilderProps) {
  const available = exercise.tokens.map((token, index) => ({ token, index })).filter(
    ({ token, index }) => {
      const occurrenceBefore = exercise.tokens
        .slice(0, index)
        .filter((candidate) => candidate === token).length;
      const selectedOccurrences = answer.filter((candidate) => candidate === token).length;
      return selectedOccurrences <= occurrenceBefore;
    },
  );

  return (
    <div className="sentence-builder-exercise">
      <div className="sentence-builder-output" aria-live="polite" lang="de">
        {answer.length > 0 ? answer.join(" ") : "Build the sentence here"}
      </div>
      <div
        aria-label="Available sentence tokens"
        className="sentence-builder-bank"
        role="group"
      >
        {available.map(({ token, index }) => (
          <button
            key={`${token}-${index}`}
            onClick={() => onChange([...answer, token])}
            type="button"
          >
            {token}
          </button>
        ))}
      </div>
      <div className="sentence-builder-actions">
        <button
          disabled={answer.length === 0}
          onClick={() => onChange(answer.slice(0, -1))}
          type="button"
        >
          Remove last
        </button>
        <button disabled={answer.length === 0} onClick={() => onChange([])} type="button">
          Reset
        </button>
      </div>
    </div>
  );
}
