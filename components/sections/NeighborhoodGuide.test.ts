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
  });
});
