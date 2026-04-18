"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--accent) transition-colors border border-(--rule) hover:border-(--accent) px-4 py-2 rounded-sm"
    >
      Print / Save PDF
    </button>
  );
}
