"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";
import { Rule } from "@/components/Rule";
import { Marginalia } from "@/components/Marginalia";
import { fadeUp } from "@/lib/motion";

export function About() {
  const { bio, stack, title } = profile;

  return (
    <section
      id="about"
      className="px-6 md:px-12 max-w-6xl mx-auto w-full py-24"
      aria-labelledby="about-heading"
    >
      <Rule />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
        {/* Label */}
        <div className="md:col-span-3">
          <Marginalia>About</Marginalia>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
          <motion.h2
            id="about-heading"
            className="font-display font-light text-[clamp(2rem,4vw,3.5rem)] text-(--ink) mb-8 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-(--ink) text-lg leading-relaxed max-w-prose mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
          >
            {bio.long}
          </motion.p>

          {/* Stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={2}
          >
            <Marginalia className="block mb-4">Primary Stack</Marginalia>
            <div className="flex flex-wrap gap-2">
              {stack.primary.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-(--rule) text-(--muted) hover:border-(--accent) hover:text-(--accent) transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Marginalia className="block mb-4">Secondary Stack</Marginalia>
              <div className="flex flex-wrap gap-2">
                {stack.secondary.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-(--rule) text-(--muted) hover:border-(--accent) hover:text-(--accent) transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Marginalia className="block mb-4">Tools</Marginalia>
              <div className="flex flex-wrap gap-2">
                {stack.tools.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-(--rule) text-(--muted) hover:border-(--accent) hover:text-(--accent) transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {stack.learning.length > 0 && (
              <div className="mt-6">
                <Marginalia className="block mb-4">
                  Currently Learning
                </Marginalia>
                <div className="flex flex-wrap gap-2">
                  {stack.learning.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-dashed border-(--rule) text-(--muted)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
