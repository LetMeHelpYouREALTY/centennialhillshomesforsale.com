import { describe, expect, it } from "vitest";
import { INDEXABLE_PATHS } from "./indexable-paths";
import { LEGACY_PATHS } from "./gsc-legacy-redirects.js";

describe("indexable paths", () => {
  it("never lists a GSC redirect source as a sitemap URL", () => {
    const redirectSources = new Set(LEGACY_PATHS.map(([from]: [string, string]) => from));
    for (const page of INDEXABLE_PATHS) {
      expect(redirectSources.has(page.path)).toBe(false);
    }
  });

  it("includes the GSC query landing pages", () => {
    const paths = new Set(INDEXABLE_PATHS.map((page) => page.path));
    expect(paths.has("/neighborhoods/centennial-hills")).toBe(true);
    expect(paths.has("/neighborhoods/inspirada")).toBe(true);
    expect(paths.has("/neighborhoods/groves-at-inspirada")).toBe(true);
    expect(paths.has("/neighborhoods/tournament-hills")).toBe(true);
    expect(paths.has("/neighborhoods/89144")).toBe(true);
    expect(paths.has("/neighborhoods/89138")).toBe(true);
  });
});
