import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            DE
          </span>
          German A1 Grammar
        </Link>
        <span className="eyebrow">Foundation</span>
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
          <Link className="primary-link" href="/a1">
            Open the A1 book
          </Link>
        </div>

        <aside className="hero-note">
          <strong>PR 01 foundation</strong>
          This first implementation proves the content contract, rendering
          architecture, design tokens, and CI. Final Unit 1 authoring and
          instructional motion belong to the next planned PRs.
        </aside>
      </section>
    </main>
  );
}
