import { MetadataRoute } from "next";
import { INDEXABLE_PATHS } from "@/lib/indexable-paths";
import { MARKET_SNAPSHOT_ISO } from "@/lib/market-snapshots";
import { getPublicSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getPublicSiteUrl();
  const lastModified = new Date(`${MARKET_SNAPSHOT_ISO}T12:00:00.000Z`);

  return INDEXABLE_PATHS.map((page) => ({
    url: page.path === "/" ? `${baseUrl}/` : `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
