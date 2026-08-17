"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import {
  buildSentenceBracket,
  caseLaneOrder,
  morphDefiniteArticle,
  moveCaseLane,
  orderVerbSecond,
  verbSecondDemo,
  type BracketKind,
  type CaseLane,
  type Gender,
  type GrammaticalCase,
} from "@/lib/grammar-interactions";

const firstPositionChoices = [
  { id: "ich", label: "Ich" },
  { id: "heute", label: "Heute" },
  { id: "kaffee", label: "Den Kaffee" },
];

const bracketChoices: Array<{ id: BracketKind; label: string }> = [
  { id: "modal", label: "Modal" },
  { id: "separable", label: "Separable" },
  { id: "perfect", label: "Perfekt" },
];

const genderChoices: Array<{ id: Gender; label: string }> = [
  { id: "masculine", label: "masc." },
  { id: "feminine", label: "fem." },
  { id: "neuter", label: "neut." },
  { id: "plural", label: "plural" },
];

const caseChoices: Array<{ id: GrammaticalCase; label: string }> = [
  { id: "nominative", label: "Nominativ" },
  { id: "accusative", label: "Akkusativ" },
  { id: "dative", label: "Dativ" },
];

const laneLabels: Record<CaseLane, string> = {
  subject: "Subject lane · Nominativ",
  object: "Object lane · Akkusativ",
  other: "Other / context",
};

const laneTokens = [
  { id: "frau", text: "die Frau", initial: "subject" as const },
  { id: "apfel", text: "den Apfel", initial: "object" as const },
  { id: "heute-lane", text: "heute", initial: "other" as const },
];

