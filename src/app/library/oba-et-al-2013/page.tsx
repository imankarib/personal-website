import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oba et al. (2013), Library",
  description:
    "Notes on: Biosynthesis of firefly luciferin in adult lantern: decarboxylation of L-cysteine is a key step for benzothiazole ring formation.",
};

export default function ObaEtAl2013Page() {
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
          Biosynthesis of Firefly Luciferin in Adult Lantern: Decarboxylation of
          L-Cysteine Is a Key Step for Benzothiazole Ring Formation
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Yuichi Oba, Nobuyuki Yoshida, Shusei Kanie, Makoto Ojika, Satoshi
          Inouye
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          PLoS ONE, Vol. 8, Issue 12 (Dec. 27, 2013), e84023
        </p>
      </header>

      <p className="text-ink mb-8 text-[1.0625rem] leading-[1.78]">
        The biochemical ground truth, finally pinned down. Earlier
        &sup1;&#8308;C work from the 1970s (Okada, McCapra, Colepicolo) had
        pointed at cysteine and benzoquinone/hydroquinone as precursors but
        none of it was conclusive, and CBT, the long-standing textbook
        intermediate, had never actually been detected in a firefly. Oba
        injected stable-isotope-labeled precursors into living{" "}
        <em>Luciola lateralis</em> lanterns and tracked exactly which atoms
        ended up where via LC/ESI-TOF-MS. This paper is the in vivo proof.
      </p>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Two L-cysteines + one benzoquinone/hydroquinone &rarr; luciferin.
          </strong>{" "}
          Double-labeling with deuterated hydroquinone plus &sup1;&sup3;C-cysteine
          showed both molecules incorporated into the same luciferin in living
          tissue. One cysteine ends up in the benzothiazole ring (left half),
          the other in the thiazoline ring (right half). This is the
          three-precursor model your pathway is built on.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The carboxyl carbon of cysteine is lost as CO&#8322; during
            benzothiazole ring formation.
          </strong>{" "}
          Comparing L-Cys[1-&sup1;&sup3;C] vs L-Cys[3-&sup1;&sup3;C]
          incorporation: the C3 label was retained, the C1 (carboxyl) label was
          not. This is the title finding and it nails down the mechanism
          McCapra had only predicted in 1976.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Benzoquinone is the preferred substrate, not hydroquinone.
          </strong>{" "}
          Even at 10&times; lower concentration (55 vs. 550 nmol, benzoquinone
          is too toxic to inject more), benzoquinone showed higher
          incorporation efficiency. This implies hydroquinone is oxidized to
          benzoquinone before condensing with cysteine. The oxidation step is
          part of the pathway, not optional.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Both D- and L-luciferin are made from L-cysteine.
          </strong>{" "}
          When enantiomers were resolved on a chiral column, L-cysteine fed
          into both forms. The basal D:L ratio (~9:1) shifted toward L (~7:3)
          after injection. This means the firefly must have a racemization or
          inversion step, likely the CoA-mediated D/L cycling proposed by Niwa
          et al. (2006), and L-luciferin is on-pathway, not a dead-end
          byproduct.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Arbutin (hydroquinone-&beta;-glucoside) is present in lanterns;
            free hydroquinone is not.
          </strong>{" "}
          This points to arbutin as a storage form, with a &beta;-glucosidase
          releasing hydroquinone on demand for biosynthesis. It also explains
          why fireflies don&apos;t accumulate toxic free hydroquinone, they
          keep it sugar-capped until needed.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This is the paper that
        justifies every gene downstream of the precursor pool. BGL is justified
        because arbutin storage is real. The hydroquinone &rarr; benzoquinone
        oxidation step is justified because benzoquinone is the actual
        substrate that condenses with cysteine. The benzothiazole-ring
        chemistry (Kanie 2016&apos;s spontaneous condensation in a buffer) was
        shown here to be what&apos;s actually happening inside a living
        firefly. If you&apos;re writing a paper or grant, this is the citation
        that turns &ldquo;we think the pathway works like this&rdquo; into
        &ldquo;this is the established pathway.&rdquo;
      </p>
    </div>
  );
}
