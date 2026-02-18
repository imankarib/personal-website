import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ow et al. (1986) — Library",
  description:
    "Notes on: Transient and stable expression of the firefly luciferase gene in plant cells and transgenic plants.",
};

export default function OwEtAl1986Page() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <Link
        href="/library"
        className="text-secondary hover:text-accent mb-8 inline-flex items-center gap-1 text-sm transition-colors"
      >
        &larr; Library
      </Link>

      <header className="mb-10">
        <h1 className="font-heading text-ink text-[1.5rem] font-semibold leading-snug tracking-tight sm:text-[1.75rem]">
          David W. Ow, Keith V. Wood, Marlene DeLuca, Jeffrey R. De Wet,
          Donald R. Helinski, Stephen H. Howell
        </h1>
        <p className="text-secondary mt-2 font-mono text-xs">
          Science, New Series, Vol. 234, No. 4778 (Nov. 14, 1986), pp. 856&ndash;859
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>ATP isn&apos;t the bottleneck.</strong> Plant cells have enough
          endogenous ATP to drive the luciferase reaction without adding any
          externally. Plant cells will have plenty of ATP for firefly luciferase.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>You need very little enzyme to get a signal.</strong>{" "}
          300&ndash;900 luciferase molecules per cell gave detectable light on a
          luminometer. With a strong promoter you&apos;ll have orders of magnitude
          more protein than that. The enzyme side of the equation is easy, but
          the substrate supply is the entire problem.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Terminator choice matters.</strong> Deleting the firefly&apos;s
          own polyA signal crushed expression to 8%. In your multi-gene Golden
          Gate constructs, don&apos;t treat terminator selection as an afterthought
          for any of your four cassettes. Each one affects mRNA stability and
          protein levels.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>35S promoter is brightest in roots.</strong> They saw higher
          expression in roots than leaves, confirmed independently. For
          proof-of-concept agroinfiltration in <em>N. benthamiana</em> leaves this
          doesn&apos;t matter. But if you ever go to stable transgenics, consider
          that 35S might make your plant glow brightest underground. Leaf-specific
          promoters might be worth testing later.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Exogenous luciferin delivery is terrible.</strong> They needed
          1 mM luciferin in 20% DMSO, 6 hours of root watering, and a 24-hour
          film exposure. The signal was a mess of transport artifacts, not
          biology.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Exogenous luciferin is also toxic.</strong> Kills cells above
          400 &micro;M. The enzymatic pathway should produce luciferin at low
          steady-state concentrations, continuously replenished but never hitting
          toxic bolus levels.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>The sensitivity advantage is real.</strong> They detected
          3&times;10&#8310; luciferase molecules and claimed 100&times; better
          sensitivity than CAT assays. Even modest endogenous luciferin production
          combined with efficient luciferase should produce a detectable signal.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Bottom line from this paper:</strong> The enzyme works great in
          plants. Always has, since 1986. The only thing that&apos;s ever been
          missing is the substrate.
        </li>
      </ul>
    </div>
  );
}
