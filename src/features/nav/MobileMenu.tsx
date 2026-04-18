"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-px bg-(--ink) origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          className="block w-5 h-px bg-(--ink)"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-px bg-(--ink) origin-center"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
            className="md:hidden fixed top-16 inset-x-0 z-40 px-6 pb-6 pt-4 flex flex-col gap-1"
            style={{
              backgroundColor: "color-mix(in oklch, var(--paper) 96%, transparent)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--ink) transition-colors py-3 border-b border-(--rule) last:border-0"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
