import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitiouchkina et al. (2020), Library",
  description:
    "Notes on: Plants with genetically encoded autoluminescence.",
};

export default function MitiouchkinaEtAl2020Page() {
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
          Plants with Genetically Encoded Autoluminescence
        </h1>
        <p className="text-secondary mt-2 text-[0.9375rem]">
          Tatiana Mitiouchkina, Alexander S. Mishin, Louisa Gonzalez
          Somermeyer, Nadezhda M. Markina, et al. (Yampolsky and Sarkisyan
          labs, Planta LLC)
        </p>
        <p className="text-secondary mt-1 font-mono text-xs">
          Nature Biotechnology, Vol. 38, Issue 8 (Apr. 27, 2020), pp. 944, 946
        </p>
      </header>

      <ul className="space-y-5 text-[1.0625rem] leading-[1.78]">
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            First autonomously bioluminescent plants visible to the naked eye,
            no exogenous substrate required.
          </strong>{" "}
          Tobacco (<em>N. tabacum</em> and <em>N. benthamiana</em>) lines
          carrying the four-gene fungal cassette, nnLuz, nnHispS, nnH3H,
          nnCPH, codon-optimized for tobacco and integrated via
          Agrobacterium-mediated random nuclear insertion. Light output is
          roughly an order of magnitude brighter than the previous
          bacterial-lux autoluminescent plant attempts (Krichevsky 2010), and
          visible to consumer cameras with 0.5 to 30 second exposures. This is
          the proof of concept that anchors the entire commercial
          bioluminescent-plant space and is the direct precursor to Light
          Bio&apos;s Firefly Petunia.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Caffeic acid as endogenous precursor, the pathway plugs into
            native phenylpropanoid metabolism.
          </strong>{" "}
          Plants make caffeic acid as a normal intermediate in the
          phenylalanine &rarr; coumarate &rarr; caffeate &rarr;
          lignin/flavonoid axis, so the fungal four-enzyme cassette taps an
          existing flux pool without needing imported precursor genes.
          Notably, no NpgA (phosphopantetheinyl transferase) was required for
          HispS activity in tobacco, in contrast to <em>P. pastoris</em>{" "}
          (Kotlobay 2018), suggesting plant native PPTases activate the
          polyketide synthase. Substrate-feeding experiments showed that
          exogenous caffeic acid increased luminescence (slowly), hispidin
          produced fast bright luminescence, and ATP/CoA/malonyl-CoA did not,
          pinning caffeic acid as the rate-limiting precursor in planta.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>No detectable growth or developmental burden.</strong> 15
          independent transgenic lines were assayed. Chlorophyll, carotenoid
          content, flowering time, seed germination, and overall morphology
          were indistinguishable from wild-type, with only a 12% median height
          increase in transgenics. This is a striking contrast to the
          bacterial lux system, which is toxic in eukaryotes (n-decyl aldehyde
          from LuxAB is broadly cytotoxic). The fungal system&apos;s tolerance
          is one of its biggest practical advantages.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            Spatial and temporal luminescence patterns mirror phenylpropanoid
            flux.
          </strong>{" "}
          Bright at root tips, root branching points (hours before lateral
          roots are morphologically visible), terminal/axillary buds, young
          shoots, and especially flowers; dim in older leaves. Light emission
          tracks endogenous caffeic acid availability, which makes the system
          not just a static reporter but a dynamic one, the plants light up in
          response to wounding, methyl jasmonate treatment, and ethylene
          exposure (banana skin), and luminescence spreads from injury sites
          along veins at ~2 µm/s. This is unintended but biologically
          interesting: an autoluminescent plant is a real-time
          phenylpropanoid-flux reporter.
        </li>
        <li className="border-hairline border-l-2 pl-4">
          <strong>
            The luminescence is continuous, dim, and green-shifted (~520 nm),
            not flash-bright.
          </strong>{" "}
          Bright enough for the naked eye and consumer cameras, but the
          photometric ceiling is set by endogenous caffeic acid pool size and
          by HispS turnover. Flowers reached ~10¹⁰ photons/min; this is many
          orders of magnitude below what firefly luc + saturating exogenous
          D-luciferin produces in the same plant via agroinfiltration.
          Continuous-glow mode is qualitatively different from the
          pulsed-flash mode that firefly luciferase enables under
          physiological control.
        </li>
      </ul>

      <p className="text-ink mt-10 text-[1.0625rem] leading-[1.78]">
        <strong>Bottom line for the project:</strong> This paper is the
        elephant in the room for any bioluminescent-plant pitch and Iman
        should engage with it directly rather than around it. Three honest
        framings work depending on context. (1) Different photonics, different
        applications: fungal autoluminescence gives a continuous dim glow that
        tracks caffeic acid flux, beautiful, commercially proven, and exactly
        what Light Bio sells; firefly luciferase gives ATP-dependent,
        peroxisomal, kinetically controllable light that is a much better
        substrate for sensors, reporters, and any application where you want
        signal modulation rather than constitutive output. The two systems
        are not competing for the same product. (2) Substrate provenance and
        pathway novelty: the fungal system parasitizes native phenylpropanoid
        metabolism, which is elegant but constrains the plant to whatever
        flux it already had; the firefly system requires building a
        heterologous luciferin pathway from scratch, which is harder but
        means the photometric ceiling is set by what you engineer rather than
        by lignin biosynthesis. (3) Brightness ceiling: the firefly system,
        when fully autonomous, has a higher theoretical brightness ceiling
        because D-luciferin + ATP + O&#8322; is a much higher-energy reaction
        per photon than 3-hydroxyhispidin oxidation, and because ATP is not
        flux-limiting in a healthy plant the way caffeic acid is. None of
        this means the project is misdirected, it means the project is
        solving a different problem than Light Bio solved, and the comparison
        should be the start of the pitch, not the awkward question at the
        end. Cite Mitiouchkina 2020 alongside Kotlobay 2018 wherever you
        contextualize what&apos;s been done already in autoluminescent
        plants.
      </p>
    </div>
  );
}
