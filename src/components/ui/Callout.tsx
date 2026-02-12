interface CalloutProps {
  children: React.ReactNode;
  label?: string;
}

export function Callout({ children, label }: CalloutProps) {
  return (
    <aside className="my-6 rounded-r border-l-2 border-accent bg-paper-dark px-5 py-4">
      {label && (
        <p className="mb-1.5 font-mono text-xs font-medium uppercase tracking-wider text-accent">
          {label}
        </p>
      )}
      <div className="text-[0.9375rem] leading-relaxed text-ink">
        {children}
      </div>
    </aside>
  );
}
