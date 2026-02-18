import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schneider et al. (1990) — Library",
  description:
    "Notes on: The In Vivo Pattern of Firefly Luciferase Expression in Transgenic Plants.",
};

export default function SchneiderEtAl1990Page() {
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
          The In Vivo Pattern of Firefly Luciferase Expression in Transgenic
          Plants
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Michel Schneider, David W. Ow, Stephen H. Howell
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Plant Mol. Biol., Vol. 14 (1990)
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Luciferase works fine in both peroxisomes and chloroplasts.
          </strong>{" "}
          They redirected luciferase to chloroplasts with a transit peptide and
          got the same light output as peroxisome-localized enzyme. The enzyme
          itself doesn&apos;t care which compartment it&apos;s in. But that was
          with flooded exogenous luciferin. When you&apos;re making luciferin
          endogenously, co-localization with luciferase in the same compartment
          becomes the whole point.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            35S promoter is biased toward stems and roots, not leaves.
          </strong>{" "}
          Confirmed across multiple independent transformants (not position
          effect noise, real promoter behavior). For your agroinfiltration
          proof-of-concept this doesn&apos;t matter (you&apos;re injecting
          directly into leaves). But for eventual stable transgenics where you
          want visible leaf glow, you&apos;d want to think about leaf-specific
          promoters like rbcS.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Promoter choice genuinely controls where the plant glows.
          </strong>{" "}
          Three different promoters gave three distinct patterns that were
          reproducible and matched mRNA levels. The expression pattern faithfully
          reflects transcription. Luciferase protein is stable and doesn&apos;t
          get selectively degraded in certain tissues. This means when you
          eventually optimize, you have real control over spatial expression
          through promoter selection.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Exogenous luciferin distorts the light pattern.</strong> Even
          though enzyme distribution was promoter-dependent, the actual glow
          pattern was skewed toward tissues in direct contact with the luciferin
          solution. Stems and roots glowed brighter than enzyme levels predicted
          because that&apos;s where the substrate physically was. This is the
          fundamental problem with exogenous delivery.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>The co-compartmentalization argument.</strong> When substrate is
          flooding in from outside, it reaches peroxisomes and chloroplasts
          equally well &mdash; compartment doesn&apos;t matter. The advantage of
          targeting your whole pathway to peroxisomes only emerges with endogenous
          production, where local concentration at the enzyme matters. That&apos;s
          the design logic behind keeping luciferase in its native peroxisomal
          location alongside your biosynthetic enzymes.
        </li>
      </ul>
    </div>
  );
}
