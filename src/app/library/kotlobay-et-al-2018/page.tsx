import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kotlobay et al. (2018), Library",
  description:
    "Notes on: Genetically encodable bioluminescent system from fungi.",
};

export default function KotlobayEtAl2018Page() {
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
          Genetically Encodable Bioluminescent System from Fungi
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Alexey A. Kotlobay, Karen S. Sarkisyan, Yuliana A. Mokrushina, Marina
          Marcet-Houben, Ekaterina O. Serebrovskaya, Nadezhda M. Markina, et
          al. (Yampolsky lab and collaborators)
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          PNAS, Vol. 115, Issue 50 (Nov. 26, 2018), pp. 12728, 12732
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The complete fungal &ldquo;caffeic acid cycle&rdquo; is identified,
            four enzymes from a ubiquitous plant metabolite to light.
          </strong>{" "}
          The authors map the full pathway in <em>Neonothopanus nambi</em>:
          caffeic acid &rarr; hispidin (by hispidin synthase, HispS) &rarr;
          3-hydroxyhispidin / fungal luciferin (by hispidin-3-hydroxylase, H3H)
          &rarr; photon + caffeylpyruvate / oxyluciferin (by luciferase, nnLuz)
          &rarr; caffeic acid (by caffeylpyruvate hydrolase, CPH). This is the
          second-ever fully described luciferin biosynthesis pathway in any
          organism, after bacterial lux, and the first eukaryotic one. The
          luciferase nnLuz is a 267-aa protein with no homologs to known
          enzyme families, a genuinely novel protein family.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Three genes plus a phosphopantetheinyl transferase make{" "}
            <em>P. pastoris</em> glow on caffeic acid.
          </strong>{" "}
          hisps, h3h, nnluz, and <em>Aspergillus nidulans</em> npgA (which
          post-translationally activates the polyketide synthase HispS by
          attaching a phosphopantetheinyl arm) integrated into yeast yields
          visible bioluminescence in standard media supplemented with caffeic
          acid. Drop npgA or hisps and the glow fails. This is the minimum
          heterologous reconstitution.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Adding three caffeic acid biosynthesis genes makes yeast
            autonomously bioluminescent on standard media.
          </strong>{" "}
          Tyrosine ammonia lyase from <em>Rhodobacter capsulatus</em> plus the
          two <em>E. coli</em> 4-hydroxyphenylacetate 3-monooxygenase
          components feed caffeic acid from endogenous tyrosine. The
          seven-gene cassette (TAL + HpaB/HpaC + HispS + H3H + nnLuz + NpgA)
          is the full autonomy package, and is the direct conceptual ancestor
          of the autoluminescent plants Mitiouchkina et al. would publish in
          2020.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Plants already have caffeic acid as a core phenylpropanoid
            intermediate.
          </strong>{" "}
          This is the practical reason fungal autoluminescence has translated
          to plants more readily than firefly luciferin ever has. Tobacco,{" "}
          <em>Arabidopsis</em>, and most plants run high flux through
          phenylalanine &rarr; cinnamic acid &rarr; p-coumaric acid &rarr;
          caffeic acid as part of normal lignin and phenylpropanoid
          metabolism, so heterologous expression of HispS + H3H + nnLuz + CPH
          (plus NpgA) can in principle tap an endogenous substrate pool
          without supplemental feeding. In contrast, plants do not natively
          make D-luciferin or its hydroquinone/cysteine-derived precursors,
          which is why the firefly route requires importing the entire
          luciferin biosynthetic chain (TU2 through TU4 in Iman&apos;s design)
          rather than parasitizing existing flux.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Reporter performance is competitive with firefly luciferase in
            mammalian systems.
          </strong>{" "}
          Mouse xenografts with CT26 cells expressing nnLuz vs.{" "}
          <em>P. pyralis</em> luciferase, dosed with a mix of fungal and
          firefly luciferins, give nearly identical IVIS signals. nnLuz is
          microsomal (predicted N-terminal transmembrane helix), ATP-independent
          (unlike firefly luc), and the substrate is water-soluble and
          cell-permeable. These are real advantages for tissue imaging.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Bioluminescence evolved once in Agaricales fungi via two gene
            duplications.
          </strong>{" "}
          Phylogenomics across ~24 sequenced Agaricales places the luz
          duplication at the base of the order, followed by h3h and hisps
          duplications a few million years later, with retention of
          nonfunctional or differently-functional paralogs in many
          nonbioluminescent lineages. The cluster has been lost independently
          at least six times. This is a clean single-origin convergence story
          for fungal luminescence, contrasting sharply with the parallel-origin
          pattern Fallon 2018 documented in beetles.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This paper is the
        foundational citation for the alternative bioluminescence platform,
        the one that already has a credible autoluminescent-plant
        proof-of-concept (Mitiouchkina 2020) and that uses an endogenous plant
        metabolite (caffeic acid) rather than a synthesized heterologous
        precursor (D-luciferin). For Iman&apos;s project, Kotlobay 2018 is
        worth knowing well for two reasons. First, in any proposal or pitch,
        the existence of the fungal route is the obvious &ldquo;why not just
        do this?&rdquo; question, and the answer needs to engage seriously
        with it: fungal bioluminescence in plants is dimmer per photon than
        firefly luciferase at peak output, the emission peak is ~520 nm
        (similar to firefly green) but the kinetics are continuous-glow
        rather than the bright pulsed flashes that firefly enzymes can
        produce, and the peroxisomal-targeted firefly system has different
        photonics for any application that wants flash control or spatial
        localization. Second, the fungal system is the strongest commercial
        competitor in the bioluminescent-plant startup space, Light Bio
        (Planta LLC&apos;s spinout) has already commercialized
        fungal-luminescence tobacco and petunia. The case for continuing the
        firefly project is not that fungal is bad; it is that firefly
        luciferase has different optical properties, a much larger
        biotechnology install base for downstream tooling, and a peroxisomal
        autonomy story that is qualitatively different from the
        cytosolic-fungal one. Cite this paper whenever you frame
        why-firefly-instead-of-fungal in a grant or pitch deck, and engage
        the comparison head-on rather than ignoring it.
      </p>
    </div>
  );
}
