import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Iman, a new synthetic biology scientist documenting my learning journey.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 pt-16 pb-24">
      {/* Header with portrait */}
      <header className="mb-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          {/* Portrait */}
          <div className="shrink-0">
            <div className="border-hairline relative h-[180px] w-[180px] overflow-hidden rounded-xl border sm:h-[200px] sm:w-[200px]">
              <Image
                src="/images/iman-portrait.jpg"
                alt="Iman"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Intro */}
          <div className="flex-1">
            <p className="text-secondary mb-3 font-mono text-xs tracking-widest uppercase">
              About
            </p>
            <h1 className="font-heading text-ink text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
              Hi there! I&apos;m Iman.
            </h1>
            <div className="bg-accent mt-4 h-[2px] w-10" aria-hidden="true" />
            <p className="text-secondary mt-5 text-[1.0625rem] leading-relaxed"></p>
          </div>
        </div>
      </header>

      {/* Background */}
      <section className="mb-12">
        <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
          Background
        </h2>
        <div className="bg-hairline mt-4 h-px w-full" aria-hidden="true" />
        <p className="text-ink mt-5 text-[1.0625rem] leading-[1.78]">
          In my final year of undergraduate studies, I realized I had chosen the
          wrong major. I had always been drawn to STEM, but had committed early
          to a path that no longer felt right. My last semester I loaded up on
          everything I&rsquo;d missed, Calculus, Physics, Chemistry, did well,
          loved it, and graduated with a degree that no longer reflected where I
          was going.
        </p>
        <p className="text-ink mt-4 text-[1.0625rem] leading-[1.78]">
          For about a year I searched for an entry point. I attended conferences,
          worked with large nonprofits, kept my mind sharp. I was moving and
          learning, but hadn&rsquo;t found the thing yet. Then I went on a trip
          with a group of founders whose worldview collapsed into one idea: you
          can just do things. It sounds obvious. It didn&rsquo;t click for me
          until then.
        </p>
        <p className="text-ink mt-4 text-[1.0625rem] leading-[1.78]">
          I came back, applied to HTGAA, found a lab in Vancouver, and got to
          work. I knew within weeks I was exactly where I was supposed to be. My
          current project: engineering the first autonomously bioluminescent plant
          using the firefly luciferin pathway. The core insight is that vascular
          plants already produce the precursors, the missing piece is the
          enzymatic steps to complete luciferin synthesis. I&rsquo;m building
          those in from a community lab, with no institutional backing and no
          safety net. You can just do things.
        </p>
      </section>

      {/* Get in touch */}
      <section>
        <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
          Get in touch
        </h2>
        <div className="bg-hairline mt-4 h-px w-full" aria-hidden="true" />
        <p className="text-ink mt-5 text-[1.0625rem] leading-[1.78]">
          If you&rsquo;re learning synthetic biology, or just want to talk, I
          genuinely want to hear from you. The best way to reach me is by email.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="mailto:imankaribzhanova@gmail.com"
            className="text-accent decoration-accent/40 hover:decoration-accent inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline decoration-1 underline-offset-[3px] transition-all"
          >
            Email
            <span className="arrow-slide text-sm">&rarr;</span>
          </a>
          <span className="text-hairline">&middot;</span>
          <a
            href="https://instagram.com/imrachkya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent decoration-accent/40 hover:decoration-accent inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline decoration-1 underline-offset-[3px] transition-all"
          >
            Instagram
            <span className="arrow-slide text-sm">&rarr;</span>
          </a>
          <span className="text-hairline">&middot;</span>
          <a
            href="https://github.com/imankarib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent decoration-accent/40 hover:decoration-accent inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline decoration-1 underline-offset-[3px] transition-all"
          >
            GitHub
            <span className="arrow-slide text-sm">&rarr;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
