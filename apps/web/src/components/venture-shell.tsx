import { Container } from "@divinital/ui/components/container";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import type { Venture } from "@/config/ventures";

/**
 * Resolves the "back to Divinital" target for a venture splash.
 *
 * Ventures with their own domain (e.g. payshroud.com) are reachable there via
 * middleware, so their splash must link back with an absolute URL. Ventures
 * that only live under the company site (e.g. divinital.com/intralocutor) use a
 * relative link, which also keeps the return path working in local dev.
 */
function divinitalHref(venture: Venture): string {
  return venture.splashDomains.length > 0 ? siteConfig.url : "/";
}

/**
 * Shared chrome for venture splash pages: scopes the venture's brand tokens
 * via data-theme and frames the page with a minimal header and footer that
 * always offer a clear path back to the parent company.
 */
export function VentureShell({
  venture,
  children,
}: Readonly<{ venture: Venture; children: React.ReactNode }>) {
  const homeHref = divinitalHref(venture);

  return (
    <div
      data-theme={venture.theme}
      className="flex min-h-svh flex-col bg-background text-foreground"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <header className="venture-header">
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href={homeHref}
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--header-border)] px-3 py-1.5 text-sm text-[color:var(--header-muted)] transition-colors hover:border-[color:var(--header-fg)] hover:text-[color:var(--header-fg)]"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Divinital
          </a>
          <span
            className={`inline-flex items-center gap-2.5 text-[color:var(--header-fg)] ${
              venture.wordmarkSerif
                ? "font-serif text-lg tracking-tight"
                : "text-base font-semibold tracking-tight"
            }`}
          >
            {venture.logo ? (
              <Image
                src={venture.logo}
                alt=""
                aria-hidden="true"
                width={44}
                height={44}
                className="size-11"
              />
            ) : null}
            {venture.name}
          </span>
        </Container>
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border/60 py-8">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Divinital. All rights reserved.
          </p>
          <a
            href={homeHref}
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Divinital
          </a>
        </Container>
      </footer>
    </div>
  );
}
