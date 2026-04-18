"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";
import { getSocialLinks } from "@/lib/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Marginalia } from "@/components/Marginalia";

export function Hero() {
  const socials = getSocialLinks();
  const words = profile.bio.tagline.split(" ");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 md:px-12 max-w-6xl mx-auto w-full"
      aria-labelledby="hero-heading"
    >
      {/* Diagonal accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-px h-[60vh] origin-top-right"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--rule))",
          transform: "rotate(8deg) translateX(-8rem)",
        }}
      />

      {/* Location + availability badge */}
      <motion.div
        className="flex items-center gap-4 mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
      >
        <Marginalia>{profile.location}</Marginalia>
        <span aria-hidden="true" className="w-1 h-1 rounded-full bg-(--rule)" />
        <span className="font-mono text-[11px] tracking-widest uppercase flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-(--accent)"
            aria-hidden="true"
          />
          <span className="text-(--accent)">{profile.availability}</span>
        </span>
      </motion.div>

      {/* Headline — staggered words */}
      <motion.h1
        id="hero-heading"
        className="font-display font-light text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-(--ink) mb-8 max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={fadeUp}
            custom={i}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sub-info row */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} custom={words.length + 1} className="max-w-sm">
          <p className="text-(--muted) text-sm leading-relaxed">{profile.bio.short}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={words.length + 2}
          className="flex items-center gap-6"
        >
          {socials.slice(0, 4).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--accent) transition-colors"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-(--rule)" />
        <Marginalia>Scroll</Marginalia>
      </motion.div>
    </section>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};
