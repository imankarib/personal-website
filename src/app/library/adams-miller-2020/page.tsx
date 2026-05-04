import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adams & Miller (2020), Library",
  description:
    "Notes on: Enzymatic Promiscuity and the Evolution of Bioluminescence.",
};

export default function AdamsMiller2020Page() {
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
          Enzymatic Promiscuity and the Evolution of Bioluminescence
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Spencer T. Adams Jr., Stephen C. Miller
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          The FEBS Journal, Vol. 287, Issue 7 (Apr. 2020), pp. 1369, 1380
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The defining framework: firefly luciferase is a bifunctional
            enzyme, and luciferase activity is latent in many ACSLs.
          </strong>{" "}
          <em>Photinus pyralis</em> firefly luciferase (Fluc) catalyzes both
          light emission from D-luciferin and ligation of CoA to long-chain
          fatty acids &ge;12 carbons, the same enzyme, the same active site,
          two different chemistries selected by substrate identity. This is
          not vestigial; the ACSL activity is robust enough that Fluc has
          been characterized as a legitimate fatty acyl-CoA synthetase in
          its own right (Oba 2003). The review&apos;s organizing argument
          is that this bifunctionality is the key to understanding
          bioluminescence evolution: luciferase activity did not arise de
          novo in fireflies but was a latent capability already present in
          ancestral ACSLs, only needing the right luciferin substrate to
          manifest. The evolutionary problem then becomes biosynthesizing
          the luciferin, not engineering the luciferase.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Latent luciferase activity in non-luminous insects is
            experimentally demonstrated.
          </strong>{" "}
          This is the most striking section. <em>Drosophila</em> CG6178 (a
          non-luminous fruit fly&apos;s ACSL with ~40% identity to Fluc)
          cannot use natural D-luciferin but produces light efficiently
          with synthetic luciferin analogs like CycLuc2 (Mofford 2014). Same
          result with AbLL, the ACSL ortholog from the non-luminescent click
          beetle <em>Agrypnus binodulus</em>. The interpretation: many
          insect ACSLs are &ldquo;latent luciferases,&rdquo; they can run
          the bioluminescent chemistry but lack a productive natural
          substrate. The chemistry of light emission is inherent to the
          luciferin ester (treating any luciferin ester with base in DMSO
          under O&#8322; produces light without any enzyme at all), so any
          ACSL that can adenylate a luciferin should give bioluminescence.
          The selectivity barrier between non-luminescent ACSLs and
          luciferases is much lower than the sequence divergence suggests.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            A single-residue conversion of an ACSL into a luciferase.
          </strong>{" "}
          Oba 2009 mutated AbLL at one position (restoring serine 347, which
          forms a water-mediated hydrogen bond to the benzothiazole nitrogen
          of D-luciferin) and converted it into a weakly bioluminescent
          enzyme on natural D-luciferin. One residue. The evolutionary
          distance from latent-luciferase ACSL to real-luciferase is in
          principle a single-mutation walk, given a substrate. This has
          direct implications for the ESM2 deep mutational scanning and
          ProteinMPNN inverse-folding work in the project, it suggests that
          the ACSL/luciferase functional landscape is gradient-rich and
          that engineered variants should not be expected to require many
          simultaneous changes.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Domain-swap chimeras define the functional logic of the
            two-domain architecture.
          </strong>{" "}
          Oba 2006 connected Fluc&apos;s N-terminal domain (residues 1 to
          437) to CG6178&apos;s C-terminal domain (residues 436 to 544) and
          got a functional luciferase. The reciprocal chimera (CG6178
          N-terminal + Fluc C-terminal) had only ACSL activity. The
          N-terminal domain is what defines luciferase activity; the
          C-terminal domain can be substituted with a homologous
          adenylating-enzyme C-terminus without losing function. This makes
          the substrate-binding pocket on the N-terminal domain
          (specifically the residues that bind the luciferin benzothiazole
          ring) the key engineering target, and explains why the Conti 1996
          architecture is the right structural prior for any luciferase
          engineering work.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Detailed mechanism with the SET (single electron transfer)
            light-emitting step.
          </strong>{" "}
          D-luciferyl-AMP is deprotonated at C4 to form an enolate-stabilized
          carbanion, which reduces molecular O&#8322; via single-electron
          transfer to give superoxide and a C4 radical; the radicals
          recombine to form a C4-peroxide; intramolecular nucleophilic
          attack of the peroxide on the AMP-ester carbonyl displaces AMP
          and forms a dioxetanone; the O-O bond breaks, releasing
          CO&#8322; and excited-state oxyluciferin; oxyluciferin radiatively
          relaxes to ground state. Two key catalytic lysines (K443 for
          oxidation, K529 for adenylation) are both contributed by the
          C-terminal domain and rotate in/out of the active site as the
          domain rotates. Worth knowing for two reasons: it pins down which
          residues matter for which half-reaction, and it explains why in
          vitro luciferase assays add CoA (to scavenge dehydroluciferyl-AMP,
          the dark-reaction byproduct that accumulates and inhibits the
          enzyme).
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The dark reaction, dehydroluciferyl-AMP, is a practical concern
            for any luciferase assay.
          </strong>{" "}
          In step 4 of the mechanism, instead of forming the C4-peroxide,
          the C4 radical can lose a hydrogen at C5 to give
          dehydroluciferyl-AMP, a non-luminescent byproduct that
          accumulates in the active site and inhibits further catalysis.
          Adding CoA to luciferase reactions converts dehydroluciferyl-AMP
          to dehydroluciferyl-CoA, which dissociates and frees the enzyme.
          This is why the canonical firefly luciferase reaction buffer
          (Promega&apos;s &ldquo;Luciferase Assay Reagent&rdquo; and similar
          formulations) contains CoA, and why endogenous CoA pools in plant
          peroxisomes are a non-trivial parameter for in planta luminescence
          intensity.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Plant adenylating enzymes are explicitly proposed as candidate
            luciferases.
          </strong>{" "}
          This section is short but consequential: Adams &amp; Miller note
          that <em>Arabidopsis thaliana</em> expresses peroxisome-targeted
          ACSL homologs that adenylate bulky jasmonate pathway intermediates
          (e.g., At5g63380, which makes OPDA-CoA from 12-oxo-phytodienoic
          acid). They suggest these enzymes &ldquo;may be capable of
          adenylating molecules capable of acting as luciferins&rdquo; or
          could &ldquo;serve as models to develop new luciferases.&rdquo; The
          implication is that the firefly luciferase chassis is not the
          only adenylating enzyme that could plausibly catalyze
          bioluminescence in a plant context, native plant peroxisomal
          ACSLs might independently produce some baseline light from
          D-luciferin or a luciferin analog. This is both an opportunity
          (plant ACSLs as alternative luciferase chassis) and a complication
          (native plant ACSLs in the same peroxisomal compartment as luc2
          might compete for substrate or generate dehydroluciferyl-AMP
          that inhibits luc2).
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The L &rarr; D luciferin epimerization is mediated by
            Fluc&apos;s own ACSL activity.
          </strong>{" "}
          In vivo, fireflies make L-luciferin first (the BQ + L-cysteine
          chemistry from Kanie 2016 / Oba 2013) and then epimerize to
          D-luciferin. The proposed mechanism (Niwa 2006, Maeda 2017): Fluc
          enantioselectively thioesterifies L-luciferin to L-luciferyl-CoA
          via its own ACSL activity &rarr; the L-luciferyl-CoA epimerizes
          to D-luciferyl-CoA &rarr; thioester hydrolysis releases
          D-luciferin. This means luc2 itself is part of the racemization
          pathway in vivo, alongside whatever thioesterase performs the
          final hydrolysis (Maeda 2017 used bacterial TESB; Zhang 2020
          demonstrated AteACOT1 as the firefly version). Direct project
          relevance: in tobacco, TU1 (luc2+SKL) and TU4 (ACOT9) cooperate
          not only to use D-luciferin but to make it from L-luciferin
          produced by the spontaneous BQ + L-cys chemistry, two roles for
          the luc2 enzyme, both required.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The benzoquinone-detoxification origin hypothesis is anticipated
            here.
          </strong>{" "}
          Adams &amp; Miller speculate two years before de Souza 2022 that
          &ldquo;some luciferin [may] have been fortuitously produced by
          the reaction of cysteine with benzoquinone in related
          beetles,&rdquo; citing Bombardier beetles&apos; use of
          benzoquinone for defensive sprays as evidence that benzoquinone
          chemistry is widespread in non-luminous beetles. The de Souza
          2022 cysteine-rescue / quinone-detoxification thesis is
          essentially the experimental confirmation of this speculation.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This is the
        foundational review for the framework that the entire firefly
        luciferase engineering and biosynthesis literature operates within.
        Three concrete uses for the bibliography. First, in any &ldquo;why
        firefly luciferase as the chassis&rdquo; pitch context, Adams &amp;
        Miller is the most authoritative single review of why ACS-family
        enzymes are uniquely well-positioned to function as luciferases,
        the bifunctionality, the latent activity in non-luminous orthologs,
        the single-residue evolutionary path, and the broad ANL-family
        substrate flexibility together make a much stronger &ldquo;why this
        enzyme family&rdquo; argument than any single primary paper.
        Second, the plant-ACSL section flags a genuine experimental issue
        worth keeping in mind for Phase 2/Phase 3: native{" "}
        <em>N. tabacum</em> peroxisomal ACSLs (the tobacco orthologs of{" "}
        <em>Arabidopsis</em> At5g63380 and related jasmonate-pathway
        adenylating enzymes) co-occupy the same compartment as TU1
        luc2+SKL and might either contribute baseline D-luciferin &rarr;
        light activity in luc2-free controls or generate
        dehydroluciferyl-AMP byproducts that inhibit luc2, either way,
        native peroxisomal ACSL transcripts in agroinfiltrated tobacco are
        worth checking against the construct&apos;s predicted background,
        especially when interpreting low-luminescence phenotypes. Third,
        the L &rarr; D racemization story confirms that luc2 itself is
        part of the stereochemical conversion pathway, which means TU1 and
        TU4 are functionally coupled in a way that affects design
        priorities: the ratio of TU1:TU4 expression matters more than each
        gene&apos;s expression in isolation, because both are needed to
        drive the L-luciferyl-CoA &rarr; D-luciferyl-CoA &rarr; D-luciferin
        &rarr; photon cycle. Cite Adams &amp; Miller 2020 alongside Conti
        1996 (architecture), Nakatsu 2006 (substrate-bound structures),
        Gulick 2009 (conformational dynamics), and Fallon 2018
        (parallel-origins genomics) as the canonical five-paper foundation
        for the firefly luciferase enzymology side of any project document.
      </p>
    </div>
  );
}
