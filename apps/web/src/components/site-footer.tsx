import { Container } from "@divinital/ui/components/container";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ventures } from "@/config/ventures";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <div className="inline-flex items-center gap-2.5">
            <span className="size-2.5 rounded-sm bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_var(--accent)]" />
            <p className="text-base font-semibold tracking-tight">Divinital</p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            A studio of focused digital ventures.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Crafted with care by{" "}
            <a
              href="https://brandonguergo.com"
              className="font-medium text-foreground underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent"
            >
              Brandon Guergo
            </a>
          </p>
        </div>
        <div className="flex gap-16">
          <nav aria-label="Ventures">
            <p className="text-sm font-medium">Ventures</p>
            <ul className="mt-3 space-y-2">
              {ventures.map((venture) => (
                <li key={venture.slug}>
                  <Link
                    href={venture.productUrl ?? venture.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {venture.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-sm font-medium">Company</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
      <Container className="mt-10">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Divinital. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
