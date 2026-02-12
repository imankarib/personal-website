import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-hairline mt-24 border-t">
      <div className="mx-auto max-w-[1040px] px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/"
              className="font-heading text-ink text-base font-semibold"
            >
              IK Labs
            </Link>
            <p className="text-secondary mt-1 text-sm">
              Learning synthetic biology in public.
            </p>
          </div>
          <nav className="text-secondary flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/start-here"
              className="hover:text-ink transition-colors"
            >
              Start Here
            </Link>
            <Link
              href="/lab-notes"
              className="hover:text-ink transition-colors"
            >
              Lab Notes
            </Link>
            <Link
              href="/deep-dives"
              className="hover:text-ink transition-colors"
            >
              Deep Dives
            </Link>
            <Link href="/projects" className="hover:text-ink transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-ink transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="border-hairline text-secondary mt-8 border-t pt-6 text-xs">
          &copy; {new Date().getFullYear()} Iman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
