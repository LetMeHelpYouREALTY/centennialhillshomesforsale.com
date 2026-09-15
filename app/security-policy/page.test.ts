import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));

describe("security policy", () => {
  it("keeps the disclosure mailbox and uses the client mailto constant", () => {
    const src = readFileSync(resolve(here, "page.tsx"), "utf8");
    expect(src).toContain("security@heyberkshire.com");
    expect(src).toContain(
      "Report vulnerabilities to security@heyberkshire.com",
    );
    expect(src).toContain("AGENT_EMAIL_MAILTO");
    expect(src).not.toContain("mailto:${AGENT_EMAIL}");
    expect(src).not.toMatch(/text-gray-/);
  });
});
