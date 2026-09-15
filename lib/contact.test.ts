import { describe, expect, it } from "vitest";
import {
  AGENT_EMAIL,
  AGENT_LICENSE,
  CALENDLY_SHOWING_URL,
  CTA_PHONE,
  CTA_TEL,
  FUB_PHONE,
  OFFICE_NAP,
  REALSCOUT_SEARCH_URL,
} from "./contact";

describe("client-facing contact constants", () => {
  it("keeps the public CTA line separate from the FUB line", () => {
    expect(CTA_PHONE).toBe("(702) 222-1964");
    expect(CTA_TEL).toBe("tel:+17022221964");
    expect(FUB_PHONE).toBe("(702) 500-1942");
    expect(CTA_PHONE).not.toBe(FUB_PHONE);
  });

  it("publishes a complete NAP block for GBP alignment", () => {
    expect(OFFICE_NAP.street).toContain("9406 W Lake Mead Blvd");
    expect(OFFICE_NAP.city).toBe("Las Vegas");
    expect(OFFICE_NAP.state).toBe("NV");
    expect(OFFICE_NAP.zip).toBe("89134");
    expect(AGENT_EMAIL).toBe("homes@heyberkshire.com");
    expect(AGENT_LICENSE).toBe("S.0197614.LLC");
  });

  it("uses https for RealScout and Calendly destinations", () => {
    expect(REALSCOUT_SEARCH_URL.startsWith("https://")).toBe(true);
    expect(CALENDLY_SHOWING_URL.startsWith("https://")).toBe(true);
  });
});
