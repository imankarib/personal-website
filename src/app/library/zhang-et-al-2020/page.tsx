import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zhang et al. (2020), Library",
  description:
    "Notes on: Genomic and experimental data provide new insights into luciferin biosynthesis and bioluminescence evolution in fireflies.",
};

export default function ZhangEtAl2020Page() {
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
          Genomic and Experimental Data Provide New Insights Into Luciferin
          Biosynthesis and Bioluminescence Evolution in Fireflies
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Ru Zhang, Jinwu He, Zhiwei Dong, Guichun Liu, Yuan Yin, Xinying
          Zhang, Qi Li, Yandong Ren, Yongzhi Yang, Wei Liu, Xianqing Chen,
          Wenhao Xia, Kang Duan, Fei Hao, Zeshan Lin, Jie Yang, Zhou Chang,
          Ruoping Zhao, Wenting Wan, Sihan Lu, Yanqiong Peng, Siqin Ge, Wen
          Wang, Xueyan Li
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Scientific Reports, Vol. 10, Article 15882 (Sep. 28, 2020)
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Two more firefly genomes, <em>Lamprigera yunnana</em> and{" "}
            <em>Abscondita terminalis</em>.
          </strong>{" "}
          PacBio long-read assemblies of a glow species (<em>L. yunnana</em>,
          1,053 Mb) and a flash species (<em>A. terminalis</em>, 501 Mb),
          bringing the total of published firefly genomes to five at time of
          publication. Useful as additional comparative anchors but the
          genomes themselves are not the headline result for the project, the
          biochemical claims are.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Direct experimental validation that ACOT converts L-luciferin to
            D-luciferin.
          </strong>{" "}
          This is the paper&apos;s most important contribution from a
          pathway-completion standpoint. The authors expressed three{" "}
          <em>A. terminalis</em> acyl-CoA thioesterase candidates (AteACOT1,
          AteACOT4, AteACOT9) in <em>E. coli</em> and tested them in vitro
          alongside firefly luciferase with L-luciferin, ATP/Mg&sup2;&#8314;,
          and CoA-SH; only AteACOT1, the cluster-I ortholog with high
          transcript and protein abundance in lanterns, efficiently produced
          D-luciferin, monitored on a chiral HPLC column. This is the first
          direct enzymatic confirmation in an insect ACOT of the deracemization
          step that Niwa 2006 and Maeda 2017 had outlined with a bacterial
          TESB stand-in. AteACOT1 is the orthologue of the gene Iman has
          cloned as TU4 (PpyrACOT9 in the iGEM/Fallon nomenclature lineage),
          and the cluster-I clade in the Zhang phylogeny is the same ancestral
          mitochondrial-ACOT lineage (HomoACOT9/MusACOT9-10 sisters) that
          Fallon 2018 had identified.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            A revised, more complete luciferin biosynthesis pathway is
            proposed, but partly speculative.
          </strong>{" "}
          The authors integrate genomics, lantern transcriptomes/proteomes,
          and Abd-B knockout mutants (CRISPR/Cas9, larvae lacking lanterns) to
          argue for a route in which (i) cysteine for luciferin comes from
          anabolism (cystathionine-&gamma;-lyase highly expressed; CDO/CSAD
          low), (ii) the benzoquinone precursor may derive from tyrosine
          catabolism via homogentisate &rarr; benzoquinone-acetic acid &rarr;
          activation by 4CL &rarr; &beta;-oxidation-style acetyl removal by
          sterol-carrier-protein-X (SCPx) thiolase to give p-benzoquinone, in
          addition to or instead of the arbutin-stored hydroquinone route. The
          cysteine-anabolism point is well-supported. The tyrosine to BQ route
          is interesting but speculative, it rests on co-expression rather
          than isotope tracing or in vitro reconstitution, and the SCPx
          thiolase step doing a non-canonical decarboxylative cleavage to
          yield the BQ backbone is a mechanistic stretch that has not been
          directly demonstrated. Worth knowing about; not worth building TUs
          around.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Peroxisomal targeting of ACOT remains unresolved.</strong>{" "}
          AteACOT1 has no detectable PTS1, mirroring the situation in{" "}
          <em>Drosophila</em> and other insect ACOTs. The authors do the
          deracemization assay in vitro, so the cell-biology question of how
          a PTS1-less ACOT gets into the peroxisome where luciferase is acting
          is left open. Practically: for TU4, Iman has reasonably retained
          ACOT9 without an SKL tag based on the <em>M. musculus</em>{" "}
          mitochondrial-targeting precedent, but the question of whether the
          active firefly enzyme actually reaches the peroxisome in a
          heterologous system is genuinely unresolved across the field, not a
          project-specific gap, a community-wide one.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Convergent evolution of beetle bioluminescence is reconfirmed with
            broader sampling.
          </strong>{" "}
          Synteny analysis across five firefly genomes plus{" "}
          <em>I. luminosus</em> shows that the Lampyridae luciferase locus is
          conserved among fireflies but not syntenic with the Elateridae
          luciferase locus, and that the elaterid luciferase clade is sister
          to a separate Elateridae-specific PACS clade. Estimated divergence
          of the Lampyridae luciferase ancestor at ~205 Mya predates the
          Lampyridae/Elateridae split (~174 to 115 Mya); the elaterid
          luciferase neofunctionalized later (~131 Mya). This corroborates
          Fallon 2018&apos;s parallel-origin conclusion with more taxa. Does
          not change Iman&apos;s design but worth citing alongside Fallon
          2018 wherever convergence comes up.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>A taxonomic reshuffling worth noting in passing.</strong>{" "}
          Phylogenomics places <em>Lamprigera</em> inside Luciolinae rather
          than Lampyrinae, contradicting earlier morphology-based
          classifications. Of marginal relevance to the construct work, but if
          Iman ever cites <em>Lamprigera</em> sequences (e.g. for a luciferase
          or BGL ortholog comparison) the subfamily attribution should follow
          Zhang 2020.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This paper is the
        citation for TU4. Iman&apos;s ACOT9 choice, a mammalian (
        <em>Mus musculus</em>) cluster-I ACOT, no SKL, with a mitochondrial
        targeting sequence, sits in the same phylogenetic clade that Zhang
        2020 directly demonstrated to perform L &rarr; D luciferin conversion
        in vitro for <em>A. terminalis</em> AteACOT1. That is the strongest
        functional precedent in the literature for the role TU4 is meant to
        play, and it strengthens the case in any proposal or paper that the
        four-TU minimum-pathway design (TU1 luc2+SKL, TU2 PPYR_02911, TU3
        BGLU46+SKL, TU4 ACOT9) covers all the chirality, oxidation, and
        substrate-liberation steps required for autonomous bioluminescence
        given an endogenous benzoquinone-or-hydroquinone source. The tyrosine
        to BQ pathway speculation is intriguing and worth keeping on a watch
        list, it would be a second potential precursor source if the
        arbutin/HQ pool in <em>N. tabacum</em> turns out to be limiting in
        Phase 2, but it is not yet demonstrated chemistry and should not
        drive construct design.
      </p>
    </div>
  );
}
