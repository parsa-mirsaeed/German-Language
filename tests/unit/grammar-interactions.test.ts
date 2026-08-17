import { describe, expect, it } from "vitest";
import {
  buildSentenceBracket,
  morphDefiniteArticle,
  moveCaseLane,
  orderVerbSecond,
  verbSecondDemo,
} from "@/lib/grammar-interactions";

describe("grammar interaction helpers", () => {
  it("keeps the finite verb in position two when another chunk moves first", () => {
    const ordered = orderVerbSecond(verbSecondDemo, "heute");

    expect(ordered.map((token) => token.text)).toEqual([
      "heute",
      "trinke",
      "ich",
      "den Kaffee",
    ]);
    expect(ordered[1].role).toBe("finite-verb");
  });

  it("builds the right edge of the sentence bracket for each A1 pattern", () => {
    expect(buildSentenceBracket("modal").right).toBe("lernen.");
    expect(buildSentenceBracket("separable").right).toBe("auf.");
    expect(buildSentenceBracket("perfect").right).toBe("getrunken.");
  });

  it("morphs definite articles by case and gender", () => {
    expect(morphDefiniteArticle("masculine", "nominative")).toBe("der");
    expect(morphDefiniteArticle("masculine", "accusative")).toBe("den");
    expect(morphDefiniteArticle("masculine", "dative")).toBe("dem");
    expect(morphDefiniteArticle("feminine", "accusative")).toBe("die");
  });

  it("moves case lanes without escaping the lane boundaries", () => {
    expect(moveCaseLane("subject", "left")).toBe("subject");
    expect(moveCaseLane("subject", "right")).toBe("object");
    expect(moveCaseLane("object", "right")).toBe("other");
    expect(moveCaseLane("other", "right")).toBe("other");
  });
});
