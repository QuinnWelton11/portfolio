"use client";

import { motion } from "motion/react";
import { getFeaturedProjects } from "@/lib/profile";
import { Rule } from "@/components/Rule";
import { Marginalia } from "@/components/Marginalia";
import { ProjectCard } from "./ProjectCard";
import { fadeUp } from "@/lib/motion";

export function WorkGrid() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="work"
      className="px-6 md:px-12 max-w-6xl mx-auto w-full py-24"
      aria-labelledby="work-heading"
    >
      <Rule />

      <div className="flex items-baseline justify-between mt-12 mb-12">
        <div className="flex items-baseline gap-6">
          <Marginalia>Selected Work</Marginalia>
        </div>
        <motion.h2
          id="work-heading"
          className="font-display font-light text-[clamp(1.75rem,3.5vw,3rem)] text-[var(--ink)] leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Projects
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-16 flex justify-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/QuinnWelton11"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-widest uppercase text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
        >
          <span>All projects on GitHub</span>
          <span aria-hidden="true">→</span>
        </a>
      </motion.div>
    </section>
  );
}
