"use client";

import { motion } from "motion/react";
import { profile, getSocialLinks } from "@/lib/profile";
import { Rule } from "@/components/Rule";
import { Marginalia } from "@/components/Marginalia";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  const socials = getSocialLinks();

  return (
    <section
      id="contact"
      className="px-6 md:px-12 max-w-6xl mx-auto w-full py-24"
      aria-labelledby="contact-heading"
    >
      <Rule />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
        <div className="md:col-span-3">
          <Marginalia>Contact</Marginalia>
        </div>

        <div className="md:col-span-9">
          <motion.h2
            id="contact-heading"
            className="font-display font-light text-[clamp(2rem,5vw,4.5rem)] text-(--ink) mb-6 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Let&apos;s work<br />
            <span style={{ color: "var(--accent)" }}>together.</span>
          </motion.h2>

          <motion.p
            className="text-(--muted) text-base max-w-sm mb-12 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-3 font-display font-light text-2xl text-(--ink) hover:text-(--accent) transition-colors group"
            >
              <span>{profile.contact.email}</span>
              <span className="text-(--rule) group-hover:text-(--accent) transition-colors" aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex flex-wrap gap-6 mt-12 pt-12 border-t border-(--rule)"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            {socials.map(({ label, href }) => (
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
        </div>
      </div>
    </section>
  );
}
