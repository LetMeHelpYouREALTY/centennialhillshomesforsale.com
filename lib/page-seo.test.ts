import { describe, expect, it, vi } from "vitest";
import {
  clipSerpDescription,
  SERP_DESCRIPTION_MAX,
  titleWithoutLayoutSuffix,
  withShareImage,
} from "./page-seo";

vi.mock("next/headers", () => ({
  headers: () => ({
    get: (key: string) => {
      if (key === "x-pathname") return "/home-valuation";
      if (key === "host" || key === "x-domain") {
        return "www.heyberkshire.com";
      }
      return null;
    },
  }),
}));

const hero = {
  src: "/images/neighborhoods/centennial-hills.png",
  alt: "Centennial Hills homes",
};

describe("withShareImage", () => {
  it("puts the page hero on Open Graph and Twitter cards", () => {
    const metadata = withShareImage(
      {
        title: "Centennial Hills Homes for Sale",
        description: "Northwest Las Vegas listings with Dr. Jan Duffy.",
      },
      hero,
    );

    expect(metadata.openGraph?.images).toEqual([
      {
        url: "/images/neighborhoods/centennial-hills.png",
        width: 1200,
        height: 630,
        alt: "Centennial Hills homes",
      },
    ]);
    expect(metadata.twitter?.images).toEqual([
      "/images/neighborhoods/centennial-hills.png",
    ]);
    expect(metadata.description).toContain("homes@heyberkshire.com");
    expect(metadata.description).toContain("(702) 222-1964");
    expect(metadata.title).toBe("Centennial Hills Homes for Sale");
    expect(metadata.openGraph?.title).toBe(
      "Centennial Hills Homes for Sale | Dr. Jan Duffy",
    );
    expect(metadata.twitter?.title).toBe(
      "Centennial Hills Homes for Sale | Dr. Jan Duffy",
    );
    expect(metadata.openGraph?.url).toBe(
      "https://www.heyberkshire.com/home-valuation",
    );
    expect(metadata.openGraph?.siteName).toBe(
      "Berkshire Hathaway HomeServices Nevada Properties",
    );
    expect(metadata.alternates?.canonical).toBe(
      "https://www.heyberkshire.com/home-valuation",
    );
  });

  it("uses an absolute title object for Open Graph", () => {
    const metadata = withShareImage(
      {
        title: { absolute: "Centennial Hills Homes for Sale | Dr. Jan Duffy" },
        description: "Northwest Las Vegas listings.",
      },
      hero,
    );
    expect(metadata.openGraph?.title).toBe(
      "Centennial Hills Homes for Sale | Dr. Jan Duffy",
    );
    expect(metadata.title).toEqual({
      absolute: "Centennial Hills Homes for Sale | Dr. Jan Duffy",
    });
  });

  it("makes branded string titles absolute so the layout template does not duplicate", () => {
    const metadata = withShareImage(
      {
        title: "Las Vegas Home Valuation | CMA with Dr. Jan Duffy",
        description: "Request a CMA.",
      },
      hero,
    );
    expect(metadata.title).toEqual({
      absolute: "Las Vegas Home Valuation | CMA with Dr. Jan Duffy",
    });
    expect(metadata.openGraph?.title).toBe(
      "Las Vegas Home Valuation | CMA with Dr. Jan Duffy",
    );
  });

  it("clips long descriptions to SERP length and keeps the client line", () => {
    const metadata = withShareImage(
      {
        title:
          "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
        description:
          "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Schedule an appointment, get directions, call (702) 222-1964, or email homes@heyberkshire.com. Las Vegas, Henderson, Summerlin.",
      },
      hero,
    );
    expect(metadata.description?.length).toBeLessThanOrEqual(
      SERP_DESCRIPTION_MAX,
    );
    expect(metadata.description).toContain("(702) 222-1964");
    expect(metadata.description).toContain("homes@heyberkshire.com");
    expect(metadata.description).not.toMatch(/\bget\.\s*Call/);
    expect(metadata.description).toContain("appointment");
    expect(metadata.openGraph?.description).toBe(metadata.description);
  });
});

describe("clipSerpDescription", () => {
  it("leaves a short description unchanged", () => {
    const short =
      "Request a CMA. Call (702) 222-1964 or email homes@heyberkshire.com.";
    expect(clipSerpDescription(short)).toBe(short);
  });

  it("keeps phone and email when clipping a long homepage description", () => {
    const long =
      "Centennial Hills homes for sale in northwest Las Vegas (89149, 89131, 89143). Search current listings with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.";
    const clipped = clipSerpDescription(long);
    expect(clipped.length).toBeLessThanOrEqual(SERP_DESCRIPTION_MAX);
    expect(clipped.length).toBeLessThan(long.length);
    expect(clipped).toContain("(702) 222-1964");
    expect(clipped).toContain("homes@heyberkshire.com");
    expect(clipped).toContain("Centennial Hills");
    expect(clipped).not.toMatch(/\bwith\.\s*Call/);
    expect(clipped).toContain("listings");
  });

  it("does not chop the brokerage name or leave a two-word trailing clause", () => {
    const fairHousing = clipSerpDescription(
      "Equal Housing Opportunity statement for Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties. I provide real estate services without discrimination. Call (702) 222-1964 or email homes@heyberkshire.com.",
    );
    expect(fairHousing.length).toBeLessThanOrEqual(SERP_DESCRIPTION_MAX);
    expect(fairHousing).toContain("(702) 222-1964");
    expect(fairHousing).not.toMatch(/HomeServices Nevada\./);
    expect(fairHousing).toContain("Equal Housing Opportunity");

    const buyers = clipSerpDescription(
      "Buy a Las Vegas or Henderson home with Dr. Jan Duffy, BHHS Nevada Properties. Written buyer-broker agreement and live MLS. Call (702) 222-1964 or email homes@heyberkshire.com.",
    );
    expect(buyers.length).toBeLessThanOrEqual(SERP_DESCRIPTION_MAX);
    expect(buyers).not.toMatch(/buyer-broker\./);
    expect(buyers).toContain("Las Vegas");

    const marketUpdate = clipSerpDescription(
      "Current Las Vegas and Henderson listing medians dated September 14, 2026. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
    );
    expect(marketUpdate.length).toBeLessThanOrEqual(SERP_DESCRIPTION_MAX);
    expect(marketUpdate).not.toMatch(/BHHS Nevada\./);
    expect(marketUpdate).toContain("September 14, 2026");
  });
});

describe("titleWithoutLayoutSuffix", () => {
  it("leaves a short title as a string for the layout template", () => {
    expect(
      titleWithoutLayoutSuffix("89138 Homes for Sale | Summerlin West"),
    ).toBe("89138 Homes for Sale | Summerlin West");
  });

  it("does not wrap an already-absolute title", () => {
    expect(
      titleWithoutLayoutSuffix({
        absolute:
          "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
      }),
    ).toEqual({
      absolute:
        "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
    });
  });
});
