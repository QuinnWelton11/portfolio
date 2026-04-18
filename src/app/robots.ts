import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

export default function robots(): MetadataRoute.Robots {
  const base = profile.contact.website || "https://quinnwelton.dev";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
