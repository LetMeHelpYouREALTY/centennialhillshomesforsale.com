import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("sellers hub", () => {
  it("names email on the CMA CTA and links 89138 plus Siena", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("/neighborhoods/89138");
    expect(src).toContain("/55-plus-communities/siena");
    expect(src).toContain("Call or email Dr. Jan Duffy");
    expect(src).not.toContain("leave money on the table");
    expect(src).not.toContain("generate competition and sell");
    expect(src).toContain('source="sellers-hub-mid"');
    expect(src).toContain("HubConversionLinks");
    expect(src).not.toContain("don't have to navigate");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).not.toContain("You'll close with confidence");
    expect(src).not.toContain("She'll mark");
    expect(src).not.toContain("text-blue-200");
    expect(src).not.toContain("Dr. Jan has served");
    expect(src).toContain("I have been serving Las Vegas");
    expect(src).toContain("I manage the file from CMA");
    expect(src).toContain("I walk the house and write");
    expect(src).toContain("I walk through listing-side");
    expect(src).not.toContain("Dr. Jan Duffy has been serving");
    expect(src).not.toContain("Dr. Jan Duffy manages");
    expect(src).not.toContain("Dr. Jan walks");
    expect(src).not.toContain("text-3xl mb-4");
    expect(src).not.toContain("🌴");
    expect(src).not.toContain("⚖️");
  });
});
