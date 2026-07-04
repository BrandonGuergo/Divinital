import { Button } from "@divinital/ui/components/button";
import { Container } from "@divinital/ui/components/container";
import { Reveal } from "@divinital/ui/components/reveal";
import { Section } from "@divinital/ui/components/section";
import Link from "next/link";

import { GridBackdrop } from "@/components/cyber/grid-backdrop";
import { VentureCard } from "@/components/venture-card";
import { siteConfig } from "@/config/site";
import { ventures } from "@/config/ventures";

const signals = [
  { label: "Ventures", value: String(ventures.length).padStart(2, "0") },
  {
    label: "Live",
    value: String(ventures.filter((venture) => venture.status === "live").length).padStart(2, "0"),
  },
  {
    label: "In development",
    value: String(ventures.filter((venture) => venture.status === "waitlist").length).padStart(
      2,
      "0",
    ),
  },
] as const;

const principles = [
  {
    title: "Craft over volume",
    body: "I build a small number of products and hold each to a high bar. Every venture earns its place by being genuinely useful — not by filling a portfolio.",
  },
  {
    title: "Focused by design",
    body: "Each venture does one thing exceptionally well. No sprawling feature lists, no pivots chasing trends — just sharp tools for real problems.",
  },
  {
    title: "Respect for people",
    body: "Fast pages, honest pricing, and data practices I'd accept as a user myself. Software should serve the person in front of it.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <GridBackdrop />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                Product Studio
              </span>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.03] tracking-tight text-balance sm:text-7xl">
                {" "}
                <span className="bg-gradient-to-br from-accent to-accent-2 bg-clip-text text-transparent">
                  Focused digital ventures
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Divinital is where I design, build, and run a small family of software products —
                each with its own name, its own users, and a single job it does exceptionally
                well.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="shadow-[0_0_20px_-8px_var(--accent)]">
                  <Link href="/ventures">
                    Explore the ventures
                    <span aria-hidden="true"> →</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">About the studio</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <dl className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {signals.map((signal) => (
                <div key={signal.label} className="bg-background/60 px-5 py-6 text-center backdrop-blur">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {signal.label}
                  </dt>
                  <dd className="mt-2 font-mono text-3xl font-semibold tracking-tight">
                    {signal.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="ventures-heading" className="border-t border-border/60">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {"// The ventures"}
            </p>
            <h2
              id="ventures-heading"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Independent products, one standard of craft.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ventures.map((venture, index) => (
              <Reveal key={venture.slug} delay={index * 0.1}>
                <VentureCard venture={venture} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="principles-heading" className="border-t border-border/60">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {"// Operating principles"}
            </p>
            <h2
              id="principles-heading"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              How I work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.1}>
                <div className="group relative h-full bg-background p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border/60">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 px-8 py-20 text-center sm:px-16">
              <div
                aria-hidden="true"
                className="animate-aurora pointer-events-none absolute -top-1/2 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Building something aligned?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                  I&apos;m always glad to hear from people who care about the same things I do.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-9 font-mono shadow-[0_0_20px_-8px_var(--accent)]"
                >
                  <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
