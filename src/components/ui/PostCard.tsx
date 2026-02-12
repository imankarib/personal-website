import Link from "next/link";
import type { Post } from "~/lib/content";
import { formatDate } from "~/lib/content";
import { LabStamp } from "./LabStamp";
import { ConfidenceBadge } from "./ConfidenceBadge";

interface PostCardProps {
  post: Post;
  variant?: "default" | "compact";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  const href =
    post.type === "lab-note"
      ? `/lab-notes/${post.slug}`
      : `/deep-dives/${post.slug}`;

  if (variant === "compact") {
    return (
      <article className="group py-4">
        <Link href={href} className="block">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-base font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-secondary">{post.deck}</p>
            </div>
            <time
              dateTime={post.date}
              className="shrink-0 text-sm text-secondary"
            >
              {formatDate(post.date)}
            </time>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={href} className="block">
        <div className="mb-3 flex items-center gap-2.5">
          <LabStamp type={post.type} />
          {post.confidence && <ConfidenceBadge level={post.confidence} />}
        </div>
        <h3 className="font-heading text-xl font-semibold leading-snug text-ink decoration-accent/30 decoration-1 underline-offset-[3px] transition-colors group-hover:text-accent group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-secondary">
          {post.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-secondary">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-hairline">·</span>
          <span>{post.readingTime} read</span>
        </div>
      </Link>
    </article>
  );
}
