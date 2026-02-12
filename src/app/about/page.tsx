import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
              I&rsquo;m Iman.
            </h1>
            <div className="bg-accent mt-4 h-[2px] w-10" aria-hidden="true" />
            <p className="text-secondary mt-5 text-[1.0625rem] leading-relaxed">
              A 24 year old learning synthetic biology in public.
            </p>
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
          In my last year of undergrad, I realized I had picked the wrong major.
          STEM had my heart, yet I was stuck on a misguided legal career path I
          fell into at eighteen. So during my last semester, I took every single
          class I could squeeze on top of my finishing course load: Calculus,
          Physics, Chemistry, you name it. I got great grades, loved every
          second, got my non-applicable degree and faced a question: Now what?
          Another undergrad? Graduate again in my late 20s? Accept I missed my
          shot, and move on with my life?
        </p>
        <p className="text-ink mt-4 text-[1.0625rem] leading-[1.78]">
          For a year I blundered around. I researched “third doors” into random
          companies I couldn’t care less about, got jaded trying to work with
          the bureaucrats at PanCan and the Canadian Cancer Society, and did
          LeetCode to pass time and feel productive. Eventually I found myself
          on a trip with some incredible founders whose motto can be summed down
          to: “You can just do things”. Simple, but it never really clicked for
          me until then.
        </p>
        <p className="text-ink mt-4 text-[1.0625rem] leading-[1.78]">
          Upon returning I applied to HTGAA, found a lab and got to work. It was
          love at first PCR and George Church lecture. Nowadays, you can find me
          pipetting away at Makerlabs under Scott Pownall&rsquo;s guidance. I
          love what I do, and I genuinely believe in the future of this
          incredible field. Currently, I’m hyper-focused on plant engineering,
          specifically utilizing luciferin biosynthesis.
        </p>
        <p className="text-ink mt-4 text-[1.0625rem] leading-[1.78]">
          Everything here is written by someone who is still learning.
          You&rsquo;ll find honest mistakes alongside genuine breakthroughs.
          It’s been quite a journey getting here, thank you for stopping by.
        </p>
      </section>

      {/* Get in touch */}
      <section>
        <h2 className="text-secondary mb-2 font-mono text-xs tracking-widest uppercase">
          Get in touch
        </h2>
        <div className="bg-hairline mt-4 h-px w-full" aria-hidden="true" />
        <p className="text-ink mt-5 text-[1.0625rem] leading-[1.78]">
          If you&rsquo;re learning synthetic biology too, or if you notice
          something wrong in my writing, I genuinely want to hear from you. The
          best way to reach me is by email.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/start-here"
            className="text-accent decoration-accent/40 hover:decoration-accent inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline decoration-1 underline-offset-[3px] transition-all"
          >
            Start here
            <span className="arrow-slide text-sm">&rarr;</span>
          </Link>
          <span className="text-hairline">&middot;</span>
          <Link
            href="/lab-notes"
            className="text-accent decoration-accent/40 hover:decoration-accent inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline decoration-1 underline-offset-[3px] transition-all"
          >
            Read my lab notes
            <span className="arrow-slide text-sm">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
