import { Container } from "@divinital/ui/components/container";
import Link from "next/link";

const navigation = [
  { label: "Ventures", href: "/ventures" },
  { label: "About", href: "/about" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <span className="size-2.5 rounded-sm bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_var(--accent)] transition-transform group-hover:rotate-45" />
          <span className="text-base font-semibold tracking-tight">Divinital</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
