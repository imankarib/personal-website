import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kanie et al. (2018), Library",
  description:
    "Notes on: 2-S-cysteinylhydroquinone is an Intermediate for the Firefly Luciferin Biosynthesis that Occurs in the Pupal Stage of the Japanese Firefly, Luciola lateralis.",
};

export default function KanieEtAl2018Page() {
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
          2-S-cysteinylhydroquinone is an Intermediate for the Firefly
          Luciferin Biosynthesis that Occurs in the Pupal Stage of the Japanese
          Firefly, <em>Luciola lateralis</em>
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Shusei Kanie, Yuichi Oba
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Bioorganic Chemistry, Vol. 80 (Oct. 2018), pp. 223, 229
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The first Cys+BQ adduct in the luciferin pathway is identified
            directly in the animal.
          </strong>{" "}
          Working in <em>Luciola lateralis</em> pupae, the authors detected
          2-S-cysteinylhydroquinone, the Michael-addition product of L-cysteine
          onto p-benzoquinone, captured in its reduced hydroquinone form. This
          is the chemical identity of the first dedicated intermediate
          downstream of the BQ pool, and it had previously been inferred only
          from in vitro chemistry (Kanie 2016) rather than observed in vivo.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>Pupae, not adults, are the synthesis stage.</strong> The
          lantern of an adult firefly is essentially a glow organ running on
          luciferin laid down earlier; this paper localizes the actual
          biosynthetic activity to the pupal stage when the light organ is
          being built. That timing matters mechanistically, it means the
          enzymes (and the substrates BQ + Cys) are being co-expressed in a
          developmentally specific context, which is part of why the pathway
          has been hard to reconstruct from adult lantern transcriptomes
          alone.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The chemistry of the first conjugation is consistent with
            spontaneous Michael addition.
          </strong>{" "}
          Hydroquinone oxidizes to benzoquinone, benzoquinone is a soft
          electrophile, and a thiol like cysteine adds across the ring without
          needing an enzyme, this is textbook Michael chemistry and has been
          demonstrated to occur in buffer (Kanie 2016). The 2018 paper closes
          the loop: the same adduct that forms spontaneously in vitro is the
          one that accumulates in vivo. Whether a dedicated firefly enzyme
          accelerates this step or whether it runs on intrinsic reactivity
          remains formally open, but the chemistry is permissive.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Same species, same isotope-tracer toolkit as Oba 2013.
          </strong>{" "}
          The continuity matters, Oba&apos;s 2013 work in adult{" "}
          <em>L. lateralis</em> showed two L-Cys + one BQ &rarr; luciferin by
          stable-isotope LC/ESI-TOF-MS, and this paper uses compatible
          methodology to extend the picture into pupae and to nail down the
          first intermediate. Together they form a coherent biochemical case:
          BQ pool (from arbutin/HQ) &rarr; cysteinyl-HQ adduct (Cys #1) &rarr;
          onward steps requiring a second Cys addition, cyclizations, and
          oxidation to give luciferin.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Steps after 2-S-cysteinylhydroquinone are still unmapped.
          </strong>{" "}
          The paper identifies one intermediate but does not resolve the full
          sequence to luciferin, the second Cys addition, the benzothiazoline
          ring closures, and the final oxidation to the dehydroluciferin/
          luciferin redox state remain mechanistically open. Some of those
          steps (especially the cyclizations) are plausibly enzyme-assisted
          given their stereochemistry, and that is exactly the gap into which
          candidates like PPYR_02911 fit.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This paper is the in
        vivo evidence that the first committed step of luciferin biosynthesis
        after BQ formation is a chemically simple Cys-Michael addition, which
        is good news for the heterologous <em>N. tabacum</em> build, it
        suggests the first Cys+BQ conjugation may not require a dedicated
        firefly enzyme and could proceed on intrinsic reactivity once BGLU46
        (TU3) liberates HQ from arbutin and PPYR_02911 (TU2) handles the HQ
        &rarr; BQ oxidation. That collapses one potential gene from the
        minimum set. The flip side is that the downstream steps from
        2-S-cysteinylhydroquinone to luciferin are still unaccounted for, and
        that is where your candidate roster (PPYR_02911 as a P450 doing more
        than one job, or backup candidates like PPYR_05464) has to do real
        work. Worth citing whenever you justify why TU2 through TU4 plus
        endogenous tobacco cysteine is a defensible minimum pathway, while
        being honest in the same breath that the post-adduct chemistry is not
        yet enzymatically resolved.
      </p>
    </div>
  );
}
