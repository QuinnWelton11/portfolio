"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/lib/profile";
import { getSocialLinks } from "@/lib/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Marginalia } from "@/components/Marginalia";

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

export function Hero() {
  const socials = getSocialLinks();
  const words = profile.bio.tagline.split(" ");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background image with elliptical feathered masks */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgroundImages/home-bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          aria-hidden="true"
          style={{
            maskImage: [
              /* primary center ellipse — wide, tall, fades toward all edges */
              "radial-gradient(ellipse 90% 75% at 55% 45%, black 0%, black 20%, transparent 75%)",
              /* secondary softer ellipse pulling in lower-left — adds depth */
              "radial-gradient(ellipse 60% 55% at 20% 80%, black 0%, transparent 65%)",
            ].join(", "),
            maskComposite: "add",
            WebkitMaskImage: [
              "radial-gradient(ellipse 90% 75% at 55% 45%, black 0%, black 20%, transparent 75%)",
              "radial-gradient(ellipse 60% 55% at 20% 80%, black 0%, transparent 65%)",
            ].join(", "),
            WebkitMaskComposite: "source-over",
          }}
        />
      </div>

      {/* Diagonal accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-px h-[60vh] origin-top-right z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--rule))",
          transform: "rotate(8deg) translateX(-8rem)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-14 px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col justify-center min-h-screen py-20">
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
            <span style={{ color: "var(--accent)" }}>{profile.availability}</span>
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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
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
                className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--ink) transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 z-10"
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
