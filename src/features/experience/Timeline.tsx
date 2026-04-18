"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";
import { Rule } from "@/components/Rule";
import { Marginalia } from "@/components/Marginalia";
import { fadeUp } from "@/lib/motion";

function formatDate(dateStr: string): string {
  if (dateStr === "present") return "Present";
  const [year, month] = dateStr.split("-");
  if (!year) return dateStr;
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Timeline() {
  const { experience, education } = profile;

  return (
    <section
      id="experience"
      className="px-6 md:px-12 max-w-6xl mx-auto w-full py-24"
      aria-labelledby="experience-heading"
    >
      <Rule />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
        <div className="md:col-span-3">
          <Marginalia>Experience</Marginalia>
        </div>

        <div className="md:col-span-9">
          <motion.h2
            id="experience-heading"
            className="font-display font-light text-[clamp(1.75rem,3.5vw,3rem)] text-(--ink) mb-12 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Where I&apos;ve Worked
          </motion.h2>

          <ol className="relative border-l border-(--rule) pl-8 space-y-12 list-none m-0" aria-label="Work experience">
            {experience.map((role, i) => (
              <motion.li
                key={`${role.company}-${role.start}`}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i + 1}
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[2.1rem] top-1.5 w-2 h-2 rounded-full border-2 border-(--accent) bg-(--paper)"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-display font-light text-lg text-(--ink)">{role.role}</h3>
                    {role.companyUrl ? (
                      <a
                        href={role.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-(--accent) hover:underline"
                      >
                        {role.company}
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-(--muted)">{role.company}</span>
                    )}
                  </div>
                  <Marginalia className="shrink-0">
                    {formatDate(role.start)} — {formatDate(role.end)}
                  </Marginalia>
                </div>

                <p className="text-sm text-(--muted) leading-relaxed">{role.summary}</p>
              </motion.li>
            ))}
          </ol>

          {/* Education */}
          {education.length > 0 && (
            <div className="mt-16">
              <Marginalia className="block mb-8">Education</Marginalia>
              <ol className="space-y-6 list-none m-0" aria-label="Education">
                {education.map((ed, i) => (
                  <motion.li
                    key={`${ed.school}-${ed.start}`}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <div>
                      <h3 className="font-display font-light text-base text-(--ink)">{ed.degree}</h3>
                      <span className="font-mono text-xs text-(--muted)">{ed.school}</span>
                      {ed.gpa && (
                        <span className="font-mono text-xs text-(--muted) ml-3">· {ed.gpa}</span>
                      )}
                    </div>
                    <Marginalia className="shrink-0">
                      {formatDate(ed.start)} — {formatDate(ed.end)}
                    </Marginalia>
                  </motion.li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
