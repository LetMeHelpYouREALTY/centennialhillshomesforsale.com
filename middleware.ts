import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const FORCE_WWW_APEX = new Set([
  "centennialhillshomesforsale.com",
  "heyberkshire.com",
]);

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  if (FORCE_WWW_APEX.has(hostname)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = `www.${hostname}`;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  response.headers.set("x-domain", hostname);
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
