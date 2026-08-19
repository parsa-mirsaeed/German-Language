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
