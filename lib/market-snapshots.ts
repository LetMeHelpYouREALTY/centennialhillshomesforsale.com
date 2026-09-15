/** Public listing medians from realtor.com local market pages. */

export const MARKET_SNAPSHOT_AS_OF = "September 14, 2026";
export const MARKET_SNAPSHOT_SOURCE =
  "realtor.com local market pages retrieved 2026-09-14";

export const LISTING_MEDIANS_USD = {
  lasVegas: 479_000,
  hendersonListing: 534_950,
  hendersonSold: 485_000,
  northLasVegas: 439_990,
  centennialHills: 514_500,
  summerlinNorth: 514_999,
  summerlinWest: 825_000,
  summerlinSouth: 877_500,
  sunCitySummerlin: 472_424,
  sunCityAnthem: 578_800,
  inspirada: 544_863,
  mountainsEdge: 499_900,
  southernHighlands: 1_024_950,
  greenValleyNorth: 456_975,
  greenValleySouth: 521_200,
  greenValleyRanch: 581_250,
  anthem: 631_000,
  lakeLasVegas: 739_675,
} as const;

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function listingMedianDisclaimer(): string {
  return `${MARKET_SNAPSHOT_SOURCE}. Listing medians are not sold prices and are not a CMA.`;
}
