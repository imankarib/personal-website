import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug, formatDate } from "~/lib/content";
import { LabStamp } from "~/components/ui/LabStamp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.deck,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const statusLabels: Record<string, { label: string; className: string }> = {
  active: { label: "Active", className: "text-accent" },
  completed: { label: "Completed", className: "text-ink" },
  paused: { label: "Paused", className: "text-secondary" },
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const status = statusLabels[project.status] ?? statusLabels.paused!;

  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <LabStamp type="project" />
          <span
            className={`font-mono text-[0.6875rem] uppercase tracking-widest ${status.className}`}
          >
            {status.label}
          </span>
        </div>
        <h1 className="font-heading text-[2rem] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[2.5rem]">
          {project.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-secondary">
          {project.deck}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-hairline px-2.5 py-1 text-xs text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Description */}
      <section className="mb-14">
        <p className="text-base leading-relaxed text-ink">
          {project.description}
        </p>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-secondary">
          Milestones
        </h2>
        <div className="relative border-l border-hairline pl-8">
          {project.milestones.map((milestone, i) => (
            <div
              key={i}
              className={`relative pb-10 last:pb-0`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-[9px] w-[9px] rounded-full border border-hairline bg-paper" />

              <time className="block font-mono text-xs text-secondary">
                {formatDate(milestone.date)}
              </time>
              <h3 className="mt-1 font-heading text-base font-semibold text-ink">
                {milestone.title}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-secondary">
                {milestone.description}
              </p>
              {milestone.linkedPostSlug && (
                <Link
                  href={`/lab-notes/${milestone.linkedPostSlug}`}
                  className="mt-2 inline-block text-sm text-accent transition-colors hover:text-ink"
                >
                  Related lab note &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
