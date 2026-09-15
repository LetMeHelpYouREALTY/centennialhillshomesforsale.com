import { describe, expect, it } from "vitest";
import {
  DEFAULT_CONFIG,
  DOMAIN_CONFIGS,
  getDomainConfig,
} from "./domain-config";

describe("multi-domain landing copy", () => {
  const blob = `${JSON.stringify(DOMAIN_CONFIGS)}\n${JSON.stringify(DEFAULT_CONFIG)}`;

  it("does not claim omniscience, expert ranking, or beauty slogans", () => {
    expect(blob).not.toMatch(/I know every/i);
    expect(blob).not.toMatch(/Work With the Expert/i);
    expect(blob).not.toMatch(/beautiful Las Vegas neighborhood/i);
    expect(blob).not.toMatch(/inside and out/i);
    expect(blob).not.toMatch(/ctaBadge":"[^"]*Expert"/);
    expect(blob).not.toMatch(/ctaBadge":"[^"]*Specialist"/);
    expect(blob).not.toMatch(/Awaits/);
    expect(blob).not.toMatch(/Never Miss an Open House/);
    expect(blob).not.toMatch(/updated daily/i);
    expect(blob).not.toMatch(/updated in real time/i);
    expect(blob).not.toMatch(/Private Consultation Available/);
    expect(blob).not.toMatch(/Luxury Living/);
    expect(blob).not.toMatch(/Call for a consult/);
    expect(blob).not.toMatch(/Ready to Buy or Sell\?/);
    expect(blob).not.toMatch(/Find Your /);
  });

  it("puts the client email on fallback domain metadata", () => {
    expect(getDomainConfig("unknown-host.example").description).toContain(
      "homes@heyberkshire.com",
    );
    expect(getDomainConfig("unknown-host.example").description).toContain(
      "(702) 222-1964",
    );
    expect(getDomainConfig("unknown-host.example").heroSubheadline).toContain(
      "homes@heyberkshire.com",
    );
  });
});
