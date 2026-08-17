import type { Mistake } from "@/content/schema/content-types";

type MistakeCorrectionProps = {
  mistakes: Mistake[];
};

export function MistakeCorrection({ mistakes }: MistakeCorrectionProps) {
  return (
    <div className="mistake-stack">
      {mistakes.map((mistake) => (
        <div className="mistake-row" key={mistake.wrong}>
          <div className="mistake-pair">
            <p className="wrong-sentence" lang="de">
              <span aria-hidden="true">×</span> {mistake.wrong}
            </p>
            <p className="correct-sentence" lang="de">
              <span aria-hidden="true">✓</span> {mistake.correct}
            </p>
          </div>
          <p>{mistake.explanation}</p>
        </div>
      ))}
    </div>
  );
}
