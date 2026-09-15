import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("fair housing statement", () => {
  it("puts phone and email on the metadata and closing CTA", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("(702) 222-1964");
    expect(src).toContain("homes@heyberkshire.com");
    expect(src).toContain("text-pretty");
  });
});
