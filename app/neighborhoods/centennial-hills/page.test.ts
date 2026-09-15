import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("Centennial Hills extra section", () => {
  it("pairs the drive-times heading with a photo and table scopes", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("SectionHeading");
    expect(src).toContain("Sample drive times from Centennial Hills");
    expect(src).toContain('scope="col"');
    expect(src).toContain('scope="row"');
    expect(src).not.toContain("<SectionPhoto");
  });
});
