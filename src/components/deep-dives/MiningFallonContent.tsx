import { Callout } from "~/components/ui/Callout";
import { MarginNote } from "~/components/ui/MarginNote";

export function MiningFallonContent() {
  return (
    <>
      <p className="drop-cap">
        I took the differential expression data from Fallon et al. (2018) and
        applied two layers of filtering&mdash;expression enrichment and enzyme
        annotation&mdash;to reduce the <em>Photinus pyralis</em> genome from
        15,773 genes to a manageable set of luciferin biosynthesis candidates.
        After cross-species BLAST analysis, phylogenetics, and manual review,
        three novel candidates and one known candidate emerged.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Data sources</h2>

      <ul>
        <li>
          <code>PPYR_OGS1.1.enzyme.ids.txt</code> &mdash; Fallon&rsquo;s enzyme
          annotation list. Essential for the second filtering step, where I
          narrow candidates to genes that are likely to encode enzymes.
        </li>
        <li>
          <code>PPYR_OGS1.1_fatbody-vs-lantern&hellip;_test.txt</code>{" "}
          &mdash; Differential expression results, including q-values (adjusted
          p-values). Used to determine which genes are significantly enriched in
          the lantern.
        </li>
        <li>
          <strong>HMMER hmmscan</strong> &mdash; Used later to look for known
          protein domains in candidate sequences.
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>Why compare lantern vs. fat body?</h2>

      <p>
        The fat body in insects is roughly analogous to a liver. It handles
        general metabolic tasks: fat storage, detoxification, immune activity,
        and protein synthesis. It&rsquo;s distributed throughout the body cavity.
      </p>

      <p>
        Fallon&rsquo;s experiment compared gene expression in the{" "}
        <strong>lantern</strong> (the abdominal light organ) to gene expression
        in the <strong>fat body</strong>. The reasoning is straightforward:
      </p>

      <ul>
        <li>
          If a gene is strongly enriched in the lantern, it may be involved in
          bioluminescence.
        </li>
        <li>
          If it&rsquo;s expressed equally in both tissues, it&rsquo;s probably
          doing general metabolic work.
        </li>
      </ul>

      <MarginNote>
        Ideally you&rsquo;d compare the lantern to many tissues (brain, gut,
        muscle, etc.). With only two tissues, a gene might look
        &ldquo;lantern-specific&rdquo; simply because it happens to be low in
        fat body. Unfortunately, the dataset only includes these two.
      </MarginNote>

      {/* -------------------------------------------------- */}
      <h2>What I did</h2>

      <p>
        I took the three files from Fallon et al. (2018) and applied two layers
        of filtering.
      </p>

      {/* -- LAYER A ---------------------------------------- */}
      <h3>Layer A: Expression filter</h3>

      <p>
        Starting from all 15,773 genes, I kept only those that met{" "}
        <strong>all three criteria</strong>:
      </p>

      <div className="my-6 rounded-lg border border-hairline bg-paper-dark px-5 py-4">
        <ul className="m-0 list-none space-y-2 p-0">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-xs font-semibold text-accent">
              1
            </span>
            <span>
              <strong>Lantern TPM &ge; 50</strong> &mdash; Moderate expression
              in the lantern. For reference, luciferase sits at ~66,743 TPM.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-xs font-semibold text-accent">
              2
            </span>
            <span>
              <strong>Sleuth b &ge; 3</strong> &mdash; Estimated
              log&#x2082;&nbsp;fold change. b&nbsp;=&nbsp;3 means ~8&times;
              higher expression in lantern; b&nbsp;=&nbsp;5 means ~32&times;
              higher.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-xs font-semibold text-accent">
              3
            </span>
            <span>
              <strong>qval &le; 1e-10</strong> &mdash; Adjusted p-value
              corrected for testing ~15,773 genes at once. Less than 1 in 10
              billion chance the observed difference is random.
            </span>
          </li>
        </ul>
      </div>

      <p>
        This reduced the list to <strong>41 genes</strong>, or what I&rsquo;m
        calling the &ldquo;lantern module.&rdquo;
      </p>

      <Callout label="Important caveat">
        These thresholds are somewhat arbitrary. By requiring b&nbsp;&ge;&nbsp;3,
        I might miss real candidates that are only moderately enriched (say
        4&times; instead of 8&times;). And the strict q-value filter actually
        excluded <em>luciferase itself</em> because one fat-body replicate
        showed unusually high expression, which increased variance. So this
        filter is a way to get a manageable list&mdash;not a guarantee we
        captured everything important.
      </Callout>

      {/* -- LAYER B ---------------------------------------- */}
      <h3>Layer B: Enzyme filter</h3>

      <p>
        From the 41 genes that passed Layer A, I kept only those that appear in
        Fallon&rsquo;s enzyme annotation file. That brought the list down to{" "}
        <strong>18 genes</strong>.
      </p>

      <p>
        Fallon&rsquo;s team used InterProScan to analyze every predicted protein
        in the firefly genome. InterProScan compares protein sequences to known
        domain databases and assigns Gene Ontology (GO) terms. I filtered for
        genes tagged with <code>GO:0003824</code>, &ldquo;catalytic
        activity.&rdquo;
      </p>

      <p>
        Out of ~15,773 genes total, about 3,890 were labeled this way.
        Intersecting that list with the 41 lantern-enriched genes left 18 strong
        enzyme candidates.
      </p>

      <Callout label="Blind spot">
        This filter depends entirely on whether InterProScan can recognize the
        protein. If luciferin synthase is a truly novel enzyme&mdash;one that
        evolved a new function from a non-enzymatic scaffold, or diverged far
        from known enzyme families&mdash;InterProScan might not classify it as
        catalytic. In that case, it wouldn&rsquo;t appear in the enzyme list and
        I&rsquo;d miss it entirely. In fact, 23 of the 41 lantern-enriched
        genes were removed at this step.
      </Callout>

      {/* -------------------------------------------------- */}
      <h2>Interpreting the candidates</h2>

      <p>
        After filtering, I reviewed each remaining gene using its GO annotations
        and HMMER domain hits to see whether the predicted chemistry made sense.
        I focused on activities consistent with luciferin biosynthesis&mdash;things
        like small-molecule metabolism, oxidation, or cyclization&mdash;and
        deprioritized genes involved in clearly unrelated processes, like
        kinases, motor proteins, or signaling enzymes.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Side note: why the filters aren&rsquo;t perfect</h2>

      <p>
        The b&nbsp;&ge;&nbsp;3 and qval&nbsp;&le;&nbsp;1e-10 criteria actually
        excluded <strong>luciferase itself</strong>.
      </p>

      <p>
        Luciferase (<code>PPYR_00001</code>) has b&nbsp;=&nbsp;5.27 (very strong
        enrichment) but qval&nbsp;&asymp;&nbsp;9e-5, which is above my cutoff.
        Why? One fat-body replicate had unexpectedly high luciferase expression
        (~3,693 TPM, compared to ~61 and ~162 in the other two). That inflated
        the variance, so sleuth still flagged it as significant, but with less
        statistical confidence.
      </p>

      <p>
        This is a reminder that the pipeline is conservative. Even known
        bioluminescence genes can fall outside strict thresholds because of
        replicate noise.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Knocked-out candidates</h2>

      <p>
        The following genes passed both filters but were discarded after manual
        review and cross-species comparison.
      </p>

      {/* -- PPYR_09240 ------------------------------------- */}
      <h3>
        <code>PPYR_09240</code>{" "}
        <span className="ml-2 rounded-full bg-paper-dark px-2.5 py-0.5 font-mono text-[0.6875rem] text-secondary">
          Discarded
        </span>
      </h3>

      <p>
        A CoA-transferase family III enzyme (PF02515) with a very strong domain
        match (E-value 2.5e-70) and high lantern expression (TPM ~1,210).
        Annotated as alpha-methylacyl-CoA racemase (AMACR), and in one{" "}
        <em>Photinus</em> annotation called &ldquo;lantern racemase.&rdquo;
        AMACR enzymes convert stereoisomers of branched-chain acyl-CoA molecules
        and typically function in peroxisomal metabolism.
      </p>

      <p>
        At first glance this seemed promising: luciferase itself operates in a
        similar biochemical space (acyl-CoA-like chemistry). However, sequence
        comparisons show that this protein is broadly conserved across insects,
        including many non-luminous species at ~60&ndash;65% identity. This
        indicates it&rsquo;s an ancient, general metabolic enzyme rather than a
        firefly-specific innovation.
      </p>

      {/* -- PPYR_06980 ------------------------------------- */}
      <h3>
        <code>PPYR_06980</code>{" "}
        <span className="ml-2 rounded-full bg-paper-dark px-2.5 py-0.5 font-mono text-[0.6875rem] text-secondary">
          Discarded
        </span>
      </h3>

      <p>
        Cytochrome P450 4g15 (CYP4G15). Present across essentially all beetles,
        not just fireflies: ~74&ndash;97% identity in fireflies,
        ~71&ndash;73% in non-luminous beetles, and ~73&ndash;74% even in other
        luminous beetles (e.g., click beetles).
      </p>

      <p>
        CYP4G15 is a well-characterized insect enzyme involved in cuticular
        hydrocarbon biosynthesis&mdash;it produces the waxy waterproof coating on
        the insect&rsquo;s surface. Since every beetle needs this function, the
        gene is highly conserved and not specific to bioluminescent species.
        Although strongly expressed in the lantern, the most likely explanation
        is structural rather than involvement in luciferin biosynthesis.
      </p>

      {/* -- PPYR_07361 ------------------------------------- */}
      <h3>
        <code>PPYR_07361</code>{" "}
        <span className="ml-2 rounded-full bg-paper-dark px-2.5 py-0.5 font-mono text-[0.6875rem] text-secondary">
          Discarded
        </span>
      </h3>

      <p>
        A UDP-glucuronosyl/glucosyl transferase (UGT) (PF00201, E-value
        9.6e-83), with an additional C-terminal glycosyltransferase domain
        (PF06722). UGTs attach sugar groups to small molecules and are
        widespread in insects for detoxification and metabolite processing.
      </p>

      <p>
        In theory, a UGT could modify luciferin or a precursor for storage or
        transport. But sequence comparisons show it&rsquo;s a standard, highly
        conserved insect enzyme: <em>Tribolium</em> ~71%, <em>Tenebrio</em>{" "}
        ~70&ndash;72%, <em>Leptinotarsa</em> ~71.6%, <em>Rhyzopertha</em>{" "}
        ~73.3%. Annotated as UDP-glucuronosyltransferase 2C1, it&rsquo;s clearly
        present across many non-luminous beetles.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Relaxing the filter</h2>

      <p>My original (&ldquo;strict&rdquo;) filter was:</p>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-hairline bg-paper-dark p-4">
          <p className="mb-2 font-mono text-[0.6875rem] uppercase tracking-wider text-secondary">
            Strict filter
          </p>
          <ul className="m-0 space-y-1 p-0 text-sm">
            <li>Lantern TPM &ge; 50</li>
            <li>sleuth b &ge; 3 (&asymp; 8&times;)</li>
            <li>qval &le; 1e-10</li>
          </ul>
          <p className="mt-3 font-mono text-xs text-secondary">
            15,773 &rarr; 41 genes &rarr; 18 enzymes
          </p>
        </div>
        <div className="rounded-lg border border-accent/30 bg-accent-light p-4">
          <p className="mb-2 font-mono text-[0.6875rem] uppercase tracking-wider text-accent">
            Relaxed filter
          </p>
          <ul className="m-0 space-y-1 p-0 text-sm">
            <li>Lantern TPM &ge; 20</li>
            <li>sleuth b &ge; 2 (&asymp; 4&times;)</li>
            <li>qval &le; 0.001</li>
          </ul>
          <p className="mt-3 font-mono text-xs text-secondary">
            15,773 &rarr; 117 genes &rarr; 94 enzymes (76 new)
          </p>
        </div>
      </div>

      <p>
        I lowered the minimum lantern expression (50 &rarr; 20 TPM), the
        fold-change requirement (8&times; &rarr; 4&times;), and loosened the
        significance cutoff (1e-10 &rarr; 1e-3). The goal was to catch genes
        that are less dramatically lantern-enriched but still clearly biased
        toward the lantern.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Flagging interesting candidates</h2>

      <p>
        From the 76 new enzyme-annotated genes, I manually scanned GO terms and
        pulled out anything with chemistry plausibly relevant to luciferin
        biosynthesis:
      </p>

      <ul>
        <li>
          <strong>Oxidoreductases</strong> (GO:0016491, GO:0055114) &mdash;
          luciferin pathways typically involve oxidation chemistry
        </li>
        <li>
          <strong>FAD-binding enzymes</strong> (GO:0050660) &mdash; flavoenzymes
          are common small-molecule oxidizers
        </li>
        <li>
          <strong>P450 / heme oxidases</strong> (GO:0016705, GO:0020037) &mdash;
          classic aromatic oxidation machinery
        </li>
        <li>
          <strong>Monooxygenases</strong> (GO:0004497) &mdash; potential
          hydroxylation steps
        </li>
        <li>
          <strong>Transferases</strong> that move acyl / sulfur / sugar groups
          &mdash; plausible modification of luciferin precursors
        </li>
        <li>
          Anything tagged <code>GO:0008218</code> (bioluminescence)
        </li>
      </ul>

      <MarginNote>
        This triage is GO-term based, and GO terms can be misleading or
        overbroad. Every &ldquo;interesting&rdquo; hit still received a BLAST
        and HMMER check.
      </MarginNote>

      {/* -- Deprioritized ---------------------------------- */}
      <h3>
        <code>PPYR_10049</code>{" "}
        <span className="ml-2 rounded-full bg-paper-dark px-2.5 py-0.5 font-mono text-[0.6875rem] text-secondary">
          Deprioritized
        </span>
      </h3>

      <p>
        Annotated as &ldquo;protein henna,&rdquo; the <em>Drosophila</em> name
        for phenylalanine hydroxylase. A conserved insect enzyme in
        pterin/melanin-related metabolism. Appears across many beetles at
        ~76&ndash;80% identity (<em>Tribolium</em> ~79.8%, <em>Diorhabda</em>{" "}
        ~80.3%, <em>Diabrotica</em> ~77&ndash;80%). Not firefly-specific and
        unlikely to represent a luciferin pathway innovation.
      </p>

      <h3>
        <code>PPYR_03580</code>{" "}
        <span className="ml-2 rounded-full bg-paper-dark px-2.5 py-0.5 font-mono text-[0.6875rem] text-secondary">
          Deprioritized
        </span>
      </h3>

      <p>
        A glucose dehydrogenase (FAD, quinone)-like enzyme. Homologs show up
        across beetles (<em>Tenebrio</em> ~57.7%, <em>Tribolium</em> ~54.3%,{" "}
        <em>Zophobas</em> ~54.2%). A conserved FAD-dependent housekeeping
        dehydrogenase, not a specialized bioluminescence-pathway enzyme.
      </p>

      <hr />

      {/* ================================================== */}
      <h2>Final candidates</h2>

      <p>
        After filtering, manual review, and cross-species BLAST, these are the
        genes that survived. They share a key trait:{" "}
        <strong>
          their BLAST hit distributions are skewed toward luminous beetles
        </strong>
        , with much lower identity to non-luminous species&mdash;a pattern
        consistent with lineage-specific evolution.
      </p>

      {/* -- PPYR_14756 ------------------------------------- */}
      <h3>
        <code>PPYR_14756</code>{" "}
        <span className="ml-2 rounded-full border border-accent/30 bg-accent-light px-2.5 py-0.5 font-mono text-[0.6875rem] font-medium text-accent">
          Candidate
        </span>
      </h3>

      <p>
        The BLAST hit list is all luminous beetles (multiple fireflies +{" "}
        <em>Ignelater luminosus</em>), with no obvious non-luminous beetles
        showing up. Sequence identity drops hard outside <em>Photinus</em>:
        ~95% to self, then down to ~62% even in other fireflies, and into the
        ~45&ndash;63% range more broadly. That pattern is consistent with a
        lineage-restricted enzyme that&rsquo;s evolving fast.
      </p>

      <p>
        It&rsquo;s annotated as <strong>UGT 3A2-like</strong>, which is a
        different UGT subfamily from <code>PPYR_07361</code> (UGT 2C1). UGTs
        attach sugars to small molecules. In a luciferin pathway, glycosylation
        is a very plausible move for storage, transport, detox control, or
        keeping a reactive intermediate stable.
      </p>

      <Callout label="Why this matters">
        A UGT that looks restricted to luminous beetles could be modifying
        luciferin itself or an upstream precursor. The taxonomy + divergence
        pattern finally matches what a bioluminescence-adjacent enzyme might
        look like.
      </Callout>

      {/* -- PPYR_02911 ------------------------------------- */}
      <h3>
        <code>PPYR_02911</code>{" "}
        <span className="ml-2 rounded-full border border-accent/30 bg-accent-light px-2.5 py-0.5 font-mono text-[0.6875rem] font-medium text-accent">
          Candidate
        </span>
      </h3>

      <p>
        A CYP4C-type cytochrome P450 whose BLAST pattern is skewed toward
        luminous beetles: <em>Photinus</em> has multiple close paralogs
        (~74&ndash;96% identity, including the nearby duplicate{" "}
        <code>PPYR_02910</code>). Other fireflies: <em>Pyrocoelia</em> ~71.6%,{" "}
        <em>Aquatica</em> ~70.5%, <em>Abscondita</em> ~66.3%. Other luminous
        beetles: <em>Ignelater luminosus</em> ~58&ndash;64%,{" "}
        <em>Lamprigera</em> ~56&ndash;64%. The first clearly non-luminous beetle
        is <em>Leptinotarsa decemlineata</em> at ~49%, far down the list.
      </p>

      <p>Two extra signals make this candidate worth keeping:</p>

      <ol>
        <li>
          The top hits are overwhelmingly luminous species. Even if it isn&rsquo;t
          perfectly exclusive, the distribution is strongly biased.
        </li>
        <li>
          There are multiple <em>Photinus</em> paralogs plus a nearby neighbor (
          <code>PPYR_02910</code>), consistent with recent duplication&mdash;a
          common signature of genes that get recruited and specialized into
          pathway roles.
        </li>
      </ol>

      {/* -- PPYR_14056 ------------------------------------- */}
      <h3>
        <code>PPYR_14056</code>{" "}
        <span className="ml-2 rounded-full border border-accent/30 bg-accent-light px-2.5 py-0.5 font-mono text-[0.6875rem] font-medium text-accent">
          Candidate
        </span>
      </h3>

      <p>
        Annotated as <strong>4-coumarate&ndash;CoA ligase 1-like</strong>. The
        BLAST distribution is striking: the visible hits are all luminous beetles
        (<em>Photinus</em>, <em>Aquatica</em>, <em>Abscondita</em>,{" "}
        <em>Pyrocoelia</em>, <em>Lamprigera</em>, <em>Ignelater</em>), with no
        obvious non-luminous beetles showing up. On top of that, the family
        looks massively expanded&mdash;<em>Photinus</em> alone has ~8&ndash;10
        paralogs. That combination (luminous-only skew + big local expansion) is
        a classic signature of a lineage-specialized pathway module.
      </p>

      <p>
        Mechanistically, the annotation makes sense. 4CL enzymes are
        adenylate-forming enzymes: they activate aromatic acids by forming an AMP
        intermediate, then often proceed to CoA thioester formation.{" "}
        <strong>
          That&rsquo;s the same core chemistry luciferase uses
        </strong>
        , and luciferase is known to have evolved from this broader
        adenylate-forming enzyme superfamily. The domain confirmation shows:
      </p>

      <ul>
        <li>AMP-binding enzyme domain (PF00501)</li>
        <li>AMP-binding C-terminal domain (PF13193)</li>
      </ul>

      <p>
        That is the same AMP-binding &ldquo;luciferase / 4CL / acyl-CoA
        synthetase&rdquo; architecture. With this many paralogs in luminous
        beetles, it&rsquo;s very plausible the cluster contains a mix of
        functions: some true luciferases, and others that activate aromatic
        precursors upstream and feed them into luciferin biosynthesis rather than
        emitting light directly.
      </p>

      <MarginNote>
        <code>PPYR_14056</code> is already in the literature as a pathway
        candidate, discussed in Zhang (2020). The other three candidates are
        novel.
      </MarginNote>

      {/* -------------------------------------------------- */}
      <h2>Sanity-checking the BLAST pattern</h2>

      <p>
        BLAST hit lists can be misleading with big gene families like CYP4. A
        &ldquo;top hit&rdquo; might just reflect generic CYP4 domain similarity
        rather than a true one-to-one ortholog.
      </p>

      <p>
        So I used <strong>reciprocal best hit (RBH) logic</strong> as a reality
        check:
      </p>

      <ol>
        <li>
          <strong>Forward BLAST</strong>: start with a <em>Photinus</em> gene
          (e.g., <code>PPYR_02910</code>), BLAST it broadly, and pick a top hit
          in another species.
        </li>
        <li>
          <strong>Reverse BLAST</strong>: take that other-species hit and BLAST
          it back against the <em>Photinus pyralis</em> proteome.
        </li>
        <li>
          If it comes back to the same <em>Photinus</em> gene (or the same local
          cluster), that supports shared orthology rather than a random CYP4
          match.
        </li>
        <li>
          If it comes back to a different CYP4 subfamily, the
          &ldquo;luminous-only&rdquo; interpretation may just be mixing
          subfamilies.
        </li>
      </ol>

      <p>
        Reciprocal BLAST suggests that <code>PPYR_02910</code> and{" "}
        <code>PPYR_02911</code> are not unique to fireflies, but belong to a
        conserved CYP4C ortholog group present across beetles. When I took top
        hits from luminous species like <em>Pyrocoelia</em> and blasted them
        back against the <em>Photinus</em> proteome, they didn&rsquo;t point to
        a single gene but to the same local CYP4C cluster. Doing the same with
        the first clearly non-luminous beetle hit (<em>Leptinotarsa</em>) gave
        the same outcome.
      </p>

      <p>
        However, there&rsquo;s still an interesting pattern in the identity
        values. Homologs from luminous beetles are much more similar to the{" "}
        <em>Photinus</em> CYP4C cluster (~73&ndash;77%) than the first
        non-luminous beetle tested (~51&ndash;54%), and <em>Photinus</em>{" "}
        itself contains multiple tandem duplicates in this region. Taken
        together, this suggests the CYP4C family is broadly conserved, but has
        undergone{" "}
        <strong>
          lineage-specific expansion and divergence in luminous beetles
        </strong>
        , which could indicate functional specialization in the lantern.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Phylogenetic analysis (IQ-TREE)</h2>

      <p>
        A BLAST search shows pairwise similarity, but it doesn&rsquo;t reveal
        evolutionary relationships. To understand how these CYP4C genes evolved,
        I built a small phylogenetic tree using 12 protein sequences: four from{" "}
        <em>Photinus</em> (including my two candidates and an outgroup), five
        from other luminous beetles, and three from non-luminous beetles. MAFFT
        was used to align the sequences, and IQ-TREE inferred the most likely
        evolutionary relationships.
      </p>

      <p>The results were consistent and informative:</p>

      <ul>
        <li>
          <code>PPYR_02910</code> and <code>PPYR_02911</code> cluster tightly
          together, confirming they are <strong>recent paralogs</strong>, likely
          from a tandem duplication in <em>Photinus</em>.
        </li>
        <li>
          The CYP4C genes from other luminous beetles (<em>Pyrocoelia</em>,{" "}
          <em>Aquatica</em>, <em>Abscondita</em>, <em>Lamprigera</em>,{" "}
          <em>Ignelater</em>) form a distinct subcluster that sits closer
          together than to the non-luminous beetle sequences.
        </li>
        <li>
          Non-luminous beetles branch earlier and sit outside this group,
          matching the identity gap seen in BLAST (~70%+ in luminous vs. ~50% in
          non-luminous).
        </li>
        <li>
          The outgroup (<code>PPYR_06980</code>, a CYP4G15) falls clearly
          outside the CYP4C cluster, confirming the analysis isn&rsquo;t mixing
          different P450 families.
        </li>
      </ul>

      <Callout label="Evolutionary picture">
        CYP4C genes exist across beetles, but in luminous beetles they form a
        tighter, expanded clade, and <em>Photinus</em> shows additional recent
        duplications within that group. This is consistent with
        lineage-specific expansion and functional divergence in fireflies. It
        does not prove these enzymes make luciferin, but the
        pattern&mdash;duplication, divergence, and lantern
        expression&mdash;is exactly what you&rsquo;d expect to see in genes
        that have been recruited and specialized as part of a new biochemical
        trait.
      </Callout>

      {/* -------------------------------------------------- */}
      <h2>How my candidates fit into the proposed pathway</h2>

      <p>
        The current working model from Zhang et al. (2020) proposes that
        luciferin is derived from tyrosine through a series of oxidation and
        activation steps, eventually forming p-benzoquinone, which then reacts
        with cysteine to produce luciferin.
      </p>

      <p>
        Most of the early steps (TAT, HPPD) are standard metabolism and well
        understood. The uncertainty begins in the middle of the
        pathway&mdash;especially around how benzoquinone is generated, how
        it&rsquo;s activated and transported, and how reactive intermediates are
        handled safely.{" "}
        <strong>That&rsquo;s where my candidate genes sit.</strong>
      </p>

      <h3>The key insight from newer work</h3>

      <p>The biggest shift in thinking is this:</p>

      <blockquote>
        The benzothiazole ring formation (the cysteine additions) may not need a
        dedicated enzyme at all. It can happen spontaneously if p-benzoquinone
        is present, cysteine is present, and the environment is right.
      </blockquote>

      <p>
        If that&rsquo;s true, then the real biological problem isn&rsquo;t
        &ldquo;how do you close the ring?&rdquo; It&rsquo;s:{" "}
        <strong>
          How does the lantern reliably produce, control, and localize the
          quinone precursor?
        </strong>
      </p>

      <p>
        That reframing makes enzymes like CYP4C P450s (oxidation of aromatic
        precursors), UGTs (stabilizing or transporting reactive intermediates),
        and 4CL-like enzymes (activating aromatic acids) look very relevant to
        the missing steps.
      </p>
    </>
  );
}
