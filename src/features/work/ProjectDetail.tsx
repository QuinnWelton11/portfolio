import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/profile";
import { Marginalia } from "@/components/Marginalia";
import { Rule } from "@/components/Rule";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="px-6 md:px-12 max-w-6xl mx-auto w-full pt-28 pb-24">
      {/* Back */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--accent) transition-colors mb-12"
      >
        <span aria-hidden="true">←</span>
        <span>All Work</span>
      </Link>

      <Rule />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
        {/* Sidebar */}
        <aside className="md:col-span-3 space-y-8">
          <div>
            <Marginalia className="block mb-1">Year</Marginalia>
            <p className="font-mono text-sm text-(--ink)">{project.year}</p>
          </div>
          <div>
            <Marginalia className="block mb-2">Stack</Marginalia>
            <ul className="space-y-1 list-none m-0 p-0">
              {project.stack.map((tech) => (
                <li key={tech} className="font-mono text-xs text-(--muted)">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase text-(--accent) hover:underline flex items-center gap-1.5"
              >
                <span>Live Site</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--accent) transition-colors flex items-center gap-1.5"
              >
                <span>Source</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </aside>

        {/* Main content */}
        <div className="md:col-span-9">
          <h1 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] text-(--ink) leading-tight mb-4">
            {project.name}
          </h1>
          <p className="text-(--muted) text-lg mb-10 leading-relaxed">{project.tagline}</p>

          {project.image && (
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-12 bg-(--surface)">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          )}

          <Rule />

          <div className="mt-10 prose-custom">
            <p className="text-(--ink) text-lg leading-relaxed max-w-prose">{project.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
