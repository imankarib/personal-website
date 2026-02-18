"use client";

import { useState } from "react";
import Link from "next/link";
import { papers } from "~/lib/library-data";

export default function LibraryPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = q
    ? papers.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q) ||
          p.keywords.toLowerCase().includes(q),
      )
    : papers;

  const pre2000 = filtered.filter((p) => p.era === "pre-2000s");
  const modern = filtered.filter((p) => p.era === "2010-2026");

  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      {/* Page header */}
      <header className="mb-14">
        <span className="text-secondary mb-3 block font-mono text-xs tracking-widest uppercase">
          Library
        </span>
        <h1 className="font-heading text-ink text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
          Paper notes
        </h1>
        <p className="text-secondary mt-3 max-w-[540px] text-base leading-relaxed">
          Important ideas and takeaways from research papers, organized by era.
        </p>

        {/* Search */}
        <div className="mt-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers, authors, or notes..."
            className="bg-paper-dark border-hairline text-ink placeholder:text-secondary w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>
      </header>

      {/* Pre-2000s */}
      {pre2000.length > 0 && (
        <section className="mb-16">
          <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
            Pre-2000s Research
          </h2>
          <div className="bg-hairline mt-4 h-px w-full" aria-hidden="true" />

          <ul className="mt-6 space-y-4">
            {pre2000.map((p) => (
              <li key={p.slug}>
                <Link href={`/library/${p.slug}`} className="group block">
                  <span className="text-ink group-hover:text-accent text-[1.0625rem] font-medium transition-colors">
                    {p.title}
                  </span>
                  <span className="text-secondary mt-1 block text-sm">
                    {p.authors}
                  </span>
                  <span className="text-secondary mt-0.5 block font-mono text-xs">
                    {p.journal}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 2010–2026 */}
      {modern.length > 0 ? (
        <section className="mb-16">
          <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
            2010 &ndash; 2026 Research
          </h2>
          <div className="bg-hairline mt-4 h-px w-full" aria-hidden="true" />

          <ul className="mt-6 space-y-4">
            {modern.map((p) => (
              <li key={p.slug}>
                <Link href={`/library/${p.slug}`} className="group block">
                  <span className="text-ink group-hover:text-accent text-[1.0625rem] font-medium transition-colors">
                    {p.title}
                  </span>
                  <span className="text-secondary mt-1 block text-sm">
                    {p.authors}
                  </span>
                  <span className="text-secondary mt-0.5 block font-mono text-xs">
                    {p.journal}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        !q && (
          <section className="mb-16">
            <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
              2010 &ndash; 2026 Research
            </h2>
            <div className="bg-hairline mt-4 h-px w-full" aria-hidden="true" />
            <p className="text-secondary mt-6 text-sm italic">
              Entries coming soon.
            </p>
          </section>
        )
      )}

      {/* No results */}
      {q && filtered.length === 0 && (
        <p className="text-secondary text-sm italic">
          No papers matching &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  );
}
