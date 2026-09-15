import { describe, expect, it } from "vitest";
import { generateRealEstateAgentSchema, generateReviewSchema } from "./schema";
import { SOCIAL_PROFILES } from "./contact";

describe("RealEstateAgent JSON-LD", () => {
  const schema = generateRealEstateAgentSchema();

  it("does not invent an AggregateRating without a live GBP pull", () => {
    expect(schema).not.toHaveProperty("aggregateRating");
  });

  it("uses Google LocalBusiness $$ priceRange instead of an invented listing band", () => {
    expect(schema.priceRange).toBe("$$");
  });

  it("uses 2008 as the public practice year", () => {
    expect(schema.foundingDate).toBe("2008");
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

  it("does not attach an invented AggregateRating to review JSON-LD", () => {
    const reviewSchema = generateReviewSchema([]);
    expect(reviewSchema).not.toHaveProperty("aggregateRating");
  });
});
