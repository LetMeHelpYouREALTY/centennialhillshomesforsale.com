import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("google-business hub", () => {
  it("uses the shared mailto constant and links 89138 plus Siena", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).not.toContain("mailto:${businessInfo.email}");
    expect(src).toContain('href: "/neighborhoods/89138"');
    expect(src).toContain('href: "/55-plus-communities/siena"');
    expect(src).toContain("Call or email Dr. Jan Duffy");
  });
});
