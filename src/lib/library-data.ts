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
];
