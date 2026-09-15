import { describe, expect, it } from "vitest";
import {
  LISTING_MEDIANS_USD,
  MARKET_SNAPSHOT_AS_OF,
  MARKET_SNAPSHOT_ISO,
  formatUsd,
  listingMedianDisclaimer,
} from "./market-snapshots";

describe("market snapshots", () => {
  it("date-stamps the realtor.com pull used on neighborhood pages", () => {
    expect(MARKET_SNAPSHOT_AS_OF).toBe("September 14, 2026");
    expect(MARKET_SNAPSHOT_ISO).toBe("2026-09-14");
    expect(MARKET_SNAPSHOT_ISO).toBe(
      "realtor.com local market pages retrieved 2026-09-14".slice(-10),
    );
    expect(LISTING_MEDIANS_USD.centennialHills).toBe(514_500);
    expect(LISTING_MEDIANS_USD.hendersonListing).toBe(534_950);
    expect(LISTING_MEDIANS_USD.inspirada).toBe(544_863);
  });

  it("formats USD without cents", () => {
    expect(formatUsd(514_500)).toBe("$514,500");
    expect(listingMedianDisclaimer()).toContain("realtor.com");
  });
});
