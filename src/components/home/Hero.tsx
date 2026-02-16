import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-section">
      {/* Background layers */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb-1" aria-hidden="true" />
      <div className="hero-orb-2" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div className="hero-content max-w-[560px]">
            {/* Status badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs tracking-wide text-emerald-400/90">
                Currently engineering bioluminescent plants
              </span>
            </div>

            <h1 className="font-heading text-[2.75rem] leading-[1.08] font-bold tracking-tight text-white sm:text-[3.5rem] lg:text-[4rem]">
              Experimental{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Synthetic Biology
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[1.0625rem] leading-relaxed text-slate-400">
              I&rsquo;m Iman. I design genetic circuits, engineer bioluminescent
              organisms, and document everything I learn along the way.
            </p>

            {/* CTA row */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Explore my work
              </Link>
              <Link
                href="/start-here"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                Start here
                <span aria-hidden="true" className="arrow-slide text-xs">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="hero-figure hidden lg:block">
            <div className="relative">
              {/* Glow behind image */}
              <div className="hero-image-glow" />

              {/* Image frame */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="/images/Gel_electrophoresis_2.jpg"
                  alt="Gel electrophoresis results from the lab"
                  width={560}
                  height={380}
                  className="object-cover"
                  priority
                />

                {/* Overlay info card */}
                <div className="absolute right-4 bottom-4 left-4 rounded-lg border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[0.6875rem] tracking-wide text-emerald-400">
                      LATEST
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-snug font-medium text-white/90">
                    Gel electrophoresis &mdash; confirming plasmid constructs
                  </p>
                  <p className="mt-0.5 font-mono text-[0.6875rem] text-slate-500">
                    Feb 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
