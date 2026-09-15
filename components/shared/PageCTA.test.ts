import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("PageCTA contrast", () => {
  it("keeps NAP helper copy on blue-50, not blue-200", () => {
    const src = readFileSync(resolve(here, "PageCTA.tsx"), "utf8");
    expect(src).toContain("text-blue-50");
    expect(src).not.toContain("text-blue-200");
    expect(src).toContain("OFFICE_NAP.reviewsUrl");
  });
});
