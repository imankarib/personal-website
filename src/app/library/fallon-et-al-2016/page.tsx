import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fallon et al. (2016), Library",
  description:
    "Notes on: Sulfoluciferin is biosynthesized by a specialized luciferin sulfotransferase in fireflies.",
};

export default function FallonEtAl2016Page() {
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
          Sulfoluciferin is Biosynthesized by a Specialized Luciferin
          Sulfotransferase in Fireflies
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Timothy R. Fallon, Fu-Shuang Li, Maria A. Vicent, Jing-Ke Weng
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Biochemistry, Vol. 55, Issue 24 (Jun. 21, 2016), pp. 3341, 3344
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>Sulfoluciferin is a real metabolite, not an artifact.</strong>{" "}
          LC-HRAM-MS of <em>P. pyralis</em> lantern extracts detected luciferyl
          sulfate at substantial levels alongside free luciferin. This had been
          hypothesized off and on since the 1970s but never cleanly confirmed
          in vivo. The compound is real and abundant, which means any model of
          firefly luciferin metabolism has to account for a sulfated pool.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            A dedicated luciferin sulfotransferase (LST) catalyzes the reaction.
          </strong>{" "}
          The authors identified a lantern-enriched cytosolic sulfotransferase,
          expressed it recombinantly, and showed it sulfates D-luciferin using
          PAPS as the sulfate donor. The enzyme is specific, it doesn&apos;t
          act on generic phenolic substrates the way broad detoxification SULTs
          do. This is a specialized enzyme of bioluminescence metabolism, not
          a moonlighting xenobiotic enzyme.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>The proposed function is luciferin storage.</strong> Free
          luciferin is reactive and can be oxidized non-enzymatically;
          sulfoluciferin is stable and inert. Sulfation parks luciferin as a
          non-reactive pool that can be drawn down (via a hypothesized
          sulfatase) when light production is needed. This is a classic
          plant-biochemistry storage strategy, sulfation and glycosylation
          both serve to detoxify and warehouse reactive metabolites, and the
          parallel to arbutin storage of hydroquinone (Oba 2013) is striking.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>LST is firefly-specific.</strong> Direct orthologs are
          present in <em>A. lateralis</em> but absent in the bioluminescent
          click beetle <em>I. luminosus</em> (later confirmed in Fallon 2018).
          The sulfation-storage strategy is a Lampyrid trait, not an ancestral
          feature of beetle bioluminescence. Click beetles solve the storage
          problem differently, or don&apos;t store luciferin at the same scale.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>PAPS supply in the lantern is also dedicated.</strong> The
          combined adenylyl-sulfate kinase / sulfate adenylyltransferase
          (ASKSA) that produces PAPS is itself lantern-enriched and
          peroxisomally targeted in fireflies (Fallon 2018). The cofactor
          supply is built up alongside the enzyme, sulfation of luciferin is
          not a side reaction running on ambient PAPS, it&apos;s a provisioned
          pathway.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> Luciferin homeostasis in
        the firefly lantern is two-tiered, a free reactive pool used for light
        production and a sulfated stable pool held in reserve. For a
        heterologous <em>N. tabacum</em> system you almost certainly do not
        need an LST ortholog: tobacco lacks the firefly&apos;s flux problem,
        your luciferin titers will be limiting rather than excessive, and you
        don&apos;t want to siphon scarce product into an inert storage form.
        But the paper matters for two reasons. First, it sets a precedent that
        firefly luciferin metabolism is more elaborate than substrate &rarr;
        enzyme &rarr; light, which is worth flagging when you describe pathway
        scope in proposals. Second, if your stable-transformation lines (Phase
        4) ever do produce too much luciferin and start showing toxicity or
        off-tissue glow, sulfation is one of the obvious mitigations to bolt
        on, plants already have endogenous SULTs and PAPS supply, so an LST or
        an LST-like activity could be co-expressed to buffer the pool. Worth
        keeping on the shelf, not in the current build.
      </p>
    </div>
  );
}
