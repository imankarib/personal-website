import { Callout } from "~/components/ui/Callout";

export function Pts1MiningContent() {
  return (
    <>
      <p className="drop-cap">
        A follow-up to the original candidate-mining post. This time using an
        orthogonal filter, peroxisomal targeting signals, to find what the DE
        filter missed.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Why revisit the data</h2>

      <p>
        The original analysis produced four candidates (PPYR_14756 UGT,
        PPYR_02910/02911 CYP4C tandem, PPYR_14056 4CL) from differential
        expression filtering of Fallon et al.&rsquo;s lantern vs. fat body
        dataset. Three novel, one confirming Zhang 2020.
      </p>

      <p>
        But the DE filter has a blind spot. Luciferase itself (PPYR_00001)
        failed the strict qval cutoff due to replicate variance in fat body, and
        the enzyme annotation filter depended on InterProScan recognizing
        catalytic domains, which it might miss for pathway enzymes that diverged
        significantly from known families. Any gene that&rsquo;s
        lantern-enriched but noisy, or lantern-active but weakly annotated,
        would be invisible.
      </p>

      <p>
        The luciferin reaction happens in the peroxisome. Luciferase itself ends
        in SKL, the canonical peroxisomal targeting signal 1 (PTS1). Fallon et
        al. used this trick to identify ASKSA (a PAPS synthetase
        lantern-relevant enzyme). If I applied the same filter to the whole
        proteome, what would show up?
      </p>

      {/* -------------------------------------------------- */}
      <h2>The pipeline</h2>

      <p>Four orthogonal filters, layered:</p>

      <ol>
        <li>
          <strong>PTS1 scan</strong> of all 15,716 predicted proteins. Scored
          the last 12 C-terminal residues, core tripeptide (positions &minus;3
          to &minus;1) against a position-specific matrix, plus basic residue
          enrichment in the accessory region (&minus;4 to &minus;12). Scoring
          calibrated against known PTS1 proteins including luciferase itself.
        </li>
        <li>
          <strong>Genomic clustering</strong> of PTS1-positive genes within 100
          kb on the same linkage group. Tandem clusters of peroxisomal genes are
          a recruitment signature.
        </li>
        <li>
          <strong>BLASTp</strong> against NCBI nr to annotate top candidates.
        </li>
        <li>
          <strong>SignalP 6.0</strong> to rule out false positives, proteins
          with an N-terminal secretion signal that overrides the C-terminal
          PTS1.
        </li>
        <li>
          <strong>HMMER hmmscan</strong> against Pfam for domain-level
          confirmation.
        </li>
      </ol>

      {/* -------------------------------------------------- */}
      <h2>Calibration</h2>

      <p>
        Before anything else, the PTS1 scoring had to be well-calibrated.
        Luciferase (PPYR_00001, native SKL at the C-terminus) scored 7.2, high
        tier, canonical PTS1. Mitochondrial and cytoplasmic controls scored in
        the &ldquo;none&rdquo; tier. Across the full proteome, 128 genes hit
        high tier (0.81%) and 194 medium tier (1.23%), roughly matching the ~2%
        peroxisomal fraction expected for a eukaryotic proteome. The scoring
        wasn&rsquo;t overcalling.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Where the existing candidates scored</h2>

      <p>None of the original four have PTS1s:</p>

      <pre>{`PPYR_14756 (UGT 3A2-like):  …IIRLSCYFLCKN   low tier
PPYR_02911 (CYP4C):         …VHGYSVSVELRE   none
PPYR_02910 (CYP4C):         …VDGYNVSAELRE   none
PPYR_14056 (4CL):           …MYANELTTSKIN   none`}</pre>

      <p>
        Expected for the P450s and UGT (those live in the ER, not peroxisomes).
        But the 4CL was surprising. Zhang 2020 explicitly distinguishes ACS
        (acyl-CoA synthetase, cytoplasmic, no PTS1) from PACS (peroxisomal ACS,
        with PTS1). PPYR_14056 is an ACS. The peroxisomal variant the pathway
        needs was somewhere else in the genome, and the DE filter had missed it.
      </p>

      {/* -------------------------------------------------- */}
      <h2>The luciferase locus</h2>

      <p>
        PPYR_00001 (luciferase) and PPYR_01108 sit 13 kb apart on LG1, both
        carrying canonical SKL tags. Nobody had discussed PPYR_01108 as a
        pathway candidate before. BLASTp against NCBI nr returned:
      </p>

      <blockquote>
        4-coumarate–CoA ligase 1-like [<em>Photinus pyralis</em>], top identity
        72% to tandem paralogs PPYR_02593 and PPYR_02595 on a separate LG1 PTS1
        cluster.
      </blockquote>

      <p>
        The whole top-hit ladder was luminous-beetle specific: hits 4–5 are{" "}
        <em>Pyrocoelia pectoralis</em> orthologs (RI129_003466/67), and hits 6+
        are <em>Photinus</em> luciferase-family paralogs
        (&ldquo;luciferin 4-monooxygenase-like&rdquo;). HMMER confirmed the
        architecture: PF00501 (AMP-binding enzyme, 27–396, E=1.8e-69) +
        PF13193 (AMP-binding C-terminal, 447–522, E=7.4e-19). Same clan
        (CL0378) as luciferase and as PPYR_14056, but this one is peroxisomal.
      </p>

      <p>
        PPYR_01108 is the PACS counterpart of PPYR_14056. Both should be in the
        construct: one handling cytoplasmic activation, one handling peroxisomal
        activation after ABC-D-mediated import. Zhang 2020&rsquo;s
        compartmentalized pathway predicts both exist. They do.
      </p>

      {/* -------------------------------------------------- */}
      <h2>The AMACR rescue</h2>

      <p>
        PPYR_09240 was in my original &ldquo;discarded candidates&rdquo; list.
        The rationale at the time: CoA-transferase family III enzyme, broadly
        conserved across insects at 60–65% identity, therefore not
        firefly-specific enough to be interesting.
      </p>

      <p>That reasoning was wrong.</p>

      <p>
        The PTS1 scan flagged PPYR_09240 with a canonical SKL at
        MNVIETYQEVPTSKL. It sits in a tandem PTS1 cluster on LG5, 16 kb from
        PPYR_09237 (also peroxisomal). BLAST returned:
      </p>

      <blockquote>
        alpha-methylacyl-CoA racemase isoform X2 [<em>Photinus pyralis</em>],
        and hit #3: &ldquo;lantern racemase&rdquo; [<em>Photinus pyralis</em>],
        direct submission, 100% identity.
      </blockquote>

      <p>
        Someone at Fallon&rsquo;s group had already annotated this gene
        specifically for its lantern role. HMMER confirmed: PF02515
        (CoA-transferase family III, 3–349, E=1.8e-75), the AMACR catalytic
        domain spanning nearly the entire protein.
      </p>

      <p>
        The conservation pattern is informative: 67–84% across luminous beetles,
        58–65% across non-luminous. A real 15–25 point gap. But more
        importantly, absolute sequence divergence is the wrong criterion for
        pathway recruitment. Conserved housekeeping enzymes get repurposed into
        new pathways through expression changes, not sequence changes, the
        &ldquo;enzymatic promiscuity&rdquo; thesis from Adams &amp; Miller 2020.
      </p>

      <p>Five independent lines of evidence converge on this gene:</p>

      <ul>
        <li>Canonical SKL → peroxisomal localization</li>
        <li>Tandem PTS1 cluster on LG5</li>
        <li>Annotated &ldquo;lantern racemase&rdquo; by direct submission</li>
        <li>
          Wang et al. 2025 confirms AMACR upregulation in{" "}
          <em>Pyrocoelia pectoralis</em> luminous tissue
        </li>
        <li>
          Chirality chemistry match, fireflies make D-luciferin, Zhang&rsquo;s
          pathway produces L-luciferin first, and AMACRs handle exactly this
          CoA-thioester stereochemistry
        </li>
      </ul>

      <Callout label="Key finding">
        PPYR_09240 is almost certainly the chiral-inversion enzyme the pathway
        has been missing. The construct now has a way to convert L-luciferin to
        D-luciferin, the form luciferase actually uses.
      </Callout>

      {/* -------------------------------------------------- */}
      <h2>The Scaffold2593 neighborhood</h2>

      <p>
        The PTS1 clustering analysis flagged an unplaced scaffold (Scaffold2593)
        with four PTS1-positive genes packed into 34 kb: PPYR_15033, 15036,
        15037, 15038. Four in a row is ~30&times; the genome-wide density. An
        &ldquo;unplaced scaffold&rdquo; in Fallon&rsquo;s assembly usually means
        a region that was too repetitive or recently-duplicated to anchor into a
        chromosome, which is exactly where you&rsquo;d expect to find
        lineage-specific pathway cassettes.
      </p>

      <p>BLAST results:</p>

      <ul>
        <li>
          <strong>PPYR_15033</strong> → ACOX3 (peroxisomal acyl-CoA oxidase 3).
          Top hits 65–85% in luminous beetles, 53–55% in non-luminous. Clean
          luminous-specialization signature.
        </li>
        <li>
          <strong>PPYR_15036</strong> → ACOX3 again, but pan-beetle (~40%
          luminous, ~37% non-luminous). Not specialized.
        </li>
        <li>
          <strong>PPYR_15037</strong> → 95% identical to 15036, a recent tandem
          duplicate.
        </li>
        <li>
          <strong>PPYR_15038</strong> → alpha-amylase. SignalP called a Sec/SPI
          signal peptide (cleavage 19/20, probability 99.97%). The SKL is a red
          herring, this is a secreted digestive amylase whose C-terminus happens
          to match the PTS1 consensus.
        </li>
      </ul>

      <p>
        The scaffold isn&rsquo;t the clean &beta;-oxidation cassette I&rsquo;d
        hoped for. It&rsquo;s an ACOX3 family expansion plus an unrelated
        amylase. Of the four, only PPYR_15033 is worth keeping, its
        luminous-specific clade membership suggests it may be pathway-recruited.
      </p>

      <p>
        HMMER confirmed PPYR_15033&rsquo;s architecture: PF02770 (Acyl-CoA
        dehydrogenase middle, 147–258) + PF22924 (ACOX C-alpha1, 293–456,
        E=2.3e-45) + PF01756 (Acyl-CoA oxidase, 499–678, E=2.7e-44). All three
        domains in clan CL0087. The PF22924 hit specifically distinguishes ACOX
        enzymes (peroxisomal, H<sub>2</sub>O<sub>2</sub>-producing) from
        standard ACADs (mitochondrial, ETF-coupled), so PPYR_15033 is
        unambiguously an oxidase.
      </p>

      {/* -------------------------------------------------- */}
      <h2>The methodological lesson</h2>

      <p>
        The PTS1 scan found two genes the DE filter missed (PPYR_01108 and
        PPYR_09240), one supporting candidate (PPYR_15033), and one informative
        false-positive (PPYR_15038). The false-positive matters: PTS1 scoring
        alone is not enough. An N-terminal secretion signal can override the
        C-terminal PTS1. SignalP is a mandatory second filter. Of roughly 128
        high-tier PTS1 hits, some fraction are similarly secreted proteins with
        spurious SKL endings.
      </p>

      <p>
        The four-layer pipeline (PTS1 → clustering → BLAST → SignalP → HMMER)
        converged cleanly on the surviving candidates. Each ended up with four
        or five independent lines of evidence.
      </p>

      <p>Other candidates investigated but set aside:</p>

      <ul>
        <li>
          <strong>PPYR_09237</strong> (adenosylhomocysteinase / SAHH): real
          PTS1, real peroxisomal, but only 2–3% sequence divergence between
          luminous and non-luminous beetles. Too conserved to be
          pathway-specialized, and cysteine supply is unlikely to be limiting in
          tobacco.
        </li>
        <li>
          <strong>PPYR_12235/12236/12237</strong> (LG7 tight tandem cluster, 3
          genes in 18 kb): all came back as more ACOX3 paralogs from the same
          firefly gene-family expansion as Scaffold2593. At least 7–8 ACOX3
          paralogs in <em>P. pyralis</em> total. Interesting evolutionary story
          but not directly useful for the construct.
        </li>
        <li>
          <strong>PPYR_15036, 15037</strong>: redundant with 15033 and with
          tobacco&rsquo;s native ACOX.
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>Updated construct</h2>

      <p>The five-TU design gains two confirmed new TUs and one optional:</p>

      <pre>{`TU1  luc2+SKL         (existing)   Luciferase               [peroxisome]
TU2  PPYR_02911       (existing)   CYP4C oxidation          [ER]
TU3  BGLU46           (existing)   β-glucosidase            [cytoplasm]
TU4  ACOT9            (existing)   Acyl-CoA thioesterase    [cytoplasm]
TU5  AtLAC17          (existing)   Laccase                  [apoplast]
TU6  PPYR_01108       ← NEW        Peroxisomal 4CL (PACS)   [peroxisome]
TU7  PPYR_09240       ← NEW        AMACR / lantern racemase [peroxisome]
TU8  PPYR_15033       ← OPTIONAL   Luminous-specific ACOX3  [peroxisome]`}</pre>

      <p>
        TU6 plugs the missing peroxisomal activation step. TU7 provides the
        chirality inversion the pathway has been missing. TU8 supplements
        tobacco&rsquo;s native peroxisomal &beta;-oxidation with a
        firefly-specialized ACOX that may handle the aromatic CoA intermediate
        better than generic plant enzymes.
      </p>

      {/* -------------------------------------------------- */}
      <h2>What&rsquo;s next</h2>

      <p>
        The pipeline has room to keep running. 148 high-tier PTS1 hits exist in
        the full scan, of which ~127 are still unreviewed. Most will be
        housekeeping peroxisomal proteins (catalases, &beta;-oxidation enzymes,
        routine metabolism), but a small fraction may include further pathway
        specializations, particularly in sulfotransferases, thiolases, and UGTs
        not yet systematically examined. The most interesting remaining lead is
        cross-referencing against the Fallon DE file directly to compute formal
        lantern-enrichment statistics for every PTS1-positive gene.
      </p>
    </>
  );
}
