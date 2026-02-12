"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "~/components/ui/ThemeToggle";

const navItems = [
  { href: "/start-here", label: "Start Here" },
  { href: "/lab-notes", label: "Lab Notes" },
  { href: "/deep-dives", label: "Deep Dives" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-paper/85 shadow-sm"
          : "border-b border-transparent bg-paper/70"
      }`}
    >
      <div className="mx-auto flex max-w-[1040px] items-center justify-between px-6 py-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-baseline gap-1.5"
        >
          <span className="font-heading text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
            IK
          </span>
          <span className="mb-[1px] h-[6px] w-[6px] rounded-full bg-glow shadow-[0_0_6px_rgba(52,211,153,0.5)] transition-shadow group-hover:shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm tracking-wide transition-colors ${
                  isActive
                    ? "nav-link-active text-accent"
                    : "text-secondary hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-hairline px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
