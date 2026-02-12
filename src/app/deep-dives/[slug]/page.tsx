import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { deepDives, getPostBySlug } from "~/lib/content";
import { PostHeader } from "~/components/ui/PostHeader";
import { ArticleWithMargins, MarginNote } from "~/components/ui/MarginNote";
import { Callout } from "~/components/ui/Callout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "deep-dive");
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.deck,
  };
}

export function generateStaticParams() {
  return deepDives.map((post) => ({ slug: post.slug }));
}

export default async function DeepDivePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "deep-dive");
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-6 py-16">
      <PostHeader
        title={post.title}
        deck={post.deck}
        date={post.date}
        readingTime={post.readingTime}
        tags={post.tags}
        type={post.type}
        confidence={post.confidence}
      />

      <ArticleWithMargins>
        <div className="article-body">
          <p className="drop-cap">{post.excerpt}</p>

          <h2>Why this matters</h2>
          <p>
            Understanding fundamentals deeply—rather than memorizing
            surface-level definitions—is the difference between being able to
            troubleshoot experiments and being stuck when something unexpected
            happens. This article is my attempt to build that deep understanding,
            written in a way that I hope helps others on the same path.
          </p>

          <MarginNote>
            I revisit and update these articles as my understanding evolves.
            Check the date for the latest revision.
          </MarginNote>

          <h2>The basics</h2>
          <p>
            Let&rsquo;s start from first principles. Most explanations of this
            topic jump straight into the mechanism without explaining why it
            exists in the first place. Biology is full of elegant solutions to
            problems that organisms have faced over billions of years of
            evolution.
          </p>

          <p>
            The key insight is that biological systems are simultaneously
            robust and fragile—robust to the kinds of perturbations they
            evolved to handle, and fragile to novel ones. This duality is what
            makes synthetic biology both possible and challenging.
          </p>

          <Callout label="Key concept">
            Every biological mechanism exists because it solved a problem. When
            you understand the problem, the mechanism makes intuitive sense.
          </Callout>

          <h2>Going deeper</h2>
          <p>
            The molecular details are where things get interesting. At this
            level, you start to see how the abstract concepts map to real
            physical interactions between molecules. Proteins fold into specific
            shapes. DNA sequences encode instructions. Chemical bonds form and
            break with precise energetics.
          </p>

          <p>
            What surprised me most was how <em>noisy</em> biological systems
            are. Gene expression is stochastic. Protein concentrations fluctuate.
            And yet, somehow, cells function reliably. Understanding how
            reliability emerges from unreliable components is one of the most
            fascinating questions in biology.
          </p>

          <h2>Practical implications</h2>
          <p>
            For anyone doing synthetic biology, the practical takeaway is this:
            respect the complexity. Simple genetic circuits can behave in
            unexpectedly complex ways because they exist within the context of a
            living cell. Every design decision interacts with thousands of other
            processes happening simultaneously.
          </p>

          <blockquote>
            Biology is not engineering in the traditional sense. It&rsquo;s more
            like reverse-engineering a machine that was built by a process with
            no designer, no documentation, and no version control.
          </blockquote>

          <h2>Further reading</h2>
          <p>
            I&rsquo;ll continue adding to this article as I learn more. If
            you&rsquo;re interested in going deeper, the primary literature is
            the best resource—though it takes practice to read effectively.
            I&rsquo;m planning a separate lab note on how I approach reading
            papers as a beginner.
          </p>
        </div>
      </ArticleWithMargins>
    </article>
  );
}
