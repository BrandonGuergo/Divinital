import { NextResponse, type NextRequest } from "next/server";

import { ventures } from "@/config/ventures";

const domainToPath = new Map<string, string>();
for (const venture of ventures) {
  for (const domain of venture.splashDomains) {
    domainToPath.set(domain, venture.path);
  }
}

/**
 * Serves venture splash pages on their own domains from this single
 * deployment: a request to payshroud.com/ is rewritten to /payshroud
 * without changing the visitor's URL. Domains not registered in the
 * ventures config (divinital.com itself) pass through untouched.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const basePath = host ? domainToPath.get(host) : undefined;
  if (!basePath) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (pathname === basePath || pathname.startsWith(`${basePath}/`)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? basePath : `${basePath}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
