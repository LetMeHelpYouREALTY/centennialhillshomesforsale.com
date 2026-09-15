/**
 * First-party page images.
 * Git paths are the backup source of truth. When Cloudflare Images is enabled
 * (`NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED` + account hash), next/image
 * delivers the same ids from imagedelivery.net via cloudflare-image-loader.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

export const OFFICE_PHOTO_PATH = "/images/gbp/office-lake-mead.png";
export const OFFICE_PHOTO_ALT =
  "Berkshire Hathaway HomeServices Nevada Properties office on West Lake Mead Boulevard, Las Vegas";

export const VISIT_OFFICE_PHOTO_PATH = "/images/gbp/visit-office.png";
export const VISIT_OFFICE_PHOTO_ALT =
  "Interior of the Lake Mead Boulevard office where Dr. Jan Duffy meets Las Vegas buyers and sellers";

export const PAGE_HERO_IMAGES = {
  homepage: {
    src: "/images/neighborhoods/centennial-hills.png",
    alt: "Centennial Hills Las Vegas homes with northwest desert mountain views",
  },
  about: {
    src: "/images/hero/about.png",
    alt: "Dr. Jan Duffy consulting with a client at the Las Vegas office",
  },
  googleBusiness: {
    src: "/images/hero/google-business.png",
    alt: "West Lake Mead Boulevard office park serving Google Business Profile visitors",
  },
  contact: {
    src: "/images/hero/office-lake-mead.png",
    alt: "Office exterior at 9406 W Lake Mead Blvd, Suite 100, Las Vegas NV 89134",
  },
  buyers: {
    src: "/images/hero/buyers.png",
    alt: "Las Vegas buyer touring a northwest desert-contemporary home",
  },
  sellers: {
    src: "/images/hero/sellers.png",
    alt: "Staged Las Vegas listing living room opening to a backyard pool",
  },
  listings: {
    src: "/images/hero/homepage.png",
    alt: "Las Vegas Valley rooftops and desert mountains for homes-for-sale search",
  },
  firstTimeBuyers: {
    src: "/images/hero/first-time-buyers.png",
    alt: "First-time buyers on the porch of a single-story Las Vegas home",
  },
  californiaRelocator: {
    src: "/images/hero/california-relocator.png",
    alt: "California relocators arriving at a Las Vegas desert-contemporary house",
  },
  luxury: {
    src: "/images/hero/luxury-homes.png",
    alt: "Luxury custom home with mountain views in The Ridges, Summerlin",
  },
  luxuryRidges: {
    src: "/images/hero/luxury-ridges.png",
    alt: "Gated custom estate architecture in The Ridges, Las Vegas",
  },
  newConstruction: {
    src: "/images/hero/new-construction.png",
    alt: "New construction homes under desert sky in Las Vegas or Henderson",
  },
  investment: {
    src: "/images/hero/investment.png",
    alt: "Single-family Las Vegas rental house with desert xeriscape",
  },
  relocation: {
    src: "/images/hero/relocation.png",
    alt: "Moving truck in the driveway of a Las Vegas home during relocation",
  },
  market: {
    src: "/images/hero/market-report.png",
    alt: "Market packet on a desk overlooking the Las Vegas valley",
  },
  homeValuation: {
    src: "/images/hero/home-valuation.png",
    alt: "CMA comps and tablet on a kitchen table for a Las Vegas home valuation",
  },
  office: {
    src: "/images/hero/office-lake-mead.png",
    alt: OFFICE_PHOTO_ALT,
  },
  fiftyFivePlus: {
    src: "/images/hero/55-plus-hub.png",
    alt: "55-plus active adult community in Summerlin with golf course and rec center",
  },
  sellersListing: {
    src: "/images/hero/sellers-listing.png",
    alt: "Las Vegas home prepared for listing with professional staging",
  },
} as const satisfies Record<string, SiteImage>;

const NEIGHBORHOOD_IMAGE_MAP: Record<string, SiteImage> = {
  "centennial-hills": {
    src: "/images/neighborhoods/centennial-hills.png",
    alt: "Centennial Hills homes in northwest Las Vegas near Town Center",
  },
  summerlin: {
    src: "/images/neighborhoods/summerlin.png",
    alt: "Summerlin master-planned streets with Red Rock mountain backdrop",
  },
  "summerlin-west": {
    src: "/images/neighborhoods/summerlin.png",
    alt: "Summerlin West homes near Red Rock Canyon, Las Vegas",
  },
  "89138": {
    src: "/images/neighborhoods/summerlin.png",
    alt: "89138 Summerlin West residential street, Las Vegas",
  },
  "89144": {
    src: "/images/neighborhoods/summerlin.png",
    alt: "89144 Summerlin homes west of the 215, Las Vegas",
  },
  henderson: {
    src: "/images/neighborhoods/henderson.png",
    alt: "Henderson Nevada residential street with McCullough Range views",
  },
  "green-valley": {
    src: "/images/neighborhoods/green-valley.png",
    alt: "Green Valley Henderson homes with mature trees and desert landscaping",
  },
  inspirada: {
    src: "/images/neighborhoods/inspirada.png",
    alt: "Inspirada Henderson master-plan homes and parks",
  },
  "groves-at-inspirada": {
    src: "/images/neighborhoods/inspirada.png",
    alt: "Groves at Inspirada townhomes in Henderson 89044",
  },
  "the-ridges": {
    src: "/images/neighborhoods/the-ridges.png",
    alt: "Custom homes in The Ridges, Summerlin Las Vegas",
  },
  "southern-highlands": {
    src: "/images/neighborhoods/southern-highlands.png",
    alt: "Southern Highlands Las Vegas golf-course luxury home",
  },
  "north-las-vegas": {
    src: "/images/neighborhoods/north-las-vegas.png",
    alt: "North Las Vegas suburban homes with Sheep Range views",
  },
  "skye-canyon": {
    src: "/images/neighborhoods/skye-canyon.png",
    alt: "Skye Canyon northwest Las Vegas production homes",
  },
  "mountains-edge": {
    src: "/images/neighborhoods/mountains-edge.png",
    alt: "Mountains Edge Las Vegas homes looking toward the Spring Mountains",
  },
  "lone-mountain": {
    src: "/images/neighborhoods/north-las-vegas.png",
    alt: "Lone Mountain northwest Las Vegas residential streets",
  },
  "red-rock-country-club": {
    src: "/images/neighborhoods/the-ridges.png",
    alt: "Red Rock Country Club gated golf community in Summerlin",
  },
  "tournament-hills": {
    src: "/images/neighborhoods/summerlin.png",
    alt: "Tournament Hills Summerlin golf-community homes",
  },
  "sun-city-summerlin": {
    src: "/images/neighborhoods/sun-city-summerlin.png",
    alt: "Sun City Summerlin 55-plus single-story homes and rec amenities",
  },
  "sun-city-anthem": {
    src: "/images/neighborhoods/henderson.png",
    alt: "Sun City Anthem Henderson 55-plus community setting",
  },
  "del-webb-lake-las-vegas": {
    src: "/images/neighborhoods/55-plus-hub.png",
    alt: "Del Webb Lake Las Vegas 55-plus community near the lake",
  },
  "heritage-stonebridge": {
    src: "/images/neighborhoods/summerlin.png",
    alt: "Heritage at Stonebridge Summerlin 55-plus streets",
  },
  "sun-city-aliante": {
    src: "/images/neighborhoods/north-las-vegas.png",
    alt: "Sun City Aliante North Las Vegas 55-plus homes",
  },
  "trilogy-summerlin": {
    src: "/images/neighborhoods/summerlin.png",
    alt: "Trilogy at Summerlin 55-plus community homes",
  },
  "solera-anthem": {
    src: "/images/neighborhoods/henderson.png",
    alt: "Solera at Anthem Henderson 55-plus community",
  },
};

export function getNeighborhoodImage(slug: string): SiteImage {
  return (
    NEIGHBORHOOD_IMAGE_MAP[slug] ?? {
      src: "/images/neighborhoods/centennial-hills.png",
      alt: "Las Vegas Valley homes represented by Dr. Jan Duffy",
    }
  );
}

/** Cloudflare Images custom id for a git-backed public path. */
export function cloudflareImageId(src: string): string {
  return src
    .replace(/^\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/\//g, "-");
}
