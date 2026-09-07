/**
 * Permanent redirects for Google Search Console 404 / discovered URLs
 * that no longer exist, mapped to the current canonical page.
 *
 * Next.js `permanent: true` sends 308 (Google treats it like 301).
 * Each path is registered with and without a trailing slash so Googlebot
 * does not stay on a 404 after crawling the slash variant.
 */

/** @typedef {{ source: string, destination: string, permanent: true }} Redirect */

/** @type {Array<[string, string]>} */
const LEGACY_PATHS = [
  ["/real-estate-tools", "/home-valuation"],
  ["/testimonials", "/about"],
  ["/homes-over-1m", "/luxury-homes"],
  ["/corporate-relocation-services", "/relocation"],
  ["/corporate-relocations", "/relocation"],
  ["/active-listings", "/listings"],
  ["/our-luxury-listings", "/luxury-homes"],
  ["/virtual-tours", "/listings"],
  ["/centennial-hills", "/neighborhoods/centennial-hills"],
  ["/centennial-hills-luxury-homes", "/neighborhoods/centennial-hills"],
  ["/first-time-homebuyers", "/buyers/first-time-buyers"],
  ["/centennial-hills-new-construction", "/new-construction"],
  ["/summerlin", "/neighborhoods/summerlin"],
  ["/mls-search", "/listings"],
  ["/centennial-hills-amenities", "/neighborhoods/centennial-hills"],
  ["/blog", "/market-insights"],
  ["/golf-course-homes", "/neighborhoods/centennial-hills"],
  ["/centennial-hills-homes", "/neighborhoods/centennial-hills"],
  ["/luxury-home-buyers", "/buyers/luxury-homes-las-vegas"],
  ["/luxury-home-sales", "/luxury-homes"],
  ["/area-explorer", "/neighborhoods"],
  ["/summerlin-west", "/neighborhoods/summerlin-west"],
  ["/market-analysis", "/market-report"],
  ["/buy-home-centennial-hills", "/neighborhoods/centennial-hills"],
  ["/california-equity-buyers", "/buyers/california-relocator"],
  ["/same-day-showings", "/contact"],
  ["/seo-improvements", "/"],
  ["/index.html", "/"],
];

/**
 * @param {Array<[string, string]>} pairs
 * @returns {Redirect[]}
 */
function withSlashVariants(pairs) {
  /** @type {Redirect[]} */
  const redirects = [];
  for (const [from, to] of pairs) {
    const source = from.replace(/\/$/, "") || "/";
    if (source === to) {
      continue;
    }
    redirects.push({ source, destination: to, permanent: true });
    if (source !== "/") {
      redirects.push({ source: `${source}/`, destination: to, permanent: true });
    }
  }
  return redirects;
}

const gscLegacyRedirects = withSlashVariants(LEGACY_PATHS);

module.exports = {
  LEGACY_PATHS,
  gscLegacyRedirects,
};
