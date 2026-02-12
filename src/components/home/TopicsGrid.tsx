import { getAllTags } from "~/lib/content";
import { TopicTag } from "~/components/ui/TopicTag";

export function TopicsGrid() {
  const tags = getAllTags();

  return (
    <section className="border-t border-hairline py-16">
      <div className="mx-auto max-w-[1040px] px-6">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-secondary">
          Browse by Topic
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TopicTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
