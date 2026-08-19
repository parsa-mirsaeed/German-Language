"use client";

import { useState, useSyncExternalStore } from "react";
import type { Exercise } from "@/content/schema/content-types";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";
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
  locale: Locale;
  contentLocale?: Locale;
};

type ResponseState = Record<string, ExerciseResponse>;
type ResultState = Record<string, GradeResult>;

export function PracticeBlock({ exercises, lessonId, locale, contentLocale = locale }: PracticeBlockProps) {
  const ui = getUiDictionary(locale);
  const [responses, setResponses] = useState<ResponseState>({});
  const [results, setResults] = useState<ResultState>({});
  const progress = useSyncExternalStore(subscribeProgress, getProgressSnapshot, getServerProgressSnapshot);

  const typeLabel = (exercise: Exercise) => {
    switch (exercise.type) {
      case "multiple-choice": return ui.practice.types.multipleChoice;
      case "fill-blank": return ui.practice.types.fillBlank;
      case "sentence-builder": return ui.practice.types.sentenceBuilder;
      case "error-correction": return ui.practice.types.errorCorrection;
    }
  };

  function updateResponse(exerciseId: string, value: ExerciseResponse) {
    setResponses((current) => ({ ...current, [exerciseId]: value }));
    setResults((current) => {
      if (!(exerciseId in current)) return current;
      const next = { ...current };
      delete next[exerciseId];
      return next;
    });
  }

  function submit(exercise: Exercise) {
    const response = responses[exercise.id] ?? (exercise.type === "sentence-builder" ? [] : "");
    const result = gradeExercise(exercise, response);
    setResults((current) => ({ ...current, [exercise.id]: result }));
    updateProgress((current) => recordExerciseResult(current, lessonId, exercise.id, result.correct));
  }

  const completed = completedExerciseCount(progress, lessonId);
  const contentDir = contentLocale === "fa" ? "rtl" : "ltr";

  return (
    <div className="practice-engine" data-testid="practice-engine">
      <div className="practice-progress" aria-live="polite">
        <span>{ui.practice.lessonPractice}</span>
        <strong>{ui.practice.correctCount(completed, exercises.length)}</strong>
      </div>

      <div className="practice-stack">
        {exercises.map((exercise, index) => {
          const response = responses[exercise.id];
          const result = results[exercise.id];
          const persistedCorrect = Boolean(progress.lessons[lessonId]?.exercises[exercise.id]?.correct);
          return (
            <section className="practice-block" key={exercise.id}>
              <div className="practice-block-head">
                <div>
                  <p className="practice-label">{ui.practice.microPractice} {index + 1} · {typeLabel(exercise)}</p>
                  <h3 dir={contentDir} lang={contentLocale}>{exercise.prompt}</h3>
                </div>
                {persistedCorrect ? <span className="practice-complete">{ui.practice.completed}</span> : null}
              </div>

              {exercise.type === "multiple-choice" ? (
                <fieldset className="practice-choice-group">
                  <legend className="sr-only">{ui.practice.chooseOne}</legend>
                  {exercise.options.map((option) => (
                    <label key={option}><input checked={response === option} name={exercise.id} onChange={() => updateResponse(exercise.id, option)} type="radio" value={option} /><span dir="ltr" lang="de">{option}</span></label>
                  ))}
                </fieldset>
              ) : null}

              {exercise.type === "fill-blank" ? (
                <label className="practice-text-field">
                  <span>{ui.practice.yourAnswer}</span>
                  <input autoComplete="off" dir="ltr" lang="de" onChange={(event) => updateResponse(exercise.id, event.target.value)} placeholder={exercise.placeholder ?? ui.practice.missingForm} type="text" value={typeof response === "string" ? response : ""} />
                </label>
              ) : null}

              {exercise.type === "sentence-builder" ? (
                <SentenceBuilder answer={Array.isArray(response) ? response : []} exercise={exercise} locale={locale} onChange={(value) => updateResponse(exercise.id, value)} />
              ) : null}

              {exercise.type === "error-correction" ? (
                <div className="practice-correction">
                  <p className="practice-incorrect" dir="ltr" lang="de"><span lang={locale}>{ui.practice.fix}:</span> {exercise.incorrect}</p>
                  <label className="practice-text-field"><span>{ui.practice.correctSentence}</span><input autoComplete="off" dir="ltr" lang="de" onChange={(event) => updateResponse(exercise.id, event.target.value)} type="text" value={typeof response === "string" ? response : ""} /></label>
                </div>
              ) : null}

              <button className="practice-submit" onClick={() => submit(exercise)} type="button">{ui.practice.checkAnswer}</button>

              {result ? (
                <div aria-live="polite" className={result.correct ? "practice-feedback is-correct" : "practice-feedback is-incorrect"}>
                  <strong>{result.correct ? ui.practice.correct : ui.practice.notYet}</strong>
                  {!result.correct ? <p><span>{ui.practice.expected}:</span>{" "}<b dir="ltr" lang="de">{result.expected || expectedExerciseAnswer(exercise)}</b></p> : null}
                  <p dir={contentDir} lang={contentLocale}>{exercise.explanation}</p>
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
  locale: Locale;
};

function SentenceBuilder({ exercise, answer, onChange, locale }: SentenceBuilderProps) {
  const ui = getUiDictionary(locale);
  const available = exercise.tokens.map((token, index) => ({ token, index })).filter(({ token, index }) => {
    const occurrenceBefore = exercise.tokens.slice(0, index).filter((candidate) => candidate === token).length;
    const selectedOccurrences = answer.filter((candidate) => candidate === token).length;
    return selectedOccurrences <= occurrenceBefore;
  });

  return (
    <div className="sentence-builder-exercise">
      <div className="sentence-builder-output" aria-live="polite" dir="ltr" lang="de">{answer.length > 0 ? answer.join(" ") : ui.practice.buildHere}</div>
      <div aria-label={ui.practice.availableTokens} className="sentence-builder-bank" role="group">
        {available.map(({ token, index }) => <button key={`${token}-${index}`} onClick={() => onChange([...answer, token])} type="button">{token}</button>)}
      </div>
      <div className="sentence-builder-actions">
        <button disabled={answer.length === 0} onClick={() => onChange(answer.slice(0, -1))} type="button">{ui.practice.removeLast}</button>
        <button disabled={answer.length === 0} onClick={() => onChange([])} type="button">{ui.practice.reset}</button>
      </div>
    </div>
  );
}
