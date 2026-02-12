import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "~/lib/content";
import { LabStamp } from "~/components/ui/LabStamp";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Ongoing and completed synthetic biology projects with milestone timelines.",
};

const statusLabels: Record<string, { label: string; className: string }> = {
  active: { label: "Active", className: "text-accent" },
  completed: { label: "Completed", className: "text-ink" },
  paused: { label: "Paused", className: "text-secondary" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1040px] px-6 py-16">
      {/* Page header */}
      <header className="mb-12">
        <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-secondary">
          Projects
        </span>
        <h1 className="font-heading text-[2rem] font-semibold tracking-tight text-ink sm:text-[2.5rem]">
          What I&rsquo;m building
        </h1>
        <p className="mt-3 max-w-[540px] text-base leading-relaxed text-secondary">
          Longer-running projects with milestone timelines. Each project links
          back to the lab notes and deep dives that came out of it.
        </p>
      </header>

      {/* Projects list */}
      <div className="space-y-10">
        {projects.map((project) => {
          const status = statusLabels[project.status] ?? statusLabels.paused!;
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block border border-hairline p-6 transition-colors hover:border-accent/30 sm:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <LabStamp type="project" />
                <span
                  className={`font-mono text-[0.6875rem] uppercase tracking-widest ${status.className}`}
                >
                  {status.label}
                </span>
              </div>
              <h2 className="font-heading text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                {project.title}
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-secondary">
                {project.deck}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-hairline px-2 py-0.5 text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