export function GrammarInteractionLab() {
  const [firstId, setFirstId] = useState("ich");
  const [bracketKind, setBracketKind] = useState<BracketKind>("modal");
  const [gender, setGender] = useState<Gender>("masculine");
  const [grammaticalCase, setGrammaticalCase] =
    useState<GrammaticalCase>("nominative");
  const [lanes, setLanes] = useState<Record<string, CaseLane>>(() =>
    Object.fromEntries(laneTokens.map((token) => [token.id, token.initial])),
  );

  const orderedTokens = useMemo(
    () => orderVerbSecond(verbSecondDemo, firstId),
    [firstId],
  );
  const bracket = buildSentenceBracket(bracketKind);
  const article = morphDefiniteArticle(gender, grammaticalCase);

  function moveToken(tokenId: string, direction: "left" | "right") {
    setLanes((current) => ({
      ...current,
      [tokenId]: moveCaseLane(current[tokenId], direction),
    }));
  }

  function handleLaneKey(
    event: KeyboardEvent<HTMLButtonElement>,
    tokenId: string,
  ) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToken(tokenId, "left");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToken(tokenId, "right");
    }
  }

  return (
    <div className="interaction-labs" data-testid="grammar-interaction-labs">
      <section className="interaction-card" aria-labelledby="verb-second-lab">
        <div className="interaction-heading">
          <p>Verb-Second Rail</p>
          <h3 id="verb-second-lab">Move one idea first. Keep the finite verb second.</h3>
        </div>
        <div className="interaction-controls" aria-label="Choose first position">
          {firstPositionChoices.map((choice) => (
            <button
              aria-pressed={firstId === choice.id}
              className="interaction-choice"
              key={choice.id}
              onClick={() => setFirstId(choice.id)}
              type="button"
            >
              {choice.label}
            </button>
          ))}
        </div>
        <ol className="v2-rail" aria-label="Sentence positions" lang="de">
          {orderedTokens.map((token, index) => (
            <li data-role={token.role} key={token.id}>
              <span>{index + 1}</span>
              <strong>{token.text}</strong>
              {index === 1 ? <small>finite verb</small> : null}
            </li>
          ))}
        </ol>
        <p className="interaction-status" aria-live="polite">
          {orderedTokens.map((token) => token.text).join(" ")}.
        </p>
      </section>

      <section className="interaction-card" aria-labelledby="bracket-lab">
        <div className="interaction-heading">
          <p>Sentence Bracket</p>
          <h3 id="bracket-lab">See what opens and closes the German sentence.</h3>
        </div>
        <div className="interaction-controls" aria-label="Choose bracket pattern">
          {bracketChoices.map((choice) => (
            <button
              aria-pressed={bracketKind === choice.id}
              className="interaction-choice"
              key={choice.id}
              onClick={() => setBracketKind(choice.id)}
              type="button"
            >
              {choice.label}
            </button>
          ))}
        </div>
        <div className="sentence-bracket" data-kind={bracketKind} lang="de">
          <strong>{bracket.left}</strong>
          <span>{bracket.middle}</span>
          <strong>{bracket.right}</strong>
        </div>
        <p className="interaction-status" aria-live="polite">
          {bracket.label}: {bracket.left} {bracket.middle} {bracket.right}
        </p>
      </section>

      <section className="interaction-card" aria-labelledby="article-lab">
        <div className="interaction-heading">
          <p>Article Morph</p>
          <h3 id="article-lab">Change case and watch only the article form that needs to move.</h3>
        </div>
        <div className="interaction-grid-controls">
          <fieldset>
            <legend>Gender / number</legend>
            <div className="interaction-controls">
              {genderChoices.map((choice) => (
                <button
                  aria-pressed={gender === choice.id}
                  className="interaction-choice"
                  key={choice.id}
                  onClick={() => setGender(choice.id)}
                  type="button"
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Case</legend>
            <div className="interaction-controls">
              {caseChoices.map((choice) => (
                <button
                  aria-pressed={grammaticalCase === choice.id}
                  className="interaction-choice"
                  key={choice.id}
                  onClick={() => setGrammaticalCase(choice.id)}
                  type="button"
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="article-morph" aria-live="polite">
          <span>{grammaticalCase}</span>
          <strong key={`${gender}-${grammaticalCase}`} lang="de">
            {article}
          </strong>
          <span>{gender}</span>
        </div>
      </section>

      <section className="interaction-card" aria-labelledby="case-lanes-lab">
        <div className="interaction-heading">
          <p>Case Lanes</p>
          <h3 id="case-lanes-lab">Sort sentence chunks by job, not by position.</h3>
        </div>
        <p className="interaction-instruction">
          Focus a token and use ← / →, or use its Move buttons. Dragging is never required.
        </p>
        <div className="case-lanes" aria-label="Case lane exercise">
          {caseLaneOrder.map((lane) => (
            <div className="case-lane" data-lane={lane} key={lane}>
              <h4>{laneLabels[lane]}</h4>
              <div>
                {laneTokens
                  .filter((token) => lanes[token.id] === lane)
                  .map((token) => {
                    const laneIndex = caseLaneOrder.indexOf(lane);
                    return (
                      <div className="case-token-wrap" key={token.id}>
                        <button
                          className="case-token"
                          onKeyDown={(event) => handleLaneKey(event, token.id)}
                          type="button"
                        >
                          <span lang="de">{token.text}</span>
                          <small>{laneLabels[lane]}</small>
                        </button>
                        <div className="case-token-actions">
                          <button
                            aria-label={`Move ${token.text} left`}
                            disabled={laneIndex === 0}
                            onClick={() => moveToken(token.id, "left")}
                            type="button"
                          >
                            ←
                          </button>
                          <button
                            aria-label={`Move ${token.text} right`}
                            disabled={laneIndex === caseLaneOrder.length - 1}
                            onClick={() => moveToken(token.id, "right")}
                            type="button"
                          >
                            →
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
        <p className="interaction-status" aria-live="polite">
          die Frau: {laneLabels[lanes.frau]}; den Apfel: {laneLabels[lanes.apfel]}; heute: {laneLabels[lanes["heute-lane"]]}.
        </p>
      </section>
    </div>
  );
}
