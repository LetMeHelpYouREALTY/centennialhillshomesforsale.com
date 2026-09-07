import { MetadataRoute } from "next";
import { INDEXABLE_PATHS } from "@/lib/indexable-paths";
import { getPublicSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getPublicSiteUrl();
  const lastModified = new Date();

  return INDEXABLE_PATHS.map((page) => ({
    url: page.path === "/" ? `${baseUrl}/` : `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
