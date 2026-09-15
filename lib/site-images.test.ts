import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  PAGE_HERO_IMAGES,
  cloudflareImageId,
  getNeighborhoodImage,
  OFFICE_PHOTO_PATH,
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
});
