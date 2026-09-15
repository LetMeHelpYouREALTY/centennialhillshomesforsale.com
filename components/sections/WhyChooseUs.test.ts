import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("WhyChooseUs homepage section", () => {
  it("names Siena on the 55+ file type and keeps the office email", () => {
    const src = readFileSync(resolve(here, "WhyChooseUs.tsx"), "utf8");
    expect(src).toContain("Siena");
    expect(src).toContain("89138");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).not.toMatch(/national brand behind the contract/i);
    expect(src).toContain("How I actually work a file");
    expect(src).toContain("I answer the client line");
    expect(src).not.toContain("How Dr. Jan Duffy actually works a file");
    expect(src).not.toContain("Dr. Jan Duffy answers the client line");
    expect(src).toContain("/buyers/first-time-buyers");
    expect(src).toContain("First-Time Las Vegas Buyers");
    expect(src).toContain("/relocation");
    expect(src).toContain("Las Vegas Relocation");
    expect(src).toContain("/home-valuation");
    expect(src).toContain("Request a Las Vegas CMA");
  });
});
