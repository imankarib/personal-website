export function UpdatedExperimentalPlanContent() {
  return (
    <>
      <p className="text-secondary mb-8 text-sm italic leading-relaxed">
        Autonomous Bioluminescence in <em>Nicotiana tabacum</em>: Detailed
        Experimental Plan. Affiliation: Pownall Community Lab, Vancouver BC;
        HTGAA 2026. Document version: 1.0. Status: working plan, pending
        Step A verification.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Project framing</h2>

      <p className="drop-cap">
        The original goal was autonomous firefly bioluminescence in{" "}
        <em>N. tabacum</em> via a five-transcription-unit Golden Gate
        construct delivering reconstituted luciferin biosynthesis.
        Literature review has shifted the realistic scope to characterizing
        the endogenous substrate landscape for autonomous firefly
        bioluminescence in tobacco, with the minimum viable construct as
        the primary test and informative-negative outcomes as legitimate
        deliverables.
      </p>

      <p>
        The reframe is justified by three findings. First, firefly
        luciferin chemistry is partly spontaneous (Kanie 2016, Viviani
        2022), cysteine and benzoquinone form luciferin without enzyme
        catalysis. Second, the literature does not document free
        hydroquinone pools in healthy mature tobacco leaves, making
        endogenous substrate availability the dominant unknown. Third,
        glutathione competition kinetics predict benzoquinone half-life on
        the millisecond scale in plant cells, which combined with low free
        cysteine (9-10 µM in tobacco per Wirtz 2007) makes spontaneous
        luciferin formation rate-limited at femtomole-to-low-picomole per
        gram per hour, four to five orders of magnitude below standard
        tobacco luciferase imaging thresholds.
      </p>

      <p>
        The plan therefore emphasizes (a) a sequenced experimental
        progression with a real deliverable at each milestone, (b) decision
        points that determine what to do regardless of whether the headline
        experiment succeeds, and (c) a fallback path that converts a
        negative minimum-viable-construct result into a
        substrate-characterization deliverable.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Milestone summary</h2>

      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Description</th>
            <th>Estimated duration</th>
            <th>Primary deliverable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>Pre-experimental verification</td>
            <td>~1 week (mostly waiting on responses)</td>
            <td>Confirmed sequence, lab access, reagent availability</td>
          </tr>
          <tr>
            <td>B</td>
            <td>Phase 0 RUBY-RED practice infiltration</td>
            <td>~2 weeks</td>
            <td>Validated infiltration workflow; visible betalain pigmentation</td>
          </tr>
          <tr>
            <td>C</td>
            <td>TU1 luciferase validation with sprayed D-luciferin</td>
            <td>~2-3 weeks</td>
            <td>
              Documented luc2+SKL expression in tobacco peroxisomes; optimal
              OD600
            </td>
          </tr>
          <tr>
            <td>D</td>
            <td>TU1 + TU5 minimum viable construct test</td>
            <td>~2 weeks</td>
            <td>Test result on autonomous-substrate hypothesis</td>
          </tr>
          <tr>
            <td>E</td>
            <td>Optimization path (if Step D positive)</td>
            <td>~6-8 weeks</td>
            <td>Optimized construct, characterized signal kinetics</td>
          </tr>
          <tr>
            <td>F</td>
            <td>Substrate characterization path (if Step D negative)</td>
            <td>~6-8 weeks</td>
            <td>
              Identification of limiting substrate, staged engineering
              recommendations
            </td>
          </tr>
          <tr>
            <td>G</td>
            <td>Project handoff</td>
            <td>~1 week</td>
            <td>Final deliverable, post-HTGAA roadmap</td>
          </tr>
        </tbody>
      </table>

      <p>
        Total project duration: approximately 4-6 months, fitting within
        HTGAA 2026 timeline.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Step A: Pre-experimental verification</h2>

      <p>
        <strong>Objective:</strong> Resolve uncertainties that would
        invalidate downstream work before committing time and reagents to
        experiments.
      </p>

      <h3>Substep A1: Sequence verification</h3>
      <p>
        BLAST the ordered PPYR_02911 sequence (Twist synthesis, 1,575 bp,
        codon-optimized for <em>N. tabacum</em>) against the current{" "}
        <em>Photinus pyralis</em> geneset on i5k Workspace. The official
        geneset version 1.1 included updated multiple P450 gene models and
        naming. Confirm that the locus identifier and CDS still match what
        was ordered. Document the BLAST results with screenshots and save
        the verified sequence record alongside the Twist order
        confirmation. Time: 30 minutes.
      </p>
      <p>
        <strong>Decision criterion:</strong> if the sequence matches an
        outdated annotation, re-order before any other Twist orders ship.
        If the sequence matches the current annotation, proceed.
      </p>

      <h3>Substep A2: Construct sequence verification across all three Twist orders</h3>
      <p>
        While checking PPYR_02911, also verify TU3 (BGLU46+SKL, 1,590 bp)
        and TU4 (ACOT9, 1,416 bp) for: (a) absence of internal BsaI sites
        (Benchling has confirmed for TU2; need to confirm for TU3 and TU4);
        (b) absence of internal BbsI sites (not previously checked); (c)
        absence of standard BioBrick sites (EcoRI, XbaI, SpeI, PstI,
        HindIII, also not previously checked); (d) correct flanking
        overhangs (CATC at 5&prime; and GCTT at 3&prime; for PhytoBricks
        Level 0 parts). Use Benchling&apos;s enzyme finder. Time: 1 hour.
      </p>
      <p>
        <strong>Decision criterion:</strong> any flagged internal
        restriction sites require silent-mutation domestication before
        Twist ships. If clean, proceed.
      </p>

      <h3>Substep A3: HPLC access confirmation</h3>
      <p>
        Confirm with Pownall lab whether HPLC is available for substrate
        measurements, or whether collaboration access exists at UBC, SFU,
        or BC Cancer. The substrate landscape characterization (Step F
        primary) and Phase 3 LC-MS confirmation (Step E) both depend on
        this. Time: depends on response time.
      </p>
      <p>
        <strong>Decision criterion:</strong> if HPLC is available or
        accessible via collaboration, Step F can include direct substrate
        measurement. If unavailable, Step F shifts entirely to
        luminescence-readout-only spike-feeding diagnostics, which is
        workable but produces less mechanistically informative results.
      </p>

      <h3>Substep A4: p19 silencing suppressor strain confirmation</h3>
      <p>
        Confirm with Michael Rae whether his GV3101 stock includes a
        p19-expressing strain, or whether p19 needs to be sourced
        separately. Without p19, transgene expression in tobacco peaks at
        day 2-3 and crashes by day 5; with p19, expression is sustained
        through day 7-10. Addgene #74108 is a standard p19 binary vector
        if a fresh strain is needed.
      </p>
      <p>
        <strong>Decision criterion:</strong> if p19 is available, proceed.
        If not, building or sourcing a p19 strain is added as a Phase 0
        sub-task.
      </p>

      <h3>Substep A5: Imaging access confirmation</h3>
      <p>
        Identify which Vancouver-area lab has IVIS or equivalent cooled
        CCD imaging access for Phase 2 onwards. Phase 1 with sprayed
        D-luciferin can use a DSLR with long exposure for qualitative
        confirmation, but Phase 2 autonomous signal will require proper
        low-light imaging. Possible options: UBC Centre for Drug Research
        and Development, UBC Faculty of Medicine core facilities, BC
        Cancer Research Institute, SFU. Time: 30-60 minutes of email
        outreach plus response time.
      </p>
      <p>
        <strong>Decision criterion:</strong> if imaging access is
        confirmed, the timeline is unconstrained. If imaging access
        requires booking weeks in advance or paying per session, build the
        booking schedule into Phase 2 timing.
      </p>

      <p>
        <strong>Step A deliverable:</strong> A one-page verification
        document listing: PPYR_02911 sequence verification result,
        all-construct enzyme site clearance, HPLC access status, p19 strain
        status, imaging facility commitment.
      </p>
      <p>
        <strong>Decision point at end of Step A:</strong> If A1 or A2
        reveals problems, fix before proceeding. If A3 returns &ldquo;no
        HPLC access,&rdquo; update Step F design to luminescence-only. If
        A4 returns &ldquo;no p19,&rdquo; add p19 strain construction to
        Phase 0. If A5 returns &ldquo;no imaging access,&rdquo; restructure
        Phase 2 timing around external booking. Otherwise, proceed to Step
        B.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Step B: Phase 0, RUBY-RED practice infiltration</h2>

      <p>
        <strong>Objective:</strong> Validate the entire infiltration
        workflow using a published positive control with a visible
        non-luminescent readout, before committing to luciferase
        experiments.
      </p>

      <p>
        <strong>Rationale:</strong> RUBY (He et al. 2020) produces betalain
        pigment from tyrosine via three enzymes (CYP76AD1, DODA,
        glucosyltransferase) that turn infiltrated tissue visibly red. No
        specialized imaging required, no luciferin substrate, no ambiguity
        about whether infiltration worked. If RUBY produces visible color,
        the infiltration technique is sound. If RUBY does not produce
        visible color, troubleshoot before any luciferase work.
      </p>

      <h3>Pre-step preparation (Week 1)</h3>
      <ul>
        <li>
          Grow <em>N. tabacum</em> plants from seed: standard 16-hour day,
          22&deg;C, ~5-6 weeks to mature mid-canopy leaves
        </li>
        <li>
          Pick fully-expanded leaves 4-6 from the apex on plants showing
          healthy growth; avoid leaves that are still actively expanding
          (too fragile, low expression) or starting to senesce (immune
          system is shifted)
        </li>
        <li>
          Acquire RUBY plasmid from Addgene (#160407) and transform into
          GV3101
        </li>
        <li>
          Prepare MMA buffer: 10 mM MES pH 5.6, 10 mM MgCl&#8322;, 100-200
          µM acetosyringone (freshly added)
        </li>
      </ul>

      <h3>Procedure (Week 2)</h3>
      <ul>
        <li>Streak GV3101+RUBY on LB agar with rifampicin + spectinomycin</li>
        <li>
          Pick single colony, grow overnight in 5 mL LB + appropriate
          antibiotics, 28&deg;C, 220 rpm
        </li>
        <li>
          Pellet at 4000 g for 10 min, resuspend in MMA buffer to OD600 =
          0.5
        </li>
        <li>Incubate at room temperature for 2-3 hours for vir induction</li>
        <li>Co-infiltrate with p19 strain at OD600 = 0.3 (final mixture)</li>
        <li>
          Use 1 mL needleless syringe pressed against abaxial leaf surface;
          gently push solution into leaf until visible saturation spreads
          across infiltration zone
        </li>
        <li>Mark infiltration zones with permanent marker on the leaf</li>
        <li>Return plant to growth chamber</li>
      </ul>

      <h3>Readout</h3>
      <ul>
        <li>
          Day 3-4: check infiltration zones daily for visible red
          coloration
        </li>
        <li>
          Day 5-7: photograph infiltration zones; compare to
          mock-infiltrated zones on same leaf
        </li>
        <li>
          Document with date-stamped photos, lighting conditions, and
          infiltration parameters
        </li>
      </ul>

      <p>
        <strong>Step B deliverable:</strong> Photograph of tobacco leaf
        with visible red RUBY infiltration spots, plus an internal
        procedural document recording everything that worked and everything
        that didn&apos;t (OD600 used, leaf age, infiltration force, day
        signal appeared, signal intensity).
      </p>

      <p>
        <strong>Decision point at end of Step B:</strong>
      </p>
      <ul>
        <li>
          If RUBY produces visible color in infiltrated zones by day 5,
          infiltration technique is validated. Proceed to Step C.
        </li>
        <li>
          If no visible color, troubleshoot before Step C: check Agro
          viability, check OD600 measurement, check infiltration technique
          (was solution actually entering the leaf?), check leaf age,
          check growth chamber conditions. Repeat Step B until validated.
        </li>
        <li>
          Common failure modes: leaves too young (still expanding) &rarr;
          use older leaves; OD600 too low &rarr; increase to 0.8;
          infiltration solution running off rather than entering leaf
          &rarr; check syringe technique with experienced colleague.
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>Step C: TU1 luciferase validation with sprayed D-luciferin</h2>

      <p>
        <strong>Objective:</strong> Validate that luc2+SKL expresses in{" "}
        <em>N. tabacum</em> leaves and targets correctly to peroxisomes,
        with sprayed exogenous D-luciferin as substrate. This separates
        &ldquo;the reporter works&rdquo; from &ldquo;the autonomous
        biosynthesis works&rdquo; and is a standalone deliverable
        independent of all subsequent steps.
      </p>

      <p>
        <strong>Rationale:</strong> luc2 has been a tobacco reporter since
        Ow et al. 1986. SKL (Ser-Lys-Leu) C-terminal targeting to
        peroxisomes was originally characterized in plants. If TU1 fails
        to produce light when fed luciferin, the construct itself has a
        problem and downstream experiments are uninterpretable.
      </p>

      <h3>Construct preparation</h3>
      <ul>
        <li>
          TU1 assembly via PCR from BBa_K389004 template (luc2 in pSB1C3,
          iGEM 2021 Plate 4 Well 3C):
        </li>
        <li>
          Forward primer:{" "}
          <code>ttttGGTCTCaCCATatggaagatgccaaaaacattaagaagggc</code>
        </li>
        <li>
          Reverse primer:{" "}
          <code>ttttGGTCTCaAAGCTTACAGCTTGCTcacggcgatcttgccgcc</code>
        </li>
        <li>
          Reverse primer adds SKL (AGC AAG CTG = Ser-Lys-Leu) + TAA stop +
          GCTT overhang
        </li>
        <li>High-fidelity PCR (Q5 or Phusion), gel-extract product</li>
        <li>
          BsaI Golden Gate into Level 1 acceptor pICH47732 with 35S+&Omega;
          promoter (BBa_P10100, Plate 4 Well 14D) and NOS terminator
          (pICH41421, Addgene #50339, replacing BBa_P10401 because the
          iGEM part uses GCTC overhang instead of GCTT)
        </li>
        <li>
          Verify by sequencing with M13F/M13R or vector-specific primers
        </li>
        <li>Transform verified TU1 Level 1 plasmid into GV3101</li>
        <li>Confirm TU1 strain by colony PCR before glycerol stocking</li>
      </ul>

      <h3>Co-infiltration components</h3>
      <ul>
        <li>
          Renilla luciferase reporter for normalization: search Addgene for
          plant-codon-optimized 35S:Rluc8 or 35S:hRluc; if no suitable
          plasmid exists, build one as a small Golden Gate job using
          existing 35S+&Omega; + Rluc8 CDS + a terminator (separate ~2
          week sub-project)
        </li>
        <li>p19 silencing suppressor (separate strain, see Step A4)</li>
      </ul>

      <h3>Six-spot leaf design (per leaf, 3 plants for biological triplicates)</h3>
      <table>
        <thead>
          <tr>
            <th>Spot</th>
            <th>Contents</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MMA buffer only</td>
            <td>
              Wounding response, substrate autoluminescence baseline
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Empty-vector GV3101 + p19 + Renilla</td>
            <td>Agro-induced effects baseline</td>
          </tr>
          <tr>
            <td>3</td>
            <td>TU1 + p19 + Renilla, OD600 = 0.1</td>
            <td>Low-density expression test</td>
          </tr>
          <tr>
            <td>4</td>
            <td>TU1 + p19 + Renilla, OD600 = 0.3</td>
            <td>Mid-low density</td>
          </tr>
          <tr>
            <td>5</td>
            <td>TU1 + p19 + Renilla, OD600 = 0.5</td>
            <td>Mid-high density</td>
          </tr>
          <tr>
            <td>6</td>
            <td>TU1 + p19 + Renilla, OD600 = 0.8</td>
            <td>High density</td>
          </tr>
        </tbody>
      </table>

      <p>
        Total OD600 in each Agro mixture held at 0.8 by adjusting
        empty-vector co-infiltration, so the only variable across spots
        3-6 is TU1 strain proportion.
      </p>

      <h3>Imaging protocol (day 5 post-infiltration)</h3>
      <ul>
        <li>Detach or image attached leaves in the dark</li>
        <li>Spray 1 mM D-luciferin in 0.01% Triton X-100 across abaxial surface</li>
        <li>Wait 5 minutes for substrate uptake</li>
        <li>
          Image firefly luminescence: open filter or 560 nm bandpass, 30
          second to 5 minute exposure depending on signal strength
        </li>
        <li>Wait 30+ minutes for D-luciferin signal decay or wash with PBS</li>
        <li>Spray 50 µM native coelenterazine in PBS</li>
        <li>Image Renilla luminescence: 480 nm bandpass, similar exposure</li>
        <li>
          Quantify total photon flux per spot using ROI software (Living
          Image, Fiji)
        </li>
        <li>Compute firefly/Renilla ratio per spot</li>
      </ul>

      <h3>Western blot confirmation (in parallel)</h3>
      <ul>
        <li>Extract total protein from one leaf disc per spot at day 5</li>
        <li>Western with anti-firefly luciferase antibody (Promega G7451)</li>
        <li>Loading control: anti-actin or anti-tubulin</li>
        <li>Confirms expression independent of activity</li>
      </ul>

      <p>
        <strong>Step C deliverable:</strong> Imaged tobacco leaf with
        quantified luminescence at TU1 spots above mock and empty-vector
        backgrounds, optimal OD600 documented, Western blot confirming
        luc2 expression.
      </p>

      <p>
        <strong>Decision point at end of Step C:</strong>
      </p>
      <ul>
        <li>
          If TU1 produces light significantly above background AND Western
          shows expression: reporter validated. Proceed to Step D using the
          optimal OD600 from this round.
        </li>
        <li>
          If TU1 produces light but Western is weak/absent: technical
          artifact in Western, repeat. Proceed to Step D anyway since the
          functional assay is the priority.
        </li>
        <li>
          If no luminescence but Western shows expression: protein is made
          but not active. Possible issues: SKL targeting failure (try
          cytosolic luc2 in parallel), substrate access (try vacuum
          infiltration of luciferin instead of spray), construct error
          (re-sequence). Do not proceed to Step D until resolved.
        </li>
        <li>
          If no luminescence and no Western signal: construct or expression
          problem. Re-sequence TU1, check 35S+&Omega; promoter integrity,
          check NOS terminator, repeat infiltration with fresh Agro stock.
          Do not proceed.
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>Step D: TU1 + TU5 minimum viable construct test</h2>

      <p>
        <strong>Objective:</strong> Test whether co-infiltration of
        luc2+SKL plus AtLAC17 produces detectable autonomous
        bioluminescence in tobacco without sprayed luciferin substrate.
        This is the core experimental hypothesis of the reframed project.
      </p>

      <p>
        <strong>Hypothesis:</strong> AtLAC17 oxidizes endogenous tobacco
        hydroquinones to benzoquinones; benzoquinones react spontaneously
        with endogenous tobacco cysteine to form L-luciferin, which
        racemizes to D-luciferin via endogenous esterases, CoA, and
        luciferase activity (per Viviani 2022 mechanism); luc2+SKL
        produces light from D-luciferin.
      </p>

      <p>
        <strong>Realistic expected outcome</strong> (per substrate
        landscape literature review): Most likely outcome is non-detectable
        or barely-above-background signal due to (a) lack of documented
        free hydroquinone pools in healthy tobacco; (b) compartment
        mismatch between apoplastic AtLAC17 and intracellular cysteine;
        (c) glutathione quenching of benzoquinone on millisecond timescale
        at millimolar GSH concentrations; (d) low free cysteine (9-10 µM)
        competing against millimolar GSH for the same electrophile. A
        negative result is informative and feeds directly into Step F.
      </p>

      <h3>Construct preparation</h3>
      <ul>
        <li>
          TU5 (AtLAC17): PCR or synthesize <em>Arabidopsis</em> LAC17 CDS
          (At5g60020); standard PhytoBricks flanking; PCR from cDNA or
          order from Twist; consider whether to use AtLAC17 with native
          signal peptide (default apoplastic targeting) vs. variants
          without signal peptide (cytosolic, but laccases require specific
          maturation that may not occur outside the secretory pathway)
        </li>
        <li>
          BsaI Golden Gate into Level 1 acceptor with 35S+&Omega; promoter
          and a terminator distinct from TU1&apos;s NOS (use OCS or 35S
          terminator)
        </li>
        <li>Sequence verify, transform into GV3101</li>
      </ul>

      <h3>Six-spot leaf design (per leaf, 3 plants)</h3>
      <table>
        <thead>
          <tr>
            <th>Spot</th>
            <th>Contents</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MMA buffer only</td>
            <td>Background</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Empty-vector + p19 + Renilla</td>
            <td>Agro-induced background</td>
          </tr>
          <tr>
            <td>3</td>
            <td>TU1 + p19 + Renilla + sprayed D-luciferin</td>
            <td>Step C positive control on this leaf</td>
          </tr>
          <tr>
            <td>4</td>
            <td>TU1 + TU5 + p19 + Renilla, no sprayed substrate</td>
            <td>Test</td>
          </tr>
          <tr>
            <td>5</td>
            <td>TU1 + TU5 + p19 + Renilla, no sprayed substrate</td>
            <td>Test (biological replicate within leaf)</td>
          </tr>
          <tr>
            <td>6</td>
            <td>TU1 + TU5 + p19 + Renilla, no sprayed substrate</td>
            <td>Test (biological replicate within leaf)</td>
          </tr>
        </tbody>
      </table>

      <h3>Imaging protocol (day 5 post-infiltration)</h3>
      <ul>
        <li>
          Image firefly luminescence at the longest exposure the camera
          supports (typically up to 5 minutes for cooled CCD systems)
        </li>
        <li>Image Renilla after coelenterazine spray for normalization</li>
        <li>
          For TU1+TU5 spots specifically, do not spray any substrate before
          the firefly imaging, these spots are testing whether endogenous
          chemistry is sufficient
        </li>
        <li>Quantify firefly/Renilla ratio per spot</li>
        <li>
          Compare TU1+TU5 spots to mock and empty-vector spots for
          above-background signal
        </li>
      </ul>

      <p>
        <strong>Step D deliverable:</strong> Imaged leaf with quantified
        TU1+TU5 luminescence vs. controls, with explicit statement of
        whether signal is above background and at what magnitude.
      </p>

      <p>
        <strong>Statistical threshold for &ldquo;above
        background&rdquo;:</strong> TU1+TU5 firefly/Renilla ratio
        significantly greater than empty-vector firefly/Renilla ratio
        (paired t-test or mixed-effects model, p &lt; 0.05 with biological
        triplicates), AND fold-change of at least 2x over background. This
        threshold is set conservatively because plant tissue
        auto-luminescence is real and stress-dependent.
      </p>

      <p>
        <strong>Decision point at end of Step D:</strong>
      </p>
      <ul>
        <li>
          If TU1+TU5 produces signal above background per the threshold
          above: minimum viable hypothesis validated. Proceed to Step E
          (optimization).
        </li>
        <li>
          If TU1+TU5 does not produce signal above background: substrate
          supply is limiting. Proceed to Step F (substrate
          characterization).
        </li>
        <li>
          If TU1+TU5 produces inconsistent signal (some leaves yes, some
          no): proceed to Step F&apos;s spike-feeding diagnostics to
          characterize what&apos;s variable.
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>Step E: Optimization path (if Step D positive)</h2>

      <p>
        <strong>Objective:</strong> Maximize and characterize autonomous
        bioluminescence signal; integrate additional TUs as optional
        enhancements; produce manuscript-quality documentation of the
        system.
      </p>

      <p>
        This path is the success-case scenario. Each substep is an
        independent ~10-day experimental cycle, not a dependency chain.
        Order based on which questions are most informative, not which are
        easiest.
      </p>

      <h3>Substep E1: OD600 ratio optimization between TU1 and TU5 strains</h3>
      <p>
        Vary the proportion of TU1 to TU5 in the Agro mixture (1:1, 1:2,
        2:1, 1:5, 5:1) at fixed total OD600. Identifies whether the system
        is rate-limited by luciferase enzyme abundance or substrate
        generation. ~10 days.
      </p>

      <h3>Substep E2: Time course</h3>
      <p>
        Image TU1+TU5 spots at days 3, 5, 7, 10 post-infiltration.
        Characterizes signal kinetics, peak time, decay rate. Important
        for distinguishing &ldquo;weak but sustained&rdquo; from
        &ldquo;strong but brief&rdquo; expression patterns.
      </p>

      <h3>Substep E3: Tissue extraction and LC-MS confirmation (if HPLC accessible)</h3>
      <p>
        Extract day-5 infiltrated tissue, run LC-MS targeting D-luciferin
        (m/z 281.0049 [M+H]+, 278.9904 [M-H]-) with chiral separation if
        possible. Confirms that the signal is genuine
        luciferase-on-luciferin chemistry and not autoluminescence. If
        LC-MS is not accessible, this substep is replaced with biochemical
        confirmation: extract leaf, add to recombinant luciferase + ATP in
        vitro, observe whether extract supports luminescence (should show
        D-luciferin presence).
      </p>

      <h3>Substep E4: Add TU3 (BGLU46+SKL)</h3>
      <p>
        Test whether glucoside mobilization improves signal. TU1+TU5+TU3
        vs. TU1+TU5. If signal increases significantly with BGLU46,
        tobacco contains usable hydroquinone glucoside pool; if no change,
        the assumption was wrong.
      </p>

      <h3>Substep E5: Add TU2 (PPYR_02911)</h3>
      <p>
        Test whether oxidative tailoring improves signal. TU1+TU5+TU2 vs.
        TU1+TU5. Note: per the literature review, this may require also
        co-expressing <em>P. pyralis</em> or insect cytochrome P450
        reductase for activity. If adding PPYR_02911 alone produces no
        change, repeat with co-expressed insect CPR before concluding the
        candidate is inactive. Cloning <em>P. pyralis</em> CPR from Fallon
        transcriptome data is a separate ~3 week sub-project if PPYR_02911
        alone doesn&apos;t help.
      </p>

      <h3>Substep E6: Add TU4 (ACOT9)</h3>
      <p>
        Test whether stereochemistry conversion improves signal.
        TU1+TU5+TU4 vs. TU1+TU5. If signal increases, the L-to-D
        racemization step is rate-limiting in the basic system; if no
        change, racemization is happening adequately via endogenous
        mechanisms.
      </p>

      <h3>Substep E7: Combinatorial test of the most-effective additions</h3>
      <p>
        Based on E4-E6 results, build the combination that produced the
        strongest signal and characterize it fully (time course, OD600
        optimization, tissue distribution, signal duration over multiple
        imaging sessions).
      </p>

      <p>
        <strong>Step E deliverable:</strong> Manuscript-quality
        characterization of autonomous bioluminescence in tobacco with the
        identified optimal construct. Components: photograph of glowing
        tobacco leaf as headline figure, OD600 optimization curve, time
        course, LC-MS or biochemical luciferin confirmation, contribution
        analysis of optional TUs (TU2, TU3, TU4 each tested for impact).
        This is publishable.
      </p>

      <p>
        <strong>Decision point at end of Step E:</strong> Project meets
        HTGAA deliverable. Continue toward stable transformation (Phase 4,
        post-HTGAA) using the optimized construct.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Step F: Substrate characterization path (if Step D negative)</h2>

      <p>
        <strong>Objective:</strong> Identify which substrate, compartment,
        or competing reaction is limiting autonomous bioluminescence in
        tobacco. Convert a negative minimum-viable-construct result into a
        substrate-landscape characterization deliverable.
      </p>

      <h3>Path F-A: With HPLC access (preferred)</h3>

      <h3>Substep FA1: Direct measurement of free substrate pools</h3>
      <p>
        Extract leaf tissue from mock-infiltrated, empty-vector-infiltrated,
        and TU1+TU5-infiltrated leaves at day 5. LC-MS or HPLC-UV
        targeting:
      </p>
      <ul>
        <li>
          Free hydroquinone (C&#8326;H&#8326;O&#8322;, 110.0368 monoisotopic,
          109.0295 [M-H]&#8315;)
        </li>
        <li>
          Free catechol (same mass as hydroquinone, separable by retention
          time)
        </li>
        <li>
          Arbutin (C&#8321;&#8322;H&#8321;&#8326;O&#8327;, 272.0896,
          271.0823 [M-H]&#8315;)
        </li>
        <li>
          Free cysteine (C&#8323;H&#8327;NO&#8322;S, 121.0198, 122.0270
          [M+H]&#8314;), likely needs HILIC or derivatization for
          retention
        </li>
        <li>
          Free glutathione (C&#8321;&#8320;H&#8321;&#8327;N&#8323;O&#8326;S,
          307.0838, 306.0765 [M-H]&#8315;)
        </li>
      </ul>
      <p>
        <strong>Outcome:</strong> documented quantitative substrate
        landscape in the actual experimental conditions. This is the
        primary substrate-characterization deliverable.
      </p>

      <h3>Substep FA2: Spike-feeding rescue panel</h3>
      <p>
        Co-infiltrate TU1+TU5 spots with various exogenous substrates and
        image:
      </p>
      <ul>
        <li>Spot A: TU1 + sprayed D-luciferin (positive control)</li>
        <li>Spot B: TU1 + TU5, no spike (negative control)</li>
        <li>Spot C: TU1 + TU5 + 100 µM hydroquinone co-infiltrated</li>
        <li>Spot D: TU1 + TU5 + 1 mM L-cysteine co-infiltrated</li>
        <li>
          Spot E: TU1 + TU5 + 100 µM hydroquinone + 1 mM L-cysteine
          co-infiltrated
        </li>
        <li>
          Spot F: TU1 + TU5 + 10 µM benzoquinone (low dose, toxicity check
          first)
        </li>
      </ul>

      <p>
        <strong>Pattern interpretation:</strong>
      </p>
      <ul>
        <li>
          Spot C rescues, others don&apos;t &rarr; hydroquinone supply is
          the limit
        </li>
        <li>
          Spot D rescues, C doesn&apos;t &rarr; cysteine access is the
          limit
        </li>
        <li>
          Spot E rescues, neither C nor D alone &rarr; both are limiting
          in combination
        </li>
        <li>
          Spot F rescues, C doesn&apos;t &rarr; AtLAC17 oxidation step is
          the limit (laccase isn&apos;t producing benzoquinone fast enough
          or in the right place)
        </li>
        <li>
          Nothing rescues except Spot A &rarr; either GSH quenching is
          dominant or the spontaneous chemistry isn&apos;t happening at
          all in plant cells
        </li>
      </ul>

      <h3>Substep FA3: Compartment intervention test</h3>
      <p>
        Build a cytosolic luc2 variant (TU1 minus SKL, single primer
        change on the reverse primer). Test TU1-cytosolic + TU5 vs
        TU1-peroxisomal + TU5. If cytosolic luc2 produces signal where
        peroxisomal doesn&apos;t, the compartment mismatch is real and
        the engineering solution is laccase relocalization or luciferase
        relocalization, not biosynthesis enzyme addition.
      </p>

      <h3>Substep FA4: GSH modulation test</h3>
      <p>
        Use buthionine sulfoximine (BSO), a &gamma;-glutamylcysteine
        synthetase inhibitor that depletes cellular GSH, applied to leaf
        tissue prior to imaging. If BSO treatment rescues TU1+TU5 signal,
        GSH quenching is the dominant failure mode. If BSO has no effect,
        GSH is not the bottleneck. Caveat: BSO is broadly toxic to plant
        tissue; this is a perturbation experiment, not a sustainable
        engineering solution.
      </p>

      <h3>Path F-B: Without HPLC access (fallback)</h3>
      <p>
        If Step A determined HPLC is not available, Step F runs with
        luminescence-only readouts. Skip FA1 entirely. FA2 (spike-feeding)
        becomes the primary diagnostic. FA3 and FA4 proceed as designed
        since they use luminescence readouts.
      </p>
      <p>
        In this case, the Step F deliverable shifts from
        &ldquo;quantitative substrate landscape characterization&rdquo; to
        &ldquo;rescue-pattern-based identification of the limiting
        factor.&rdquo; Less mechanistically informative but still a real
        deliverable.
      </p>

      <p>
        <strong>Step F deliverable:</strong> Documented identification of
        which substrate, compartment, or competing reaction is limiting
        autonomous firefly bioluminescence in tobacco. Components:
        substrate pool measurements (with HPLC) or rescue pattern (without),
        interpretation of which engineering intervention is most likely to
        move the system from non-detectable to detectable, recommendations
        for staged Phase 4+ work. This is publishable as a foundational
        characterization paper for the field, framed as &ldquo;what would
        have to be true for autonomous firefly bioluminescence in plants
        to work.&rdquo;
      </p>

      <p>
        <strong>Decision point at end of Step F:</strong> Project meets
        HTGAA deliverable. Recommendations from F feed into post-HTGAA
        engineering work, different recommendations depending on what the
        limiting factor turned out to be:
      </p>
      <ul>
        <li>
          Hydroquinone-limited &rarr; upstream phenylpropanoid pathway
          engineering (PAL boost, dedicated hydroquinone synthase) or
          genetic substrate supplementation
        </li>
        <li>
          Cysteine-limited &rarr; SAT/OASTL overexpression or other sulfur
          metabolism intervention
        </li>
        <li>
          Compartment-limited &rarr; laccase relocalization (cytosolic
          AtLAC17 variant, or different laccase with native cytosolic
          expression)
        </li>
        <li>
          GSH-quenching-limited &rarr; harder problem; possibly requires
          apoplast-targeted reaction with apoplast-stable cysteine analog,
          or transient GSH knockdown via RNAi
        </li>
        <li>
          Multiple factors limiting &rarr; staged engineering with each
          factor addressed sequentially
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>Step G: Project handoff</h2>

      <p>
        <strong>Objective:</strong> Document everything in a form that
        supports continuation of the work post-HTGAA, whether by me or by
        future collaborators / employees.
      </p>

      <p>
        <strong>Components:</strong>
      </p>
      <ul>
        <li>Full experimental record in lab notebook format</li>
        <li>
          Sequence files for all constructs in Benchling and SnapGene
          formats
        </li>
        <li>
          Glycerol stocks of all GV3101 strains, properly labeled and
          stored at -80&deg;C
        </li>
        <li>
          Plasmid stocks of all Level 0, Level 1, and Level 2 constructs
        </li>
        <li>
          Photographic record of every infiltration experiment with
          metadata
        </li>
        <li>
          Quantitative imaging data exports (raw photon flux per spot)
          with ROI definitions
        </li>
        <li>Western blot images and quantifications</li>
        <li>Metabolomics data (if HPLC accessible)</li>
        <li>
          Final report: 10-15 page document covering the full project arc,
          results, and forward roadmap
        </li>
        <li>
          Foxfire/Lucera/Kepler-relevant artifact: distilled summary
          appropriate for investor or hiring conversations
        </li>
      </ul>

      <p>
        <strong>Step G deliverable:</strong> Project handoff package,
        suitable for HTGAA final presentation and for continuation into
        post-HTGAA work.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Risk register</h2>

      <p>
        Things that could go wrong, in roughly decreasing order of
        likelihood:
      </p>

      <p>
        <strong>Risk 1: Step C fails (TU1 doesn&apos;t produce light).</strong>{" "}
        Likelihood: low to moderate. Mitigation: Western blot identifies
        whether it&apos;s expression or activity; troubleshooting decision
        tree exists. Project pauses but doesn&apos;t restart from zero.
      </p>

      <p>
        <strong>
          Risk 2: Step D negative result is &ldquo;ambiguous&rdquo; rather
          than clearly negative.
        </strong>{" "}
        Likelihood: moderate. Some signal slightly above background but
        not statistically significant, or inconsistent across leaves.
        Mitigation: Step F spike-feeding is designed to handle this;
        ambiguous Step D becomes &ldquo;characterize the variability&rdquo;
        project.
      </p>

      <p>
        <strong>
          Risk 3: Twist orders contain undetected internal restriction
          sites.
        </strong>{" "}
        Likelihood: low after Step A2 verification. Mitigation: Step A
        catches this. If discovered after shipping, silent-mutation
        domestication via Q5 site-directed mutagenesis is feasible (~2
        weeks per construct).
      </p>

      <p>
        <strong>Risk 4: Imaging access becomes a bottleneck.</strong>{" "}
        Likelihood: low to moderate, depends on Step A5 outcome.
        Mitigation: book imaging slots well in advance; have DSLR backup
        for qualitative confirmation; build infiltration timing around
        imaging availability rather than the reverse.
      </p>

      <p>
        <strong>
          Risk 5: HPLC access turns out to be unavailable.
        </strong>{" "}
        Likelihood: moderate, depends on Step A3. Mitigation: Step F has
        a Path F-B that runs without HPLC; the deliverable degrades but
        doesn&apos;t disappear.
      </p>

      <p>
        <strong>Risk 6: Plant supply runs out.</strong> Likelihood: low if
        seed-starting is ongoing. Mitigation: stagger plant seeding so new
        mature plants are available every 2 weeks.
      </p>

      <p>
        <strong>
          Risk 7: Agrobacterium contamination kills cultures.
        </strong>{" "}
        Likelihood: low with good technique. Mitigation: maintain glycerol
        stocks; re-streak from -80&deg;C any time a culture seems off.
      </p>

      <p>
        <strong>
          Risk 8: GV3101 strain loses p19 plasmid over passages.
        </strong>{" "}
        Likelihood: low to moderate over many passages. Mitigation:
        re-streak from glycerol stock for each major experiment; verify
        p19 by colony PCR if signal seems to drop.
      </p>

      <p>
        <strong>Risk 9: I run out of time or energy.</strong> Likelihood:
        real and worth naming. Mitigation: the phased plan produces a
        deliverable at every milestone, so partial completion is still
        meaningful project work. If life intervenes after Step C, Step C
        alone is a real result.
      </p>

      {/* -------------------------------------------------- */}
      <h2>Open questions and assumptions</h2>

      <p>
        These are things this plan assumes that haven&apos;t been
        verified, listed so they can be revisited if any turn out to be
        false:
      </p>

      <ul>
        <li>
          That Pownall lab has bench space and equipment time available
          throughout the project duration
        </li>
        <li>
          That GV3101 + p19 with Michael Rae&apos;s protocols transforms
          reliably into <em>N. tabacum</em>
        </li>
        <li>
          That tobacco plants are available and growing at sufficient
          rate to keep up with experimental cadence
        </li>
        <li>
          That AtLAC17 expressed under 35S in tobacco produces functional,
          properly-folded protein with copper loading (not previously
          demonstrated in tobacco specifically; <em>Arabidopsis</em>{" "}
          native expression context may not transfer cleanly)
        </li>
        <li>
          That Renilla luciferase normalization works in tobacco at the
          substrate concentrations chosen (50 µM coelenterazine; some
          plant tissue is reported to interfere with coelenterazine but
          tobacco should be acceptable per Curtis 2025)
        </li>
        <li>
          That HPLC access, if confirmed in Step A3, includes appropriate
          columns and method development support, not just instrument
          access
        </li>
      </ul>

      {/* -------------------------------------------------- */}
      <h2>What this plan is not</h2>

      <p>
        This plan is not an attempt to actually deliver autonomous
        bioluminescent tobacco within HTGAA 2026. The literature predicts
        that&apos;s unlikely to happen on the timeline available with the
        substrate constraints documented. This plan is instead a sequenced
        experimental progression that produces a real deliverable at each
        milestone, characterizes the substrate landscape that determines
        what would need to change for the original goal to be achievable,
        and stages the engineering work for post-HTGAA continuation. The
        original 5-TU construct is preserved as the post-HTGAA
        optimization target rather than the HTGAA deliverable.
      </p>

      <p>
        The honest scope statement: HTGAA delivers either (a) the first
        autonomous firefly bioluminescence in plants with a 2-enzyme
        construct, or (b) the first quantitative characterization of why
        endogenous tobacco substrates are insufficient for autonomous
        firefly bioluminescence and what would be needed. Both are worth
        doing. The experiment determines which path the project takes.
      </p>

      <p className="text-secondary mt-8 text-sm italic">
        Document end. Version 1.0, drafted as a working plan pending Step
        A verification. Will be updated as Step A outputs come in.
      </p>
    </>
  );
}
