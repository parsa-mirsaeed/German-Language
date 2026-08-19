import Link from "next/link";
import { getAlternateLocale, type Locale, withLocale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";

type LanguageSwitcherProps = {
  locale: Locale;
  pathname: string;
};

export function LanguageSwitcher({ locale, pathname }: LanguageSwitcherProps) {
  const ui = getUiDictionary(locale);
  const alternate = getAlternateLocale(locale);
  const alternateLabel = alternate === "fa" ? "فارسی" : "English";
  const currentLabel = locale === "fa" ? "فارسی" : "English";

  return (
    <nav aria-label={ui.language} className="language-switcher">
      <span aria-current="true" className="language-current" lang={locale}>{currentLabel}</span>
      <span aria-hidden="true" className="language-divider">·</span>
      <Link className="language-alternate" href={withLocale(alternate, pathname)} hrefLang={alternate} lang={alternate}>{alternateLabel}</Link>
    </nav>
  );
}
