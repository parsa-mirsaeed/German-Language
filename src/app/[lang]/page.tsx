import Link from "next/link";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { isLocale, withLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href={withLocale(lang, "/")}>
          <span className="brand-mark" aria-hidden="true">
            DE
          </span>
          German A1 Grammar
        </Link>
        <LanguageSwitcher locale={lang} pathname="/" />
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">German, one system at a time</p>
          <h1>See the grammar. Build the sentence.</h1>
          <p className="hero-copy">
            A structured German A1 book designed around formula, meaning,
            usage, recognition, examples, mistakes, speaking, and practice —
            without scattering one topic across ten screens.
          </p>
          <Link className="primary-link" href={withLocale(lang, "/a1")}>
            Open the A1 book
          </Link>
        </div>

        <aside className="hero-note">
          <strong>Precision workbook × kinetic grammar atlas</strong>
          The source workbook’s all-in-one clarity becomes a modern German
          learning surface with reusable grammar boards, teacher annotations,
          case-aware visuals, and motion that will teach rather than decorate.
        </aside>
      </section>
    </main>
  );
}
