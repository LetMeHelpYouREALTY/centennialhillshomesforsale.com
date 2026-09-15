import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("about page service-area coverage", () => {
  it("links Summerlin ZIPs, Tournament Hills, 55+ hub, and Siena", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain('href: "/neighborhoods/89138"');
    expect(src).toContain('href: "/neighborhoods/89144"');
    expect(src).toContain('href: "/neighborhoods/tournament-hills"');
    expect(src).toContain('href: "/55-plus-communities"');
    expect(src).toContain("Siena");
    expect(src).toContain("89138");
    expect(src).toContain("text-pretty");
    expect(src).toContain("Trilogy");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain('source="about-page-mid"');
    expect(src).not.toContain("Whether you're buying");
    expect(src).toContain("I have served Las Vegas");
    expect(src).not.toContain("She has served");
  });
});
