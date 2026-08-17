import { describe, expect, it } from "vitest";
import { a1SearchIndex, searchLessons } from "@/lib/search";

describe("A1 search index", () => {
  it("builds one stable document for every lesson route", () => {
    expect(a1SearchIndex).toHaveLength(12);
    expect(a1SearchIndex.map((document) => document.unit)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
    expect(new Set(a1SearchIndex.map((document) => document.href)).size).toBe(12);
  });

  it("ranks title matches deterministically", () => {
    const first = searchLessons(a1SearchIndex, "Akkusativ");
    const second = searchLessons(a1SearchIndex, "Akkusativ");

    expect(first[0].unit).toBe(5);
    expect(first.map((result) => result.id)).toEqual(
      second.map((result) => result.id),
    );
  });

  it("finds lesson examples and formula text, not only titles", () => {
    expect(searchLessons(a1SearchIndex, "mit dem Bus")[0].unit).toBe(9);
    expect(searchLessons(a1SearchIndex, "möchte")[0].unit).toBe(7);
  });

  it("supports a deterministic level filter", () => {
    const results = searchLessons(a1SearchIndex, "ich", { level: "A1.2" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((result) => result.level === "A1.2")).toBe(true);
  });

  it("returns no results for an empty query", () => {
    expect(searchLessons(a1SearchIndex, "   ")).toEqual([]);
  });
});
