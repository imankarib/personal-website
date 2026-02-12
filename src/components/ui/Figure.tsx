interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  number?: number;
}

export function Figure({ src, alt, caption, number }: FigureProps) {
  return (
    <figure className="figure-wide my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full rounded-sm border border-hairline"
      />
      <figcaption className="mt-3 px-8 text-center text-sm leading-relaxed text-secondary">
        {number !== undefined && (
          <span className="font-mono text-xs">Figure {number}</span>
        )}
        {number !== undefined && " — "}
        {caption}
      </figcaption>
    </figure>
  );
}
