import Link from "next/link";
import { labNotes, formatDate } from "~/lib/content";

export function LatestLabNotes() {
  const latest = labNotes.slice(0, 5);

  return (
    <section className="border-t border-hairline py-16">
      <div className="mx-auto max-w-[1040px] px-6">
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-secondary">
              Latest Lab Notes
            </h2>
            <div
              className="mt-3 h-[2px] w-8 bg-accent"
              aria-hidden="true"
            />
          </div>
          <Link
            href="/lab-notes"
            className="text-sm text-secondary transition-colors hover:text-accent"
          >
            View all &rarr;
          </Link>
        </div>

        {/* Numbered entries */}
        <div className="divide-y divide-hairline border-t border-hairline">
          {latest.map((post, i) => (
            <article key={post.slug} className="group">
              <Link
                href={`/lab-notes/${post.slug}`}
                className="flex gap-5 py-5 sm:gap-8"
              >
                {/* Index number */}
                <span className="font-heading shrink-0 w-8 pt-0.5 text-right text-[1.75rem] leading-none font-medium text-hairline sm:w-10 sm:text-[2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-secondary">
                    {post.deck}
                  </p>
                </div>

                {/* Date */}
                <time
                  dateTime={post.date}
                  className="hidden shrink-0 pt-0.5 text-sm text-secondary sm:block"
                >
                  {formatDate(post.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
