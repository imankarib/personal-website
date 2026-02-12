interface ProtocolStep {
  text: string;
  params?: string;
}

interface ProtocolCardProps {
  title: string;
  steps: ProtocolStep[];
  pitfalls?: string[];
  expectedResults?: string;
}

export function ProtocolCard({
  title,
  steps,
  pitfalls,
  expectedResults,
}: ProtocolCardProps) {
  return (
    <div className="my-8 border border-hairline">
      {/* Title bar */}
      <div className="border-b border-hairline bg-paper-dark px-5 py-3">
        <h4 className="font-heading text-base font-semibold text-ink">
          {title}
        </h4>
        <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-secondary">
          Protocol
        </span>
      </div>

      {/* Steps */}
      <div className="px-5 py-5">
        <ol className="list-none space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-hairline font-mono text-[0.6875rem] text-secondary">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-[0.9375rem] leading-relaxed text-ink">
                  {step.text}
                </p>
                {step.params && (
                  <code className="mt-1 block font-mono text-[0.8125rem] text-secondary">
                    {step.params}
                  </code>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Pitfalls */}
        {pitfalls && pitfalls.length > 0 && (
          <div className="mt-6 border-t border-hairline pt-4">
            <p className="mb-2 font-mono text-[0.6875rem] uppercase tracking-wider text-secondary">
              Pitfalls
            </p>
            <ul className="space-y-1.5">
              {pitfalls.map((pitfall, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[0.9375rem] leading-relaxed text-ink"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                  {pitfall}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expected results */}
        {expectedResults && (
          <div className="mt-6 border-t border-hairline pt-4">
            <p className="mb-2 font-mono text-[0.6875rem] uppercase tracking-wider text-accent">
              Expected results
            </p>
            <p className="text-[0.9375rem] leading-relaxed text-ink">
              {expectedResults}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
