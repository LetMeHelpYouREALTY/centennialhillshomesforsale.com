import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("Red Rock Country Club guide", () => {
  it("uses the Summerlin South listing median as a ZIP sample, not West", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("LISTING_MEDIANS_USD.summerlinSouth");
    expect(src).not.toContain("summerlinWest");
    expect(src).toContain("Commute and daily errands");
  });
});
