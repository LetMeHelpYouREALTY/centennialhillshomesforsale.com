import { describe, expect, it } from "vitest";
import {
  AGENT_PHOTO_PATH,
  APPLE_ICON_PATH,
  FAVICON_PATH,
  OG_IMAGE_PATH,
} from "./brand-assets";

describe("brand assets", () => {
  it("keeps agent photo and icons on this origin", () => {
    expect(AGENT_PHOTO_PATH).toBe("/images/agent/dr-jan-duffy.png");
    expect(FAVICON_PATH).toBe("/favicon.ico");
    expect(APPLE_ICON_PATH).toBe("/apple-icon.png");
    expect(OG_IMAGE_PATH).toBe("/opengraph-image.png");
  });
});
