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
    expect(src).toContain("AGENT_EMAIL");
    expect(src).toContain("89138");
    expect(src).toContain("Siena");
    expect(src).toContain("text-pretty");
    expect(src).toContain("CTA_TEL");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).toContain("headingId");
    expect(src).toContain("aria-labelledby={headingId}");
    expect(src).toContain("SectionPhoto");
    expect(src).toContain("Current Las Vegas Listings");
  });
});
