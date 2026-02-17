import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { labNotes, getPostBySlug } from "~/lib/content";
import { PostHeader } from "~/components/ui/PostHeader";
import { ArticleWithMargins } from "~/components/ui/MarginNote";
import { Phase0RubyRedContent } from "~/components/lab-notes/Phase0RubyRedContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "lab-note");
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.deck,
  };
}

export function generateStaticParams() {
  return labNotes.map((post) => ({ slug: post.slug }));
}

/* Map slugs to custom content components */
const contentRegistry: Record<string, React.ComponentType> = {
  "phase-0-ruby-red-agroinfiltration-practice": Phase0RubyRedContent,
};

export default async function LabNotePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "lab-note");
  if (!post) notFound();

  const CustomContent = contentRegistry[slug];

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
          {CustomContent ? (
            <CustomContent />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </ArticleWithMargins>
    </article>
  );
}
