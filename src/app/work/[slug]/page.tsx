import { notFound } from "next/navigation";
import { Nav } from "@/features/nav/Nav";
import { ProjectDetail } from "@/features/work/ProjectDetail";
import { getProjectBySlug } from "@/lib/profile";
import { profile } from "@/lib/profile";
import { buildProjectMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return profile.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildProjectMetadata(project.slug, project.name, project.tagline);
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <ProjectDetail project={project} />
      </main>
    </>
  );
}
