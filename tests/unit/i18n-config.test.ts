import { describe, expect, it } from "vitest";
import {
  getAlternateLocale,
  isLocale,
  localeDirection,
  withLocale,
} from "@/i18n/config";

describe("locale configuration", () => {
  it("recognizes supported locales and direction", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("fa")).toBe(true);
    expect(isLocale("de")).toBe(false);
    expect(localeDirection("en")).toBe("ltr");
    expect(localeDirection("fa")).toBe("rtl");
  });

  it("builds locale-preserving paths", () => {
    expect(withLocale("en", "/")).toBe("/en");
    expect(withLocale("fa", "/a1/accusative-articles")).toBe(
      "/fa/a1/accusative-articles",
    );
    expect(getAlternateLocale("en")).toBe("fa");
    expect(getAlternateLocale("fa")).toBe("en");
  });
});
