import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { labNotes, getPostBySlug } from "~/lib/content";
import { PostHeader } from "~/components/ui/PostHeader";
import { ArticleWithMargins, MarginNote } from "~/components/ui/MarginNote";
import { MistakeBox } from "~/components/ui/MistakeBox";
import { Callout } from "~/components/ui/Callout";
import { ProtocolCard } from "~/components/ui/ProtocolCard";

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

export default async function LabNotePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "lab-note");
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

      {/* Sample article body — demonstrates design system components */}
      <ArticleWithMargins>
        <div className="article-body">
          <p>{post.excerpt}</p>

          <h2>Background</h2>
          <p>
            Before getting into the details, some context. Synthetic biology is
            fundamentally about engineering biological systems, and that means
            understanding both the theory and the hands-on practice. This entry
            covers what I encountered, what surprised me, and what I&rsquo;d do
            differently.
          </p>

          <MarginNote>
            Most beginners skip straight to the protocol without reading
            background literature. I did the same thing and had to backtrack.
          </MarginNote>

          <h2>What I did</h2>
          <p>
            I followed a standard protocol adapted from several online resources
            and cross-referenced with OpenWetWare. The key parameters are
            documented in the protocol card below.
          </p>

          <ProtocolCard
            title="Standard Heat Shock Transformation"
            steps={[
              {
                text: "Thaw competent cells on ice for 20 minutes",
                params: "Temperature: 0–4°C",
              },
              {
                text: "Add 1–5 μL of plasmid DNA to 50 μL of competent cells",
                params: "DNA concentration: ~10 ng/μL",
              },
              {
                text: "Incubate on ice for 30 minutes",
              },
              {
                text: "Heat shock at 42°C for exactly 45 seconds",
                params: "Water bath: 42°C ± 0.5°C",
              },
              {
                text: "Return to ice for 2 minutes",
              },
              {
                text: "Add 950 μL of SOC medium and incubate at 37°C for 1 hour with shaking",
                params: "Shaking: 225 rpm",
              },
              {
                text: "Plate 100 μL on selective agar plates",
              },
            ]}
            pitfalls={[
              "Exceeding 45 seconds of heat shock significantly reduces efficiency.",
              "Letting competent cells warm above 4°C before use.",
              "Using LB instead of SOC for recovery reduces transformation efficiency by 5–10×.",
            ]}
            expectedResults="Expect 10²–10⁴ colonies per μg of plasmid DNA for chemically competent cells."
          />

          <Callout label="Note">
            This protocol assumes chemically competent cells, not
            electrocompetent. Electroporation uses a completely different set of
            parameters and equipment.
          </Callout>

          <h2>What I observed</h2>
          <p>
            The results were mixed. I got colonies on the experimental plate but
            also on the negative control, which suggests contamination. The
            colony count was lower than expected, pointing to reduced competent
            cell viability.
          </p>

          <MistakeBox
            mistake="Got colonies on the negative control plate, indicating contamination somewhere in the workflow."
            whatHappened="I likely touched the inside of the tube lid while adding DNA. My aseptic technique near the flame was inconsistent—I was rushing through the steps."
            changedNextTime="Slow down during the DNA addition step. Keep tube caps face-down on a clean surface. Work closer to the flame and re-sterilize the loop between each step."
          />

          <h2>What I learned</h2>
          <p>
            Aseptic technique is a skill, not just a set of instructions. Reading
            about it is completely different from executing it under pressure when
            you&rsquo;re trying to remember six other things simultaneously. The
            next attempt will focus on slower, more deliberate movements.
          </p>

          <blockquote>
            The most important instrument in the lab is the one between your
            ears.
          </blockquote>

          <p>
            I&rsquo;m planning to repeat this experiment next week with fresh
            competent cells and a more controlled setup. Updates to follow.
          </p>
        </div>
      </ArticleWithMargins>
    </article>
  );
}
