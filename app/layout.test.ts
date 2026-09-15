import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("root layout landmark", () => {
  it("uses a single main landmark as the skip-link target", () => {
    const src = readFileSync(resolve(here, "layout.tsx"), "utf8");
    expect(src).toContain('<main id="main-content"');
    expect(src).toContain("SkipLink");
    expect(src).not.toContain('<div id="main-content"');
  });

  it("keeps the skip-link href on the main landmark", () => {
    const skip = readFileSync(
      resolve(here, "../components/shared/SkipLink.tsx"),
      "utf8",
    );
    expect(skip).toContain('href="#main-content"');
  });
});
