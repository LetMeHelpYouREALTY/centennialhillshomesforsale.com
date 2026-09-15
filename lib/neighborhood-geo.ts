/**
 * Place geo for neighborhood and 55+ guides.
 *
 * Explicit latitude/longitude on a page always wins. Missing pins reuse a
 * parent-plan centroid already published on a sibling guide — not a surveyed
 * lot pin, and not an invented village coordinate.
 */

export type NeighborhoodGeo = {
  latitude: number;
  longitude: number;
};

export const PUBLISHED_PLAN_GEO = {
  inspirada: { latitude: 35.956, longitude: -115.128 },
  summerlin: { latitude: 36.1672, longitude: -115.331 },
  centennialHills: { latitude: 36.2755, longitude: -115.294 },
} as const satisfies Record<string, NeighborhoodGeo>;

export const NEIGHBORHOOD_PAGE_GEO: Record<string, NeighborhoodGeo> = {
  "groves-at-inspirada": PUBLISHED_PLAN_GEO.inspirada,
  "89138": PUBLISHED_PLAN_GEO.summerlin,
  "89144": PUBLISHED_PLAN_GEO.summerlin,
  "summerlin-west": PUBLISHED_PLAN_GEO.summerlin,
  "tournament-hills": PUBLISHED_PLAN_GEO.summerlin,
  "red-rock-country-club": PUBLISHED_PLAN_GEO.summerlin,
  siena: PUBLISHED_PLAN_GEO.summerlin,
  "lone-mountain": PUBLISHED_PLAN_GEO.centennialHills,
};

export function resolveNeighborhoodGeo(
  slug: string,
  latitude?: number,
  longitude?: number,
): NeighborhoodGeo | undefined {
  if (latitude != null && longitude != null) {
    return { latitude, longitude };
  }
  return NEIGHBORHOOD_PAGE_GEO[slug];
}
