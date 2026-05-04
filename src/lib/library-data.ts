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
    slug: "conti-et-al-1996",
    title:
      "Crystal Structure of Firefly Luciferase Throws Light on a Superfamily of Adenylate-Forming Enzymes",
    authors: "Elena Conti, Nicholas P. Franks, Peter Brick",
    journal: "Structure, Vol. 4, Issue 3 (Mar. 15, 1996), pp. 287-298",
    era: "pre-2000s",
    keywords:
      "Conti Franks Brick 1996 crystal structure firefly luciferase Photinus pyralis 1LCI ANL superfamily adenylate-forming enzymes acyl-CoA synthetase NRPS 4-coumarate ligase 4CL Luciola cruciata Nakatsu Gulick Branchini DLSA luciferyl-AMP domain closure conformational dynamics N-terminal C-terminal apo PDB structural biology two-domain fold mechanism",
  },
  {
    slug: "yu-et-al-2025",
    title:
      "Engineering Autonomously Luminescent Plants Using the Fungal Bioluminescence Pathway",
    authors: "Xiaolei Yu, Tiange Wang, C. Kong, Hao Du",
    journal:
      "New Phytologist, Vol. 248, Issue 5 (2025), pp. 2251-2261, DOI: 10.1111/nph.70601",
    era: "2010-2026",
    keywords:
      "Yu Wang Kong Du 2025 fungal bioluminescence pathway FBP New Phytologist autoluminescent plants Luz HispS H3H CPH Neonothopanus nambi caffeic acid phenylpropanoid lignin flavonoid Mitiouchkina 2020 Zheng 2023 Shakhova 2024 BnC3H1 Brassica napus NPGA Aspergillus nidulans Light Bio Planta Firefly Petunia Du Trends Biotechnology Plant Science directed evolution rational design biosensor stress-responsive promoter PR-protein soil moisture salinity heavy metal N. tabacum tobacco firefly luciferase Conti Akaluc TU3 BGLU46 PPYR_02911 AtLAC17",
  },
  {
    slug: "wang-et-al-2025",
    title:
      "Comparative Transcriptomic Analysis Reveals Bioluminescence-Related Genes in Firefly Pyrocoelia pectoralis",
    authors: "Guobao Wang, Lei Nie, Huanxin Li",
    journal: "Genomics, Vol. 117, Issue 5, Article 111101 (Aug. 2025)",
    era: "2010-2026",
    keywords:
      "Wang Nie Li 2025 Pyrocoelia pectoralis transcriptome lantern bioluminescence Lampyrinae Luciolinae Photinus pyralis Lamprigera yunnana Abscondita terminalis Aquatica lateralis Fu 2017 2024 cystathionine gamma-lyase CGL 4-hydroxyphenylpyruvate dioxygenase HPPD beta-glucosidase BGL2 BGLU46 4-coumarate CoA ligase 4CL cysteine dioxygenase CDO1 luciferin biosynthesis arbutin hydroquinone benzoquinone N. tabacum tobacco TU3 cross-species convergence Zhang Fallon Oba Kanie",
  },
  {
    slug: "tsarkova-2021",
    title:
      "Luciferins Under Construction: A Review of Known Biosynthetic Pathways",
    authors: "Aleksandra S. Tsarkova",
    journal:
      "Frontiers in Ecology and Evolution, Vol. 9, Article 667829 (Sep. 20, 2021)",
    era: "2010-2026",
    keywords:
      "Tsarkova 2021 luciferin biosynthesis review Frontiers Ecology Evolution Shemyakin Ovchinnikov Pirogov RNRMU Yampolsky Sarkisyan Kotlobay Planta autoluminescent Mitiouchkina bacterial lux fungal caffeic acid cycle hispidin H3H luz CPH coelenterazine vargulin Fridericia Odontosyllis dinoflagellate Latia Diplocardia D-luciferin tyrosine tryptophan phenylalanine cysteine pheomelanogenesis detoxification de Souza Rees Timmins Dubuisson Napolitano arbutin hydroquinone benzoquinone Michael addition Lampyridae Elateridae Phengodidae Zhang Fallon LRE oxyluciferin recycling sulfoluciferin sulfotransferase Lamprigera Abscondita Adams Miller TU1 TU4",
  },
  {
    slug: "adams-miller-2020",
    title: "Enzymatic Promiscuity and the Evolution of Bioluminescence",
    authors: "Spencer T. Adams Jr., Stephen C. Miller",
    journal: "The FEBS Journal, Vol. 287, Issue 7 (Apr. 2020), pp. 1369-1380",
    era: "2010-2026",
    keywords:
      "Adams Miller 2020 firefly luciferase Fluc Photinus pyralis ACSL acyl-CoA synthetase bifunctional enzyme promiscuity bioluminescence evolution Drosophila CG6178 CycLuc2 Mofford Agrypnus binodulus AbLL Oba 2003 2006 2009 latent luciferase domain swap N-terminal C-terminal SET single electron transfer dehydroluciferyl-AMP CoA Promega Arabidopsis thaliana At5g63380 OPDA jasmonate peroxisomal ACSL plant N. tabacum L-luciferin D-luciferin epimerization racemization Niwa Maeda TESB Zhang AteACOT1 ACOT9 TU1 TU4 Bombardier beetle benzoquinone detoxification Conti Nakatsu Gulick Fallon",
  },
  {
    slug: "kato-et-al-2024",
    title: "A Practical, Biomimetic, One-Pot Synthesis of Firefly Luciferin",
    authors:
      "Maria Kato, Kazuaki Tsuchihashi, Shusei Kanie, Yuichi Oba, Toshio Nishikawa",
    journal: "Scientific Reports, Vol. 14, Article 30461 (Dec. 25, 2024)",
    era: "2010-2026",
    keywords:
      "Kato Nishikawa Tsuchihashi Kanie Oba 2024 D-luciferin synthesis biomimetic one-pot p-benzoquinone L-cysteine D-cysteine CBT 2-cyano-6-hydroxybenzothiazole White 1961 Niwa Maeda racemization Mitiouchkina agroinfiltration cost commercial Nagoya AIST Hokkaido firefly luciferin biosynthesis Michael addition cyclization",
  },
  {
    slug: "de-souza-et-al-2022",
    title:
      "Biosensing Firefly Luciferin Synthesis in Bacteria Reveals a Cysteine-Dependent Quinone Detoxification Route in Coleoptera",
    authors:
      "Daniel Rangel de Souza, Jaqueline Rodrigues Silva, Ariele Moreira, Vadim R. Viviani",
    journal: "Scientific Reports, Vol. 12, Article 14815 (Aug. 31, 2022)",
    era: "2010-2026",
    keywords:
      "de Souza Viviani 2022 firefly luciferin biosynthesis E. coli BL21 Pichia pastoris Amydetes vivianii AmyLuc Pyrearinus termitilluminans biosensor cysteine D-cysteine L-cysteine benzoquinone hydroquinone Rhus vernicifera laccase AtLAC17 TU5 BGLU46 PPYR_02911 ACOT9 quinone detoxification cytotoxicity racemization Niwa Kanie Oba dopamine sclerotization tyrosine hydroxylase DOPA decarboxylase NBAD synthetase Phengodidae Lampyridae Elateridae Rhagophthalmidae Coleoptera N. tabacum",
  },
  {
    slug: "watkins-et-al-2018",
    title:
      "New Zealand Glowworm (Arachnocampa luminosa) Bioluminescence Is Produced by a Firefly-Like Luciferase but an Entirely New Luciferin",
    authors:
      "Oliver C. Watkins, Miriam L. Sharpe, Nigel B. Perry, Kurt L. Krause",
    journal: "Scientific Reports, Vol. 8, Article 3278 (Feb. 19, 2018)",
    era: "2010-2026",
    keywords:
      "Watkins 2018 Arachnocampa luminosa New Zealand glowworm Keroplatidae Diptera fungus gnat luciferase ANL superfamily acyl-CoA synthetase tyrosine xanthurenic acid kynurenine LRC luciferin Photinus pyralis Luciola cruciata Trowell richardsae Mofford promiscuous Fridericia heliota Watasenia scintillans coelenterazine convergent evolution neofunctionalization adenylation MS NMR Sharpe Perry Krause",
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
