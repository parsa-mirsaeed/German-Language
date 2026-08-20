import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";
import { absoluteSiteUrl } from "@/lib/site-url";

export function localizedAlternates(
  locale: Locale,
  pathname: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: withLocale(locale, pathname),
    languages: {
      en: withLocale("en", pathname),
      fa: withLocale("fa", pathname),
      "x-default": withLocale("en", pathname),
    },
  };
}

export function absoluteLocalizedLanguages(pathname: string) {
  return {
    en: absoluteSiteUrl(withLocale("en", pathname)),
    fa: absoluteSiteUrl(withLocale("fa", pathname)),
  };
}
