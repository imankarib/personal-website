/* ============================================
   CONTENT TYPES & SAMPLE DATA
   ============================================ */

export type PostType = "lab-note" | "deep-dive" | "project";
export type Confidence = "validated" | "hypothesis" | "speculative";

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
  linkedPostSlug?: string;
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
    slug: "crispr-for-beginners",
    title: "CRISPR for Beginners: What I Wish I Knew",
    deck: "A first-principles explanation of CRISPR-Cas9, written while I was still learning it.",
    date: "2024-02-25",
    readingTime: "14 min",
    tags: ["CRISPR", "Gene Editing", "Fundamentals"],
    type: "deep-dive",
    confidence: "validated",
    featured: true,
    excerpt:
      "Everyone talks about CRISPR, but most explanations skip the parts that confused me most. This is my attempt at explaining it from scratch—the guide RNA, the PAM sequence, the double-strand break, and what happens after.",
  },
  {
    slug: "central-dogma-explained",
    title: "The Central Dogma, Actually Explained",
    deck: "DNA → RNA → Protein, and all the nuance that simple arrow hides.",
    date: "2024-03-05",
    readingTime: "11 min",
    tags: ["Molecular Biology", "Fundamentals", "DNA"],
    type: "deep-dive",
    confidence: "validated",
    featured: false,
    excerpt:
      "The central dogma is the first thing you learn in molecular biology, and the last thing you truly understand. Here's my attempt at doing justice to the complexity hiding behind three simple arrows.",
  },
  {
    slug: "restriction-enzymes-explained",
    title: "How Restriction Enzymes Work (With Diagrams)",
    deck: "The molecular scissors that launched genetic engineering, explained step by step.",
    date: "2024-03-15",
    readingTime: "9 min",
    tags: ["Enzymes", "Cloning", "Techniques"],
    type: "deep-dive",
    confidence: "validated",
    featured: false,
    excerpt:
      "Restriction enzymes are one of the most elegant tools in molecular biology. I break down how they recognize DNA sequences, cut with precision, and why sticky ends changed everything.",
  },
];

/* --- Projects --- */

export const projects: Project[] = [
  {
    slug: "enzyme-hunt",
    title: "The Enzyme Hunt",
    deck: "Tracking down the elusive luciferin synthase that could unlock autonomous bioluminescence in plants.",
    description:
      "Since Keith Wood's landmark 1986 experiment, no one has achieved autonomous firefly bioluminescence in plants: the missing piece is the enzyme that synthesizes luciferin. Through computational analysis of firefly genomes, I've identified certain candidates. This project follows the trail from AlphaFold predictions and geometric docking to wet-lab validation in N. benthamiana using MoClo modular cloning.",
    status: "active",
    tags: ["Research", "Bioinformatics", "Bioluminescence"],
    milestones: [
      {
        title: "Computational target identification",
        date: "2025-02-01",
        description:
          "Surveyed firefly genomes and identified PPYR_12315 as a candidate luciferin synthase. Ran AlphaFold structure prediction and geometric docking analysis against known substrates.",
      },
      {
        title: "Cross species validation",
        date: "2025-02-15",
        description:
          "Confirmed PPYR_12315 is conserved across the entire Lampyridae family, strengthening the case that it plays a functional role in luciferin biosynthesis.",
      },
      {
        title: "Gene design and ordering",
        date: "2025-03-01",
        description:
          "Designed four synthetic genes (Luc2, BGL, PPYR_12315 full length, and PPYR_12315 ΔSP) optimized for plant expression and compatible with MoClo assembly.",
      },
      {
        title: "Plant preparation",
        date: "2025-03-01",
        description:
          "Started N. benthamiana seeds. Plants need 4 to 5 weeks to reach the right size for agroinfiltration.",
      },
      {
        title: "MoClo assembly and agroinfiltration",
        date: "2025-04-01",
        description:
          "Assembling the five step experimental ladder and infiltrating N. benthamiana leaves to test for autonomous bioluminescence.",
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
