import { describe, expect, it } from "vitest";
import { DEFAULT_CONFIG, DOMAIN_CONFIGS } from "./domain-config";

describe("multi-domain landing copy", () => {
  const blob = `${JSON.stringify(DOMAIN_CONFIGS)}\n${JSON.stringify(DEFAULT_CONFIG)}`;

  it("does not claim omniscience, expert ranking, or beauty slogans", () => {
    expect(blob).not.toMatch(/I know every/i);
    expect(blob).not.toMatch(/Work With the Expert/i);
    expect(blob).not.toMatch(/beautiful Las Vegas neighborhood/i);
    expect(blob).not.toMatch(/inside and out/i);
    expect(blob).not.toMatch(/ctaBadge":"[^"]*Expert"/);
    expect(blob).not.toMatch(/ctaBadge":"[^"]*Specialist"/);
  });
});
