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
        <span className="text-secondary mb-3 block font-mono text-xs tracking-widest uppercase">
          Projects
        </span>
        <h1 className="font-heading text-ink text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
          What I&rsquo;m building
        </h1>
        <p className="text-secondary mt-3 max-w-[540px] text-base leading-relaxed">
          Longer-running projects. Each project links back to the lab notes and
          deep dives that came out of it.
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
              className="group border-hairline hover:border-accent/30 block border p-6 transition-colors sm:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <LabStamp type="project" />
                <span
                  className={`font-mono text-[0.6875rem] tracking-widest uppercase ${status.className}`}
                >
                  {status.label}
                </span>
              </div>
              <h2 className="font-heading text-ink group-hover:text-accent text-xl font-semibold transition-colors">
                {project.title}
              </h2>
              <p className="text-secondary mt-2 text-[0.9375rem] leading-relaxed">
                {project.deck}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-hairline text-secondary border px-2 py-0.5 text-xs"
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
