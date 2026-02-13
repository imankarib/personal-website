import Link from "next/link";

interface MilestoneItem {
  label: string;
  done: boolean;
}

const milestones: MilestoneItem[] = [
  { label: "Parts list finalized", done: true },
  { label: "PID tuning", done: false },
  { label: "First amplification run", done: false },
];

function CheckboxIcon({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <svg
        className="mt-[3px] h-[13px] w-[13px] shrink-0"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="13"
          height="13"
          rx="1.5"
          className="stroke-glow"
          strokeWidth="1"
        />
        <path
          d="M4 7.5l2 2 4-4.5"
          className="stroke-glow"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="mt-[3px] h-[13px] w-[13px] shrink-0"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="13"
        rx="1.5"
        className="stroke-hairline"
        strokeWidth="1"
      />
    </svg>
  );
}

export function CurrentFocusCard() {
  return (
    <section className="border-hairline border-t py-14">
      <div className="mx-auto max-w-[1040px] px-6">
        <Link href="/projects/diy-pcr-thermocycler" className="block">
          <div className="focus-card border-hairline border-l-glow from-paper-dark to-paper max-w-[520px] rounded-lg border border-l-[3px] bg-gradient-to-br py-5 pr-6 pl-5 shadow-sm">
            {/* Label */}
            <p className="text-secondary/60 font-mono text-[0.625rem] tracking-[0.2em] uppercase">
              Current focus
            </p>

            {/* Title */}
            <h3 className="font-heading text-ink mt-2.5 text-[1.125rem] leading-snug font-semibold">
              The Missing Enzyme Hunt
            </h3>

            {/* Description */}
            <p className="text-secondary mt-1.5 text-[0.9375rem] leading-relaxed">
              Designing a functional thermocycler from off-the-shelf components.
              Currently tuning the PID controller for faster ramp rates.
            </p>

            {/* Meta */}
            <p className="text-secondary/60 mt-3 font-mono text-[0.6875rem]">
              In progress &middot; Last update: Feb 2026
            </p>

            {/* Milestones */}
            <div className="border-hairline mt-4 border-t pt-4">
              <p className="text-secondary/60 font-mono text-[0.625rem] tracking-[0.15em] uppercase">
                Milestones
              </p>
              <ul className="mt-2.5 space-y-2">
                {milestones.map((m) => (
                  <li key={m.label} className="flex items-start gap-2.5">
                    <CheckboxIcon checked={m.done} />
                    <span
                      className={`text-[0.8125rem] leading-snug ${
                        m.done
                          ? "text-secondary/50 decoration-hairline line-through"
                          : "text-ink"
                      }`}
                    >
                      {m.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
