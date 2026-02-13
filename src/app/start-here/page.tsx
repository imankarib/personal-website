import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "New to this site? Here's a guided introduction to what I'm doing and the best places to start reading.",
};

const contentTypes = [
  {
    title: "Lab Notes",
    description:
      "Short, frequent entries written close to the moment of learning. These are raw and honest: experiments that worked, experiments that failed, and what I observed.",
    href: "/lab-notes",
    label: "Browse lab notes",
  },
  {
    title: "Deep Dives",
    description:
      "Polished, longer-form articles that explain a single topic in depth. Designed to be useful as reference material. I update them when my understanding changes.",
    href: "/deep-dives",
    label: "Browse deep dives",
  },
  {
    title: "Projects",
    description:
      "Hub pages for longer-running efforts.",
    href: "/projects",
    label: "Browse projects",
  },
];

const badges = [
  {
    name: "Validated",
    color:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    description:
      "Confirmed through multiple sources or successful experiments.",
  },
  {
    name: "Hypothesis",
    color:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    description: "My current best understanding, but not yet fully tested.",
  },
  {
    name: "Speculative",
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
    description:
      "Early thinking that could be wrong. Read with appropriate skepticism.",
  },
];

export default function StartHerePage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 pt-16 pb-24">
      {/* Header */}
      <header className="mb-12">
        <p className="text-secondary mb-3 font-mono text-xs tracking-widest uppercase">
          Welcome
        </p>
        <h1 className="font-heading text-ink text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
          Start here
        </h1>
        <div className="bg-accent mt-4 h-[2px] w-10" aria-hidden="true" />
        <p className="text-secondary mt-5 max-w-[560px] text-[1.0625rem] leading-relaxed">
          This is where I think in public, organizing what I’m learning,
          exploring ideas, and documenting the projects shaping my direction in
          synthetic biology.
        </p>
      </header>

      {/* Content types */}
      <section className="mb-14">
        <h2 className="text-secondary mb-6 font-mono text-xs tracking-widest uppercase">
          How this site is organized
        </h2>
        <div className="divide-hairline border-hairline divide-y border-y">
          {contentTypes.map((type, i) => (
            <Link
              key={type.href}
              href={type.href}
              className="group flex gap-5 py-6 sm:gap-8"
            >
              <span className="font-heading text-hairline w-8 shrink-0 pt-0.5 text-right text-[1.5rem] leading-none font-medium sm:w-10 sm:text-[1.75rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-ink group-hover:text-accent text-[1.125rem] leading-snug font-semibold transition-colors">
                  {type.title}
                </h3>
                <p className="text-secondary mt-1.5 text-[0.9375rem] leading-relaxed">
                  {type.description}
                </p>
                <span className="text-accent mt-3 inline-flex items-center gap-1 text-sm font-medium">
                  {type.label}
                  <span className="arrow-slide">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Confidence badges */}
      <section>
        <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
          Confidence badges
        </h2>
        <p className="text-secondary mb-6 text-[0.9375rem] leading-relaxed">
          Some posts carry a badge indicating how confident I am in the content.
          Learning in public means being honest about what you don&rsquo;t yet
          know.
        </p>
        <div className="space-y-3">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="border-hairline bg-paper-dark flex items-start gap-3 rounded-lg border px-4 py-3"
            >
              <span
                className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[0.6875rem] font-medium ${badge.color}`}
              >
                {badge.name}
              </span>
              <p className="text-secondary text-[0.875rem] leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
