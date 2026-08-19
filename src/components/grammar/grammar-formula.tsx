import type { FormulaBlock } from "@/content/schema/content-types";

type GrammarFormulaProps = {
  blocks: FormulaBlock[];
  fallbackLabel?: string;
};

export function GrammarFormula({ blocks, fallbackLabel = "Pattern" }: GrammarFormulaProps) {
  return (
    <div className="formula-stack">
      {blocks.map((block, index) => (
        <div className="grammar-equation" key={`${block.pattern}-${index}`}>
          <span className="equation-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p className="equation-label">{block.label ?? fallbackLabel}</p>
            <code dir="ltr" lang="de">{block.pattern}</code>
            {block.note ? <p className="equation-note">{block.note}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
