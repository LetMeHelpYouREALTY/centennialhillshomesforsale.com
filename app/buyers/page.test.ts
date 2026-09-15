import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("buyers hub", () => {
  it("links Centennial Hills, 89138, Siena, and the 55+ hub", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain('slug: "centennial-hills"');
    expect(src).toContain('slug: "89138"');
    expect(src).toContain('href: "/55-plus-communities/siena"');
    expect(src).toContain('href="/55-plus-communities"');
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain('source="buyers-hub-mid"');
    expect(src).toContain("HubConversionLinks");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).not.toContain("She'll help you match");
    expect(src).not.toContain("exactly what you're buying");
    expect(src).not.toContain("text-blue-200");
    expect(src).not.toContain("Dr. Jan can introduce");
    expect(src).not.toContain("register her");
    expect(src).not.toContain("Dr. Jan has served");
    expect(src).toContain("I match the file, not a buyer-type slogan");
    expect(src).toContain("I match the street to those priorities");
    expect(src).toContain("I help California buyers");
    expect(src).not.toContain("Dr. Jan Duffy matches the file");
    expect(src).not.toContain("Dr. Jan matches the street");
    expect(src).not.toContain("Dr. Jan helps California");
  });
});
