import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("NeighborhoodGuide conversion chrome", () => {
  it("exposes MLS search, parent-plan geo, and listings/contact related links", () => {
    const src = readFileSync(resolve(here, "NeighborhoodGuide.tsx"), "utf8");
    expect(src).toContain("MlsSearchForm");
    expect(src).toContain("resolveNeighborhoodGeo");
    expect(src).toContain("mergeGuideRelated");
    expect(src).toContain("mergeGuideFaqs");
    expect(src).toContain("defaultQuery={zipCodes[0]}");
    expect(src).toContain("DEFAULT_GUIDE_RELATED");
    expect(src).toContain("text-pretty");
    expect(src).not.toContain("<main");
    expect(src).toContain('variant="onBrand"');
    expect(src).toContain("text-blue-50");
    expect(src).toContain("-guide-mid");
    expect(src).toContain("MARKET_SNAPSHOT_AS_OF");
    expect(src).toContain("text-slate-300");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("SectionHeading");
    expect(src).toContain("Search live MLS in ${name}");
    expect(src).toContain("avoidSrc={hero.src}");
    expect(src).toContain("imageSrc={section.imageSrc}");
    expect(src).toContain("Frequently asked questions");
    expect(src).toContain("Nearby pages from ${name}");
    expect(src).toContain("photoHeading");
    expect(src).toContain("getRequestPathname");
    expect(src).not.toContain("text-blue-200");
    expect(src).not.toContain("text-slate-500");
  });
});
