import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  PAGE_HERO_IMAGES,
  cloudflareImageId,
  getNeighborhoodImage,
  OFFICE_PHOTO_PATH,
  resolveSectionImage,
} from "./site-images";

describe("site images catalog", () => {
  it("maps Cloudflare custom ids from git paths", () => {
    expect(cloudflareImageId("/images/hero/buyers.png")).toBe(
      "images-hero-buyers",
    );
  });

  it("keeps office and neighborhood files in git as the backup", () => {
    const root = path.join(__dirname, "..", "public");
    const fromPublic = (src: string) => path.join(root, src.replace(/^\//, ""));
    expect(existsSync(fromPublic(OFFICE_PHOTO_PATH))).toBe(true);
    expect(
      existsSync(fromPublic(getNeighborhoodImage("skye-canyon").src)),
    ).toBe(true);
    expect(existsSync(fromPublic(PAGE_HERO_IMAGES.firstTimeBuyers.src))).toBe(
      true,
    );
  });

  it("gives distinct hero files to communities that share a master plan", () => {
    const uniqueSlugs = [
      "summerlin-west",
      "89138",
      "lone-mountain",
      "groves-at-inspirada",
      "trilogy-summerlin",
      "solera-anthem",
      "sun-city-anthem",
      "sun-city-aliante",
    ];
    const srcs = uniqueSlugs.map((slug) => getNeighborhoodImage(slug).src);
    expect(new Set(srcs).size).toBe(uniqueSlugs.length);
    const root = path.join(__dirname, "..", "public");
    for (const src of srcs) {
      expect(existsSync(path.join(root, src.replace(/^\//, "")))).toBe(true);
    }
  });

  it("resolves heading-matched section photos without repeating the page hero", () => {
    const golf = resolveSectionImage({
      heading: "Golf course lots and TPC access",
      neighborhoodName: "Red Rock Country Club",
    });
    expect(golf.src).toBe("/images/neighborhoods/red-rock-country-club.png");
    expect(golf.alt).toContain("Golf course lots and TPC access");
    expect(golf.alt).toContain("Red Rock Country Club");

    const commute = resolveSectionImage({
      heading: "Sample drive times from Centennial Hills",
      neighborhoodName: "Centennial Hills",
      neighborhoodSlug: "centennial-hills",
      avoidSrc: "/images/neighborhoods/centennial-hills.png",
    });
    expect(commute.src).toBe(PAGE_HERO_IMAGES.relocation.src);
    expect(commute.src).not.toBe("/images/neighborhoods/centennial-hills.png");
    expect(commute.alt).toContain("Sample drive times from Centennial Hills");

    const siena = resolveSectionImage({
      heading: "Siena occupancy and the HOA packet",
      neighborhoodName: "Siena",
      neighborhoodSlug: "siena",
    });
    expect(siena.src).toBe(PAGE_HERO_IMAGES.fiftyFivePlus.src);
    expect(siena.alt).toContain("Siena occupancy");

    const hoa = resolveSectionImage({
      heading: "HOA packet before the gate",
      neighborhoodName: "Siena",
    });
    expect(hoa.src).toBe("/images/gbp/visit-office.png");

    const pool = resolveSectionImage({
      heading: "Pool and spa lots on the resale market",
      neighborhoodName: "Summerlin",
    });
    expect(pool.src).toBe(PAGE_HERO_IMAGES.sellers.src);

    const inspection = resolveSectionImage({
      heading: "Due diligence and inspections",
      neighborhoodName: "Las Vegas",
    });
    expect(inspection.src).toBe(PAGE_HERO_IMAGES.homeValuation.src);

    const closing = resolveSectionImage({
      heading: "Closing and escrow at the title company",
      neighborhoodName: "Las Vegas",
    });
    expect(closing.src).toBe(PAGE_HERO_IMAGES.office.src);

    const showing = resolveSectionImage({
      heading: "Showing and open house calendar",
      neighborhoodName: "Summerlin",
    });
    expect(showing.src).toBe(PAGE_HERO_IMAGES.buyers.src);

    const kitchen = resolveSectionImage({
      heading: "Updated kitchen before the listing goes live",
      neighborhoodName: "Henderson",
    });
    expect(kitchen.src).toBe(PAGE_HERO_IMAGES.sellers.src);

    const pricing = resolveSectionImage({
      heading: "Pricing as of September 14, 2026",
      neighborhoodName: "Henderson",
    });
    expect(pricing.src).toBe(PAGE_HERO_IMAGES.market.src);

    const matches = resolveSectionImage({
      heading: "How I send 89138 matches",
      neighborhoodName: "Summerlin West",
    });
    expect(matches.src).toBe(PAGE_HERO_IMAGES.listings.src);

    const occupancy = resolveSectionImage({
      heading: "Occupancy",
      neighborhoodName: "Solera at Anthem",
    });
    expect(occupancy.src).toBe(PAGE_HERO_IMAGES.fiftyFivePlus.src);

    const who = resolveSectionImage({
      heading: "Who I am",
      neighborhoodName: "Las Vegas",
    });
    expect(who.src).toBe(PAGE_HERO_IMAGES.about.src);

    const capRate = resolveSectionImage({
      heading: "1031 exchanges",
      neighborhoodName: "Las Vegas",
    });
    expect(capRate.src).toBe(PAGE_HERO_IMAGES.investment.src);

    const fairHousing = resolveSectionImage({
      heading: "Fair Housing",
      neighborhoodName: "Las Vegas",
    });
    expect(fairHousing.src).toBe("/images/gbp/visit-office.png");

    const skyeCenter = resolveSectionImage({
      heading: "Skye Center vs the house",
      neighborhoodName: "Skye Canyon",
    });
    expect(skyeCenter.src).toBe("/images/neighborhoods/skye-canyon.png");

    const loans = resolveSectionImage({
      heading: "Loan types I coordinate — I do not originate",
      neighborhoodName: "Las Vegas",
    });
    expect(loans.src).toBe(PAGE_HERO_IMAGES.firstTimeBuyers.src);

    const parks = resolveSectionImage({
      heading: "Parks, not one giant clubhouse",
      neighborhoodName: "Inspirada",
    });
    expect(parks.src).toBe("/images/neighborhoods/summerlin.png");

    const inbound = resolveSectionImage({
      heading: "Inbound: pick a map, not a nickname",
      neighborhoodName: "Las Vegas",
    });
    expect(inbound.src).toBe(PAGE_HERO_IMAGES.relocation.src);

    const tournament = resolveSectionImage({
      heading: "What buyers actually get in Tournament Hills",
      neighborhoodName: "Tournament Hills",
    });
    expect(tournament.src).toBe("/images/neighborhoods/tournament-hills.png");

    const willAndWillNot = resolveSectionImage({
      heading: "What I will and will not do",
      neighborhoodName: "Las Vegas",
    });
    expect(willAndWillNot.src).toBe(PAGE_HERO_IMAGES.office.src);

    const mls = resolveSectionImage({
      heading: "Search live MLS",
      neighborhoodName: "Siena",
      avoidSrc: PAGE_HERO_IMAGES.fiftyFivePlus.src,
    });
    expect(mls.src).toBe(PAGE_HERO_IMAGES.listings.src);

    const mlsSiena = resolveSectionImage({
      heading: "Search live MLS in Siena",
      neighborhoodName: "Siena",
      avoidSrc: PAGE_HERO_IMAGES.fiftyFivePlus.src,
    });
    expect(mlsSiena.src).toBe(PAGE_HERO_IMAGES.listings.src);

    const howIWork = resolveSectionImage({
      heading: "How I work 55+ files",
      neighborhoodName: "Las Vegas",
      avoidSrc: PAGE_HERO_IMAGES.fiftyFivePlus.src,
    });
    expect(howIWork.src).toBe(PAGE_HERO_IMAGES.about.src);

    const hours = resolveSectionImage({
      heading: "Business Hours",
      neighborhoodName: "Las Vegas",
      avoidSrc: PAGE_HERO_IMAGES.googleBusiness.src,
    });
    expect(hours.src).toBe("/images/gbp/visit-office.png");

    const reviews = resolveSectionImage({
      heading: "Read the Google reviews",
      neighborhoodName: "Las Vegas",
    });
    expect(reviews.src).toBe(PAGE_HERO_IMAGES.googleBusiness.src);

    const villages = resolveSectionImage({
      heading: "How these villages actually differ",
      neighborhoodName: "Las Vegas",
      avoidSrc: PAGE_HERO_IMAGES.market.src,
    });
    expect(villages.src).toBe(PAGE_HERO_IMAGES.homepage.src);

    const root = path.join(__dirname, "..", "public");
    expect(existsSync(path.join(root, golf.src.replace(/^\//, "")))).toBe(true);
    expect(existsSync(path.join(root, commute.src.replace(/^\//, "")))).toBe(
      true,
    );
    expect(existsSync(path.join(root, siena.src.replace(/^\//, "")))).toBe(
      true,
    );
  });
});
