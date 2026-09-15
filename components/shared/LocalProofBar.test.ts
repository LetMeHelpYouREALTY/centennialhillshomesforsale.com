import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("LocalProofBar contrast", () => {
  it("keeps dark-variant icons on blue-100, not blue-300", () => {
    const src = readFileSync(resolve(here, "LocalProofBar.tsx"), "utf8");
    expect(src).toContain('isDark ? "text-blue-100"');
    expect(src).not.toContain("text-blue-300");
  });
});
