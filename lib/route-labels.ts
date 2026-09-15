export type Crumb = {
  name: string;
  href: string;
};

const SEGMENT_LABELS: Record<string, string> = {
  about: "About",
  contact: "Contact",
  listings: "Properties",
  neighborhoods: "Neighborhoods",
  buyers: "Buyers",
  sellers: "Sellers",
  services: "Services",
  faq: "FAQ",
  "fair-housing": "Fair Housing",
  "security-policy": "Security Policy",
  "why-berkshire-hathaway": "Why Berkshire Hathaway",
  "market-report": "Market Report",
  "market-update": "Market Update",
  "market-insights": "Market Insights",
  "google-business": "Google Business Profile",
  "luxury-homes": "Luxury Homes",
  "new-construction": "New Construction",
  "investment-properties": "Investment Properties",
  relocation: "Relocation",
  "home-valuation": "Home Valuation",
  "california-relocator": "California Relocators",
  "first-time-buyers": "First-Time Buyers",
  "luxury-homes-las-vegas": "Luxury Las Vegas Homes",
  "move-up": "Move-Up Sellers",
  downsizing: "Downsizing",
  "divorce-probate": "Divorce & Probate",
  "55-plus-communities": "55+ Communities",
  "sun-city-summerlin": "Sun City Summerlin",
  "sun-city-anthem": "Sun City Anthem",
  "sun-city-aliante": "Sun City Aliante",
  "del-webb-lake-las-vegas": "Del Webb Lake Las Vegas",
  "heritage-stonebridge": "Heritage at Stonebridge",
  "trilogy-summerlin": "Trilogy Summerlin",
  "solera-anthem": "Solera at Anthem",
  siena: "Siena",
  "centennial-hills": "Centennial Hills",
  summerlin: "Summerlin",
  "summerlin-west": "Summerlin West",
  "tournament-hills": "Tournament Hills",
  "89144": "89144",
  "89138": "89138",
  inspirada: "Inspirada",
  "groves-at-inspirada": "Groves at Inspirada",
  henderson: "Henderson",
  "green-valley": "Green Valley",
  "the-ridges": "The Ridges",
  "southern-highlands": "Southern Highlands",
  "north-las-vegas": "North Las Vegas",
  "skye-canyon": "Skye Canyon",
  "mountains-edge": "Mountain's Edge",
  "lone-mountain": "Lone Mountain",
  "red-rock-country-club": "Red Rock Country Club",
};

function humanizeSegment(segment: string): string {
  if (SEGMENT_LABELS[segment]) {
    return SEGMENT_LABELS[segment];
  }
  if (/^\d+$/.test(segment)) {
    return segment;
  }
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Build visible + schema breadcrumbs from a request pathname. */
export function breadcrumbsForPath(pathname: string): Crumb[] {
  const clean = pathname.split("?")[0]?.replace(/\/+$/, "") || "/";
  if (clean === "/" || clean === "") {
    return [];
  }

  const parts = clean.split("/").filter(Boolean);
  const items: Crumb[] = [{ name: "Home", href: "/" }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    items.push({
      name: humanizeSegment(part),
      href: acc,
    });
  }
  return items;
}
