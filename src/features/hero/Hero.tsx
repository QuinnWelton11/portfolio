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
              /* primary — right-side ellipse, image bleeds in from the right */
              "radial-gradient(ellipse 65% 85% at 85% 50%, black 0%, black 5%, transparent 70%)",
              /* secondary — upper-right bloom for softer top edge */
              "radial-gradient(ellipse 55% 60% at 70% 20%, black 0%, transparent 65%)",
            ].join(", "),
            maskComposite: "add",
            WebkitMaskImage: [
              "radial-gradient(ellipse 65% 85% at 85% 50%, black 0%, black 15%, transparent 70%)",
              "radial-gradient(ellipse 55% 60% at 70% 20%, black 0%, transparent 65%)",
            ].join(", "),
            WebkitMaskComposite: "source-over",
          }}
        />
      </div>


      {/* Content */}
      <div className="relative z-10 pt-14 px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col justify-center min-h-screen py-20">
        {/* Location + availability badge */}
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
        >
          <span
            className="font-mono text-[11px] tracking-widest uppercase text-white/80 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
          >
            {profile.location}
          </span>
          <span
            className="font-mono text-[11px] tracking-widest uppercase flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-(--accent)"
              aria-hidden="true"
            />
            <span style={{ color: "var(--accent)" }}>
              {profile.availability}
            </span>
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
          <motion.div
            variants={fadeUp}
            custom={words.length + 1}
            className="max-w-sm"
          >
            <p className="text-(--muted) text-sm leading-relaxed">
              {profile.bio.short}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={words.length + 2}
            className="flex items-center gap-2"
          >
            {socials.slice(0, 4).map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="font-mono text-[11px] tracking-widest uppercase text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="flex flex-col items-start gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="w-px h-8 bg-white/30 ml-px" />
          <Marginalia className="text-white/40">Scroll</Marginalia>
        </motion.div>
      </div>
    </section>
  );
}
