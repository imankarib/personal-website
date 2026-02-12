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
    <section className="border-t border-hairline py-14">
      <div className="mx-auto max-w-[1040px] px-6">
        <Link href="/projects/diy-pcr-thermocycler" className="block">
          <div className="focus-card max-w-[520px] rounded-lg border border-hairline border-l-[3px] border-l-glow bg-gradient-to-br from-paper-dark to-paper py-5 pl-5 pr-6 shadow-sm">
            {/* Label */}
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-secondary/60">
              Current focus
            </p>

            {/* Title */}
            <h3 className="mt-2.5 font-heading text-[1.125rem] font-semibold leading-snug text-ink">
              Building a DIY PCR Thermocycler
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-secondary">
              Designing a functional thermocycler from off-the-shelf components.
              Currently tuning the PID controller for faster ramp rates.
            </p>

            {/* Meta */}
            <p className="mt-3 font-mono text-[0.6875rem] text-secondary/60">
              In progress &middot; Last update: Feb 2026
            </p>

            {/* Milestones */}
            <div className="mt-4 border-t border-hairline pt-4">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-secondary/60">
                Milestones
              </p>
              <ul className="mt-2.5 space-y-2">
                {milestones.map((m) => (
                  <li key={m.label} className="flex items-start gap-2.5">
                    <CheckboxIcon checked={m.done} />
                    <span
                      className={`text-[0.8125rem] leading-snug ${
                        m.done
                          ? "text-secondary/50 line-through decoration-hairline"
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
