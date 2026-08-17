/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  MobileContentsSheet,
  type BookNavItem,
} from "@/components/navigation/mobile-contents-sheet";

const items: BookNavItem[] = [
  {
    unit: 1,
    title: "The German Sentence Engine",
    shortTitle: "Sentence Engine",
    goal: "Build first sentences.",
    href: "/a1/verb-second-basics",
    active: true,
  },
  {
    unit: 2,
    title: "Present Tense",
    shortTitle: "Present Tense",
    goal: "Conjugate verbs.",
    active: false,
  },
];

describe("MobileContentsSheet", () => {
  it("opens from the trigger and closes with Escape while restoring focus", async () => {
    const user = userEvent.setup();
    render(<MobileContentsSheet items={items} />);

    const trigger = screen.getByRole("button", { name: /contents/i });
    await user.click(trigger);

    expect(screen.getByRole("dialog", { name: "Contents" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Sentence Engine/i })).toBeTruthy();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog", { name: "Contents" })).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });
});
