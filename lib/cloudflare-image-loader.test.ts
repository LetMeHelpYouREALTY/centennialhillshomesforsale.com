import { describe, expect, it } from "vitest";
import cloudflareImageLoader from "./cloudflare-image-loader";

describe("cloudflare image loader", () => {
  it("passes through absolute remote URLs so Search Central photos are not rewritten", () => {
    expect(
      cloudflareImageLoader({
        src: "https://developers.google.com/static/search/blog/images/social-share-blog.png",
        width: 640,
      }),
    ).toBe(
      "https://developers.google.com/static/search/blog/images/social-share-blog.png",
    );
  });

  it("returns git-backed local paths when Cloudflare Images is off", () => {
    expect(
      cloudflareImageLoader({
        src: "/images/hero/buyers.png",
        width: 640,
      }),
    ).toBe("/images/hero/buyers.png");
  });
});
