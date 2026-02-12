interface MarginNoteProps {
  children: React.ReactNode;
  id?: string;
}

export function MarginNote({ children, id }: MarginNoteProps) {
  return (
    <aside className="margin-note" id={id}>
      {children}
    </aside>
  );
}

export function ArticleWithMargins({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="article-with-margins">{children}</div>;
}
