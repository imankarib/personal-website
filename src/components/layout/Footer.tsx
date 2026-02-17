import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/"
              className="font-heading text-base font-bold tracking-tight text-ink"
            >
              Iman K.
            </Link>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
            <Link
              href="/start-here"
              className="transition-colors hover:text-ink"
            >
              Start Here
            </Link>
            <Link
              href="/lab-notes"
              className="transition-colors hover:text-ink"
            >
              Lab Notes
            </Link>
            <Link
              href="/deep-dives"
              className="transition-colors hover:text-ink"
            >
              Deep Dives
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-ink"
            >
              Projects
            </Link>
            <Link href="/about" className="transition-colors hover:text-ink">
              About
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-hairline pt-6 text-xs text-secondary">
          &copy; {new Date().getFullYear()} Iman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
