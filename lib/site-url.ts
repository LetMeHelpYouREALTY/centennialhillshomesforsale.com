/**
 * Canonical origin and URL helpers for Search Console.
 * Always emit https + www for this property so Google sees one host.
 */

import { headers } from "next/headers";

export const DEFAULT_SITE_HOST = "www.centennialhillshomesforsale.com";

const FORCE_WWW = new Set([
  "centennialhillshomesforsale.com",
  "heyberkshire.com",
]);

function stripWww(host: string): string {
  return host.replace(/^www\./i, "").toLowerCase();
}

export function canonicalHostFromHeader(rawHost: string | null | undefined): string {
  const host = (rawHost || DEFAULT_SITE_HOST).split(":")[0].toLowerCase();
  const apex = stripWww(host);
  if (FORCE_WWW.has(apex)) {
    return `www.${apex}`;
  }
  if (apex === "default" || apex === "") {
    return DEFAULT_SITE_HOST;
  }
  return host.startsWith("www.") ? host : host;
}

export function getRequestHost(): string {
  const headerHost = headers().get("x-domain") || headers().get("host") || DEFAULT_SITE_HOST;
  return canonicalHostFromHeader(headerHost);
}

export function getRequestOrigin(): string {
  return `https://${getRequestHost()}`;
}

export function normalizePathname(pathname: string | null | undefined): string {
  if (!pathname || pathname === "/") {
    return "/";
  }
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed || "/";
}

export function getCanonicalUrl(pathname?: string): string {
  const path = normalizePathname(pathname ?? headers().get("x-pathname"));
  const origin = getRequestOrigin();
  return path === "/" ? `${origin}/` : `${origin}${path}`;
}

export function getPublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) {
    return fromEnv;
  }
  return `https://${DEFAULT_SITE_HOST}`;
}
