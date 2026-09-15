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
    expect(src).toContain("defaultQuery={zipCodes[0]}");
  });
});
