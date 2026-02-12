import Link from "next/link";

interface TopicTagProps {
  tag: string;
  active?: boolean;
}

export function TopicTag({ tag, active = false }: TopicTagProps) {
  return (
    <Link
      href={`/lab-notes?tag=${encodeURIComponent(tag)}`}
      className={`inline-block border px-3 py-1.5 text-sm transition-colors ${
        active
          ? "border-accent bg-accent-light text-accent"
          : "border-hairline text-secondary hover:border-accent hover:text-accent"
      }`}
    >
      {tag}
    </Link>
  );
}
