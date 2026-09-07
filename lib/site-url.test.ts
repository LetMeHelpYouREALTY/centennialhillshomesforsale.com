import { describe, expect, it } from "vitest";
import {
  canonicalHostFromHeader,
  getPublicSiteUrl,
  normalizePathname,
} from "./site-url";

describe("canonicalHostFromHeader", () => {
  it("forces www on this Search Console property", () => {
    expect(canonicalHostFromHeader("centennialhillshomesforsale.com")).toBe(
      "www.centennialhillshomesforsale.com",
    );
    expect(canonicalHostFromHeader("www.centennialhillshomesforsale.com")).toBe(
      "www.centennialhillshomesforsale.com",
    );
  });

  it("strips a port and defaults empty hosts to this property", () => {
    expect(canonicalHostFromHeader("centennialhillshomesforsale.com:443")).toBe(
      "www.centennialhillshomesforsale.com",
    );
    expect(canonicalHostFromHeader("")).toBe(
      "www.centennialhillshomesforsale.com",
    );
  });
});

describe("normalizePathname", () => {
  it("drops trailing slashes except for home", () => {
    expect(normalizePathname("/")).toBe("/");
    expect(normalizePathname("/neighborhoods/centennial-hills/")).toBe(
      "/neighborhoods/centennial-hills",
    );
  });
});

describe("getPublicSiteUrl", () => {
  it("defaults to the https www origin for this property", () => {
    expect(getPublicSiteUrl()).toBe(
      "https://www.centennialhillshomesforsale.com",
    );
  });
});
