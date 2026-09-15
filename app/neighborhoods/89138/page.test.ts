import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("89138 ZIP guide", () => {
  it("uses the Summerlin West listing median, not Summerlin South", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("LISTING_MEDIANS_USD.summerlinWest");
    expect(src).not.toContain("summerlinSouth");
    expect(src).toContain("HOA, SID, and the CMA");
  });
});
