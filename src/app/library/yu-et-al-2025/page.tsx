import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yu et al. (2025), Library",
  description:
    "Notes on: Engineering Autonomously Luminescent Plants Using the Fungal Bioluminescence Pathway.",
};

export default function YuEtAl2025Page() {
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
          Engineering Autonomously Luminescent Plants Using the Fungal
          Bioluminescence Pathway
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Xiaolei Yu, Tiange Wang, C. Kong, Hao Du
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          New Phytologist, Vol. 248, Issue 5 (2025), pp. 2251, 2261, DOI:
          10.1111/nph.70601
        </p>
      </header>

      <p className="text-secondary mb-8 text-sm italic leading-relaxed">
        Note: this is a review article, and the correct attribution is Yu et
        al. with Du as last/corresponding author, Yu, Wang, Kong, Du in
        author order. Hao Du is the senior author behind a 2025 cluster of
        fungal-bioluminescence-in-plants reviews including Du 2025 Trends
        in Biotechnology &ldquo;Biotechnologies based on the fungal
        bioluminescence pathway&rdquo; and Zhang/Du/Lu 2025 Trends in Plant
        Science &ldquo;Illuminating plants: autoluminescence through big
        data mining and metabolic optimization.&rdquo; Treating this paper
        as one entry in a coordinated review program coming out of
        Du&apos;s group is the right framing, it&apos;s the New
        Phytologist-format version of a thesis the group has been
        articulating across several journals in the same year.
      </p>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The state-of-the-art review for fungal bioluminescence in plants
            as of late 2025.
          </strong>{" "}
          This is the most recent comprehensive review of the field&apos;s
          progress since Mitiouchkina 2020, with five years of subsequent
          optimization work synthesized in one place. The main thesis: the
          fungal bioluminescence pathway (FBP), Luz, HispS, H3H, CPH from{" "}
          <em>Neonothopanus nambi</em>, has been optimized &ldquo;by orders
          of magnitude&rdquo; since the 2020 baseline through a combination
          of metabolic engineering (boosting caffeic acid supply) and
          protein engineering (improving enzyme quantum yield and thermal
          stability). For any project working in adjacent space, this is
          the cleanest single citation for &ldquo;where the competing
          fungal platform actually is right now,&rdquo; as opposed to where
          it was when Light Bio&apos;s products first launched.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Caffeic acid availability is the binding constraint, and the
            field has converged on this as the central engineering problem.
          </strong>{" "}
          Caffeic acid is the substrate the FBP draws on, and it sits at a
          phenylpropanoid pathway branch point where it competes with
          lignin biosynthesis and flavonoid biosynthesis for shared
          precursor pool. The implication is that the FBP has to
          &ldquo;steal&rdquo; carbon from structural and pigment metabolism,
          and there&apos;s a hard ceiling on how bright the system can get
          without compromising plant fitness. The review covers two
          strategies: heterologous pathway engineering (introducing
          tyrosine ammonia-lyase / hydroxylase routes from non-plant
          sources to bypass the native bottleneck) and endogenous pathway
          enhancement (overexpressing rate-limiting steps in the existing
          plant phenylpropanoid pathway). Zheng et al. 2023&apos;s
          BnC3&prime;H1 (4-coumaroyl shikimate/quinate 3&prime;-hydroxylase
          from <em>Brassica napus</em>) is the canonical example of the
          second strategy, overexpression alongside NPGA (null-pigment
          mutant from <em>A. nidulans</em>) achieved a threefold increase
          to 3 &times; 10¹¹ photons/min/cm², bright enough to read text by,
          and this is the brightness benchmark to know.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Protein engineering is now standard practice on Luz / HispS /
            H3H.
          </strong>{" "}
          Shakhova et al. 2024 (cited in the review, separate paper) used
          directed evolution and rational design to improve quantum yield
          and thermal stability of the FBP enzymes, contributing further
          orders-of-magnitude enhancement. The review explicitly frames
          protein engineering as a complementary axis to metabolic
          engineering, meaning the field&apos;s playbook is now: (a)
          enhance precursor supply, (b) engineer the enzymes, (c) combine.
          This is a generalizable lesson for any luciferase-based system,
          including firefly. luc2 is structurally well-characterized
          (Conti 1996), there is extensive existing engineering literature
          on improving its quantum yield, thermal stability, and substrate
          specificity (the Akaluc lineage being the famous example for in
          vivo imaging), and analogous enzyme engineering on luc2 should
          be considered as Phase 4 work if the four-TU baseline construct
          is dim.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Application framings: bioluminescent plants as biosensors, not
            just decorations.
          </strong>{" "}
          The review&apos;s section on applications goes beyond ornamental
          use and explicitly discusses stress-responsive promoters driving
          FBP gene expression, with specific use cases including soil
          moisture reporting (drought-stress promoter), pathogen detection
          (PR-protein promoter, localized light at infection sites before
          visible symptoms), salinity reporting, and heavy metal
          contamination biosensors. The framing is &ldquo;bioluminescent
          plant as the readout layer for plant biosensors,&rdquo; and the
          review notes synthetic biological amplifiers can be used to
          enhance sensitivity to weak stimuli. This is a useful framing
          for any commercial pitch in the bioluminescent plant space
          because it positions the technology as a class of bio-sensors /
          agricultural monitoring tool rather than a novelty consumer
          product.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The implicit field consensus: fungal pathway has won the
            &ldquo;first generation&rdquo; plant bioluminescence race.
          </strong>{" "}
          Yu et al. 2025 does not actually treat the firefly system as a
          serious competitor for autonomous plant bioluminescence, the
          review is structured as if the fungal pathway is the platform,
          with optimization being an ongoing program rather than a
          competition between routes. This reflects the reality of where
          the commercial space is: Light Bio&apos;s Firefly Petunia
          product is fungal-pathway-based, the published optimization
          literature is fungal-pathway-based, and the authoritative
          reviews now treat firefly as primarily a substrate-dependent
          reporter system rather than an autonomous platform. For any
          project pitching firefly autonomous bioluminescence, this
          framing is the headwind, and recognizing it is necessary. The
          counter-framing has to be specific: different photonics
          (yellow-green ~560 nm vs fungal green ~520 nm), different
          substrate provenance (cysteine-quinone vs caffeic acid pool),
          different brightness ceiling (potentially higher per-photon
          energetics, less competition with lignin biosynthesis since
          L-cysteine is not a carbon-skeleton building block), and
          different IP landscape (Planta LLC / Light Bio do not have
          firefly autonomous bioluminescence in their patent portfolio).
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Phenylpropanoid pathway competition is a generalizable lesson,
            not a fungal-specific issue.
          </strong>{" "}
          The review&apos;s central engineering problem, heterologous
          pathway &ldquo;stealing&rdquo; carbon from native lignin and
          flavonoid biosynthesis, applies in modified form to firefly
          bioluminescence in plants too. The firefly construct&apos;s
          BGL2/BGLU46 step releases hydroquinone from arbutin, which sits
          adjacent to the same phenylpropanoid pool. The PPYR_02911 step
          then oxidizes HQ to BQ, and AtLAC17 in TU5 is itself a laccase
          that interfaces with native plant phenolic metabolism. So the
          &ldquo;your luminescence flux competes with native lignin
          biosynthesis&rdquo; issue is not avoided by switching to a
          firefly route, it just gets remapped to a different point in the
          same pool. This is worth flagging: any pitch that frames the
          firefly route as &ldquo;doesn&apos;t depend on the
          phenylpropanoid pool&rdquo; is wrong, because it does. The
          honest framing is: the firefly route depends on a different
          part of the phenylpropanoid pool, and the specific bottleneck
          might be different (cysteine availability or hydroquinone
          availability rather than caffeic acid availability), but the
          structural problem of &ldquo;luminescence flux vs lignin
          flux&rdquo; is shared.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This review is the
        elephant-in-the-room context citation for any pitch, grant
        proposal, or paper introduction. Three concrete uses for the
        bibliography. First, it is the cleanest demonstration that the
        fungal pathway has continued to advance significantly past
        Mitiouchkina 2020, meaning the brightness benchmark to compete
        with is not Mitiouchkina&apos;s original 2020 results but Zheng
        2023&apos;s 3 &times; 10¹¹ photons/min/cm² eFBP plus Shakhova
        2024&apos;s protein-engineering enhancements on top of that. Any
        honest framing of the project&apos;s competitive position has to
        acknowledge this. Second, the caffeic acid / phenylpropanoid
        competition lesson is a generalizable warning, the firefly
        route&apos;s analogous bottleneck is most likely either
        L-cysteine availability or hydroquinone availability, and Phase 2
        troubleshooting should include flux-monitoring of the relevant
        pools rather than assuming they are unlimiting. The native plant
        4CL upregulation noted in Wang 2025 <em>P. pectoralis</em> lantern
        transcriptomics, combined with this review&apos;s emphasis on
        phenylpropanoid pool competition, suggests that{" "}
        <em>N. tabacum</em> native phenylpropanoid metabolism is going to
        be a relevant variable in Phase 2 even if the engineering
        doesn&apos;t directly target it. Third, the stress-responsive
        promoter / biosensor application framing is a useful template, if
        the firefly platform achieves autonomous bioluminescence in{" "}
        <em>N. tabacum</em>, the same biosensor applications
        (stress-responsive promoters driving luc2+SKL or driving the
        BGL/PPYR/ACOT genes individually for kinetic-readout applications)
        translate over directly. This means the project&apos;s commercial
        space is not just &ldquo;bioluminescent plant as decoration&rdquo;
        but &ldquo;bioluminescent plant as sensor platform,&rdquo; with
        the firefly route potentially having advantages around dynamic
        range and decoupling between substrate availability (controlled
        by Phase 1 to 2 genes) and signal generation (controlled by luc2).
        Cite Yu/Du 2025 as the field-context citation for any document
        that needs to position the project relative to the fungal-pathway
        state-of-the-art, alongside Mitiouchkina 2020 as the historical
        anchor and Zheng 2023 as the brightness benchmark.
      </p>
    </div>
  );
}
