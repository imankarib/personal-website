import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Watkins et al. (2018), Library",
  description:
    "Notes on: New Zealand Glowworm (Arachnocampa luminosa) Bioluminescence Is Produced by a Firefly-Like Luciferase but an Entirely New Luciferin.",
};

export default function WatkinsEtAl2018Page() {
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
          New Zealand Glowworm (<em>Arachnocampa luminosa</em>) Bioluminescence
          Is Produced by a Firefly-Like Luciferase but an Entirely New
          Luciferin
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Oliver C. Watkins, Miriam L. Sharpe, Nigel B. Perry, Kurt L. Krause
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Scientific Reports, Vol. 8, Article 3278 (Feb. 19, 2018)
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            A firefly-family luciferase paired with a completely novel
            luciferin in a fly.
          </strong>{" "}
          <em>Arachnocampa luminosa</em>, the New Zealand cave glowworm (a
          fungus gnat larva, Diptera: Keroplatidae), produces blue-green light
          (&lambda;max 487 nm) using a 59 kDa enzyme that sits in the same ANL
          adenylating-enzyme superfamily as firefly luciferase but shares
          only ~30% sequence identity with <em>P. pyralis</em> and{" "}
          <em>L. cruciata</em> luciferases. The substrate, however, is not
          D-luciferin, it is a previously unknown molecule built from
          L-tyrosine and xanthurenic acid (XA, a kynurenine-pathway insect
          metabolite). The candidate luciferin &ldquo;LRC&rdquo; was isolated
          at 10 µg quantities, characterized by high-resolution MS, MS/MS
          fragmentation, deuterium-exchange MS, and ¹H NMR, and shown to
          produce intense fast-peak luminescence with crude luciferin-depleted
          glowworm luciferase. Diptera and Coleoptera diverged ~330 Mya with
          no known luminous lineages between, this is genuinely independent
          recruitment.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Direct refutation of the Trowell et al. (2016) claim that{" "}
            <em>Arachnocampa</em> uses firefly D-luciferin.
          </strong>{" "}
          Watkins shows no cross-reaction in either direction (firefly
          luciferin + glowworm luciferase, or glowworm luciferin + firefly
          luciferase yield only background), and LC-MS of <em>A. luminosa</em>{" "}
          lysates detects no firefly D-luciferin at all. The earlier Trowell
          report of recombinant <em>A. richardsae</em> luciferase producing
          light with D-luciferin is reframed here as likely promiscuous
          activity, even non-luminous insect acyl-CoA enzymes have low-level
          luciferase activity with firefly luciferin or analogs (Mofford 2014).
          The cautionary lesson: ANL-superfamily proteins frequently show
          baseline luciferase activity, so &ldquo;produces light with
          D-luciferin in a heterologous system&rdquo; is a much weaker claim
          than &ldquo;uses D-luciferin in vivo.&rdquo;
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Tyrosine + xanthurenic acid as luciferin precursors is
            unprecedented.
          </strong>{" "}
          No other characterized bioluminescent system uses this chemistry.
          Tyr is a component of coelenterazine and the Siberian earthworm{" "}
          <em>Fridericia heliota</em> luciferin, and XA is a well-studied
          insect kynurenine-pathway metabolite (antioxidant, eye pigment
          precursor, chemiluminescent quinoline), but their combination into
          a luciferin appears unique to glowworms. The proposed candidate
          structure (Fig. 7C in the paper) is a Tyr-XA conjugate with an
          aldehyde at the XA C3 position; final structural confirmation is
          pending synthesis. The &ldquo;slow-peak&rdquo; vs
          &ldquo;fast-peak&rdquo; luminescence kinetics observed in different
          lysates are explained by a two-step model: free Tyr + XA require an
          unidentified luciferin synthetase to assemble LRC before the
          luciferase can act on it, while pre-formed LRC produces fast-peak
          light directly. This parallels the hispidin &rarr; 3-hydroxyhispidin
          precursor logic in fungi (Purtov 2015 / Kotlobay 2018).
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Multiple independent recruitments of acyl-CoA synthetase enzymes
            as luciferases across the tree of life.
          </strong>{" "}
          Watkins frames this as a major emerging pattern: bioluminescent
          beetles (fireflies, click beetles, railroad worms), the Japanese
          firefly squid <em>Watasenia scintillans</em>, and now the{" "}
          <em>Arachnocampa</em> glowworm all use ANL-superfamily / acyl-CoA
          synthetase enzymes to adenylate and oxidize structurally entirely
          different luciferins. The Siberian earthworm{" "}
          <em>Fridericia heliota</em> is also ATP-dependent and may be another
          instance. The authors&apos; interpretation: the adenylation
          chemistry of acyl-CoA synthetases provides a uniquely flexible
          substrate for evolution of bioluminescent activity, because
          activating a carboxylate to an adenylate intermediate is a generic
          step that can be applied to many different luciferin scaffolds.
          This is convergent neofunctionalization at the enzyme-family level,
          distinct lineages independently coopting members of the same broad
          enzyme family for the same general chemistry on completely
          different substrates.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Active-site divergence from beetle luciferase is significant
            despite the family-level relationship.
          </strong>{" "}
          ATP-binding motifs and the lysine residue critical to the firefly
          adenylation half-reaction are conserved in the glowworm luciferase,
          but the residues that bind D-luciferin in the firefly enzyme are
          not well conserved, and the lysine that drives the oxidation
          (light-producing) half-reaction in beetle luciferase is replaced by
          a methionine in <em>Arachnocampa</em>. So the ATP-handling
          machinery is shared but the substrate-binding pocket has been
          substantially rebuilt to accommodate the Tyr-XA scaffold. This is a
          useful negative result for anyone tempted to argue that
          &ldquo;luciferase is luciferase,&rdquo; the architecture is
          genuinely modular, with the adenylation half conserved and the
          oxidation half rebuilt around each substrate.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Recombinant expression failed across multiple hosts.</strong>{" "}
          Bacterial, insect, and human cell expression of <em>A. luminosa</em>{" "}
          luciferase did not yield soluble protein at the time of publication.
          This is a recurring frustration with non-firefly luciferases, many
          do not fold well in <em>E. coli</em>, and is part of why firefly
          luc2 remains the dominant beetle-family reporter despite the
          glowworm system having an attractively blue-shifted emission for
          tissue penetration.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This paper is the
        strongest single citation for the argument that ANL-superfamily /
        acyl-CoA synthetase enzymes are repeatedly recruited as luciferases
        across deep evolutionary distances, making firefly luc2 not just one
        option among many but a member of an enzyme family with a
        demonstrated propensity for evolving bioluminescent activity.
      </p>
    </div>
  );
}
