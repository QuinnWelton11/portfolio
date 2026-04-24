"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/profile";
import { Marginalia } from "@/components/Marginalia";
import { fadeUp } from "@/lib/motion";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={index}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block focus-visible:outline-(--accent)"
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-sm aspect-square mb-5 bg-(--surface)">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Marginalia>{project.slug}</Marginalia>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 border border-(--accent) opacity-0 group-hover:opacity-100 transition-opacity rounded-sm" />
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <Marginalia className="block mb-1">{project.year}</Marginalia>
            <h3 className="font-display font-light text-xl text-(--ink) group-hover:text-(--accent) transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-(--muted) mt-1 leading-snug">
              {project.tagline}
            </p>
          </div>
          <span
            className="font-mono text-(--muted) text-xs mt-1 group-hover:text-(--accent) transition-colors shrink-0"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[10px] text-(--muted)">
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
