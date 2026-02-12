import type { Confidence } from "~/lib/content";

const config: Record<
  Confidence,
  { label: string; className: string }
> = {
  validated: {
    label: "Validated",
    className: "border-accent text-accent",
  },
  hypothesis: {
    label: "Hypothesis",
    className: "border-secondary text-secondary",
  },
  speculative: {
    label: "Speculative",
    className: "border-hairline text-secondary/70",
  },
};

export function ConfidenceBadge({ level }: { level: Confidence }) {
  const { label, className } = config[level];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-[0.6875rem] leading-tight ${className}`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          level === "validated"
            ? "bg-accent"
            : level === "hypothesis"
              ? "bg-secondary"
              : "bg-hairline"
        }`}
      />
      {label}
    </span>
  );
}
