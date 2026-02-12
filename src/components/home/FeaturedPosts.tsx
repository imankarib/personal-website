import Link from "next/link";
import { getFeaturedPosts, formatDate } from "~/lib/content";
import { LabStamp } from "~/components/ui/LabStamp";
import { ConfidenceBadge } from "~/components/ui/ConfidenceBadge";

export function FeaturedPosts() {
  const featured = getFeaturedPosts().slice(0, 3);
  const lead = featured[0];
  const secondaries = featured.slice(1);

  if (!lead) return null;

  const leadHref =
    lead.type === "lab-note"
      ? `/lab-notes/${lead.slug}`
      : `/deep-dives/${lead.slug}`;

  return (
    <section className="border-t border-hairline py-16">
      <div className="mx-auto max-w-[1040px] px-6">
        {/* Section header with accent rule */}
        <div className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-secondary">
            Featured
          </h2>
          <div
            className="mt-3 h-[2px] w-8 bg-accent"
            aria-hidden="true"
          />
        </div>

        {/* Magazine layout: lead + secondaries */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-0">
          {/* Lead story — large treatment */}
          <article className="group lg:col-span-3 lg:pr-10">
            <Link href={leadHref} className="block">
              <div className="flex items-center gap-2.5">
                <LabStamp type={lead.type} />
                {lead.confidence && (
                  <ConfidenceBadge level={lead.confidence} />
                )}
              </div>
              <h3 className="mt-4 font-heading text-[1.625rem] leading-[1.2] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-[1.875rem]">
                {lead.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-secondary">
                {lead.deck}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-secondary/75">
                {lead.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-secondary">
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                <span className="text-hairline">&middot;</span>
                <span>{lead.readingTime} read</span>
              </div>
            </Link>
          </article>

          {/* Secondary stories — stacked, compact */}
          <div className="border-t border-hairline pt-8 lg:col-span-2 lg:border-t-0 lg:border-l lg:border-hairline lg:pt-0 lg:pl-10">
            {secondaries.map((post, i) => {
              const href =
                post.type === "lab-note"
                  ? `/lab-notes/${post.slug}`
                  : `/deep-dives/${post.slug}`;
              return (
                <article
                  key={post.slug}
                  className={`group ${i > 0 ? "mt-6 border-t border-hairline pt-6" : ""}`}
                >
                  <Link href={href} className="block">
                    <LabStamp type={post.type} />
                    <h3 className="mt-2.5 font-heading text-base leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-secondary">
                      {post.deck}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2 text-[0.8125rem] text-secondary">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="text-hairline">&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
