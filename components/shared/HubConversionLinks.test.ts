import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("HubConversionLinks", () => {
  it("names first-time, relocation, and CMA with min-h-11 targets", () => {
    const src = readFileSync(resolve(here, "HubConversionLinks.tsx"), "utf8");
    expect(src).toContain("/buyers/first-time-buyers");
    expect(src).toContain("/buyers/california-relocator");
    expect(src).toContain("/relocation");
    expect(src).toContain("/home-valuation");
    expect(src).toContain("First-Time Las Vegas Buyers");
    expect(src).toContain("California to Las Vegas");
    expect(src).toContain("min-h-11");
    expect(src).toContain("focus-visible:ring-2");
    expect(src).toContain(
      'aria-label="First-time buyer, California relocator, relocation, and CMA pages"',
    );
  });
});
