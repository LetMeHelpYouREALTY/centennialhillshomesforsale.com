import { describe, expect, it } from "vitest";
import { titleWithoutLayoutSuffix, withShareImage } from "./page-seo";

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
