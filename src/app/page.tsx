import { Hero } from "~/components/home/Hero";
import { IndexStrip } from "~/components/home/IndexStrip";
import { CurrentFocusCard } from "~/components/home/CurrentFocusCard";
import { FeaturedPosts } from "~/components/home/FeaturedPosts";
import { LatestLabNotes } from "~/components/home/LatestLabNotes";
import { TopicsGrid } from "~/components/home/TopicsGrid";
import { FadeIn } from "~/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn>
        <IndexStrip />
      </FadeIn>
      <FadeIn delay={100}>
        <CurrentFocusCard />
      </FadeIn>
      <FadeIn>
        <FeaturedPosts />
      </FadeIn>
      <FadeIn>
        <LatestLabNotes />
      </FadeIn>
      <FadeIn>
        <TopicsGrid />
      </FadeIn>
    </>
  );
}
