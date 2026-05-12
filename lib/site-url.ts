/**
 * Canonical site origin for sitemaps, robots, and metadata.
 * Must match production redirects (see next.config.js).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/+$/, "");
  }
  return "https://www.heyberkshire.com";
}
