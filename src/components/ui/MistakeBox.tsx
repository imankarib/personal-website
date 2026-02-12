interface MistakeBoxProps {
  mistake: string;
  whatHappened: string;
  changedNextTime: string;
}

export function MistakeBox({
  mistake,
  whatHappened,
  changedNextTime,
}: MistakeBoxProps) {
  return (
    <div className="my-8 border border-hairline bg-paper-dark">
      {/* Header bar */}
      <div className="border-b border-hairline px-5 py-2.5">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-secondary">
          Mistake Log
        </span>
      </div>

      <div className="space-y-4 px-5 py-5">
        {/* Mistake */}
        <div>
          <p className="mb-1 font-mono text-[0.6875rem] uppercase tracking-wider text-secondary">
            What went wrong
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-ink">
            {mistake}
          </p>
        </div>

        <hr className="border-hairline" />

        {/* What happened */}
        <div>
          <p className="mb-1 font-mono text-[0.6875rem] uppercase tracking-wider text-secondary">
            Why it happened
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-ink">
            {whatHappened}
          </p>
        </div>

        <hr className="border-hairline" />

        {/* Changed next time */}
        <div>
          <p className="mb-1 font-mono text-[0.6875rem] uppercase tracking-wider text-accent">
            What I changed
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-ink">
            {changedNextTime}
          </p>
        </div>
      </div>
    </div>
  );
}
