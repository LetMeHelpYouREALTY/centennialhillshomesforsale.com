import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("RealScout office listings widget", () => {
  it("does not hard-filter inventory to a $500k–$800k band", () => {
    const src = readFileSync(resolve(here, "RealScoutListings.tsx"), "utf8");
    expect(src).not.toContain('price-min="500000"');
    expect(src).not.toContain('price-max="800000"');
  });
});
