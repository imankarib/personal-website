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
    slug: "mitiouchkina-et-al-2020",
    title: "Plants with Genetically Encoded Autoluminescence",
    authors:
      "Tatiana Mitiouchkina, Alexander S. Mishin, Louisa Gonzalez Somermeyer, Nadezhda M. Markina, et al.",
    journal: "Nature Biotechnology, Vol. 38, Issue 8 (Apr. 27, 2020), pp. 944-946",
    era: "2010-2026",
    keywords:
      "Mitiouchkina 2020 autoluminescent plants Nature Biotechnology Yampolsky Sarkisyan Planta Light Bio Firefly Petunia tobacco N. tabacum N. benthamiana nnLuz nnHispS nnH3H nnCPH fungal bioluminescence Neonothopanus nambi caffeic acid phenylpropanoid lignin flavonoid Agrobacterium NpgA PPTase polyketide synthase HispS hispidin wounding methyl jasmonate ethylene flux reporter Krichevsky bacterial lux LuxAB n-decyl aldehyde",
  },
  {
    slug: "kotlobay-et-al-2018",
    title:
      "Genetically Encodable Bioluminescent System from Fungi",
    authors:
      "Alexey A. Kotlobay, Karen S. Sarkisyan, Yuliana A. Mokrushina, Marina Marcet-Houben, Ekaterina O. Serebrovskaya, Nadezhda M. Markina, et al.",
    journal: "PNAS, Vol. 115, Issue 50 (Nov. 26, 2018), pp. 12728-12732",
    era: "2010-2026",
    keywords:
      "Kotlobay 2018 fungal bioluminescence caffeic acid cycle Neonothopanus nambi hispidin synthase HispS hispidin-3-hydroxylase H3H luciferase nnLuz caffeylpyruvate hydrolase CPH NpgA Aspergillus nidulans phosphopantetheinyl transferase Pichia pastoris yeast TAL tyrosine ammonia lyase Rhodobacter capsulatus HpaB HpaC E. coli phenylpropanoid plant lignin Arabidopsis tobacco N. tabacum autoluminescent Mitiouchkina Light Bio Planta autonomy heterologous IVIS xenograft Agaricales convergent evolution",
  },
  {
    slug: "zhang-et-al-2020",
    title:
      "Genomic and Experimental Data Provide New Insights Into Luciferin Biosynthesis and Bioluminescence Evolution in Fireflies",
    authors:
      "Ru Zhang, Jinwu He, Zhiwei Dong, Guichun Liu, Yuan Yin, Xinying Zhang, Qi Li, Yandong Ren, Yongzhi Yang, Wei Liu, Xianqing Chen, Wenhao Xia, Kang Duan, Fei Hao, Zeshan Lin, Jie Yang, Zhou Chang, Ruoping Zhao, Wenting Wan, Sihan Lu, Yanqiong Peng, Siqin Ge, Wen Wang, Xueyan Li",
    journal: "Scientific Reports, Vol. 10, Article 15882 (Sep. 28, 2020)",
    era: "2010-2026",
    keywords:
      "Zhang 2020 firefly genome Lamprigera yunnana Abscondita terminalis PacBio AteACOT1 AteACOT4 AteACOT9 ACOT acyl-CoA thioesterase deracemization L-luciferin D-luciferin chiral HPLC Niwa Maeda TESB cluster-I cystathionine gamma-lyase CDO CSAD tyrosine homogentisate benzoquinone 4CL SCPx thiolase Abd-B CRISPR Cas9 PTS1 peroxisome convergent evolution Lampyridae Elateridae Ignelater luminosus Luciolinae Lampyrinae phylogenomics divergence neofunctionalization Fallon TU4 PPYR ACOT9",
  },
  {
    slug: "kanie-et-al-2018",
    title:
      "2-S-cysteinylhydroquinone is an Intermediate for the Firefly Luciferin Biosynthesis that Occurs in the Pupal Stage of the Japanese Firefly, Luciola lateralis",
    authors: "Shusei Kanie, Yuichi Oba",
    journal: "Bioorganic Chemistry, Vol. 80, pp. 223-229 (Oct. 2018)",
    era: "2010-2026",
    keywords:
      "Kanie Oba 2018 2-S-cysteinylhydroquinone Michael addition cysteine benzoquinone hydroquinone Luciola lateralis pupae luciferin biosynthesis intermediate Bioorganic Chemistry stable isotope LC ESI TOF MS arbutin BGLU46 PPYR_02911 PPYR_05464 in vivo P450 N. tabacum",
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
