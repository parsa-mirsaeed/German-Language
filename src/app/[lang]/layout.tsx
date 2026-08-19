import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeDirection, locales } from "@/i18n/config";
import "../globals.css";
import "../locale.css";
import "../grammar-interactions.css";
import "../exercise-engine.css";
import "../search.css";

type LocaleParamsProps = {
  params: Promise<{ lang: string }>;
};

type LocaleLayoutProps = LocaleParamsProps & {
  children: React.ReactNode;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return {
    applicationName: "German A1 Grammar",
    category: "education",
    title: {
      default: "German A1 Grammar",
      template: "%s · German A1 Grammar",
    },
    description:
      "A structured, interactive German A1 grammar book built for complete, step-by-step learning.",
    keywords: [
      "German A1",
      "German grammar",
      "Deutsch A1",
      "German exercises",
      "German language learning",
    ],
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content =
    lang === "fa" ? (
      <div data-localization-state="pending" dir="ltr" lang="en">
        {children}
      </div>
    ) : (
      children
    );

  return (
    <html dir={localeDirection(lang)} lang={lang}>
      <body data-motion-policy="reduced-ready">{content}</body>
    </html>
  );
}
