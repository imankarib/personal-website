import { Callout } from "~/components/ui/Callout";
import { Glossary } from "~/components/ui/Glossary";
import { MarginNote } from "~/components/ui/MarginNote";

export function FireflyBioluminescenceContent() {
  return (
    <>
      <p>
        Firefly bioluminescence is a remarkably efficient chemical reaction.
        Nearly 100% of the energy is released as light rather than heat.
        Here&rsquo;s what&rsquo;s happening at the molecular level:
      </p>

      {/* -------------------------------------------------- */}
      <h2>The core reaction</h2>

      <h3>Step 1: Activation</h3>

      <p>
        Luciferase (the enzyme) catalyzes a two-step reaction. First it binds{" "}
        <strong>D-luciferin</strong> and <strong>ATP</strong> (with Mg&sup2;⁺ as
        a cofactor) forming <strong>luciferyl-adenylate</strong> (luciferin-AMP)
        and releasing <strong>pyrophosphate</strong> (PPi). This is essentially
        &ldquo;charging up&rdquo; the substrate.
      </p>

      <figure className="my-8">
        <img
          src="/images/step1-adenylation.png"
          alt="Step 1 — Adenylation: D-Luciferin + ATP (Mg²⁺) → Luciferyl-adenylate (LH₂-AMP) + PPi, catalyzed by luciferase"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 1.</strong> Adenylation step: luciferase activates
          D-luciferin with ATP, forming the enzyme-bound luciferyl-adenylate
          intermediate and releasing pyrophosphate.
        </figcaption>
      </figure>

      <Callout label="In regards to plants">
        <p>Plants are quite rich in ATP but do not create D-luciferin.</p>
        <p>
          Pyrophosphate (PPi) is a completely normal metabolite in plant cells.
          It&rsquo;s produced by dozens of reactions: DNA/RNA synthesis, amino
          acid activation, lipid biosynthesis, etc. Plants actually have
          unusually high cytosolic PPi levels compared to animals, and some
          plant enzymes even use PPi as an energy source instead of ATP (like
          the vacuolar H⁺-PPase proton pump, or PPi-dependent
          phosphofructokinase in glycolysis). So any PPi released by luciferase
          just gets recycled into normal metabolism. It is not expected to pose
          toxicity risks at physiological levels.
        </p>
        <p>
          Luciferyl-adenylate (LH₂-AMP) is a transient enzyme-bound
          intermediate, it doesn&rsquo;t really exist as a free molecule in the
          cell. It&rsquo;s formed in the luciferase active site and immediately
          reacts with O₂ in the same catalytic pocket. So it&rsquo;s never
          floating around at concentrations that could cause problems.
        </p>
      </Callout>

      {/* -------------------------------------------------- */}
      <h3>Step 2: Oxidation and light emission</h3>

      <p>
        The luciferyl-adenylate intermediate then reacts with molecular oxygen
        (O₂). This oxidation produces a highly unstable{" "}
        <strong>dioxetanone ring</strong> intermediate, which spontaneously
        decomposes to yield <strong>oxyluciferin</strong>, <strong>CO₂</strong>,
        and <strong>AMP</strong> and a photon of light (~560 nm, yellow-green).
      </p>

      <p>
        This light comes from oxyluciferin being produced in an electronically
        excited state and then relaxing to its ground state by emitting that
        photon.
      </p>

      <figure className="my-8">
        <img
          src="/images/step2-oxidation-light-emission.png"
          alt="Step 2 — Oxidation: O₂ addition forms hydroperoxide, cyclization yields dioxetanone + AMP, decomposition produces excited oxyluciferin + CO₂ → photon at ~560 nm"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 2.</strong> Oxidation and light emission: O₂ attacks
          luciferyl-AMP forming a hydroperoxide, which cyclizes into a strained
          dioxetanone ring. Decomposition yields excited-state oxyluciferin that
          relaxes by emitting a ~560 nm photon.
        </figcaption>
      </figure>

      <MarginNote>
        The color depends on the luciferase enzyme&rsquo;s active site
        environment. In <em>Photinus pyralis</em>, wild-type luciferase produces
        yellow-green light at ~560 nm. Small changes in the active site (pH,
        temperature, or mutations) can shift this toward red.
      </MarginNote>

      <Callout label="In regards to plants">
        <p>
          Oxyluciferin and AMP are also benign. AMP is a standard cellular
          metabolite (feeds right back into adenylate kinase to regenerate ATP),
          and oxyluciferin is a small inert molecule produced in tiny
          quantities.
        </p>
        <p>
          The real metabolic burden question for this project is more about{" "}
          <strong>flux drain</strong>, whether diverting precursors toward
          luciferin biosynthesis could stress the plant.
        </p>
      </Callout>

      <Glossary
        entries={[
          {
            term: "Luciferase",
            definition:
              "The enzyme that catalyzes the light-producing reaction.",
          },
          {
            term: "D-luciferin",
            definition:
              'The small molecule "fuel" that luciferase uses to generate light.',
          },
          {
            term: "Luciferyl-adenylate (LH\u2082-AMP)",
            definition:
              "A short-lived activated form of luciferin created inside the enzyme before oxygen reacts.",
          },
          {
            term: "PPi (pyrophosphate)",
            definition:
              "A common cellular byproduct released when ATP is used.",
          },
          {
            term: "Dioxetanone",
            definition:
              "A very unstable high-energy intermediate whose breakdown ultimately leads to light emission.",
          },
          {
            term: "Oxyluciferin",
            definition:
              'The oxidized "spent" form of luciferin left after the flash.',
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h2>The luciferin biosynthesis problem</h2>

      <p>
        This is where it gets really interesting and where the field has been
        stuck for decades. Keith Wood showed in 1986 that if you put the
        luciferase gene into plants and spray them with exogenous luciferin,
        they glow. But that&rsquo;s not autonomous, you need to continuously
        supply the substrate. The question is: where does D-luciferin come from
        in the firefly? The pathway has been progressively worked out over the
        last decade, but certain parts remain unclear.
      </p>

      <Callout label="Note">
        Listing firefly biosynthesis in steps may not accurately reflect the
        process as many pieces remain unclear. The steps are inferred based on
        recent findings and our current understanding.
      </Callout>

      {/* -------------------------------------------------- */}
      <h3>Step 1: The condensation of the quinone with L-cysteine</h3>

      <p>
        That&rsquo;s the first moment where something luciferin-specific is
        happening. Everything before it is just general metabolism making normal
        molecules. The condensation is where the firefly&rsquo;s unique
        chemistry begins, it&rsquo;s the first committed step toward building
        luciferin.
      </p>

      <p>
        Current evidence supports that luciferin forms from one molecule of a
        quinone and two molecules of L-cysteine. These are ordinary biological
        metabolites: quinone/hydroquinone redox systems are widespread in cells
        (CoQ10 being a familiar example), and cysteine is a standard amino acid
        present in all tissues. This makes the chemistry particularly relevant
        for engineering efforts, since the precursors already exist in plants.
      </p>

      <figure className="my-8">
        <img
          src="/images/condensation-overview.png"
          alt="Overview of condensation step: Arbutin → Hydroquinone (via BGL) → p-Benzoquinone (via Laccase) + 2× L-Cysteine → D-Luciferin"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 3.</strong> Overview of the condensation step: all
          three starting materials are ordinary metabolites already present in
          plant cells.
        </figcaption>
      </figure>

      <p>
        The first cysteine reacts with the quinone to form the benzothiazole
        core, and during this step its carboxyl group is lost as CO₂ through
        decarboxylation. A second cysteine then condenses with this intermediate
        to form the thiazoline ring and contributes the carboxylate group
        required for the ATP-dependent luciferase reaction. Together, these
        steps generate luciferin&rsquo;s characteristic heterocyclic structure.
      </p>

      <figure className="my-8">
        <img
          src="/images/condensation-steps-1a-1b.png"
          alt="Step 1a: p-Benzoquinone + L-Cysteine #1 → Benzothiazole core (with decarboxylation). Step 1b: Benzothiazole intermediate + L-Cysteine #2 → D-Luciferin (tricyclic structure)"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 4.</strong> Step 1a: the first cysteine forms the
          benzothiazole core, losing its carboxyl group as CO₂. Step 1b: the
          second cysteine adds the thiazoline ring, retaining its &ndash;COOH
          for the luciferase reaction.
        </figcaption>
      </figure>

      <p>
        This condensation chemistry can occur non-enzymatically: p-benzoquinone
        mixed with cysteine in a neutral buffer produces luciferin at low yield.
        In the firefly, however, the process is likely enzyme-assisted. Copper
        oxidases such as laccase enhance luciferin formation from hydroquinone
        and cysteine in vitro, suggesting that regulated quinone redox chemistry
        may play a role in vivo. Hydroquinone itself is thought to be stored in
        a protected glycosylated form, possibly as arbutin, and released by
        &beta;-glucosidase when needed.
      </p>

      <p>
        The system functionally depends on D-luciferin, since it is the only
        enantiomer efficiently used by luciferase to produce light.
      </p>

      <figure className="my-8">
        <img
          src="/images/condensation-d-luciferin.png"
          alt="Why D-Luciferin matters: L-Cysteine → L-Luciferin (weak/no light) → deracemization via CoA pathway → D-Luciferin (bright light) → luciferase → Light at ~560 nm"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 5.</strong> Luciferase is stereospecif, only
          D-luciferin produces bright light. The biosynthetic pathway starts
          from L-cysteine, so stereochemical inversion must occur at some point.
        </figcaption>
      </figure>

      <Glossary
        entries={[
          {
            term: "Condensation",
            definition:
              "A reaction where two smaller molecules join together to form one larger molecule. When they join, a tiny molecule such as water is usually released as a byproduct.",
          },
          {
            term: "Quinone",
            definition:
              "A small ring-shaped molecule that cells commonly use to move electrons around. It exists because cells constantly need to transfer energy and electrons during metabolism. Quinones are good at accepting and giving away electrons, which makes them useful in energy systems like respiration and photosynthesis.",
          },
          {
            term: "Hydroquinone",
            definition:
              "The reduced form of a quinone. In simple terms, it is the same ring structure but holding extra electrons. Cells can switch quinone and hydroquinone back and forth depending on whether they need to carry or release energy.",
          },
          {
            term: "Redox pair",
            definition:
              "Two versions of the same molecule that can convert into each other by gaining or losing electrons. One form holds more energy, the other holds less. Quinone and hydroquinone are a classic example.",
          },
          {
            term: "L-cysteine",
            definition:
              "One of the twenty normal amino acids used to build proteins. It is special because it contains sulfur, which makes it chemically reactive and useful for building more complex molecules.",
          },
          {
            term: "Ubiquinone (Coenzyme Q10)",
            definition:
              "A quinone used by cells to move electrons during energy production inside mitochondria. It is present in almost all plants and animals. Yes, this is the same CoQ10 that is sold as a supplement.",
          },
          {
            term: "Benzothiazole",
            definition:
              "A structure made from two connected rings. One is a standard benzene ring and the other is a smaller ring that contains sulfur and nitrogen. This type of structure is common in many natural molecules and drugs.",
          },
          {
            term: "Decarboxylation",
            definition:
              "A reaction where a small piece of a molecule called a carboxyl group is removed and released as carbon dioxide. This often happens when molecules are being reshaped into new structures.",
          },
          {
            term: "Thiazoline",
            definition:
              "A small five-membered ring that contains sulfur and nitrogen. It is not fully stabilized like an aromatic ring. In luciferin, this ring carries the acid group that lets the molecule react with ATP.",
          },
          {
            term: "Tricyclic",
            definition: "A molecule made of three connected rings.",
          },
          {
            term: "Laccase",
            definition:
              "An enzyme found in many plants and fungi that helps with oxidation reactions. It uses copper to pull electrons away from other molecules. In nature, laccases are often used to modify or break down complex plant chemicals like lignin.",
          },
          {
            term: "\u03B2-Glucosidase (BGL)",
            definition:
              "An enzyme that cuts a sugar off of another molecule. Organisms often attach sugars to chemicals to store them safely. This enzyme removes the sugar and releases the active molecule when it is needed.",
          },
          {
            term: "Arbutin",
            definition:
              "A storage form of hydroquinone where a glucose sugar is attached to it. This makes hydroquinone safer and less reactive. When the organism needs it, the sugar can be removed to release hydroquinone.",
          },
          {
            term: "Glycoside",
            definition:
              "A molecule where a sugar is attached to another chemical. Cells often use this as a storage strategy. The sugar keeps the molecule stable and non-reactive until an enzyme removes it.",
          },
          {
            term: "In vitro",
            definition:
              "Something studied in a controlled lab setting, such as in a test tube or dish, rather than inside a living organism.",
          },
          {
            term: "Stereochemistry",
            definition:
              "The three-dimensional arrangement of atoms in a molecule. Some molecules come in two mirror-image forms that look the same on paper but behave differently in biology. These are called D and L forms.",
          },
          {
            term: "Enantioselective",
            definition:
              "A reaction that prefers to make one mirror-image version of a molecule more than the other.",
          },
          {
            term: "Racemase",
            definition:
              "An enzyme that can flip one mirror-image form of a molecule into the other.",
          },
          {
            term: "Kinetic resolution",
            definition:
              "When an enzyme strongly prefers to use one mirror-image version of a molecule and ignores the other. Over time, this makes one form dominate.",
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h3>Step 2: Oxidation: benzothiazoline to benzothiazole</h3>

      <p>
        At some point during the pathway, the benzothiazoline ring must be
        oxidized to become a benzothiazole, the five-membered ring becomes fully
        aromatic. In benzothiazoline, a C&ndash;H bond in the five-membered ring
        interrupts the continuous loop of conjugated double bonds. Oxidation
        removes two hydrogens and forms a new double bond, completing an
        unbroken ring of delocalized electrons. Think of it like a highway with
        a gap. Once the gap is filled, electron traffic flows smoothly around
        the entire ring. The molecule becomes significantly more stable.
      </p>

      <figure className="my-8">
        <img
          src="/images/oxidation-reaction.png"
          alt="Oxidation step: Benzothiazoline (not fully aromatic, sp3 carbon breaks conjugation) → remove 2 hydrogens, form new C=N bond → Benzothiazole (fully aromatic, continuous π system)"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 6.</strong> The oxidation removes two hydrogens and
          forms a new C=N double bond, completing the conjugated &pi; system
          across the five-membered ring.
        </figcaption>
      </figure>

      <p>
        This oxidation can happen spontaneously. Benzothiazolines are prone to
        air oxidation, and in the non-enzymatic one-pot reaction (benzoquinone +
        cysteine in neutral buffer), molecular oxygen alone is sufficient. In
        fireflies, however, the step is likely enzyme-assisted to control rate,
        timing, and selectivity. The responsible enzyme has not been
        definitively identified. Candidates include a dedicated oxidase, a
        laccase already involved in earlier steps of the pathway, or a side
        activity of another pathway enzyme.
      </p>

      <p>
        Notably, the exact ordering of this oxidation relative to addition of
        the second cysteine remains unclear. The benzothiazoline could be
        oxidized before the second condensation step, or the fully assembled
        scaffold could be oxidized later as a finishing reaction. The in-vivo
        sequence has not been established.
      </p>

      <figure className="my-8">
        <img
          src="/images/oxidation-conjugation-timing.png"
          alt="Why conjugation matters: sp3 carbon breaks the π electron cloud, oxidation completes it. Timing unknown: oxidize first then add Cys #2, or add Cys #2 first then oxidize — both routes are chemically plausible."
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 7.</strong> Completing the conjugated system, and the
          two plausible orderings for when this oxidation occurs relative to the
          second cysteine addition.
        </figcaption>
      </figure>

      {/* -------------------------------------------------- */}
      <h2>What else must happen</h2>

      <p>
        After the benzothiazole core is formed and the second cysteine is added,
        several additional modifications must occur to produce the final,
        functional D-luciferin. The exact ordering and enzymes involved remain
        uncertain, but here is what we know about each.
      </p>

      {/* -------------------------------------------------- */}
      <h3>The 6-hydroxyl group</h3>

      <p>
        D-luciferin contains a hydroxyl group (&ndash;OH) at the 6-position of
        the benzothiazole ring. This group plays an important role in efficient
        bioluminescence. It participates in the molecule&rsquo;s conjugated
        system and helps shape how electrons are distributed across the
        structure. During the light-producing reaction, the &ndash;OH can lose
        its proton to form a phenolate (&ndash;O⁻). This change affects the
        energy of the excited state and is known to influence both the color and
        efficiency of light emission.
      </p>

      <figure className="my-8">
        <img
          src="/images/hydroxyl-position.png"
          alt="D-Luciferin structure showing the 6-position hydroxyl group on the benzothiazole ring, with electron donation into the ring system"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 8.</strong> The hydroxyl group sits at the 6-position
          of the benzothiazole ring, donating electrons into the conjugated
          system.
        </figcaption>
      </figure>

      <figure className="my-8">
        <img
          src="/images/hydroxyl-phenolate.png"
          alt="Phenol form (–OH, neutral, moderate electron donation) versus phenolate form (–O⁻, strong electron donation, more extended conjugation affecting light color)"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 9.</strong> Deprotonation of the 6-OH to phenolate
          extends conjugation and influences bioluminescence color (~560 nm
          yellow-green).
        </figcaption>
      </figure>

      <p>
        Where this hydroxyl group comes from in biosynthesis is still an open
        question. If the pathway begins with a precursor like p-benzoquinone,
        the oxygen atom may already be positioned correctly and carried through
        into the final structure, meaning no separate hydroxylation step would
        be needed. If the precursor does not provide the correct hydroxyl
        pattern, then an additional enzyme would likely be required to install
        it.
      </p>

      <MarginNote>
        <strong>Phenolate</strong> &mdash; The deprotonated form of a phenol
        (&ndash;OH &rarr; &ndash;O⁻); carries a negative charge and is a
        stronger electron donor into an aromatic ring.
      </MarginNote>

      {/* -------------------------------------------------- */}
      <h3>Stereochemical inversion: L-luciferin to D-luciferin</h3>

      <p>
        This is one of the most interesting unsolved problems in the pathway.
        Both cysteine molecules entering biosynthesis are L-cysteine, the
        natural form found in all living organisms. Yet efficient light
        production depends on D-luciferin, because firefly luciferase uses the
        D-enantiomer far more effectively than the L form.
      </p>

      <figure className="my-8">
        <img
          src="/images/stereochemical-problem.png"
          alt="The problem: L-Cysteine → L-Luciferin (wrong enantiomer, weak light) → ? → D-Luciferin (correct enantiomer, bright light) → Light at ~560 nm"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 10.</strong> Both cysteines entering biosynthesis are
          L-form, but luciferase only makes bright light with D-luciferin.
          Somewhere, the stereochemistry must flip.
        </figcaption>
      </figure>

      <p>
        The current leading model, supported by the Niwa (2006) and Maeda (2017)
        groups, proposes that the biosynthetic pathway initially produces
        L-luciferin, which is then converted to D-luciferin through a three-step
        deracemization process:
      </p>

      <figure className="my-8">
        <img
          src="/images/luciferase-dual-role.png"
          alt="Luciferase dual role: D-Luciferin enters the light path (oxidation → light), L-Luciferin enters the CoA path (CoA ligation → L-Luciferyl-CoA → epimerize → D-luciferin)"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 11.</strong> Luciferase plays a dual role: it sends
          D-luciferin into the light reaction and diverts L-luciferin into the
          CoA pathway for stereochemical conversion.
        </figcaption>
      </figure>

      <ol>
        <li>
          <strong>Enantioselective thioesterification:</strong> Luciferase
          selectively converts L-luciferin to L-luciferyl-CoA using ATP and
          Coenzyme A. The enzyme treats the two enantiomers differently:
          D-luciferin is directed into the light-producing reaction, while
          L-luciferin can be diverted into the CoA-ligase pathway.
        </li>
        <li>
          <strong>Epimerization:</strong> L-luciferyl-CoA spontaneously
          epimerizes (flips its stereochemistry) to D-luciferyl-CoA through enol
          formation. This step is non-enzymatic. The CoA thioester makes the
          adjacent chiral center acidic enough to racemize on its own.
        </li>
        <li>
          <strong>Thioester hydrolysis:</strong> A thioesterase (ACOT-type
          enzyme) cleaves the CoA off, releasing free D-luciferin ready for the
          bioluminescence reaction. The specific thioesterase in fireflies has
          not been definitively identified, though ACOT1 is a strong candidate.
        </li>
      </ol>

      <figure className="my-8">
        <img
          src="/images/deracemization-cycle.png"
          alt="Three-step deracemization cycle: 1. Enantioselective thioesterification (L-Luciferin + ATP + CoA → L-Luciferyl-CoA), 2. Spontaneous epimerization (L-Luciferyl-CoA → D-Luciferyl-CoA), 3. Thioester hydrolysis (D-Luciferyl-CoA → D-Luciferin via thioesterase/ACOT1)"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 12.</strong> The three-step deracemization cycle:
          enantioselective thioesterification, spontaneous epimerization, and
          thioester hydrolysis produce D-luciferin from L-luciferin.
        </figcaption>
      </figure>

      <p>
        This concept connects back to the enzyme behavior described earlier in
        the Core Reaction section, where luciferase shows different catalytic
        handling of the two enantiomers.
      </p>

      <Glossary
        entries={[
          {
            term: "Enantiomer",
            definition:
              "One of two mirror-image forms of a molecule that cannot be superimposed on each other, like left and right hands.",
          },
          {
            term: "D- and L-",
            definition:
              "Prefixes denoting the two mirror-image configurations at a chiral center; firefly luciferase only produces light with D-luciferin.",
          },
          {
            term: "Deracemization",
            definition:
              "A process that converts a mixture of both enantiomers (a racemic mixture) into predominantly one enantiomer.",
          },
          {
            term: "Enantioselective",
            definition:
              "A reaction or enzyme that preferentially acts on one enantiomer over the other.",
          },
          {
            term: "Thioesterification",
            definition:
              "Forming a thioester bond (C=O bonded to sulfur) between a molecule and Coenzyme A.",
          },
          {
            term: "Epimerization",
            definition:
              "Flipping the stereochemistry at a single chiral center in a molecule, converting one enantiomer to the other.",
          },
          {
            term: "Coenzyme A (CoA)",
            definition:
              'A common cellular cofactor that forms thioester bonds with various molecules; acts as an "activating handle" for metabolic reactions.',
          },
          {
            term: "Thioesterase",
            definition:
              "An enzyme that cleaves thioester bonds, releasing the molecule from its CoA handle.",
          },
          {
            term: "ACOT1",
            definition:
              "Acyl-CoA thioesterase 1; a candidate enzyme for the final hydrolysis step in the luciferin deracemization pathway.",
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h3>Sulfation and storage</h3>

      <p>
        Fireflies do not necessarily use all of their luciferin immediately. A
        luciferin sulfotransferase (LST) can add a sulfate group to the
        6-hydroxyl, producing sulfoluciferin. This sulfated form is inactive,
        meaning luciferase cannot use it as a substrate. Because of this, it is
        thought to function as a storage or regulatory form that helps control
        how much active luciferin is available at any given time.
      </p>

      <figure className="my-8">
        <img
          src="/images/sulfation-switch.png"
          alt="Sulfation switch: D-Luciferin (active, 6-OH free) is converted to Sulfoluciferin (inactive, 6-OH blocked) by LST + PAPS. A sulfatase reverses the reaction. Used for storage, protection, and flash regulation."
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 13.</strong> The sulfation switch: LST adds a sulfate
          to the 6-hydroxyl, producing inactive sulfoluciferin for storage. A
          sulfatase can reverse it when active luciferin is needed.
        </figcaption>
      </figure>

      <p>
        When luciferin is needed, the sulfate group can likely be removed by a
        sulfatase, releasing free, active luciferin again. While the exact
        enzyme responsible for this step has not been fully characterized, this
        reversible sulfation system appears to be part of how the firefly
        manages and buffers its luciferin supply. This process is not strictly
        part of biosynthesis, but it is an important part of how the organism
        regulates luciferin availability.
      </p>

      <MarginNote>
        <strong>Luciferin sulfotransferase (LST)</strong> &mdash; An enzyme that
        adds a sulfate group to luciferin&rsquo;s 6-hydroxyl, producing inactive
        sulfoluciferin for storage.
      </MarginNote>

      {/* -------------------------------------------------- */}
      <h3>Recycling: oxyluciferin to luciferin?</h3>

      <p>
        After light emission, the spent product is oxyluciferin. It would be
        advantageous if fireflies could recycle this product rather than relying
        entirely on de novo luciferin synthesis. A &ldquo;luciferin-regenerating
        enzyme&rdquo; (LRE) was reported to convert oxyluciferin into
        2-cyano-6-hydroxybenzothiazole (CHBT), a compound that can condense with
        cysteine to regenerate luciferin.
      </p>

      <figure className="my-8">
        <img
          src="/images/recycling-pathway.png"
          alt="Proposed recycling loop: D-Luciferin → luciferase → Light + Oxyluciferin → LRE → CHBT → + L-Cysteine → L-Luciferin → deracemization (L → D) → back to D-Luciferin"
          className="border-hairline w-full rounded border"
        />
        <figcaption className="text-secondary mt-2 text-center text-sm">
          <strong>Figure 14.</strong> The proposed recycling pathway: LRE
          converts oxyluciferin to CHBT, which condenses with cysteine to
          regenerate L-luciferin. Deracemization would then convert it back to
          D-luciferin.
        </figcaption>
      </figure>

      <p>
        However, the physiological importance of this recycling route remains
        debated. LRE has been suggested to lack a canonical peroxisomal
        targeting signal, raising questions about whether it localizes to the
        same compartment as luciferase, and multiple reviews note that
        LRE&rsquo;s in-vivo role still requires clarification.
      </p>

      <p>
        In short, LRE supports a plausible recycling mechanism in vitro, but
        whether fireflies recycle oxyluciferin efficiently in vivo, and by what
        exact enzyme set, remains an open question.
      </p>

      <Glossary
        entries={[
          {
            term: "Phenolate",
            definition:
              "The deprotonated form of a phenol (\u2013OH \u2192 \u2013O\u207B); carries a negative charge and is a stronger electron donor into an aromatic ring.",
          },
          {
            term: "Luciferin sulfotransferase (LST)",
            definition:
              "An enzyme that adds a sulfate group to luciferin\u2019s 6-hydroxyl, producing inactive sulfoluciferin for storage.",
          },
          {
            term: "Luciferin regenerating enzyme (LRE)",
            definition:
              "A proposed enzyme that converts spent oxyluciferin back into a benzothiazole intermediate for recycling; its role in vivo is debated.",
          },
          {
            term: "2-Cyano-6-hydroxybenzothiazole (CHBT)",
            definition:
              "A proposed intermediate in the recycling pathway; condenses spontaneously with cysteine to form luciferin.",
          },
          {
            term: "Peroxisomal targeting sequence",
            definition:
              "A short amino acid signal (typically -SKL at the C-terminus) that directs a protein to be imported into peroxisomes.",
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h2>Compartmentalization: where it all happens</h2>

      <p>
        The chemistry described above does not occur randomly throughout the
        cell. In fireflies, bioluminescence is spatially organized, and
        understanding that organization matters for anyone trying to recreate
        the system in another organism.
      </p>

      <h3>The lantern organ</h3>

      <p>
        Firefly bioluminescence occurs in a specialized organ called the
        lantern, located on the ventral abdomen. The lantern contains
        light-producing cells called photocytes, arranged in rosettes around
        oxygen-delivering tubes called tracheoles. Luciferin biosynthesis, the
        light reaction, and luciferin management processes are thought to be
        largely concentrated in these cells.
      </p>

      <h3>The peroxisome</h3>

      <p>
        Within each photocyte, the light-producing reaction takes place inside
        peroxisomes, small membrane-bound organelles. Firefly luciferase has a
        C-terminal peroxisomal targeting signal (the tripeptide &ndash;SKL),
        which directs it into peroxisomes after being synthesized in the
        cytosol. Photocytes are densely packed with peroxisomes, and these
        organelles are the primary sites where luciferase operates.
      </p>

      <p>
        The peroxisome likely does more than just contain the reaction.
        Concentrating enzymes and substrates in a small space can increase
        effective local concentrations and improve reaction efficiency. The
        peroxisomal environment may also help provide favorable redox conditions
        and pH for luciferase activity.
      </p>

      <p>
        Some candidate enzymes involved in luciferin management may also
        localize to peroxisomes. For example, certain ACOT-type thioesterases
        carry predicted PTS1 signals, suggesting that parts of the L&rarr;D
        conversion cycle could occur inside this compartment.
      </p>

      <h3>Multiple compartments</h3>

      <p>
        Not all pathway components appear to be peroxisomal. The proposed
        recycling enzyme LRE lacks a clear peroxisomal targeting signal,
        suggesting it may function in the cytosol. Enzymes involved in earlier
        steps, such as &beta;-glucosidase (BGL) and laccase, are also likely to
        operate outside the peroxisome. This implies that luciferin biosynthesis
        may span multiple cellular compartments, with earlier chemical steps
        occurring in the cytosol and the final light-producing reaction
        occurring in peroxisomes.
      </p>

      <h3>How fireflies control their flash</h3>

      <p>
        The on/off switching of firefly light is controlled largely by oxygen
        availability. Neural signals trigger nitric oxide (NO) release in the
        lantern. NO temporarily inhibits mitochondrial respiration, reducing
        oxygen consumption by mitochondria and allowing more oxygen to reach the
        peroxisomes. This influx of oxygen enables the luciferase reaction and
        produces a flash. When NO signaling stops, mitochondria resume consuming
        oxygen, reducing peroxisomal oxygen levels and turning the light off. In
        effect, the flash is controlled by regulating oxygen access.
      </p>

      <h3>Why this matters for plant engineering</h3>

      <p>
        Plants already contain peroxisomes, where processes like fatty acid
        &beta;-oxidation and photorespiration occur. The PTS1 import system is
        highly conserved across eukaryotes, which is why firefly luciferase
        expressed in plant cells correctly localizes to plant peroxisomes
        without modification.
      </p>

      <p>
        For an engineered system, directing luciferase (and possibly certain
        downstream enzymes) to peroxisomes using their native targeting signals
        could help recreate the concentrated reaction environment found in
        firefly photocytes. Enzymes involved in upstream steps may not require
        targeting, since their small-molecule substrates can likely diffuse
        between compartments.
      </p>

      <p>
        The key engineering question is whether compartmentalization
        significantly affects brightness. In the firefly, the peroxisomal
        concentration effect clearly contributes to efficiency. In a plant,
        where enzyme levels may be lower and cells are not specialized for light
        production, spatial organization could be an important factor in
        achieving visible glow.
      </p>
    </>
  );
}
