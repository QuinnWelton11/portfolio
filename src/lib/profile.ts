import { profile } from "@/content/profile";

export { profile };

export type { Education, Experience, Profile, Project } from "@/content/profile";

export function getFeaturedProjects() {
  return profile.projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return profile.projects.find((p) => p.slug === slug) ?? null;
}

export function getCurrentRole() {
  return profile.experience.find((e) => e.end === "present") ?? profile.experience[0] ?? null;
}

export function getSocialLinks() {
  const { email, github, linkedin, x, bluesky, resume } = profile.contact;
  return [
    github && { label: "GitHub", href: github },
    linkedin && { label: "LinkedIn", href: linkedin },
    x && { label: "X", href: x },
    bluesky && { label: "Bluesky", href: bluesky },
    email && { label: "Email", href: `mailto:${email}` },
    resume && { label: "Resume", href: resume },
  ].filter(Boolean) as { label: string; href: string }[];
}
