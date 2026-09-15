import { describe, expect, it } from "vitest";
import { officeInfo } from "./site-config";
import {
  businessInfo,
  gbpDescription,
  gbpFAQs,
  generateLocalBusinessSchema,
} from "./gbp-schema";
import { OFFICE_NAP } from "./contact";

describe("GBP schema NAP and Maps alignment", () => {
  it("uses the same geo pin as officeInfo", () => {
    expect(businessInfo.geo.latitude).toBe(officeInfo.coordinates.lat);
    expect(businessInfo.geo.longitude).toBe(officeInfo.coordinates.lng);
  });

  it("includes hasMap and office photos for Google Maps support", () => {
    const schema = generateLocalBusinessSchema();
    expect(schema.hasMap).toBe(OFFICE_NAP.mapsUrl);
    expect(schema.image).toEqual(
      expect.arrayContaining([
        expect.stringContaining("/images/agent/dr-jan-duffy.png"),
        expect.stringContaining("/images/gbp/office-lake-mead.png"),
      ]),
    );
    expect(schema.sameAs).toEqual(
      expect.arrayContaining([OFFICE_NAP.mapsUrl, OFFICE_NAP.reviewsUrl]),
    );
    expect(schema).not.toHaveProperty("aggregateRating");
  });

  it("uses 2008 as the public practice year and verified social profiles only", () => {
    expect(businessInfo.foundingDate).toBe("2008");
    expect(generateLocalBusinessSchema().foundingDate).toBe("2008");
    expect(businessInfo.socialProfiles).toEqual(
      expect.arrayContaining([
        "https://www.facebook.com/drjanduffy",
        "https://www.instagram.com/drjanduffy",
        "https://www.linkedin.com/in/drjanduffy",
      ]),
    );
    expect(JSON.stringify(businessInfo.socialProfiles)).not.toContain(
      "youtube",
    );
    expect(JSON.stringify(businessInfo.socialProfiles)).not.toContain(
      "twitter.com",
    );
  });

  it("does not invent closed volume or a star rating in the GBP about copy", () => {
    const about = `${gbpDescription.whoWeAre}\n${gbpDescription.whatWeDo}`;
    expect(about).not.toMatch(/\$127/);
    expect(about).not.toMatch(/4\.9/);
    expect(about).not.toMatch(/California family/);
  });

  it("does not sell a free-consult product or a veterans slogan", () => {
    const copy = `${gbpDescription.whoWeAre}\n${gbpDescription.whatWeDo}\n${gbpDescription.whereWeServe}`;
    expect(copy).not.toMatch(/free consultation/i);
    expect(copy).not.toMatch(/honest advice/i);
    expect(
      businessInfo.services.map((s) => s.description).join("\n"),
    ).not.toMatch(/Specialized service for veterans/i);
    expect(businessInfo.attributes.offerings.join("\n")).not.toMatch(
      /Free consultation/i,
    );
  });

  it("keeps GBP FAQs free of unverified marketing slogans", () => {
    const answers = gbpFAQs.map((faq) => faq.answer).join("\n");
    expect(answers).not.toMatch(/world-class/i);
    expect(answers).not.toMatch(/50,000/);
    expect(answers).not.toMatch(/7,700/);
  });

  it("names Siena, Trilogy, and the office email on a live CMA FAQ", () => {
    const blob = gbpFAQs
      .map((faq) => `${faq.question} ${faq.answer}`)
      .join("\n");
    expect(blob).toContain("Siena");
    expect(blob).toContain("Trilogy");
    expect(blob).toContain("89138");
    expect(blob).toContain("homes@heyberkshire.com");
    expect(blob).toMatch(/live CMA/i);
  });

  it("does not invent identity attributes or a Spanish-language claim", () => {
    expect(businessInfo.attributes.highlights).toEqual([]);
    expect(businessInfo.languages).toEqual(["English"]);
    expect(businessInfo.attributes.serviceOptions).not.toContain(
      "Same-day appointments",
    );
  });

  it("does not use Specialist ranking in GBP service names", () => {
    const names = businessInfo.services
      .map((service) => service.name)
      .join("\n");
    expect(names).not.toMatch(/Specialist/i);
    expect(names).not.toMatch(/Expert/i);
  });

  it("does not sell maintenance-free or full-service ranking copy", () => {
    const blob = JSON.stringify(businessInfo.services);
    expect(blob).not.toMatch(/maintenance-free/i);
    expect(blob).not.toMatch(/Full-service home buying/i);
    expect(
      businessInfo.services.every((service) => service.href.startsWith("/")),
    ).toBe(true);
  });
});
