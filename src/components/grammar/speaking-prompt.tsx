"use client";

import { useEffect, useState } from "react";
import type { SpeakingPrompt as SpeakingPromptData } from "@/content/schema/content-types";
import {
  emptyProgress,
  readProgress,
  recordSpeakingPractice,
  writeProgress,
  type ProgressState,
} from "@/lib/progress";

type SpeakingPromptProps = {
  prompts: SpeakingPromptData[];
  lessonId: string;
};

export function SpeakingPrompt({ prompts, lessonId }: SpeakingPromptProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSupport, setShowSupport] = useState(false);
  const [progress, setProgress] = useState<ProgressState>(() => emptyProgress());

  useEffect(() => {
    setProgress(readProgress());
  }, []);

  const active = prompts[activeIndex];
  const practiced = Boolean(
    progress.lessons[lessonId]?.speaking[String(activeIndex)],
  );

  function markPracticed() {
    const next = recordSpeakingPractice(progress, lessonId, activeIndex);
    setProgress(next);
    writeProgress(next);
  }

  function move(delta: number) {
    const nextIndex = Math.max(0, Math.min(prompts.length - 1, activeIndex + delta));
    setActiveIndex(nextIndex);
    setShowSupport(false);
  }

  return (
    <div className="speaking-mode" data-testid="speaking-mode">
      <div className="speaking-mode-head">
        <div>
          <p>Speaking mode</p>
          <strong>
            Prompt {activeIndex + 1} of {prompts.length}
          </strong>
        </div>
        <span>Self-rehearsal · no microphone scoring</span>
      </div>

      <div className="speaking-mode-card">
        <span className="speaking-number" aria-hidden="true">
          {activeIndex + 1}
        </span>
        <p>{active.prompt}</p>
        {active.support && showSupport ? <code lang="de">{active.support}</code> : null}
        <div className="speaking-mode-actions">
          {active.support ? (
            <button
              aria-pressed={showSupport}
              onClick={() => setShowSupport((current) => !current)}
              type="button"
            >
              {showSupport ? "Hide support" : "Show support"}
            </button>
          ) : null}
          <button
            className={practiced ? "is-practiced" : undefined}
            onClick={markPracticed}
            type="button"
          >
            {practiced ? "Practiced ✓" : "Mark practiced"}
          </button>
        </div>
      </div>

      <div className="speaking-mode-nav">
        <button disabled={activeIndex === 0} onClick={() => move(-1)} type="button">
          ← Previous
        </button>
        <button
          disabled={activeIndex === prompts.length - 1}
          onClick={() => move(1)}
          type="button"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
