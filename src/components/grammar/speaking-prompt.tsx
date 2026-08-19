"use client";

import { useState, useSyncExternalStore } from "react";
import type { SpeakingPrompt as SpeakingPromptData } from "@/content/schema/content-types";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";
import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  recordSpeakingPractice,
  subscribeProgress,
  updateProgress,
} from "@/lib/progress";

type SpeakingPromptProps = {
  prompts: SpeakingPromptData[];
  lessonId: string;
  locale: Locale;
  contentLocale?: Locale;
};

export function SpeakingPrompt({ prompts, lessonId, locale, contentLocale = locale }: SpeakingPromptProps) {
  const ui = getUiDictionary(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSupport, setShowSupport] = useState(false);
  const progress = useSyncExternalStore(subscribeProgress, getProgressSnapshot, getServerProgressSnapshot);
  const active = prompts[activeIndex];
  const practiced = Boolean(progress.lessons[lessonId]?.speaking[String(activeIndex)]);
  const contentDir = contentLocale === "fa" ? "rtl" : "ltr";

  function markPracticed() {
    updateProgress((current) => recordSpeakingPractice(current, lessonId, activeIndex));
  }

  function move(delta: number) {
    const nextIndex = Math.max(0, Math.min(prompts.length - 1, activeIndex + delta));
    setActiveIndex(nextIndex);
    setShowSupport(false);
  }

  return (
    <div className="speaking-mode" data-testid="speaking-mode">
      <div className="speaking-mode-head">
        <div><p>{ui.speaking.mode}</p><strong>{ui.speaking.promptCount(activeIndex + 1, prompts.length)}</strong></div>
        <span>{ui.speaking.noMicrophone}</span>
      </div>

      <div className="speaking-mode-card">
        <span className="speaking-number" aria-hidden="true">{activeIndex + 1}</span>
        <p dir={contentDir} lang={contentLocale}>{active.prompt}</p>
        {active.support && showSupport ? <code dir="ltr" lang="de">{active.support}</code> : null}
        <div className="speaking-mode-actions">
          {active.support ? (
            <button aria-pressed={showSupport} onClick={() => setShowSupport((current) => !current)} type="button">
              {showSupport ? ui.speaking.hideSupport : ui.speaking.showSupport}
            </button>
          ) : null}
          <button className={practiced ? "is-practiced" : undefined} onClick={markPracticed} type="button">
            {practiced ? ui.speaking.practiced : ui.speaking.markPracticed}
          </button>
        </div>
      </div>

      <div className="speaking-mode-nav">
        <button disabled={activeIndex === 0} onClick={() => move(-1)} type="button">{ui.speaking.previous}</button>
        <button disabled={activeIndex === prompts.length - 1} onClick={() => move(1)} type="button">{ui.speaking.next}</button>
      </div>
    </div>
  );
}
