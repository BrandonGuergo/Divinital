import { NextResponse, type NextRequest } from "next/server";

import { ventures } from "@/config/ventures";

const domainToPath = new Map<string, string>();
for (const venture of ventures) {
  for (const domain of venture.splashDomains) {
    domainToPath.set(domain, venture.path);
  }
}

const cottagePolicyPages = new Map([
  ["/support", "/support/index.html"],
  ["/privacy", "/privacy/index.html"],
  ["/terms", "/terms/index.html"],
]);

/**
 * Serves venture splash pages on their own domains from this single
 * deployment: a request to payshroud.com/ is rewritten to /payshroud
 * without changing the visitor's URL. Domains not registered in the
 * ventures config (divinital.com itself) pass through untouched.
 *
 * Cottage's policy pages live as static HTML under /public. Next would
 * otherwise 404 `/support` while serving `/support/index.html`, so those
 * three paths are rewritten here.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const policyPage = cottagePolicyPages.get(pathname.replace(/\/$/, "") || pathname);
  if (policyPage) {
    const url = request.nextUrl.clone();
    url.pathname = policyPage;
    return NextResponse.rewrite(url);
  }

  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const basePath = host ? domainToPath.get(host) : undefined;
  if (!basePath) {
    return NextResponse.next();
  }

  if (pathname === basePath || pathname.startsWith(`${basePath}/`)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? basePath : `${basePath}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|support|privacy|terms|style.css|apple-app-site-association|\\.well-known).*)",
  ],
};
