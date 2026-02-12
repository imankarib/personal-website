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
    slug: "diy-pcr-thermocycler",
    title: "Building a DIY PCR Thermocycler",
    deck: "Designing and building a functional thermocycler from off-the-shelf components.",
    description:
      "PCR is fundamental to molecular biology, and a thermocycler is the machine that makes it possible. I'm building one from scratch to understand the engineering behind precise temperature cycling—and to have a working tool for future experiments.",
    status: "active",
    tags: ["Hardware", "PCR", "DIY", "Engineering"],
    milestones: [
      {
        title: "Research & design phase",
        date: "2024-01-20",
        description:
          "Surveyed existing DIY builds, selected Peltier modules and Arduino-based PID control approach.",
      },
      {
        title: "Heating block prototype",
        date: "2024-02-05",
        description:
          "First aluminum heating block with Peltier element. Achieving ±0.5°C accuracy at steady state.",
        linkedPostSlug: "setting-up-home-lab",
      },
      {
        title: "PID controller tuning",
        date: "2024-02-20",
        description:
          "Implemented PID control loop. Ramp rates need improvement—currently 1.2°C/sec heating, 0.8°C/sec cooling.",
      },
      {
        title: "Full cycle testing",
        date: "2024-03-10",
        description:
          "Running complete PCR temperature profiles. 35-cycle program completes in ~90 minutes.",
      },
    ],
  },
  {
    slug: "bioluminescent-bacteria",
    title: "Engineering Bioluminescent Bacteria",
    deck: "Expressing the lux operon in E. coli to create living light.",
    description:
      "Bioluminescence is one of the most visually striking phenomena in biology. This project aims to express the luxCDABE operon from Vibrio fischeri in E. coli, creating bacteria that glow without any external substrate.",
    status: "paused",
    tags: ["Bioluminescence", "E. coli", "Gene Expression", "lux"],
    milestones: [
      {
        title: "Literature review",
        date: "2024-02-01",
        description:
          "Studied the lux operon structure, promoter options, and previous iGEM team approaches.",
      },
      {
        title: "Plasmid design",
        date: "2024-02-15",
        description:
          "Designed construct with constitutive promoter driving luxCDABE. Ordered from IDT.",
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

export function getPostBySlug(
  slug: string,
  type: PostType,
): Post | undefined {
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
