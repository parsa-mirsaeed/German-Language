import type { ContrastBlock as ContrastData } from "@/content/schema/content-types";

type ContrastBlockProps = {
  contrasts: ContrastData[];
};

export function ContrastBlock({ contrasts }: ContrastBlockProps) {
  return (
    <div className="contrast-stack">
      {contrasts.map((contrast) => (
        <div className="contrast-block" key={`${contrast.left}-${contrast.right}`}>
          <div className="contrast-sentences">
            <p lang="de">{contrast.left}</p>
            <span aria-hidden="true">↔</span>
            <p lang="de">{contrast.right}</p>
          </div>
          <p>{contrast.explanation}</p>
        </div>
      ))}
    </div>
  );
}
