import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wood (1995) — Library",
  description:
    "Notes on: The Chemical Mechanism and Evolutionary Development of Beetle Bioluminescence.",
};

export default function Wood1995Page() {
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
          The Chemical Mechanism and Evolutionary Development of Beetle
          Bioluminescence
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Keith V. Wood
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Photochem. Photobiol., Vol. 62, pp. 662&ndash;673 (1995)
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>Luciferin is unique to luminous beetles.</strong> Unlike fungal
          bioluminescence where the substrate (caffeic acid) is a common
          metabolite, D-luciferin doesn&apos;t exist anywhere else in
          biochemistry. It has to be actively synthesized by dedicated enzymes.
          That&apos;s why the substrate problem is so much harder for the firefly
          system than for the fungal one.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>The stereochemistry is non-negotiable.</strong> Luciferase only
          uses D-luciferin. L-luciferin gets adenylated but can&apos;t proceed to
          the light-producing oxygenation step because the C4 proton is
          misaligned.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>One ATP per photon, 0.88 quantum yield.</strong> The energy for
          light comes from O&#8322; oxidation, not ATP. ATP just activates the
          luciferin. Metabolic cost to your plant is essentially one ATP per
          photon. Remarkably cheap, and nearly every luciferin molecule produces a
          photon. For fungal: ~1&ndash;2 out of 100 &rarr; quantum yield of
          ~0.017. The vast majority of the chemical energy is wasted as heat.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>No post-translational modifications needed.</strong> No
          prosthetic groups, no disulfide bonds, no glycosylation. Luciferase is
          functional the instant it&apos;s translated. It folds into a functional
          enzyme straight off the ribosome. Clean heterologous expression in
          plants.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Luciferase evolved from plant 4-coumarate:CoA ligase.
          </strong>{" "}
          Luciferase is essentially a CoA synthetase that learned to oxidize
          instead of form thioesters. The first half of the reaction
          (adenylation) is identical to 4CL. Plants are full of these enzymes.
          Luciferase isn&apos;t alien to plant metabolism &mdash; it&apos;s a
          cousin of enzymes the plant already uses.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            This evolutionary relationship validates your pathway chemistry.
          </strong>{" "}
          If luciferase evolved from aromatic acid CoA ligases, the luciferin
          biosynthetic pathway likely evolved in the same metabolic neighborhood:
          aromatic intermediates, CoA chemistry, cysteine conjugation with
          quinones.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Luciferin existed before luciferase.</strong> Wood argues the
          substrate came first, probably from pigment chemistry. Benzothiazole
          structures appear in pigmentation pathways. An ancestral CoA synthetase
          encountered this pre-existing molecule, accidentally adenylated it, and
          the faint resulting glow was selectable. This means the biosynthetic
          enzymes are older than the bioluminescence function and may have had
          (and still have) other metabolic roles.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Emission color is already optimal.</strong> Wild-type{" "}
          <em>P. pyralis</em> emits yellow-green at ~560 nm, near-optimal for
          human scotopic (dark-adapted) vision. No color engineering needed. A
          few point mutations can shift emission from green to red.
        </li>
      </ul>
    </div>
  );
}
