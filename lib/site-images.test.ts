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
    expect(commute.src).not.toBe("/images/neighborhoods/centennial-hills.png");
    expect(commute.alt).toContain("Sample drive times from Centennial Hills");

    const siena = resolveSectionImage({
      heading: "Siena occupancy and the HOA packet",
      neighborhoodName: "Siena",
      neighborhoodSlug: "siena",
    });
    expect(siena.src).toBe(PAGE_HERO_IMAGES.fiftyFivePlus.src);
    expect(siena.alt).toContain("Siena occupancy");

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
