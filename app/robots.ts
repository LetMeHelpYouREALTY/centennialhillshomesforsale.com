import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Single source of truth for /robots.txt (do not add public/robots.txt — it overrides this file).
 */
export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/monitoring/"],
      },
      { userAgent: "AhrefsBot", allow: "/", crawlDelay: 10 },
      { userAgent: "SemrushBot", allow: "/", crawlDelay: 10 },
      { userAgent: "Bingbot", allow: "/", crawlDelay: 5 },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/_next/image"],
      },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "PinterestBot", allow: "/" },
    ],
    host: new URL(site).host,
    sitemap: `${site}/sitemap.xml`,
  };
}
