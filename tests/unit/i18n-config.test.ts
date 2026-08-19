import { describe, expect, it } from "vitest";
import {
  getAlternateLocale,
  isLocale,
  localeDirection,
  preferredLocaleFromAcceptLanguage,
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

  it("honors Accept-Language quality values and ordering", () => {
    expect(preferredLocaleFromAcceptLanguage("en-US,en;q=0.9,fa;q=0.1")).toBe("en");
    expect(preferredLocaleFromAcceptLanguage("fa-IR,fa;q=0.9,en;q=0.7")).toBe("fa");
    expect(preferredLocaleFromAcceptLanguage("fa;q=0,en;q=0.8")).toBe("en");
    expect(preferredLocaleFromAcceptLanguage("de-DE,fa;q=0.5,en;q=0.8")).toBe("en");
    expect(preferredLocaleFromAcceptLanguage(null)).toBe("en");
  });
});
