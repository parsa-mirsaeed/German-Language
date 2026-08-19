"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";
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
const laneTokens = [
  { id: "frau", text: "die Frau", initial: "subject" as const },
  { id: "apfel", text: "den Apfel", initial: "object" as const },
  { id: "heute-lane", text: "heute", initial: "other" as const },
];

type GrammarInteractionLabProps = { locale: Locale };

export function GrammarInteractionLab({ locale }: GrammarInteractionLabProps) {
  const ui = getUiDictionary(locale);
  const laneLabels: Record<CaseLane, string> = {
    subject: ui.interaction.subjectLane,
    object: ui.interaction.objectLane,
    other: ui.interaction.otherLane,
  };
  const [firstId, setFirstId] = useState("ich");
  const [bracketKind, setBracketKind] = useState<BracketKind>("modal");
  const [gender, setGender] = useState<Gender>("masculine");
  const [grammaticalCase, setGrammaticalCase] = useState<GrammaticalCase>("nominative");
  const [lanes, setLanes] = useState<Record<string, CaseLane>>(() => Object.fromEntries(laneTokens.map((token) => [token.id, token.initial])));
  const orderedTokens = useMemo(() => orderVerbSecond(verbSecondDemo, firstId), [firstId]);
  const bracket = buildSentenceBracket(bracketKind);
  const article = morphDefiniteArticle(gender, grammaticalCase);

  function moveToken(tokenId: string, direction: "left" | "right") {
    setLanes((current) => ({ ...current, [tokenId]: moveCaseLane(current[tokenId], direction) }));
  }
  function handleLaneKey(event: KeyboardEvent<HTMLButtonElement>, tokenId: string) {
    if (event.key === "ArrowLeft") { event.preventDefault(); moveToken(tokenId, "left"); }
    if (event.key === "ArrowRight") { event.preventDefault(); moveToken(tokenId, "right"); }
  }

  return (
    <div className="interaction-labs" data-testid="grammar-interaction-labs">
      <section className="interaction-card" aria-labelledby="verb-second-lab">
        <div className="interaction-heading"><p>{ui.interaction.verbSecondTitle}</p><h3 id="verb-second-lab">{ui.interaction.verbSecondLead}</h3></div>
        <div className="interaction-controls" aria-label={ui.interaction.chooseFirst} dir="ltr">
          {firstPositionChoices.map((choice) => <button aria-pressed={firstId === choice.id} className="interaction-choice" key={choice.id} onClick={() => setFirstId(choice.id)} type="button" lang="de">{choice.label}</button>)}
        </div>
        <ol className="v2-rail" aria-label={ui.interaction.sentencePositions} dir="ltr" lang="de">
          {orderedTokens.map((token, index) => <li data-role={token.role} key={token.id}><span>{index + 1}</span><strong>{token.text}</strong>{index === 1 ? <small lang={locale}>{ui.interaction.finiteVerb}</small> : null}</li>)}
        </ol>
        <p className="interaction-status" aria-live="polite" dir="ltr" lang="de">{orderedTokens.map((token) => token.text).join(" ")}.</p>
      </section>

      <section className="interaction-card" aria-labelledby="bracket-lab">
        <div className="interaction-heading"><p>{ui.interaction.bracketTitle}</p><h3 id="bracket-lab">{ui.interaction.bracketLead}</h3></div>
        <div className="interaction-controls" aria-label={ui.interaction.chooseBracket} dir="ltr">
          {bracketChoices.map((choice) => <button aria-pressed={bracketKind === choice.id} className="interaction-choice" key={choice.id} onClick={() => setBracketKind(choice.id)} type="button">{choice.label}</button>)}
        </div>
        <div className="sentence-bracket" data-kind={bracketKind} dir="ltr" lang="de"><strong>{bracket.left}</strong><span>{bracket.middle}</span><strong>{bracket.right}</strong></div>
        <p className="interaction-status" aria-live="polite" dir="ltr" lang="de">{bracket.label}: {bracket.left} {bracket.middle} {bracket.right}</p>
      </section>

      <section className="interaction-card" aria-labelledby="article-lab">
        <div className="interaction-heading"><p>{ui.interaction.articleTitle}</p><h3 id="article-lab">{ui.interaction.articleLead}</h3></div>
        <div className="interaction-grid-controls">
          <fieldset><legend>{ui.interaction.genderNumber}</legend><div className="interaction-controls" dir="ltr">{genderChoices.map((choice) => <button aria-pressed={gender === choice.id} className="interaction-choice" key={choice.id} onClick={() => setGender(choice.id)} type="button">{choice.label}</button>)}</div></fieldset>
          <fieldset><legend>{ui.interaction.grammaticalCase}</legend><div className="interaction-controls" dir="ltr">{caseChoices.map((choice) => <button aria-pressed={grammaticalCase === choice.id} className="interaction-choice" key={choice.id} onClick={() => setGrammaticalCase(choice.id)} type="button">{choice.label}</button>)}</div></fieldset>
        </div>
        <div className="article-morph" aria-live="polite" dir="ltr"><span>{grammaticalCase}</span><strong key={`${gender}-${grammaticalCase}`} lang="de">{article}</strong><span>{gender}</span></div>
      </section>

      <section className="interaction-card" aria-labelledby="case-lanes-lab">
        <div className="interaction-heading"><p>{ui.interaction.lanesTitle}</p><h3 id="case-lanes-lab">{ui.interaction.lanesLead}</h3></div>
        <p className="interaction-instruction">{ui.interaction.lanesInstruction}</p>
        <div className="case-lanes" aria-label={ui.interaction.laneExercise}>
          {caseLaneOrder.map((lane) => (
            <div className="case-lane" data-lane={lane} key={lane}><h4>{laneLabels[lane]}</h4><div>
              {laneTokens.filter((token) => lanes[token.id] === lane).map((token) => {
                const laneIndex = caseLaneOrder.indexOf(lane);
                return <div className="case-token-wrap" key={token.id}>
                  <button className="case-token" onKeyDown={(event) => handleLaneKey(event, token.id)} type="button"><span dir="ltr" lang="de">{token.text}</span><small>{laneLabels[lane]}</small></button>
                  <div className="case-token-actions"><button aria-label={ui.interaction.moveLeft(token.text)} disabled={laneIndex === 0} onClick={() => moveToken(token.id, "left")} type="button">←</button><button aria-label={ui.interaction.moveRight(token.text)} disabled={laneIndex === caseLaneOrder.length - 1} onClick={() => moveToken(token.id, "right")} type="button">→</button></div>
                </div>;
              })}
            </div></div>
          ))}
        </div>
        <p className="interaction-status" aria-live="polite" dir="ltr"><span lang="de">die Frau</span>: {laneLabels[lanes.frau]}; <span lang="de">den Apfel</span>: {laneLabels[lanes.apfel]}; <span lang="de">heute</span>: {laneLabels[lanes["heute-lane"]]}.</p>
      </section>
    </div>
  );
}
