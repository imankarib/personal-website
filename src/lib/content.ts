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
    slug: "phase-1-luciferase-exogenous-d-luciferin",
    title: "Phase 1: Luciferase + Exogenous D-Luciferin",
    deck: "",
    date: "2026-02-16",
    readingTime: "5 min",
    tags: ["Bioluminescence", "Luciferase", "Wet Lab"],
    type: "lab-note",
    featured: true,
    excerpt: "",
  },
  {
    slug: "phase-0-ruby-red-agroinfiltration-practice",
    title: "Phase 0: RUBY-RED Agroinfiltration Practice",
    deck: "Use RUBY-RED as a visual reporter to confirm agroinfiltration works in N. rustica before attempting bioluminescence constructs.",
    date: "2026-02-16",
    readingTime: "8 min",
    tags: ["Agroinfiltration", "Plant Biology", "Wet Lab"],
    type: "lab-note",
    featured: true,
    excerpt: "Use Michael Rae's Agrobacterium with RUBY-RED to infiltrate N. rustica leaves. Confirm you can get genes into plant cells: success = visible red pigmentation.",
  },
];

/* --- Deep Dives --- */

export const deepDives: Post[] = [
  {
    slug: "firefly-bioluminescence",
    title: "Firefly Bioluminescence: The Chemistry and Plant Engineering",
    deck: "A comprehensive reference covering firefly light chemistry, the luciferin biosynthesis pathway, and the engineering strategy for autonomous bioluminescence in plants.",
    date: "2026-02-15",
    readingTime: "30 min",
    tags: ["Bioluminescence", "Luciferin", "Plant Biology", "Synthetic Biology"],
    type: "deep-dive",
    confidence: "hypothesis",
    featured: true,
    excerpt:
      "This is the master reference for my bioluminescence projects: how firefly light works at the molecular level, what we know about luciferin biosynthesis, why no one has achieved autonomous plant glow since Keith Wood's 1986 experiment, and the engineering strategy I'm pursuing to change that.",
  },
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
      "The ultimate goal of my synthetic biology work: making plants that glow autonomously. This project takes the candidate genes identified in the Missing Enzyme Hunt and engineers them into a functional bioluminescent pathway in N. rustica. Starting with known components like wild-type Photinus pyralis firefly luciferase and working up to the full four-gene pathway (BGL, Laccase, ACOT1, and luciferase) all targeted to the peroxisome for autonomous luciferin production.",
    status: "active",
    tags: ["Bioluminescence", "Plant Biology", "Wet Lab"],
    milestones: [
      {
        title: "Phase 1: Luciferase + exogenous D-luciferin",
        date: "2026-02-16",
        description:
          "Express wild-type Photinus pyralis luciferase in N. rustica and test for bioluminescence with externally supplied D-luciferin.",
        linkedHref: "/lab-notes/phase-1-luciferase-exogenous-d-luciferin",
        linkedLabel: "Read the lab note",
      },
      {
        title: "Phase 0: RUBY-RED agroinfiltration practice",
        date: "2026-02-16",
        description:
          "Use RUBY-RED as a visual reporter to confirm agroinfiltration works in N. rustica before attempting bioluminescence constructs.",
        linkedHref: "/lab-notes/phase-0-ruby-red-agroinfiltration-practice",
        linkedLabel: "Read the lab note",
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
