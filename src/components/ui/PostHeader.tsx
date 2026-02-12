import type { Confidence, PostType } from "~/lib/content";
import { formatDate } from "~/lib/content";
import { LabStamp } from "./LabStamp";
import { ConfidenceBadge } from "./ConfidenceBadge";
import Link from "next/link";

interface PostHeaderProps {
  title: string;
  deck: string;
  date: string;
  readingTime: string;
  tags: string[];
  type: PostType;
  confidence?: Confidence;
}

export function PostHeader({
  title,
  deck,
  date,
  readingTime,
  tags,
  type,
  confidence,
}: PostHeaderProps) {
  return (
    <header className="mb-10">
      {/* Stamp + Confidence */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <LabStamp type={type} />
        {confidence && <ConfidenceBadge level={confidence} />}
      </div>

      {/* Title */}
      <h1 className="font-heading text-[2rem] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[2.5rem]">
        {title}
      </h1>

      {/* Deck / subheadline */}
      <p className="mt-3 text-lg leading-relaxed text-secondary">{deck}</p>

      {/* Meta row */}
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-hairline pt-4 text-sm text-secondary">
        <time dateTime={date}>{formatDate(date)}</time>
        <span className="text-hairline">·</span>
        <span>{readingTime} read</span>
        <span className="text-hairline">·</span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/lab-notes?tag=${encodeURIComponent(tag)}`}
              className="text-secondary transition-colors hover:text-accent"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
