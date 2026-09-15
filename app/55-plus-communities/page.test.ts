import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("55+ hub", () => {
  it("names Siena in metadata, JSON-LD, and the agent note", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("Siena");
    expect(src).toContain("Siena Summerlin");
    expect(src).toContain("including Sun City, Siena, Trilogy");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("Siena, Trilogy, Sun City");
    expect(src).toContain('source="55-plus-hub-mid"');
    expect(src).not.toContain("community you're");
    expect(src).toContain("GoogleReviewsCta");
    expect(src).toContain("How I work 55+ files");
    expect(src).toContain("I read the packet with you");
    expect(src).toContain("I provide detailed");
    expect(src).not.toContain("How Dr. Jan Duffy works 55+ files");
    expect(src).not.toContain("Dr. Jan Duffy reads the packet");
    expect(src).not.toContain("Dr. Jan Duffy provides");
  });
});
