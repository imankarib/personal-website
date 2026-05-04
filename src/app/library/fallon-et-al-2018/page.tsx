import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fallon et al. (2018), Library",
  description:
    "Notes on: Firefly genomes illuminate parallel origins of bioluminescence in beetles.",
};

export default function FallonEtAl2018Page() {
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
          Firefly Genomes Illuminate Parallel Origins of Bioluminescence in
          Beetles
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Timothy R. Fallon, Sarah E. Lower, Ching-Ho Chang, Manabu
          Bessho-Uehara, Gavin J. Martin, Adam J. Bewick, et al.
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          eLife, Vol. 7, e36495 (Oct. 16, 2018)
        </p>
      </header>

      <p className="text-ink mb-8 text-[1.0625rem] leading-[1.78]">
        The first comprehensive firefly genome paper. Three reference genomes:{" "}
        <em>Photinus pyralis</em> (your source organism), Japanese{" "}
        <em>Aquatica lateralis</em>, and the Caribbean click beetle{" "}
        <em>Ignelater luminosus</em>. The <em>P. pyralis</em> assembly is
        chromosome-scale (Hi-C scaffolded into 11 linkage groups, including the
        X) and BUSCO-complete at 97.2%. Every comparative firefly analysis
        since this paper traces back to these genesets.
      </p>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Bioluminescence evolved independently at least twice in beetles.
          </strong>{" "}
          Both firefly Luc and click beetle Luc derive from peroxisomal fatty
          acyl-CoA synthetase (PACS) ancestors, but via independent
          neofunctionalization events, confirmed by synteny analysis and a
          positive-selection signal (aBSREL, dN/dS = 3.98) on the click beetle
          ancestral branch. Convergent solution from a shared raw material.
          Implication for protein engineering: luciferase activity is a
          comparatively easy novelty to evolve from PACS scaffolds, which
          matters if you ever want to do directed evolution on the enzyme.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Two firefly luciferases, Luc1 and Luc2, and a nomenclature trap.
          </strong>{" "}
          Luc1 is the bright adult/larval lantern luciferase originally cloned
          by de Wet 1985. Luc2 is a paralog producing the dim glow of eggs,
          ovaries, and pupae. Important: iGEM&apos;s part-name &ldquo;luc2&rdquo;
          for BBa_K389004 is unrelated to Fallon&apos;s Luc2, BBa_K389004 is
          Fallon&apos;s Luc1. Worth knowing before citing this paper, since
          calling your TU1 enzyme &ldquo;luc2&rdquo; in a manuscript will read
          as the wrong gene to anyone working from the genome paper.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The lantern HE+DE enzyme list, your candidate mining ground.
          </strong>{" "}
          Figure 5 of this paper is where PPYR_02911 came from. The authors
          filtered for enzymes that are simultaneously (a) highly expressed in
          the adult lantern (top 90th percentile), (b) differentially expressed
          lantern-vs-fatbody, and (c) directly orthologous between{" "}
          <em>P. pyralis</em> and <em>A. lateralis</em>. The intersection is
          the conserved core of firefly lantern biochemistry. PPYR_02911 (your
          CYP4C P450), PPYR_05464 (your peroxiredoxin backup), cystathionine
          gamma-lyase, adenylate kinase, and peroxisomal biogenesis factors all
          live here.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Peroxisomal targeting is structural to the bioluminescence
            reaction.
          </strong>{" "}
          Luc1 has a C-terminal PTS1 (SKL); the combined adenylyl-sulfate
          kinase / sulfate adenylyltransferase (ASKSA) that produces the PAPS
          cofactor for luciferin sulfonation also has a PTS1 specifically in
          fireflies (and not in their non-luminous orthologs); PEX11 (peroxin
          11, peroxisome biogenesis) is HE+DE in the lantern. The peroxisome
          is where the chemistry happens. This justifies the C-terminal SKL
          tags you&apos;re appending to luc2 in TU1 and BGLU46 in TU3, the
          cofactor supply and organelle machinery are already set up for
          peroxisome-localized substrates.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Cystathionine gamma-lyase HE+DE supports a closed-loop cysteine
            pool.
          </strong>{" "}
          The enzyme cleaves cystathionine to cysteine + &alpha;-ketobutyrate +
          ammonia. Its lantern enrichment fits Okada 1974&apos;s old claim
          that cysteine is regenerated from oxyluciferin and recycled, meaning
          the photocyte runs a tighter cysteine economy than de novo synthesis
          alone would suggest. Connects directly to Oba 2013&apos;s
          two-cysteine incorporation model: the lantern is set up to reuse the
          cysteines it consumes.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The luciferin biosynthesis pathway is explicitly still open.
          </strong>{" "}
          Fallon notes that &ldquo;the enzymes of the de novo biosynthetic
          pathway for firefly luciferin remain unknown,&rdquo; and explicitly
          raises the possibility, given Kanie 2016&apos;s spontaneous
          benzoquinone+cysteine condensation, that part of the pathway may not
          even be enzymatic. This paper assembles the candidate list but does
          not solve it. That gap is the project space your work occupies.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This is the genome paper.
        PPYR_02911 (TU2), BGLU46 (TU3), ACOT9 (TU4), every Twist order you have
        outstanding was either pulled directly from this paper&apos;s geneset
        or identified via its lantern expression analysis. The SKL-targeting
        strategy on TU1 and TU3 is justified by the peroxisomal localization
        evidence here. If Oba 2013 is the biochemical ground truth, Fallon
        2018 is the genetic source code, and the unresolved candidate list it
        leaves behind is exactly what you&apos;re building constructs to test.
      </p>
    </div>
  );
}
