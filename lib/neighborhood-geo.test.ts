import { describe, expect, it } from "vitest";
import {
  NEIGHBORHOOD_PAGE_GEO,
  PUBLISHED_PLAN_GEO,
  resolveNeighborhoodGeo,
} from "./neighborhood-geo";

describe("neighborhood Place geo", () => {
  it("reuses parent-plan centroids already published on sibling pages", () => {
    expect(NEIGHBORHOOD_PAGE_GEO["groves-at-inspirada"]).toEqual(
      PUBLISHED_PLAN_GEO.inspirada,
    );
    expect(NEIGHBORHOOD_PAGE_GEO.siena).toEqual(PUBLISHED_PLAN_GEO.summerlin);
    expect(NEIGHBORHOOD_PAGE_GEO["lone-mountain"]).toEqual(
      PUBLISHED_PLAN_GEO.centennialHills,
    );
    expect(NEIGHBORHOOD_PAGE_GEO["89138"]).toEqual(
      PUBLISHED_PLAN_GEO.summerlin,
    );
    expect(NEIGHBORHOOD_PAGE_GEO["89144"]).toEqual(
      PUBLISHED_PLAN_GEO.summerlin,
    );
    expect(NEIGHBORHOOD_PAGE_GEO["summerlin-west"]).toEqual(
      PUBLISHED_PLAN_GEO.summerlin,
    );
    expect(NEIGHBORHOOD_PAGE_GEO["tournament-hills"]).toEqual(
      PUBLISHED_PLAN_GEO.summerlin,
    );
    expect(NEIGHBORHOOD_PAGE_GEO["red-rock-country-club"]).toEqual(
      PUBLISHED_PLAN_GEO.summerlin,
    );
  });

  it("lets an explicit pin win over the parent-plan fallback", () => {
    expect(resolveNeighborhoodGeo("siena", 36.1523, -115.3456)).toEqual({
      latitude: 36.1523,
      longitude: -115.3456,
    });
    expect(resolveNeighborhoodGeo("siena")).toEqual(
      PUBLISHED_PLAN_GEO.summerlin,
    );
    expect(resolveNeighborhoodGeo("unknown-village")).toBeUndefined();
  });
});
