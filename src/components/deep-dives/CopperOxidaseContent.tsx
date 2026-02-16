import { Callout } from "~/components/ui/Callout";
import { MarginNote } from "~/components/ui/MarginNote";

export function CopperOxidaseContent() {
  return (
    <>
      <h2>The melanogenesis hypothesis</h2>

      <p>
        The whole thing started with an analogy. The final step of firefly
        luciferin biosynthesis, where Cys-HQ cyclizes into the benzothiazole
        ring, looks structurally similar to a reaction in melanin synthesis. In
        melanogenesis, laccases (a family of copper-dependent oxidases) catalyze
        the oxidative cyclization of similar phenolic substrates. Tyrosinase and
        laccases grab small molecules, rip electrons off them using copper
        chemistry, and force ring closures.
      </p>

      <p>
        My hypothesis was simple: the missing luciferin synthase might be a
        laccase or laccase-like copper oxidase that was repurposed for luciferin
        production.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Step 1: Are laccases expanded in fireflies?</h2>

      <p>
        If laccases evolved a new role in luciferin biosynthesis, you might
        expect to see more laccases in fireflies than in non-luminous beetles. I
        ran BLAST searches comparing laccase gene families between{" "}
        <em>Photinus pyralis</em> (common eastern firefly) and{" "}
        <em>Tribolium castaneum</em> (red flour beetle).
      </p>

      <p>
        The result: a roughly 3&times; expansion of laccase-family genes in the
        firefly. More laccases than a normal beetle needs.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Step 2: Mining Fallon&rsquo;s RNA-seq data</h2>

      <p>
        Fallon&rsquo;s lab had published a comprehensive RNA-seq dataset
        comparing gene expression in the firefly lantern (the light organ) vs.
        fat body tissue, covering all 15,773 predicted genes in the{" "}
        <em>P. pyralis</em> genome. I couldn&rsquo;t search for
        &ldquo;laccase&rdquo; directly in the Gene Ontology annotations, so
        instead I filtered for the biochemical signature of a laccase:{" "}
        <code>GO:0005507</code> (copper ion binding) combined with{" "}
        <code>GO:0016491</code> (oxidoreductase activity).
      </p>

      <p>That returned seven copper-binding oxidoreductases.</p>

      {/* -------------------------------------------------- */}
      <h2>Step 3: One gene screamed from the data</h2>

      <p>
        Six of those seven were barely expressed in the lantern. TPM values
        between 0.5 and 4.1, doing normal beetle things like cuticle hardening.
        But <strong>PPYR_12315</strong> had:
      </p>

      <ul>
        <li>
          A lantern TPM of <strong>420.8</strong>
        </li>
        <li>
          <strong>100&times; to 1,000&times;</strong> higher than the other
          copper oxidases
        </li>
        <li>
          <strong>14.5&times;</strong> upregulated over fat body
        </li>
        <li>
          Ranked as the <strong>85th</strong> most significantly differentially
          expressed gene out of over 15,000
        </li>
      </ul>

      <MarginNote>
        For context, luciferase itself (the enzyme that actually makes light)
        has a lantern TPM of 66,742. PPYR_12315 was solidly in the top 2% of all
        genes expressed in the light organ.
      </MarginNote>

      <p>
        I then BLASTed PPYR_12315 against every firefly species with genomic
        data on NCBI. Orthologs appeared across the entire Lampyridae family.
        The gene was conserved across lineages that diverged tens of millions of
        years ago, with identity levels (79&ndash;91%) indicating a functional
        protein under strong purifying selection. If every firefly species
        maintains this protein, it&rsquo;s doing something important.
      </p>

      <Callout label="Note">
        PPYR_12315 was not in Fallon&rsquo;s cross-species comparison table
        because it was too diverged to be assigned to a standard orthogroup.
      </Callout>

      {/* -------------------------------------------------- */}
      <h2>AlphaFold structure prediction</h2>

      <p>
        I ran the 488-amino-acid protein through ColabFold to get a predicted 3D
        structure, then loaded it into ChimeraX for analysis. The structure
        revealed dense clusters of histidine and cysteine residues:{" "}
        <code>HIS 385</code>, <code>HIS 388</code>, <code>HIS 390</code>,{" "}
        <code>HIS 392</code>, <code>CYS 387</code>, <code>CYS 419</code>
        arranged in a pattern consistent with a copper center.
      </p>

      <p>
        The active site motif read <code>W-E-W-H-M-C-H-M-H-Y-H</code> across
        positions 382&ndash;392: four histidines packed around a putative copper
        coordination site.
      </p>

      <figure className="my-8">
        <img
          src="/images/ppyr-12315-alphafold.png"
          alt="ColabFold predicted 3D structure of PPYR_12315, colored by pLDDT confidence score"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 1.</strong> ColabFold predicted structure of
          PPYR_12315. Blue regions indicate high confidence (pLDDT &gt; 90),
          orange/red regions indicate low confidence, typically disordered loops
          or signal peptides.
        </figcaption>
      </figure>

      <figure className="my-8">
        <img
          src="/images/ppyr-12315-active-site.png"
          alt="Zoomed-in view of PPYR_12315 active site showing H385, H388, H390, H392, C387, Y391"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 2.</strong> Zoomed-in view showing H385, H388, H390,
          H392, C387, Y391, the putative copper-coordinating residues clustered
          in the active site.
        </figcaption>
      </figure>

      {/* -------------------------------------------------- */}
      <h2>Structural comparison with a known laccase</h2>

      <p>
        I superimposed the predicted structure against TcLac2A, a characterized
        insect laccase from <em>Tribolium castaneum</em>. The overall RMSD was
        31&Aring;, meaning the global fold had diverged dramatically, but the
        copper-coordinating residue clusters were preserved.
      </p>

      <p>
        My interpretation at the time: the catalytic engine is the same (copper
        oxidation chemistry), but the housing around it has been reshaped,
        potentially to accommodate a different substrate. I was already framing
        this as neofunctionalization.
      </p>

      <figure className="my-8">
        <img
          src="/images/ppyr-12315-laccase-overlay.png"
          alt="Structural superposition of PPYR_12315 (blue) and TcLac2A laccase (pink/orange)"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 3.</strong> Structural superposition of PPYR_12315
          (blue) and TcLac2A insect laccase (pink/orange). Overall RMSD of
          31&Aring; indicates dramatically divergent global folds despite
          conserved copper-coordinating residues.
        </figcaption>
      </figure>

      {/* -------------------------------------------------- */}
      <h2>Electrostatic surface mapping</h2>

      <p>
        I generated electrostatic surface potentials in ChimeraX and found a
        large negatively charged patch around the predicted active site. Since
        Cys-HQ carries a positive amine group on its cysteine moiety, a
        negatively charged surface could help attract and orient the substrate.
        Another piece of the puzzle that seemed to fit.
      </p>

      <figure className="my-8">
        <img
          src="/images/ppyr-12315-electrostatic.png"
          alt="Electrostatic surface potential of PPYR_12315 showing negatively charged (red) patch around the active site"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 4.</strong> Electrostatic surface potential of
          PPYR_12315. Red indicates negatively charged regions, blue indicates
          positively charged. The large negative patch around the active site
          (with labeled CYS and HIS residues) suggested compatibility with the
          positively charged Cys-HQ substrate.
        </figcaption>
      </figure>

      {/* -------------------------------------------------- */}
      <h2>Geometric substrate fitting</h2>

      <p>
        I then checked whether benzoquinone and cysteine could physically fit in
        the active site cavity. They could, the pocket was large enough, and the
        copper center was positioned appropriately for substrate activation. At
        the time, I noted (correctly) that geometric fit is necessary but not
        sufficient. In hindsight, I should have weighed that caveat more
        heavily.
      </p>

      <figure className="my-8">
        <img
          src="/images/ppyr-12315-substrate-fitting.png"
          alt="Surface view of PPYR_12315 active site cavity with labeled copper-coordinating residues"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 5.</strong> Surface representation of the PPYR_12315
          active site cavity with copper-coordinating residues labeled. The
          pocket geometry appeared compatible with benzoquinone and cysteine
          substrates.
        </figcaption>
      </figure>

      {/* -------------------------------------------------- */}
      <h2>The first red flags</h2>

      <p>
        I pasted the N-terminal protein sequence into ChatGPT for a second
        opinion. Its analysis flagged several things I hadn&rsquo;t fully
        reckoned with:
      </p>

      <ul>
        <li>
          A <strong>strong signal peptide</strong> at the N-terminus (
          <code>MKSEIITVVACLTVLVFPSFRA</code>) &mdash; classic ER targeting,
          indicating the protein is secreted. This was not what you&rsquo;d
          expect for a cytosolic small-molecule synthase.
        </li>
        <li>
          <strong>Cysteine-rich repeat-domain architecture</strong> with
          patterns like <code>...GAICDDEW...</code> and{" "}
          <code>...CRFDGWGSHDCE...</code>, typical of extracellular structural
          proteins, not compact cytosolic enzymes.
        </li>
        <li>
          <strong>Basic clusters</strong> (<code>KHVKRLKKEE</code>,{" "}
          <code>VRVRLRGGRV</code>) that looked like propeptide cleavage or
          processing regions&mdash;again, hallmarks of a secreted protein.
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>HMMER: the definitive answer</h2>

      <p>
        Scott suggested I run the protein through InterPro and HMMER{" "}
        <code>hmmscan</code>. HMMER doesn&rsquo;t just match individual motifs
        the way my earlier InterPro analysis had; it compares the full
        statistical profile of the protein sequence against curated hidden
        Markov models for every known protein family.
      </p>

      <p>The results were definitive:</p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-hairline border-b text-left">
              <th className="text-secondary pr-4 pb-2 font-mono text-xs tracking-widest uppercase">
                Pfam ID
              </th>
              <th className="text-secondary pr-4 pb-2 font-mono text-xs tracking-widest uppercase">
                Domain
              </th>
              <th className="text-secondary pb-2 font-mono text-xs tracking-widest uppercase">
                E-value
              </th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-hairline/50 border-b">
              <td className="py-2 pr-4 font-mono text-xs">PF01186</td>
              <td className="py-2 pr-4">Lysyl oxidase</td>
              <td className="py-2 font-mono text-xs">4.6e-97</td>
            </tr>
            <tr className="border-hairline/50 border-b">
              <td className="py-2 pr-4 font-mono text-xs">PF00530</td>
              <td className="py-2 pr-4">
                SRCR (scavenger receptor cysteine-rich)
              </td>
              <td className="py-2 font-mono text-xs">4.7e-30</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-mono text-xs">&mdash;</td>
              <td className="py-2 pr-4">Cupredoxin / multicopper oxidase</td>
              <td className="py-2 font-mono text-xs text-red-500">No hits</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Zero</strong> cupredoxin or multicopper oxidase domain hits.
      </p>

      <p>
        PPYR_12315 is a lysyl oxidase-like 2 (LOXL2) protein, not a laccase. The
        NCBI auto-annotation as LOXL2 had been correct the entire time. The
        E-value for the lysyl oxidase match was 4.6e-97, extremely confident. I
        ran it twice with both the 488 aa and 513 aa versions of the protein.
        Same result both times.
      </p>

      <Callout label="Why the confusion?">
        Both laccases and lysyl oxidases use copper. Both are oxidases. Their
        sequences share superficial motifs, which is why my earlier InterPro
        analysis and manual copper-motif identification had led me astray. But
        at the profile level, they are fundamentally different enzyme families.
        Laccases use a trinuclear copper cluster to oxidize small phenolic
        molecules. Lysyl oxidases use a lysyl tyrosylquinone (LTQ) cofactor to
        crosslink proteins, they oxidize lysine residues on collagen and elastin
        to stitch extracellular matrix together.
      </Callout>

      {/* -------------------------------------------------- */}
      <h2>Final confirmation: unrestricted BLAST</h2>

      <p>
        I ran one more test: BLASTP against all of NCBI&rsquo;s non-redundant
        protein database, organism unrestricted, to see the full phylogenetic
        picture. The results confirmed my suspicions. Lesson learned. In my
        other posts, you now see me BLAST and HMMER before anything else for a
        reason.
      </p>

      <p>
        Firefly copies clustered together at 75&ndash;83% identity. But then
        non-luminous beetles appeared: <em>Tenebrio molitor</em> at 68%,{" "}
        <em>Zophobas morio</em> at 69%, <em>Tribolium castaneum</em> at 66%. The
        gene isn&rsquo;t firefly-specific. Every beetle has one. It&rsquo;s a
        normal insect LOXL2 ortholog that happens to be highly expressed in the
        lantern.
      </p>

      <p>
        The gap between firefly and non-firefly identity (about 10&ndash;15
        percentage points) is notable but well within normal evolutionary drift
        for an orthologous gene. This was not the missing enzyme.
      </p>

      {/* -------------------------------------------------- */}
      <h2>What I learned</h2>

      <h3>Motifs are not families</h3>

      <p>
        The biggest lesson: finding copper-binding motifs and cysteine-rich
        regions in a protein doesn&rsquo;t tell you what the protein <em>is</em>
        . Multiple unrelated enzyme families use copper. InterPro and manual
        motif analysis can pick up superficial similarities. HMMER profile-based
        classification is the gold standard because it compares against the full
        statistical profile of each family, not just individual motifs. I should
        have run HMMER first, before everything else.
      </p>

      <h3>Beware of confirmation bias</h3>

      <p>
        I started with a hypothesis, found supporting evidence, and kept finding
        more. Expression data, cross-species conservation, AlphaFold structures,
        electrostatic maps, substrate fitting, everything pointed the same way
        because I was looking for reasons to believe. Each piece of evidence was
        real, but my interpretation was shaped by what I wanted to find.
        Although as I also learned, confirmation bias only goes so far in
        biology.
      </p>

      <p>Though maybe I just wanted an excuse to use AlphaFold.</p>

      {/* -------------------------------------------------- */}
      <hr className="border-hairline my-10" />

      <p className="text-secondary text-sm">
        The project builds on Tim Fallon&rsquo;s published genomic data for{" "}
        <em>Photinus pyralis</em> and represents original bioinformatics
        analysis performed by the author.
      </p>
    </>
  );
}
