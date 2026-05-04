export type Paper = {
  slug: string;
  title: string;
  authors: string;
  journal: string;
  era: "pre-2000s" | "2010-2026";
  /** Plain-text keywords from the notes, used for search */
  keywords: string;
};

export const papers: Paper[] = [
  {
    slug: "ow-et-al-1986",
    title:
      "Transient and Stable Expression of the Firefly Luciferase Gene in Plant Cells and Transgenic Plants",
    authors:
      "David W. Ow, Keith V. Wood, Marlene DeLuca, Jeffrey R. De Wet, Donald R. Helinski, Stephen H. Howell",
    journal: "Science, Vol. 234, No. 4778 (1986)",
    era: "pre-2000s",
    keywords:
      "ATP bottleneck luciferase luminometer promoter 35S roots terminator polyA Golden Gate mRNA luciferin DMSO toxic substrate sensitivity CAT assay enzyme plants 1986",
  },
  {
    slug: "de-wet-et-al-1987",
    title:
      "Firefly Luciferase Gene: Structure and Expression in Mammalian Cells",
    authors:
      "Jeffrey R. De Wet, Keith V. Wood, Marlene DeLuca, Donald R. Helinski, Suresh Subramani",
    journal: "Mol. Cell. Biol., Vol. 7, No. 2 (1987)",
    era: "pre-2000s",
    keywords:
      "flash kinetics continuous production single-copy gene peroxisomal targeting SKL peroxisomes cDNA introns codon-optimize ATP Mg bacterial luciferase two subunits substrate regeneration polypeptide sequence cDNA clone Luc2 Addgene 1987",
  },
  {
    slug: "schneider-et-al-1990",
    title:
      "The In Vivo Pattern of Firefly Luciferase Expression in Transgenic Plants",
    authors: "Michel Schneider, David W. Ow, Stephen H. Howell",
    journal: "Plant Mol. Biol., Vol. 14 (1990)",
    era: "pre-2000s",
    keywords:
      "peroxisomes chloroplasts transit peptide compartment 35S promoter stems roots leaves rbcS agroinfiltration N. benthamiana promoter spatial expression transcription exogenous luciferin co-compartmentalization co-localization biosynthetic enzymes 1990",
  },
  {
    slug: "wood-1995",
    title:
      "The Chemical Mechanism and Evolutionary Development of Beetle Bioluminescence",
    authors: "Keith V. Wood",
    journal: "Photochem. Photobiol., Vol. 62 (1995)",
    era: "pre-2000s",
    keywords:
      "D-luciferin beetle caffeic acid fungal stereochemistry L-luciferin adenylated C4 proton ATP photon quantum yield O2 oxidation post-translational modifications prosthetic disulfide glycosylation ribosome 4-coumarate CoA ligase 4CL aromatic cysteine quinones benzothiazole pigment emission color 560 nm scotopic vision green red 1995",
  },
  {
    slug: "fallon-et-al-2016",
    title:
      "Sulfoluciferin is biosynthesized by a specialized luciferin sulfotransferase in fireflies",
    authors: "Timothy R. Fallon et al.",
    journal: "Biochemistry, Vol. 55, pp. 3341-3344 (2016)",
    era: "2010-2026",
    keywords:
      "sulfoluciferin luciferin sulfotransferase LST firefly Biochemistry 2016 Fallon Li Vicent Weng PAPS sulfonation Photinus pyralis Aquatica lateralis Ignelater luminosus storage form D-luciferin SULT detoxification ASKSA adenylyl-sulfate kinase sulfate adenylyltransferase LC-HRAM-MS arbutin Oba Lampyrid click beetle peroxisome N. tabacum tobacco heterologous",
  },
  {
    slug: "fallon-et-al-2018",
    title:
      "Firefly genomes illuminate parallel origins of bioluminescence in beetles",
    authors: "Timothy R. Fallon et al.",
    journal: "eLife, Vol. 7, e36495 (2018)",
    era: "2010-2026",
    keywords:
      "firefly genome bioluminescence beetles parallel evolution eLife 2018 Fallon Lower Chang Bessho-Uehara Martin Bewick Photinus pyralis Aquatica lateralis click beetle Ignelater luminosus luciferase Luc1 Luc2 PACS peroxisomal fatty acyl-CoA synthetase neofunctionalization aBSREL dN/dS Hi-C BUSCO PTS1 SKL PEX11 ASKSA PAPS sulfonation cystathionine gamma-lyase oxyluciferin PPYR_02911 PPYR_05464 BGLU46 ACOT9 CYP4C P450 peroxiredoxin lantern HE DE de novo Kanie iGEM BBa_K389004 directed evolution",
  },
  {
    slug: "oba-et-al-2013",
    title:
      "Biosynthesis of firefly luciferin in adult lantern: decarboxylation of L-cysteine is a key step for benzothiazole ring formation",
    authors: "Yuichi Oba et al.",
    journal: "PLoS ONE, Vol. 8, e84023 (2013)",
    era: "2010-2026",
    keywords:
      "biosynthesis firefly luciferin adult lantern decarboxylation L-cysteine benzothiazole ring formation PLoS ONE 2013 Oba Yoshida Kanie Ojika Inouye Luciola lateralis stable isotope LC ESI TOF MS in vivo CBT McCapra Okada Colepicolo benzoquinone hydroquinone arbutin glucosidase BGL CoA D-luciferin L-luciferin Niwa racemization thiazoline carboxyl CO2 chiral column three-precursor",
  },
];
