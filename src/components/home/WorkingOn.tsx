import Link from "next/link";

interface WorkCard {
  label: string;
  title: string;
  description: string;
  href: string;
  status?: string;
  count?: string;
}

const cards: WorkCard[] = [
  {
    label: "ACTIVE RESEARCH",
    title: "The Enzyme Hunt",
    description:
      "Tracking down the enzyme that could unlock autonomous bioluminescence in plants. AlphaFold predictions to wet-lab validation.",
    href: "/projects/enzyme-hunt",
    status: "In progress",
  },
  {
    label: "BIO ENGINEERING",
    title: "Bioluminescent Plants",
    description:
      "Engineering firefly-inspired gene circuits into N. benthamiana. Building toward plants that glow on their own.",
    href: "/projects/glowing-plants",
    status: "In progress",
  },
  {
    label: "EXPERIMENTS",
    title: "Lab Notes",
    description:
      "Transformations, gel electrophoresis, and molecular cloning. Raw documentation of learning by doing.",
    href: "/lab-notes",
    count: "5 entries",
  },
  {
    label: "FUNDAMENTALS",
    title: "Deep Dives",
    description:
      "First-principles breakdowns of CRISPR, restriction enzymes, and the core molecular biology toolkit.",
    href: "/deep-dives",
    count: "3 articles",
  },
];

export function WorkingOn() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-secondary font-mono text-xs tracking-[0.2em] uppercase">
            What I&rsquo;m working on
          </p>
          <h2 className="font-heading text-ink mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Active projects &amp; areas of focus
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="block">
              <div className="work-card border-hairline bg-paper h-full rounded-xl border p-6 sm:p-7">
                {/* Label */}
                <p className="text-accent font-mono text-[0.625rem] tracking-[0.2em]">
                  {card.label}
                </p>

                {/* Title */}
                <h3 className="font-heading text-ink mt-3 text-lg font-semibold tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-secondary mt-2 text-[0.9375rem] leading-relaxed">
                  {card.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-2">
                  {card.status && (
                    <span className="bg-accent-light text-accent inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium">
                      <span className="status-dot bg-accent h-1 w-1 rounded-full" />
                      {card.status}
                    </span>
                  )}
                  {card.count && (
                    <span className="text-secondary font-mono text-xs">
                      {card.count}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
