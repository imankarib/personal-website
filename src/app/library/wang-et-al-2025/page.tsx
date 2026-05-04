import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wang et al. (2025), Library",
  description:
    "Notes on: Comparative Transcriptomic Analysis Reveals Bioluminescence-Related Genes in Firefly Pyrocoelia pectoralis.",
};

export default function WangEtAl2025Page() {
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
          Comparative Transcriptomic Analysis Reveals
          Bioluminescence-Related Genes in Firefly{" "}
          <em>Pyrocoelia pectoralis</em>
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Guobao Wang, Lei Nie, Huanxin Li
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Genomics, Vol. 117, Issue 5, Article 111101 (Aug. 2025)
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            A third firefly species transcriptome confirming the same
            luminous-tissue gene signature.
          </strong>{" "}
          RNA-seq comparison of luminous and non-luminous larval tissues of{" "}
          <em>Pyrocoelia pectoralis</em> (the endangered Chinese firefly,
          Lampyrinae, sister to <em>Photinus pyralis</em> with a divergence
          time of ~51 Mya per Fu 2024). The differentially-expressed gene
          profile recapitulates what Fallon 2018 found in <em>P. pyralis</em>{" "}
          and Zhang 2020 found in <em>Lamprigera yunnana</em> and{" "}
          <em>Abscondita terminalis</em> (Luciolinae): a consistent,
          cross-species, cross-subfamily signature for &ldquo;what a firefly
          lantern looks like at the transcript level.&rdquo; This is the
          first dedicated luminous-vs-non-luminous tissue transcriptome for{" "}
          <em>P. pectoralis</em> specifically, even though the genome has
          been available since Fu 2017 and the chromosome-level assembly
          since Fu 2024.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Upregulated in lanterns: cystathionine gamma-lyase (CGL),
            4-hydroxyphenylpyruvate dioxygenase (HPPD),
            &beta;-glucosidase 2 (BGL2), and multiple 4-coumarate:CoA
            ligases (4CLs).
          </strong>{" "}
          CGL produces L-cysteine from cystathionine, confirming active
          cysteine biosynthesis in lanterns. HPPD converts
          4-hydroxyphenylpyruvate to homogentisate, the first committed
          step of the tyrosine-catabolism &rarr; benzoquinone-acetic-acid
          route Zhang 2020 proposed as an alternative BQ source. BGL2
          hydrolyzes arbutin to release hydroquinone, the canonical Oba
          2013 / Kanie 2018 step. Multiple 4CL paralogs were upregulated
          and explicitly proposed as candidates for the formation of the
          2-S-cysteinylhydroquinone intermediate. All four findings
          reproduce Zhang 2020&apos;s transcriptomic results in a
          phylogenetically distant Lampyrinae species.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Downregulated in lanterns: cysteine dioxygenase type 1 (CDO1).
          </strong>{" "}
          CDO1 is the entry point of cysteine catabolism (cysteine &rarr;
          cysteinesulfinic acid, ultimately to taurine and inorganic
          sulfate). Its downregulation in lanterns confirms the Zhang 2020
          finding that lantern tissue suppresses cysteine catabolism while
          upregulating cysteine biosynthesis, channeling the L-cysteine
          pool toward luciferin biosynthesis rather than degradation. This
          is the cleanest single piece of evidence that lantern tissue is
          metabolically optimized to retain L-cysteine, and the reciprocal
          regulation (CGL up + CDO1 down) is now seen in three independent
          firefly species.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>The cross-species convergence is the headline.</strong>{" "}
          Five firefly species across three subfamilies (Lampyrinae:{" "}
          <em>P. pyralis</em>, <em>P. pectoralis</em>; Luciolinae:{" "}
          <em>L. yunnana</em>, <em>A. terminalis</em>,{" "}
          <em>A. lateralis</em>) now have published lantern transcriptomes,
          and the same core gene set keeps showing up: BGL, HPPD, polyphenol
          oxidases / laccases, 4CL, ACOT, luciferase, LST, with CGL up and
          CDO1 down on the cysteine side. This level of cross-species
          convergence is the strongest available indicator that the
          candidate gene assignments are reproducible biological signal
          rather than per-species artifact, and it is the basis on which
          any heterologous reconstitution effort can confidently pick which
          beetle homologs to clone.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Methodological scope: larval rather than adult tissue.
          </strong>{" "}
          Worth flagging that this is a larval transcriptome, while Oba
          2013 and Kanie 2018 established that luciferin biosynthesis
          occurs primarily in the pupal stage in <em>L. lateralis</em>.
          Wang 2025 confirms that the same gene-expression signature is
          present in larval lantern tissue (which is bioluminescent,
          fireflies glow as larvae before they flash as adults), so the
          biosynthetic machinery is at least transcriptionally engaged in
          larvae too. This is consistent with Strause et al. 1979&apos;s
          observation that luciferin synthesis rate is more abundant in
          larval and pupal stages than in adults.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Limited new mechanistic insight; this is a confirmation paper,
            not a paradigm-shifting one.
          </strong>{" "}
          No knockout experiments, no in vitro enzyme assays, no novel
          pathway proposals beyond the existing literature. The
          contribution is replication of the Zhang 2020 / Fallon 2018
          transcriptomic signature in another Lampyrinae species, plus
          formal documentation of the <em>P. pectoralis</em> lantern
          transcriptome itself as a resource for the field. Useful to cite
          for &ldquo;this finding has been replicated across multiple
          firefly species&rdquo; claims, less useful as a primary
          mechanistic citation.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This paper
        strengthens the bibliography by giving cross-species replication
        for the four enzymatic gene assignments in the construct design.
        Three concrete uses. First, for TU3 (BGLU46+SKL): &beta;-glucosidase
        2 upregulation in <em>P. pectoralis</em> lanterns adds a third
        independent firefly species (after <em>P. pyralis</em> via Fallon
        2018 and <em>L. yunnana</em> / <em>A. terminalis</em> via Zhang
        2020) confirming that BGL is part of the lantern biosynthetic
        machinery. Cross-species convergence on the same gene class
        strengthens the case for using a BGL ortholog (<em>Arabidopsis</em>{" "}
        BGLU46 in this case) as TU3, and weakens any reviewer objection
        that the gene assignment rests on a single species&apos;
        transcriptomics. Second, the cysteine-anabolism-up /
        cysteine-catabolism-down pattern (CGL up, CDO1 down) reproduced
        here matters for the heterologous host design: it tells you that
        fireflies don&apos;t accomplish cysteine availability through
        specialized lantern-only biosynthesis machinery, just by turning
        off catabolism. Tobacco runs active cysteine biosynthesis through
        its sulfur assimilation pathway and does not have a strong
        lantern-equivalent CDO1-driven cysteine sink, so by default{" "}
        <em>N. tabacum</em> leaf cells should already be in a &ldquo;high
        cysteine availability&rdquo; state that favors the spontaneous BQ
        + L-cys &rarr; luciferin chemistry, the engineering doesn&apos;t
        need to add cysteine biosynthesis genes. Third, the 4CL
        upregulation result is intellectually interesting because plants
        natively have 4CL as a core phenylpropanoid pathway enzyme, so
        endogenous tobacco 4CL might in principle participate in the
        heterologous luciferin pathway by activating phenolic intermediates
        to CoA esters, which could either help or hurt depending on flux
        competition. Worth keeping on a watch list for Phase 2
        troubleshooting if the four-TU construct underperforms
        expectations: if 4CL-dependent intermediates accumulate in
        tobacco, native plant 4CL activity might be a relevant background
        variable. Cite Wang 2025 alongside Zhang 2020 and Fallon 2018
        wherever cross-species transcriptomic convergence is the argument
        being made, three papers, three subfamilies, same gene list, same
        regulatory direction.
      </p>
    </div>
  );
}
