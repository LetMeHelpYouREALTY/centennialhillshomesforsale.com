import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("site breadcrumbs landmark", () => {
  it("exposes a stable id so the mobile menu can inert the trail", () => {
    const src = readFileSync(resolve(here, "SiteBreadcrumbs.tsx"), "utf8");
    expect(src).toContain('id="site-breadcrumbs"');
    expect(src).toContain("breadcrumbsForPath");
  });
});
