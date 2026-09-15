import { describe, expect, it } from "vitest";
import {
  generateAggregateRatingSchema,
  generateRealEstateAgentSchema,
  generateReviewSchema,
  generateSeniorCommunitySchema,
  generateWebSiteSchema,
} from "./schema";
import { SOCIAL_PROFILES } from "./contact";

describe("RealEstateAgent JSON-LD", () => {
  const schema = generateRealEstateAgentSchema();

  it("does not invent an AggregateRating without a live GBP pull", () => {
    expect(schema).not.toHaveProperty("aggregateRating");
  });

  it("does not sell Expert ranking in sitewide JSON-LD copy", () => {
    expect(String(schema.description)).not.toMatch(/Expert real estate/i);
    expect(String(schema.description)).not.toMatch(/your trusted/i);
    expect(String(schema.slogan)).not.toMatch(/expert/i);
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

describe("WebSite SearchAction", () => {
  it("points Google sitelinks search at the listings page query", () => {
    const schema = generateWebSiteSchema();
    const action = schema.potentialAction as {
      target: { urlTemplate: string };
    };
    expect(action.target.urlTemplate).toContain(
      "/listings?q={search_term_string}",
    );
  });

  it("refuses AggregateRating without a live review count", () => {
    expect(() => generateAggregateRatingSchema(4.9, 0)).toThrow(
      /live GBP pull/,
    );
  });
});

describe("SeniorCommunity schema", () => {
  it("omits invented home counts and pet policies", () => {
    const schema = generateSeniorCommunitySchema({
      name: "Solera at Anthem",
      description: "Henderson 55+ HOPA campus",
      priceRange: "Confirm with live CMA",
      amenities: [{ name: "Guard-gated entry" }],
    });
    expect(schema).not.toHaveProperty("numberOfAccommodationUnits");
    expect(schema).not.toHaveProperty("petsAllowed");
  });

  it("emits a home count only when provided", () => {
    const schema = generateSeniorCommunitySchema({
      name: "Sun City Summerlin",
      description: "Del Webb 55+ in ZIP 89134",
      priceRange: "Confirm with live CMA",
      numberOfHomes: 7700,
      amenities: [],
    });
    expect(schema.numberOfAccommodationUnits).toBe(7700);
  });
});
