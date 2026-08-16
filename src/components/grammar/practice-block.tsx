import type { Exercise } from "@/content/schema/content-types";

type PracticeBlockProps = {
  exercises: Exercise[];
};

export function PracticeBlock({ exercises }: PracticeBlockProps) {
  return (
    <div className="practice-stack">
      {exercises.map((exercise, index) => (
        <div className="practice-block" key={exercise.id}>
          <p className="practice-label">Micro practice {index + 1}</p>
          <h3>{exercise.prompt}</h3>
          <ol className="practice-options">
            {exercise.options.map((option) => (
              <li key={option} lang="de">
                {option}
              </li>
            ))}
          </ol>
          <details className="answer-reveal">
            <summary>Reveal answer and explanation</summary>
            <div>
              <p>
                <strong>Answer:</strong>{" "}
                <span lang="de">{exercise.answer}</span>
              </p>
              <p>{exercise.explanation}</p>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
