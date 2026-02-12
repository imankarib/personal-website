import Link from "next/link";

const topics = [
  "PCR",
  "Golden Gate",
  "Agrobacterium",
  "Luciferase Pathways",
  "Plant Transformation",
  "Lab Ops",
  "Tools",
];

export function IndexStrip() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-[1040px] px-6 py-6">
        <p className="mb-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-secondary/60">
          Index
        </p>
        <div className="flex flex-wrap items-baseline gap-2">
          {topics.map((topic) => (
            <Link
              key={topic}
              href={`/lab-notes?tag=${encodeURIComponent(topic)}`}
              className="index-pill rounded-full border border-hairline px-3 py-1 text-[0.8125rem] text-secondary"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
