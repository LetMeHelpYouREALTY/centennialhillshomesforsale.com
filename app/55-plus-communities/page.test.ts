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
  });
});
