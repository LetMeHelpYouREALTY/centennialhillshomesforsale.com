import { describe, expect, it } from "vitest";
import { withShareImage } from "./page-seo";

describe("withShareImage", () => {
  it("puts the page hero on Open Graph and Twitter cards", () => {
    const metadata = withShareImage(
      {
        title: "Centennial Hills Homes for Sale",
        description: "Northwest Las Vegas listings with Dr. Jan Duffy.",
      },
      {
        src: "/images/neighborhoods/centennial-hills.png",
        alt: "Centennial Hills homes",
      },
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
  });

  it("uses an absolute title object for Open Graph", () => {
    const metadata = withShareImage(
      {
        title: { absolute: "Centennial Hills Homes for Sale | Dr. Jan Duffy" },
        description: "Northwest Las Vegas listings.",
      },
      {
        src: "/images/neighborhoods/centennial-hills.png",
        alt: "Centennial Hills homes",
      },
    );
    expect(metadata.openGraph?.title).toBe(
      "Centennial Hills Homes for Sale | Dr. Jan Duffy",
    );
  });
});
