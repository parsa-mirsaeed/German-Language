export type SentenceRole =
  | "subject"
  | "finite-verb"
  | "object"
  | "adverbial"
  | "nonfinite-verb"
  | "prefix";

export type GrammaticalCase = "nominative" | "accusative" | "dative";
export type Gender = "masculine" | "feminine" | "neuter" | "plural";
export type CaseLane = "subject" | "object" | "other";

export type SentenceToken = {
  id: string;
  text: string;
  role: SentenceRole;
  case?: GrammaticalCase;
};

export const verbSecondDemo: SentenceToken[] = [
  { id: "ich", text: "ich", role: "subject", case: "nominative" },
  { id: "heute", text: "heute", role: "adverbial" },
  { id: "trinke", text: "trinke", role: "finite-verb" },
  { id: "kaffee", text: "den Kaffee", role: "object", case: "accusative" },
];

export function orderVerbSecond(
  tokens: SentenceToken[],
  firstId: string,
): SentenceToken[] {
  const first = tokens.find((token) => token.id === firstId);
  const finiteVerb = tokens.find((token) => token.role === "finite-verb");

  if (!first || !finiteVerb) {
    return [...tokens];
  }

  if (first.id === finiteVerb.id) {
    return [finiteVerb, ...tokens.filter((token) => token.id !== finiteVerb.id)];
  }

  return [
    first,
    finiteVerb,
    ...tokens.filter(
      (token) => token.id !== first.id && token.id !== finiteVerb.id,
    ),
  ];
}

export type BracketKind = "modal" | "separable" | "perfect";

export type SentenceBracket = {
  left: string;
  middle: string;
  right: string;
  label: string;
};

export function buildSentenceBracket(kind: BracketKind): SentenceBracket {
  switch (kind) {
    case "modal":
      return {
        left: "Ich muss",
        middle: "heute Deutsch",
        right: "lernen.",
        label: "Modal verb + infinitive",
      };
    case "separable":
      return {
        left: "Ich stehe",
        middle: "jeden Morgen um sieben Uhr",
        right: "auf.",
        label: "Finite verb + separable prefix",
      };
    case "perfect":
      return {
        left: "Ich habe",
        middle: "gestern Kaffee",
        right: "getrunken.",
        label: "Auxiliary + past participle",
      };
  }
}

const definiteArticles: Record<GrammaticalCase, Record<Gender, string>> = {
  nominative: {
    masculine: "der",
    feminine: "die",
    neuter: "das",
    plural: "die",
  },
  accusative: {
    masculine: "den",
    feminine: "die",
    neuter: "das",
    plural: "die",
  },
  dative: {
    masculine: "dem",
    feminine: "der",
    neuter: "dem",
    plural: "den",
  },
};

export function morphDefiniteArticle(
  gender: Gender,
  grammaticalCase: GrammaticalCase,
): string {
  return definiteArticles[grammaticalCase][gender];
}

export const caseLaneOrder: CaseLane[] = ["subject", "object", "other"];

export function moveCaseLane(
  current: CaseLane,
  direction: "left" | "right",
): CaseLane {
  const currentIndex = caseLaneOrder.indexOf(current);
  const delta = direction === "left" ? -1 : 1;
  const nextIndex = Math.max(
    0,
    Math.min(caseLaneOrder.length - 1, currentIndex + delta),
  );

  return caseLaneOrder[nextIndex];
}
