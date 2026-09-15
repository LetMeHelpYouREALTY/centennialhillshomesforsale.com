import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("sitemap lastmod", () => {
  it("uses the sourced market snapshot date instead of the deploy clock", () => {
    const src = readFileSync(resolve(here, "sitemap.ts"), "utf8");
    expect(src).toContain("MARKET_SNAPSHOT_ISO");
    expect(src).toContain("${MARKET_SNAPSHOT_ISO}T12:00:00.000Z");
    expect(src).not.toContain("new Date()");
  });
});
