import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { isLocale, withLocale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const ui = getUiDictionary(lang);

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href={withLocale(lang, "/")}>
          <span className="brand-mark" aria-hidden="true">
            DE
          </span>
          {ui.brand}
        </Link>
        <LanguageSwitcher locale={lang} pathname="/" />
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">{ui.home.eyebrow}</p>
          <h1>{ui.home.title}</h1>
          <p className="hero-copy">{ui.home.body}</p>
          <Link className="primary-link" href={withLocale(lang, "/a1")}>
            {ui.home.openBook}
          </Link>
        </div>

        <aside className="hero-note">
          <strong>{ui.home.noteTitle}</strong>
          {ui.home.noteBody}
        </aside>
      </section>
    </main>
  );
}
