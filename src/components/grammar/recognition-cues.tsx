import type { CueBlock } from "@/content/schema/content-types";

type RecognitionCuesProps = {
  cues: CueBlock[];
};

export function RecognitionCues({ cues }: RecognitionCuesProps) {
  return (
    <div className="recognition-list">
      {cues.map((cue) => (
        <div className="recognition-cue" key={cue.label}>
          <strong lang="de">{cue.label}</strong>
          {cue.note ? <span>{cue.note}</span> : null}
        </div>
      ))}
    </div>
  );
}
