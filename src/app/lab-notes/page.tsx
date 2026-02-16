import type { Metadata } from "next";
import { labNotes } from "~/lib/content";
import { PostCard } from "~/components/ui/PostCard";

export const metadata: Metadata = {
  title: "Lab Notes",
  description:
    "Short, frequent entries from my synthetic biology learning journey. Experiments, observations, and honest mistakes.",
};

export default function LabNotesPage() {
  return (
    <div className="mx-auto max-w-[1040px] px-6 py-16">
      {/* Page header */}
      <header className="mb-12">
        <span className="text-secondary mb-3 block font-mono text-xs tracking-widest uppercase">
          Lab Notes
        </span>
        <h1 className="font-heading text-ink text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
          The open notebook
        </h1>
        <p className="text-secondary mt-3 max-w-[540px] text-base leading-relaxed">
          Short, frequent entries from the lab documenting experiments,
          observations, and honest mistakes.
        </p>
      </header>

      {/* Posts */}
      <div className="divide-hairline divide-y">
        {labNotes.map((post) => (
          <div key={post.slug} className="py-8 first:pt-0 last:pb-0">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
