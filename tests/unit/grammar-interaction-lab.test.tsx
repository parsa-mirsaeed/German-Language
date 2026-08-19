/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { GrammarInteractionLab } from "@/components/grammar/grammar-interaction-lab";

afterEach(() => cleanup());

describe("GrammarInteractionLab", () => {
  it("moves a first-position chunk while keeping the verb second", async () => {
    const user = userEvent.setup();
    render(<GrammarInteractionLab locale="en" />);

    await user.click(screen.getByRole("button", { name: "Heute" }));

    expect(screen.getByText("heute trinke ich den Kaffee.")).toBeTruthy();
  });

  it("morphs the article with explicit keyboard-reachable controls", async () => {
    const user = userEvent.setup();
    render(<GrammarInteractionLab locale="en" />);

    await user.click(screen.getByRole("button", { name: "Dativ" }));

    expect(screen.getByText("dem")).toBeTruthy();
  });

  it("supports arrow-key movement between case lanes", async () => {
    const user = userEvent.setup();
    render(<GrammarInteractionLab locale="en" />);

    const token = screen.getByRole("button", { name: /die Frau Subject lane/i });
    token.focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByText(/die Frau: Object lane · Akkusativ/)).toBeTruthy();
  });
});
