import { profile } from "@/lib/profile";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        borderBottom: "1px solid var(--rule)",
        backgroundColor: "color-mix(in oklch, var(--paper) 85%, transparent)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="/"
          className="font-display text-sm font-light tracking-tight text-(--ink) hover:text-(--accent) transition-colors"
        >
          {profile.displayName || profile.name}
        </a>

        <nav aria-label="Primary">
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--ink) transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
