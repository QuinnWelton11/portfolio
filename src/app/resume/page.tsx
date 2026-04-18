import type { Metadata } from "next";
import { profile } from "@/lib/profile";
import { buildMetadata } from "@/lib/seo";
import { Rule } from "@/components/Rule";
import { Marginalia } from "@/components/Marginalia";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description: `Resume of ${profile.name}, ${profile.title} based in ${profile.location}.`,
});

function formatDate(dateStr: string): string {
  if (dateStr === "present") return "Present";
  const [year, month] = dateStr.split("-");
  if (!year) return dateStr;
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ResumePage() {
  const { name, title, location, contact, bio, stack, experience, education } = profile;

  return (
    <main
      id="main"
      tabIndex={-1}
      className="max-w-3xl mx-auto px-6 py-16 print:py-8"
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="font-display font-light text-4xl text-(--ink) leading-tight mb-1">{name}</h1>
        <p className="font-mono text-sm text-(--muted)">{title} · {location}</p>
        <div className="flex flex-wrap gap-4 mt-3">
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="font-mono text-xs text-(--accent) hover:underline">
              {contact.email}
            </a>
          )}
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-(--muted) hover:text-(--accent) transition-colors">
              GitHub
            </a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-(--muted) hover:text-(--accent) transition-colors">
              LinkedIn
            </a>
          )}
        </div>
      </header>

      <Rule />

      {/* Summary */}
      <section className="my-8" aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="font-mono text-[11px] tracking-widest uppercase text-(--muted) mb-3">Summary</h2>
        <p className="text-(--ink) text-sm leading-relaxed">{bio.long}</p>
      </section>

      <Rule />

      {/* Experience */}
      <section className="my-8" aria-labelledby="exp-heading">
        <h2 id="exp-heading" className="font-mono text-[11px] tracking-widest uppercase text-(--muted) mb-6">Experience</h2>
        <ol className="space-y-8 list-none m-0 p-0">
          {experience.map((role) => (
            <li key={`${role.company}-${role.start}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <div>
                  <h3 className="font-display font-light text-base text-(--ink)">{role.role}</h3>
                  <span className="font-mono text-xs text-(--muted)">{role.company}</span>
                </div>
                <Marginalia className="shrink-0">{formatDate(role.start)} — {formatDate(role.end)}</Marginalia>
              </div>
              <p className="text-sm text-(--muted) leading-relaxed mt-1">{role.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <Rule />

      {/* Education */}
      {education.length > 0 && (
        <section className="my-8" aria-labelledby="edu-heading">
          <h2 id="edu-heading" className="font-mono text-[11px] tracking-widest uppercase text-(--muted) mb-6">Education</h2>
          <ol className="space-y-4 list-none m-0 p-0">
            {education.map((ed) => (
              <li key={`${ed.school}-${ed.start}`} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-display font-light text-base text-(--ink)">{ed.degree}</h3>
                  <span className="font-mono text-xs text-(--muted)">{ed.school}</span>
                  {ed.gpa && <span className="font-mono text-xs text-(--muted) ml-2">· {ed.gpa}</span>}
                </div>
                <Marginalia className="shrink-0">{formatDate(ed.start)} — {formatDate(ed.end)}</Marginalia>
              </li>
            ))}
          </ol>
        </section>
      )}

      <Rule />

      {/* Skills */}
      <section className="my-8" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="font-mono text-[11px] tracking-widest uppercase text-(--muted) mb-4">Skills</h2>
        <p className="font-mono text-xs text-(--ink) leading-relaxed">{stack.primary.join(" · ")}</p>
        {stack.secondary.length > 0 && (
          <p className="font-mono text-xs text-(--muted) leading-relaxed mt-1">{stack.secondary.join(" · ")}</p>
        )}
      </section>

      {/* Print CTA */}
      <div className="mt-12 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="font-mono text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--accent) transition-colors border border-(--rule) hover:border-(--accent) px-4 py-2 rounded-sm"
        >
          Print / Save PDF
        </button>
      </div>
    </main>
  );
}
