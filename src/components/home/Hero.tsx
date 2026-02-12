import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24">
      {/* Background image */}
      <Image
        src="/images/Gel_electrophoresis_2.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay — heavier on the left (text side), lighter on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070E1B]/92 via-[#070E1B]/80 to-[#070E1B]/55" />

      {/* Floating bioluminescent particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1040px] px-6">
        <div className="hero-content max-w-[600px]">
          <h1 className="hero-title-glow font-heading text-[2.25rem] leading-[1.12] font-semibold tracking-tight text-white sm:text-[3rem]">
            I&rsquo;m Iman.
          </h1>
          <p className="mt-3 font-heading text-[1.2rem] leading-snug font-normal text-white/60 sm:text-[1.5rem]">
            Synthetic Biology &amp; Genetic Engineering
          </p>
          <div
            className="mt-5 h-[2px] w-10 bg-glow"
            aria-hidden="true"
          />
          <p className="mt-4 max-w-[480px] text-base leading-relaxed text-white/50">
            This is my running lab notebook. What I tried, what failed, what
            worked, and what I&rsquo;m doing next.
          </p>

          {/* CTA row */}
          <div className="mt-7 flex items-center gap-6">
            <Link
              href="/start-here"
              className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-glow underline decoration-glow/40 decoration-1 underline-offset-[3px] transition-all hover:decoration-glow"
            >
              Start here
              <span aria-hidden="true" className="arrow-slide text-sm">
                &rarr;
              </span>
            </Link>
            <Link
              href="#subscribe"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-[0.8125rem] tracking-wide text-white/70 transition-colors hover:border-glow hover:text-glow"
            >
              Follow updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
