import { describe, expect, it } from "vitest";
import { officeInfo } from "./site-config";
import {
  businessInfo,
  gbpDescription,
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

  it("does not invent closed volume or a star rating in the GBP about copy", () => {
    const about = `${gbpDescription.whoWeAre}\n${gbpDescription.whatWeDo}`;
    expect(about).not.toMatch(/\$127/);
    expect(about).not.toMatch(/4\.9/);
    expect(about).not.toMatch(/California family/);
  });
});
