import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.contact.website || "https://quinnwelton.dev";
  const now = new Date();

  const projectUrls = profile.projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...projectUrls,
  ];
}
