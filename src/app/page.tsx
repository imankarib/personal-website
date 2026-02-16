import { Hero } from "~/components/home/Hero";
import { WorkingOn } from "~/components/home/WorkingOn";
import { LatestLabNotes } from "~/components/home/LatestLabNotes";
import { FadeIn } from "~/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn>
        <WorkingOn />
      </FadeIn>
      <FadeIn delay={100}>
        <LatestLabNotes />
      </FadeIn>
    </>
  );
}
