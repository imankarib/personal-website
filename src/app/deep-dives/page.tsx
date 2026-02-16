import type { Metadata } from "next";
import { deepDives } from "~/lib/content";
import { PostCard } from "~/components/ui/PostCard";

export const metadata: Metadata = {
  title: "Deep Dives",
  description: "Polished, long-form articles on synthetic biology topics.",
};

export default function DeepDivesPage() {
  return (
    <div className="mx-auto max-w-[1040px] px-6 py-16">
      {/* Page header */}
      <header className="mb-12">
        <span className="text-secondary mb-3 block font-mono text-xs tracking-widest uppercase">
          Deep Dives
        </span>
        <h1 className="font-heading text-ink text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
          Research notes
        </h1>
        <p className="text-secondary mt-3 max-w-[540px] text-base leading-relaxed">
          Polished, long-form articles on synthetic biology topics and my
          explorations.
        </p>
      </header>

      {/* Posts */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {[...deepDives]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
      </div>
    </div>
  );
}
