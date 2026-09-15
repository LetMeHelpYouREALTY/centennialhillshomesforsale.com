import { describe, expect, it } from "vitest";
import { generateRealEstateAgentSchema } from "./schema";
import { SOCIAL_PROFILES } from "./contact";

describe("RealEstateAgent JSON-LD", () => {
  const schema = generateRealEstateAgentSchema();

  it("uses Google LocalBusiness $$ priceRange instead of an invented listing band", () => {
    expect(schema.priceRange).toBe("$$");
  });

  it("lists verified social profiles only", () => {
    expect(schema.sameAs).toEqual(
      expect.arrayContaining([
        SOCIAL_PROFILES.facebook,
        SOCIAL_PROFILES.instagram,
        SOCIAL_PROFILES.linkedin,
      ]),
    );
    expect(JSON.stringify(schema.sameAs)).not.toContain("tiktok");
  });
});
