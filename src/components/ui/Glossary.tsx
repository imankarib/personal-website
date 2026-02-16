interface GlossaryEntry {
  term: string;
  definition: string;
}

interface GlossaryProps {
  entries: GlossaryEntry[];
}

export function Glossary({ entries }: GlossaryProps) {
  return (
    <details className="group my-6 rounded border border-hairline bg-paper-dark">
      <summary className="cursor-pointer select-none px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-secondary">
        Dictionary ({entries.length} terms)
      </summary>
      <dl className="border-t border-hairline px-5 py-4">
        {entries.map((entry, i) => (
          <div key={entry.term} className={i > 0 ? "mt-3" : ""}>
            <dt className="text-sm font-semibold text-ink">{entry.term}</dt>
            <dd className="mt-0.5 text-sm leading-relaxed text-secondary">
              {entry.definition}
            </dd>
          </div>
        ))}
      </dl>
    </details>
  );
}
