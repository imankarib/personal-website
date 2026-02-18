import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Key takeaways and notes from research papers I've read.",
};

export default function LibraryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
