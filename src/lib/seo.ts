import type { Metadata } from "next";
import { profile } from "@/content/profile";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, bio, contact } = profile;
  const description = seo.defaultDescription || bio.short;

  return {
    title: {
      default: seo.defaultTitle,
      template: `%s — ${seo.siteName}`,
    },
    description,
    metadataBase: contact.website ? new URL(contact.website) : undefined,
    openGraph: {
      type: "website",
      siteName: seo.siteName,
      title: seo.defaultTitle,
      description,
      images: seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : [],
      locale: seo.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.defaultTitle,
      description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}

export function buildProjectMetadata(slug: string, name: string, tagline: string): Metadata {
  return buildMetadata({
    title: name,
    description: tagline,
    openGraph: {
      title: `${name} — ${profile.seo.siteName}`,
      description: tagline,
      images: [{ url: `/api/og/${slug}`, width: 1200, height: 630 }],
    },
  });
}
