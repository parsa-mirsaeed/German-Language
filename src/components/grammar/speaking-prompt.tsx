import type { SpeakingPrompt as SpeakingPromptData } from "@/content/schema/content-types";

type SpeakingPromptProps = {
  prompts: SpeakingPromptData[];
};

export function SpeakingPrompt({ prompts }: SpeakingPromptProps) {
  return (
    <ol className="speaking-grid">
      {prompts.map((prompt, index) => (
        <li key={prompt.prompt}>
          <span className="speaking-number" aria-hidden="true">
            {index + 1}
          </span>
          <p>{prompt.prompt}</p>
          {prompt.support ? <code lang="de">{prompt.support}</code> : null}
        </li>
      ))}
    </ol>
  );
}
