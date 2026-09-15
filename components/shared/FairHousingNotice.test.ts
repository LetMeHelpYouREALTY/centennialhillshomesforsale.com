import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("Fair Housing sentence link", () => {
  it("keeps a visible focus ring without a 44px target on the inline link", () => {
    const src = readFileSync(resolve(here, "FairHousingNotice.tsx"), "utf8");
    expect(src).toContain("focus-visible:ring-2");
    expect(src).toContain("focus-visible:ring-white");
    expect(src).toContain("focus-visible:ring-blue-600");
    expect(src).not.toContain("min-h-11");
  });
});
