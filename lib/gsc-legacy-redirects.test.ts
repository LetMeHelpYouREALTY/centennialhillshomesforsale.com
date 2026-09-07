import { describe, expect, it } from "vitest";
import { LEGACY_PATHS, gscLegacyRedirects } from "./gsc-legacy-redirects.js";

const LIVE_ROUTES = new Set([
  "/",
  "/about",
  "/buyers",
  "/buyers/california-relocator",
  "/buyers/luxury-homes-las-vegas",
  "/contact",
  "/market-insights",
  "/market-update",
  "/neighborhoods/centennial-hills",
  "/neighborhoods/green-valley",
  "/neighborhoods/henderson",
  "/neighborhoods/lone-mountain",
  "/neighborhoods/mountains-edge",
  "/neighborhoods/north-las-vegas",
  "/neighborhoods/red-rock-country-club",
  "/neighborhoods/skye-canyon",
  "/neighborhoods/the-ridges",
  "/neighborhoods/tournament-hills",
  "/neighborhoods/summerlin-west",
  "/neighborhoods/groves-at-inspirada",
  "/neighborhoods/89144",
  "/neighborhoods/89138",
  "/sellers/move-up",
  "/sellers/relocation",
  "/why-berkshire-hathaway",
  "/55-plus-communities/heritage-stonebridge",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/trilogy-summerlin",
]);

describe("gsc legacy redirects", () => {
  it("never redirects a live indexable route onto itself or away from a current page", () => {
    for (const redirect of gscLegacyRedirects) {
      expect(LIVE_ROUTES.has(redirect.source)).toBe(false);
    }
  });

  it("maps GSC-discovered dead URLs to a real destination", () => {
    const sources = new Set(LEGACY_PATHS.map(([from]) => from));
    expect(sources.has("/buy-home-centennial-hills")).toBe(true);
    expect(sources.has("/california-equity-buyers")).toBe(true);
    expect(sources.has("/corporate-relocations")).toBe(true);
    expect(sources.has("/same-day-showings")).toBe(true);
  });

  it("registers trailing-slash twins so Googlebot does not 404 the slash URL", () => {
    const sources = gscLegacyRedirects.map((item: { source: string }) => item.source);
    expect(sources).toContain("/area-explorer");
    expect(sources).toContain("/area-explorer/");
  });
});
