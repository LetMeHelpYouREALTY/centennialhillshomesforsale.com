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
    src: "/images/neighborhoods/summerlin-west.png",
    alt: "Newer Summerlin West homes in ZIP 89138 with Red Rock Canyon backdrop",
  },
  "89138": {
    src: "/images/neighborhoods/89138.png",
    alt: "Newer Summerlin West homes in ZIP 89138 Las Vegas",
  },
  "89144": {
    src: "/images/neighborhoods/89144.png",
    alt: "Summerlin streetscape in ZIP 89144 Las Vegas",
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
    src: "/images/neighborhoods/groves-at-inspirada.png",
    alt: "Groves at Inspirada townhomes and pocket parks in Henderson 89044",
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
    src: "/images/neighborhoods/lone-mountain.png",
    alt: "Lone Mountain northwest Las Vegas homes climbing toward the named peak",
  },
  "red-rock-country-club": {
    src: "/images/neighborhoods/red-rock-country-club.png",
    alt: "Red Rock Country Club golf community in Summerlin 89135",
  },
  "tournament-hills": {
    src: "/images/neighborhoods/tournament-hills.png",
    alt: "Tournament Hills custom homes near TPC Summerlin in 89134",
  },
  "sun-city-summerlin": {
    src: "/images/neighborhoods/sun-city-summerlin.png",
    alt: "Sun City Summerlin 55-plus single-story homes and rec amenities",
  },
  "sun-city-anthem": {
    src: "/images/neighborhoods/sun-city-anthem.png",
    alt: "Sun City Anthem Henderson 55-plus single-story homes near the rec campus",
  },
  "del-webb-lake-las-vegas": {
    src: "/images/neighborhoods/del-webb-lake-las-vegas.png",
    alt: "Del Webb Lake Las Vegas 55-plus community near the lake",
  },
  "heritage-stonebridge": {
    src: "/images/neighborhoods/heritage-stonebridge.png",
    alt: "Heritage at Stonebridge Summerlin 55-plus single-story homes",
  },
  "sun-city-aliante": {
    src: "/images/neighborhoods/sun-city-aliante.png",
    alt: "Sun City Aliante North Las Vegas 55-plus homes and rec pavilion",
  },
  "trilogy-summerlin": {
    src: "/images/neighborhoods/trilogy-summerlin.png",
    alt: "Trilogy at Summerlin 55-plus contemporary homes in ZIP 89135",
  },
  "solera-anthem": {
    src: "/images/neighborhoods/solera-anthem.png",
    alt: "Solera at Anthem Henderson 55-plus single-story homes and rec courts",
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

/**
 * Heading keyword → existing git photo. More specific rules first.
 * Alts are built per heading so inner H2s stay unique.
 */
export const HEADING_IMAGE_RULES: ReadonlyArray<{
  test: RegExp;
  src: string;
}> = [
  {
    test: /\b(golf|tpc|tee time|country club)\b/i,
    src: "/images/neighborhoods/red-rock-country-club.png",
  },
  {
    test: /\b(lake las vegas|waterfront|marina)\b/i,
    src: "/images/neighborhoods/del-webb-lake-las-vegas.png",
  },
  {
    test: /\b(55\+|sun city|del webb|hopa|active adult|age-restrict)/i,
    src: PAGE_HERO_IMAGES.fiftyFivePlus.src,
  },
  {
    test: /\b(the ridges|custom estate|guard-gated luxury)\b/i,
    src: PAGE_HERO_IMAGES.luxuryRidges.src,
  },
  {
    test: /\b(luxury|guard-gated)\b/i,
    src: PAGE_HERO_IMAGES.luxury.src,
  },
  {
    test: /\b(new construction|builder|production home)\b/i,
    src: PAGE_HERO_IMAGES.newConstruction.src,
  },
  {
    test: /\b(first[- ]time|first home)\b/i,
    src: PAGE_HERO_IMAGES.firstTimeBuyers.src,
  },
  {
    test: /\b(california)\b/i,
    src: PAGE_HERO_IMAGES.californiaRelocator.src,
  },
  {
    test: /\b(relocation|moving truck|inbound move)\b/i,
    src: PAGE_HERO_IMAGES.relocation.src,
  },
  {
    test: /\b(invest|rental|cash flow)\b/i,
    src: PAGE_HERO_IMAGES.investment.src,
  },
  {
    test: /\b(valuation|cma|comps|worth)\b/i,
    src: PAGE_HERO_IMAGES.homeValuation.src,
  },
  {
    test: /\b(staging|list your|selling process|seller)\b/i,
    src: PAGE_HERO_IMAGES.sellersListing.src,
  },
  {
    test: /\b(google business|gbp|review)\b/i,
    src: PAGE_HERO_IMAGES.googleBusiness.src,
  },
  {
    test: /\b(office hours|visit the office|lake mead)\b/i,
    src: VISIT_OFFICE_PHOTO_PATH,
  },
  {
    test: /\b(about dr\.? jan|dr\. jan duffy)\b/i,
    src: PAGE_HERO_IMAGES.about.src,
  },
  {
    test: /\b(contact|get in touch|reach out)\b/i,
    src: PAGE_HERO_IMAGES.contact.src,
  },
  {
    test: /\b(buyer|tour|showing|offer)\b/i,
    src: PAGE_HERO_IMAGES.buyers.src,
  },
  {
    test: /\b(market|inventory|median|statistics|outlook)\b/i,
    src: PAGE_HERO_IMAGES.market.src,
  },
  {
    test: /\b(search|mls|for sale|listings?|price guide)\b/i,
    src: PAGE_HERO_IMAGES.listings.src,
  },
  {
    test: /\b(drive time|commute|freeway|us-95|i-215|downtown)\b/i,
    src: PAGE_HERO_IMAGES.listings.src,
  },
  {
    test: /\b(red rock|hiking|trail)\b/i,
    src: "/images/neighborhoods/summerlin.png",
  },
  {
    test: /\b(89138|summerlin west)\b/i,
    src: "/images/neighborhoods/summerlin-west.png",
  },
  {
    test: /\b(summerlin)\b/i,
    src: "/images/neighborhoods/summerlin.png",
  },
  {
    test: /\b(centennial)\b/i,
    src: "/images/neighborhoods/centennial-hills.png",
  },
  {
    test: /\b(henderson|green valley|inspirada)\b/i,
    src: "/images/neighborhoods/henderson.png",
  },
  {
    test: /\b(skye canyon)\b/i,
    src: "/images/neighborhoods/skye-canyon.png",
  },
  {
    test: /\b(lone mountain)\b/i,
    src: "/images/neighborhoods/lone-mountain.png",
  },
  {
    test: /\b(faq|question)\b/i,
    src: VISIT_OFFICE_PHOTO_PATH,
  },
];

function hashHeading(heading: string): number {
  let hash = 0;
  for (let i = 0; i < heading.length; i += 1) {
    hash = (hash + heading.charCodeAt(i) * (i + 1)) % 997;
  }
  return hash;
}

function pickFromPool(heading: string, pool: string[]): string {
  if (pool.length === 0) {
    return PAGE_HERO_IMAGES.listings.src;
  }
  return pool[hashHeading(heading) % pool.length];
}

export type ResolveSectionImageInput = {
  heading: string;
  neighborhoodName?: string;
  neighborhoodSlug?: string;
  fallbackSrc?: string;
  avoidSrc?: string;
};

/** Compact, heading-matched photo from the git-backed catalog. */
export function resolveSectionImage(
  input: ResolveSectionImageInput,
): SiteImage {
  const heading = input.heading.trim().replace(/\s+/g, " ");
  const place = input.neighborhoodName ?? "Las Vegas";
  const alt = `${heading} — ${place}, Nevada photo for Dr. Jan Duffy`;
  const avoid = input.avoidSrc;

  for (const rule of HEADING_IMAGE_RULES) {
    if (rule.test.test(heading) && rule.src !== avoid) {
      return { src: rule.src, alt };
    }
  }

  if (input.neighborhoodSlug) {
    const neighborhood = getNeighborhoodImage(input.neighborhoodSlug);
    if (neighborhood.src !== avoid) {
      return { src: neighborhood.src, alt };
    }
  }

  const pool = Object.values(PAGE_HERO_IMAGES)
    .map((image) => image.src)
    .filter((src) => src !== avoid);
  const fallback = input.fallbackSrc ?? PAGE_HERO_IMAGES.listings.src;
  const src = pool.length > 0 ? pickFromPool(heading, pool) : fallback;

  return { src, alt };
}

/** Cloudflare Images custom id for a git-backed public path. */
export function cloudflareImageId(src: string): string {
  return src
    .replace(/^\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/\//g, "-");
}
