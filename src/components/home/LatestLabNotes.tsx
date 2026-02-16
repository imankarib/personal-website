import Link from "next/link";
import { getAllPosts, formatDate } from "~/lib/content";
import { LabStamp } from "~/components/ui/LabStamp";

export function LatestLabNotes() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <section className="border-t border-hairline py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
              Latest from the lab
            </p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Recent experiments &amp; writing
            </h2>
          </div>
          <Link
            href="/lab-notes"
            className="hidden items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-accent sm:inline-flex"
          >
            View all
            <span aria-hidden="true" className="arrow-slide text-xs">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Post grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const href =
              post.type === "lab-note"
                ? `/lab-notes/${post.slug}`
                : `/deep-dives/${post.slug}`;

            return (
              <Link key={post.slug} href={href} className="group block">
                <article className="post-card h-full rounded-xl border border-hairline bg-paper p-6">
                  <div className="flex items-center gap-2.5">
                    <LabStamp type={post.type} />
                    <time
                      dateTime={post.date}
                      className="font-mono text-[0.6875rem] text-secondary"
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>

                  <h3 className="font-heading mt-4 text-base leading-snug font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {post.deck}
                  </p>

                  <div className="mt-4 font-mono text-xs text-secondary/60">
                    {post.readingTime} read
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Mobile "View all" link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/lab-notes"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            View all notes
            <span aria-hidden="true" className="arrow-slide text-xs">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
