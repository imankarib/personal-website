import { Glossary } from "~/components/ui/Glossary";
import { MarginNote } from "~/components/ui/MarginNote";

export function Phase0RubyRedContent() {
  return (
    <>
      <p>
        Use Michael Rae&rsquo;s Agrobacterium with RUBY-RED to infiltrate{" "}
        <em>N. rustica</em> leaves. Confirm you can get genes into plant cells:
        success = visible red pigmentation. Already have the GGA and white{" "}
        <em>E. coli</em> colonies with the RUBY-RED plasmid. Next steps:
        miniprep, and separately get Michael&rsquo;s Agrobacterium strain (which
        already has RUBY-RED) to do the actual infiltration.
      </p>

      <p>
        I&rsquo;m using <em>N. rustica</em> instead of the standard{" "}
        <em>N. benthamiana</em>. <em>N. benthamiana</em> has a broken RNA
        silencing pathway, which makes it great for lab work but a poor
        predictor of real-world performance. <em>N. rustica</em> has intact gene
        silencing like any normal plant, so if my constructs glow in{" "}
        <em>N. rustica</em>, they&rsquo;ll likely work in commercial ornamentals
        too. The tradeoff is weaker transient expression, which means I&rsquo;ll
        need a p19 silencing suppressor co-infiltrated to keep the plant from
        degrading my transgene mRNA.
      </p>

      <Glossary
        entries={[
          {
            term: "RUBY-RED",
            definition:
              "A visual reporter system. Three genes that encode enzymes converting tyrosine (an amino acid every plant already has) into betalain, a bright red pigment. When you agroinfiltrate it into a leaf, the infiltrated area turns visibly red within a few days.",
          },
          {
            term: "p19",
            definition:
              "A small protein from tomato bushy stunt virus (TBSV). It blocks a plant\u2019s natural defense mechanism called RNA silencing. It binds to the small RNA molecules the plant uses to target your mRNA for destruction, preventing them from doing their job.",
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h2>February 7th</h2>

      <p>
        Mixed the DNA parts (promoter, RBS/His-tag, linker, TEV cut site, CDS,
        terminator) into the pTiR-c2 receiving vector using BsaI and T4 ligase
        in the thermocycler. pTiR-c2 is the receiving vector (backbone). It
        provides two essential things: an origin of replication (so{" "}
        <em>E. coli</em> can copy it) and an antibiotic resistance gene. Used
        the CE_Deep_Vent polymerase as the CDS.
      </p>

      <p className="font-mono text-sm text-secondary">
        T7_lacO promoter &rarr; RiboJ/RBS/His-tag &rarr; GS flexible linker
        &rarr; TEV cut site &rarr; Deep Vent polymerase &rarr; TZ terminator
      </p>

      <MarginNote>
        The Deep Vent protein (once expressed and purified) is useful for PCR,
        which is a step in many cloning workflows. May be useful in future
        phases.
      </MarginNote>

      <Glossary
        entries={[
          {
            term: "pTiR-c2",
            definition:
              "A Golden Gate Assembly destination vector \u2014 the backbone plasmid that all the DNA parts get assembled into. Carries an origin of replication (so E. coli can copy it), an antibiotic resistance gene (for selection), and a red chromoprotein marker sitting in the cloning site that gets replaced by the insert during successful assembly, giving white/red colony screening. White colony = BsaI cut out the red placeholder, your insert went in. Success. Red colony = the vector closed back up with the red placeholder still inside. Your insert didn\u2019t make it in. Fail.",
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h2>February 10th</h2>

      <h3>In short</h3>
      <ul>
        <li>
          Transformed Day 1 Deep Vent GGA product into <em>E. coli</em> &rarr;
          worked, got colonies
        </li>
        <li>
          Transformed pSB1C3 and pTIR DV empty backbones into <em>E. coli</em>{" "}
          (simple transformation, no GGA) &rarr; worked, got colonies
        </li>
        <li>
          Transformed the luciferase parts from the iGEM kit &rarr; failed, no
          colonies (pre-made GGT)
        </li>
        <li>
          Transformed the RUBY-RED parts &rarr; worked, got white and red
          colonies (pre-made GGT)
        </li>
      </ul>

      <p>
        Did heat-shock transformations into NEB 5-alpha <em>E. coli</em>{" "}
        competent cells. Transformed two plasmids: pTIR DV (destination vector)
        and pSB1C3 (iGEM BioBrick backbone). Also transformed Scott&rsquo;s
        assemblies, including a RUBY-RED construct. Additionally, attempted a GGA
        with iGEM distribution luciferase genes, but those didn&rsquo;t grow,
        possibly degraded/old kit DNA. Scott followed up in an email that a
        re-do with the iGEM distribution luciferase worked.
      </p>

      <p>
        Scott confirmed colonies on GGA plates. The RUBY-RED GGA produced both
        white colonies (correct assembly) and red colonies (incomplete).
      </p>

      <Glossary
        entries={[
          {
            term: "NEB 5-alpha E. coli competent cells",
            definition:
              "NEB 5-alpha is specifically a cloning strain \u2014 it\u2019s great at copying plasmid faithfully but it\u2019s not designed to express proteins from it. Has mutations that prevent it from chewing up foreign DNA and from recombining the insert (which would scramble the construct).",
          },
          {
            term: "pSB1C3",
            definition:
              "A standard plasmid backbone from the iGEM competition. With chloramphenicol resistance and a high-copy origin of replication. It\u2019s the backbone used to store and distribute most parts in the iGEM kit. The luciferase genes Scott found in the iGEM 2021 distribution are sitting inside pSB1C3.",
          },
        ]}
      />

      {/* -------------------------------------------------- */}
      <h2>What carries forward</h2>

      <h3>Directly applicable</h3>
      <p>
        The RUBY-RED <em>E. coli</em> colonies: miniprep these to extract the
        plasmid DNA, then eventually electroporate it into Agrobacterium for
        your first agroinfiltration test on <em>N. rustica</em>. This is
        literally Step 0 of the project: proving infiltration works in your
        hands before you try luciferase.
      </p>

      <p>
        pTIR DV and pSB1C3 backbone stocks: once these are miniprepped,
        will have destination vectors on hand for your actual bioluminescence
        construct assemblies (BGL, laccase, ACOT1, wild-type luciferase,
        PPYR_02911).
      </p>

      <h3>Skills you&rsquo;ll need on every single construct</h3>
      <p>
        Everything you learned: Golden Gate Assembly, pipetting, measurements,
        fmol calculations, heat-shock transformation, colony screening (white vs
        red) &mdash; the exact same workflow you&rsquo;ll repeat when you
        assemble your pathway genes. The only difference is what goes in the C-E
        slot.
      </p>

      <h3>The one thing that doesn&rsquo;t carry forward</h3>
      <p>
        The Deep Vent polymerase protein itself. Probably won&rsquo;t need a
        thermostable DNA polymerase for your plant project. But the exercise of
        building that construct (promoter &rarr; RBS &rarr; gene &rarr;
        terminator) is exactly what you&rsquo;re building for your luciferase
        expression cassette.
      </p>
    </>
  );
}
