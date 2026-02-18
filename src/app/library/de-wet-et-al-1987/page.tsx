import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "De Wet et al. (1987) — Library",
  description:
    "Notes on: Firefly Luciferase Gene: Structure and Expression in Mammalian Cells.",
};

export default function DeWetEtAl1987Page() {
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
          Firefly Luciferase Gene: Structure and Expression in Mammalian Cells
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Jeffrey R. De Wet, Keith V. Wood, Marlene DeLuca,
          Donald R. Helinski, Suresh Subramani
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Mol. Cell. Biol., Vol. 7, No. 2 (Feb. 1987), pp. 725&ndash;737
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>Continuous production beats flash kinetics.</strong> With excess
          exogenous luciferin you get a bright flash that decays to 10% within a
          minute. But your endogenous pathway would supply luciferin at a steady
          trickle.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Single-copy gene.</strong> Luciferase is one gene in the{" "}
          <em>P. pyralis</em> genome, not a family.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Peroxisomal targeting was already visible.</strong> They saw
          punctate staining in mammalian cells and didn&apos;t fully understand it
          yet. The luciferase has the C-terminal -SKL signal and will go to
          peroxisomes in plant cells too. Each cell has dozens to hundreds of
          peroxisomes, so you get diffuse glow from distributed reaction sites
          rather than single bright spots. That&apos;s what you want.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Use the cDNA, not the genomic gene.</strong> Firefly luciferase
          introns are tiny (&lt;60 bp each) and don&apos;t splice in heterologous
          systems. Your Addgene plasmid already has the intronless cDNA version.
          If you ever needed to clone another firefly gene yourself (e.g. directly
          from genomic DNA rather than from an existing plasmid), you&apos;d want to
          either use cDNA or codon-optimize a synthetic version rather than using
          the raw genomic sequence. Firefly introns are small but they won&apos;t
          splice properly in plant cells.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Intracellular ATP is sufficient (re-confirmed).</strong> Adding
          exogenous ATP and Mg&sup2;&#8314; to intact cells didn&apos;t increase
          signal. The cell&apos;s own pools are enough. Don&apos;t worry about ATP
          availability in peroxisomes &mdash; they import it for &beta;-oxidation
          anyway.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>The core argument for your system choice is right here.</strong>{" "}
          Bacterial luciferase needs two subunits from two genes plus three more
          genes for substrate regeneration. Firefly luciferase is one polypeptide.
          The tradeoff: the bacterial system is genetically complex but
          self-contained for substrate. The firefly system is enzymatically simple
          but requires you to solve substrate supply separately.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Everything traces back to this sequence.</strong> Their original
          1985 cDNA clone was incomplete (missing the first six N-terminal
          codons). This paper fixed it with the full genomic sequence. Every
          downstream variant (Luc2, codon-optimized versions, your Addgene
          plasmid) descends from the complete sequence established here.
        </li>
      </ul>
    </div>
  );
}
