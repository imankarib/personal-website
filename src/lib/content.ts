/* ============================================
   CONTENT TYPES & SAMPLE DATA
   ============================================ */

export type PostType = "lab-note" | "deep-dive" | "project";
export type Confidence = "validated" | "hypothesis" | "speculative" | "refuted";

export interface Post {
  slug: string;
  title: string;
  deck: string;
  date: string;
  readingTime: string;
  tags: string[];
  type: PostType;
  confidence?: Confidence;
  featured?: boolean;
  excerpt: string;
}

export interface Milestone {
  title: string;
  date: string;
  description: string;
  linkedHref?: string;
  linkedLabel?: string;
}

export interface Project {
  slug: string;
  title: string;
  deck: string;
  description: string;
  status: "active" | "completed" | "paused";
  milestones: Milestone[];
  tags: string[];
}

/* --- Lab Notes --- */

export const labNotes: Post[] = [
  {
    slug: "exploring-igem-parts-registry",
    title: "Exploring the iGEM Parts Registry for the First Time",
    deck: "A tour through the world's largest collection of standardized biological parts.",
    date: "2024-02-18",
    readingTime: "4 min",
    tags: ["iGEM", "Parts", "Resources"],
    type: "lab-note",
    confidence: "validated",
    featured: false,
    excerpt:
      "I finally sat down and explored the iGEM Registry of Standard Biological Parts. It's overwhelming at first, but once you understand the naming conventions and documentation standards, it becomes an incredible resource.",
  },
  {
    slug: "reading-gel-electrophoresis",
    title: "Reading My First Gel Electrophoresis Results",
    deck: "Learning to interpret bands, smears, and the occasional mystery blob.",
    date: "2024-02-10",
    readingTime: "6 min",
    tags: ["Techniques", "Electrophoresis", "Lab Skills"],
    type: "lab-note",
    confidence: "hypothesis",
    featured: true,
    excerpt:
      "Today I ran my first gel and tried to interpret the results. The ladder looked clean but my sample lanes had some unexpected bands. Here's what I think happened and what I'll change next time.",
  },
  {
    slug: "failed-transformation",
    title: "Failed Transformation: What Went Wrong",
    deck: "Heat shock timing, competent cell handling, and hard-learned lessons.",
    date: "2024-02-03",
    readingTime: "5 min",
    tags: ["Transformation", "Troubleshooting", "Mistakes"],
    type: "lab-note",
    confidence: "hypothesis",
    featured: true,
    excerpt:
      "My first attempt at transforming E. coli with a GFP plasmid failed. Zero colonies on the plate. I'm documenting what I think went wrong—mostly around competent cell handling and heat shock duration.",
  },
  {
    slug: "understanding-gfp",
    title: "Understanding GFP: My First Fluorescent Protein",
    deck: "Why green fluorescent protein is the 'Hello World' of synthetic biology.",
    date: "2024-01-22",
    readingTime: "7 min",
    tags: ["GFP", "Proteins", "Fundamentals"],
    type: "lab-note",
    confidence: "validated",
    featured: false,
    excerpt:
      "GFP is everywhere in biology. I spent the week understanding how it works at the molecular level—from the chromophore formation to why it's become the default reporter in so many experiments.",
  },
  {
    slug: "setting-up-home-lab",
    title: "Day 1: Setting Up My Home Lab Workspace",
    deck: "Equipment choices, safety considerations, and realistic expectations.",
    date: "2024-01-15",
    readingTime: "8 min",
    tags: ["Setup", "Equipment", "Getting Started"],
    type: "lab-note",
    confidence: "validated",
    featured: false,
    excerpt:
      "I decided to set up a basic workspace for learning molecular biology techniques. Here's what I bought, what I skipped, and what safety precautions I'm taking as a beginner.",
  },
];

/* --- Deep Dives --- */

export const deepDives: Post[] = [
  {
    slug: "copper-oxidase-wrong-protein",
    title:
      "Investigating a Copper Oxidase That Turned Out to Be the Wrong Protein",
    deck: "How PPYR_12315 looked like the perfect luciferin synthase candidate, until HMMER revealed it was a lysyl oxidase all along. In other words, my first enzyme deepdive",
    date: "2026-02-13",
    readingTime: "12 min",
    tags: ["Bioluminescence", "Bioinformatics", "Luciferin", "Genomics"],
    type: "deep-dive",
    confidence: "refuted",
    featured: false,
    excerpt:
      "I found a copper oxidase (PPYR_12315) with ~100× higher expression in the lantern than other copper-binding enzymes. Structure, electrostatics, and conservation all pointed to it as a luciferin synthase candidate. HMMER later showed it was actually a lysyl oxidase aka. an entirely different family. A good lesson in research.",
  },
  {
    slug: "mining-fallon-luciferin-pathway",
    title:
      "Mining Fallon et al. for Luciferin Pathway Candidates in Photinus pyralis",
    deck: "Filtering 15,773 firefly genes down to five candidate enzymes that may be involved in luciferin biosynthesis.",
    date: "2026-02-15",
    readingTime: "22 min",
    tags: ["Bioluminescence", "Bioinformatics", "Luciferin", "Genomics"],
    type: "deep-dive",
    confidence: "speculative",
    featured: true,
    excerpt:
      "I used Fallon et al. (2018) lantern expression data to filter the Photinus pyralis genome from 15,773 genes down to a small set of luciferin pathway candidates. After cross-species BLAST, phylogenetics, and manual review, three novel candidates and one literature supported candidate remained.",
  },
];

