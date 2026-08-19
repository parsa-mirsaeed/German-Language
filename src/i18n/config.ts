export const locales = ["en", "fa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "site-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}

export function localeDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "fa" ? "rtl" : "ltr";
}

export function withLocale(locale: Locale, pathname: string): string {
  if (pathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "fa" : "en";
}

export function preferredLocaleFromAcceptLanguage(
  header: string | null | undefined,
): Locale {
  if (!header) {
    return defaultLocale;
  }

  const ranked = header
    .split(",")
    .map((entry, index) => {
      const [rawRange, ...parameters] = entry.trim().split(";");
      const primaryLanguage = rawRange?.trim().toLowerCase().split("-")[0];
      const locale = isLocale(primaryLanguage) ? primaryLanguage : undefined;
      const qParameter = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.toLowerCase().startsWith("q="));
      const parsedQuality = qParameter
        ? Number.parseFloat(qParameter.slice(2))
        : 1;
      const quality = Number.isFinite(parsedQuality)
        ? Math.min(1, Math.max(0, parsedQuality))
        : 0;

      return { locale, quality, index };
    })
    .filter(
      (entry): entry is { locale: Locale; quality: number; index: number } =>
        Boolean(entry.locale) && entry.quality > 0,
    )
    .sort((left, right) =>
      right.quality - left.quality || left.index - right.index,
    );

  return ranked[0]?.locale ?? defaultLocale;
}
