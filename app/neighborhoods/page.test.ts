import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("neighborhoods hub", () => {
  it("links the 89138 ZIP guide and names the office email", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain('slug: "89138"');
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("/55-plus-communities");
    expect(src).toContain("Siena");
    expect(src).toContain('source="neighborhoods-hub-mid"');
  });
});
