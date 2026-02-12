import type { Metadata } from "next";
import { deepDives } from "~/lib/content";
import { PostCard } from "~/components/ui/PostCard";

export const metadata: Metadata = {
  title: "Deep Dives",
  description:
    "Polished, evergreen explainers on synthetic biology topics. Written to be useful long after publication.",
};

export default function DeepDivesPage() {
  return (
    <div className="mx-auto max-w-[1040px] px-6 py-16">
      {/* Page header */}
      <header className="mb-12">
        <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-secondary">
          Deep Dives
        </span>
        <h1 className="font-heading text-[2rem] font-semibold tracking-tight text-ink sm:text-[2.5rem]">
          Evergreen explainers
        </h1>
        <p className="mt-3 max-w-[540px] text-base leading-relaxed text-secondary">
          Polished, long-form articles on synthetic biology topics. These are
          written to remain useful and are updated when I learn more.
        </p>
      </header>

      {/* Posts */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {deepDives.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
