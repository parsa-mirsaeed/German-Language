import type { Example } from "@/content/schema/content-types";

const kindLabels: Record<Example["kind"], string> = {
  affirmative: "statement",
  negative: "negative",
  question: "question",
  context: "real life",
  correction: "fix it",
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function FocusSentence({ example }: { example: Example }) {
  if (example.focusTokens.length === 0) {
    return <>{example.de}</>;
  }

  const sortedTokens = [...example.focusTokens].sort(
    (left, right) => right.length - left.length,
  );
  const matcher = new RegExp(
    `(${sortedTokens.map(escapeRegExp).join("|")})`,
    "g",
  );
  const focus = new Set(example.focusTokens);

  return (
    <>
      {example.de.split(matcher).map((part, index) =>
        focus.has(part) ? (
          <mark className="grammar-focus" key={`${part}-${index}`}>
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

type ExampleStreamProps = {
  examples: Example[];
};

export function ExampleStream({ examples }: ExampleStreamProps) {
  return (
    <ol className="example-stream">
      {examples.map((example, index) => (
        <li key={`${example.de}-${index}`}>
          <div className="example-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="example-copy">
            <div className="example-meta">
              <span>{kindLabels[example.kind]}</span>
            </div>
            <p className="example-de" dir="ltr" lang="de">
              <FocusSentence example={example} />
            </p>
            <p className="example-en" dir="ltr" lang="en">{example.en}</p>
            {example.note ? <p className="example-note">{example.note}</p> : null}
            {example.faNote ? (
              <p className="example-fa" dir="rtl" lang="fa">
                {example.faNote}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
