import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeDirection, locales } from "@/i18n/config";
import { localizedAlternates } from "@/i18n/site-metadata";
import { getUiDictionary } from "@/i18n/ui-dictionary";
import { getSiteUrl } from "@/lib/site-url";
import "../globals.css";
import "../locale.css";
import "../grammar-interactions.css";
import "../exercise-engine.css";
import "../search.css";

type LocaleParamsProps = { params: Promise<{ lang: string }> };
type LocaleLayoutProps = LocaleParamsProps & { children: React.ReactNode };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const ui = getUiDictionary(lang);
  return {
    metadataBase: getSiteUrl(),
    applicationName: ui.brand,
    category: "education",
    title: { default: ui.brand, template: `%s · ${ui.brand}` },
    description: ui.home.body,
    alternates: localizedAlternates(lang, "/"),
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html dir={localeDirection(lang)} lang={lang}>
      <body data-motion-policy="reduced-ready">{children}</body>
    </html>
  );
}
