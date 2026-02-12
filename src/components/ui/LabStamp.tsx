import type { PostType } from "~/lib/content";

const labels: Record<PostType, string> = {
  "lab-note": "LAB NOTE",
  "deep-dive": "DEEP DIVE",
  project: "PROJECT LOG",
};

export function LabStamp({ type }: { type: PostType }) {
  return (
    <span className="inline-block border border-hairline px-2 py-0.5 font-mono text-[0.6875rem] uppercase leading-none tracking-widest text-secondary">
      {labels[type]}
    </span>
  );
}
