export function Marginalia({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[11px] tracking-widest uppercase text-[var(--muted)] ${className}`}
    >
      {children}
    </span>
  );
}