/* --- Projects --- */

export const projects: Project[] = [
  {
    slug: "enzyme-hunt",
    title: "The Enzyme Hunt",
    deck: "Tracking down the elusive luciferin synthase that could unlock autonomous bioluminescence in plants.",
    description:
      "Since Keith Wood's landmark 1986 experiment, no one has achieved autonomous firefly bioluminescence in plants: the missing piece is the enzyme that synthesizes luciferin. Through computational analysis of firefly genomes, I've identified certain candidates.",
    status: "active",
    tags: ["Research", "Bioinformatics", "Bioluminescence"],
    milestones: [
      {
        title: "Investigated copper oxidase PPYR_12315 (refuted)",
        date: "2026-02-13",
        description:
          "Identified PPYR_12315 as a highly expressed copper oxidase in the firefly lantern. After AlphaFold analysis, substrate fitting, and cross-species BLAST, HMMER profile analysis revealed it was a lysyl oxidase (LOXL2), not a laccase. Hypothesis refuted.",
        linkedHref: "/deep-dives/copper-oxidase-wrong-protein",
        linkedLabel: "Read the full investigation",
      },
      {
        title: "Mining Fallon et al. for luciferin pathway candidates",
        date: "2026-02-15",
        description:
          "Applied two-layer filtering (expression + enzyme annotation) to Fallon's differential expression data, reducing 15,773 genes to 18 enzyme candidates. After manual review, cross-species BLAST, and phylogenetic analysis, identified four novel candidates (PPYR_14756, PPYR_02911, PPYR_02910, PPYR_14056) for luciferin biosynthesis.",
        linkedHref: "/deep-dives/mining-fallon-luciferin-pathway",
        linkedLabel: "Read the full deep dive",
      },
    ],
  },
  {
    slug: "glowing-plants",
    title: "Engineering Bioluminescent Plants",
    deck: "Bringing firefly light to plants using synthetic gene circuits.",
    description:
      "The ultimate goal of my synthetic biology work: making plants that glow autonomously. This project takes the candidate genes identified in the Missing Enzyme Hunt and engineers them into a functional bioluminescent pathway in N. benthamiana. Starting with known components like firefly luciferase and working up to the full four gene pathway with BGL, Laccase, ACOT1, and AkaLuc, all targeted to the peroxisome for autonomous luciferin production.",
    status: "active",
    tags: ["Bioluminescence", "Plant Biology", "Wet Lab"],
    milestones: [
      {
        title: "First bacterial transformation",
        date: "2025-02-01",
        description:
          "Performed first hands on cloning work, transforming E. coli with pTIR DV and pSB1C3 plasmids at Scott's community lab. Built foundational wet lab skills.",
      },
      {
        title: "Agrobacterium strain acquired",
        date: "2025-02-15",
        description:
          "Secured access to Agrobacterium tumefaciens GV3101 through Michael Rae at the community lab. Navigated Canadian regulatory requirements to confirm no special licensing needed.",
      },
      {
        title: "N. benthamiana seedlings started",
        date: "2025-03-01",
        description:
          "Sourced and planted N. benthamiana seeds. These need 4 to 5 weeks of growth before they are ready for agroinfiltration experiments.",
      },
      {
        title: "MoClo toolkit and gene assembly",
        date: "2025-03-15",
        description:
          "Assembling synthetic genes into MoClo compatible expression cassettes with peroxisome targeting signals for the full bioluminescent pathway.",
      },
      {
        title: "Agroinfiltration and glow testing",
        date: "2025-04-15",
        description:
          "Infiltrating N. benthamiana leaves with the engineered constructs and imaging for bioluminescence in a dark room. The moment of truth.",
      },
    ],
  },
];

/* --- All tags (derived) --- */

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  for (const post of [...labNotes, ...deepDives]) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }
  for (const project of projects) {
    for (const tag of project.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}

/* --- Helpers --- */

export function getAllPosts(): Post[] {
  return [...labNotes, ...deepDives].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string, type: PostType): Post | undefined {
  const source = type === "lab-note" ? labNotes : deepDives;
  return source.find((p) => p.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
