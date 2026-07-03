import { Button } from "@divinital/ui/components/button";
import { Container } from "@divinital/ui/components/container";
import { Reveal } from "@divinital/ui/components/reveal";
import { Section } from "@divinital/ui/components/section";
import type { Metadata } from "next";

import { ReadingPanel } from "@/components/intralocutor/reading-panel";
import { siteConfig } from "@/config/site";
import { getVenture } from "@/config/ventures";

const venture = getVenture("intralocutor");
if (!venture?.productUrl) {
  throw new Error("Intralocutor requires a productUrl in the ventures registry.");
}
const intralocutor = venture;
const appUrl = venture.productUrl;

export const metadata: Metadata = {
  title: {
    absolute: "Intralocutor — Read deeper with AI",
  },
  description: intralocutor.description,
  openGraph: {
    title: "Intralocutor — Read deeper with AI",
    description: intralocutor.description,
    type: "website",
  },
};

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="m12 2 9 5-9 5-9-5 9-5Zm9 10-9 5-9-5m18 5-9 5-9-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHighlight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="M9 11l-4 4v4h4l4-4m3-9 5 5M12.5 6.5l5 5L9 20H4v-5l8.5-8.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGraph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 7.5 15.5 8M7.5 8l3.5 7.8m6-6.4-4 6.2" strokeLinecap="round" />
    </svg>
  );
}

const features = [
  {
    icon: IconChat,
    title: "An AI discussion partner",
    body: "Argue, question, and think out loud with a partner that has actually read the book. Every reply is grounded in the page in front of you.",
  },
  {
    icon: IconLayers,
    title: "Multi-read-through notes",
    body: "Return to a book across years and keep every pass in one place. This winter's margin note still talks to the one you left three reads ago.",
  },
  {
    icon: IconHighlight,
    title: "Highlights & synthesis",
    body: "Capture the lines that matter, then let Intralocutor draw them together into a synthesis you can actually use.",
  },
  {
    icon: IconGraph,
    title: "Concept graphs",
    body: "See how ideas across your library connect. The threads between books become a map you can navigate.",
  },
] as const;

export default function IntralocutorPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-20 sm:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent)_0%,transparent_70%)] opacity-[0.12]"
        />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
                  Intralocutor
                </p>
                <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl">
                  Read deeper,
                  <br />
                  with AI beside you.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Build lasting comprehension of any book. Intralocutor turns reading into a
                  conversation — for people who don&apos;t just consume books, they argue with
                  them.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg">
                    <a href={appUrl}>
                      Open Intralocutor
                      <span aria-hidden="true"> →</span>
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <a href={siteConfig.url}>Meet the studio</a>
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ReadingPanel />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="features-heading">
        <Container>
          <Reveal>
            <h2
              id="features-heading"
              className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl"
            >
              Everything you need to think alongside what you read.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pb-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center sm:px-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_50%_0%,var(--accent)_0%,transparent_70%)] opacity-[0.1]"
              />
              <blockquote className="mx-auto max-w-2xl font-serif text-2xl leading-relaxed text-balance sm:text-3xl">
                &ldquo;A book you merely read is finished when you close it. A book you converse
                with never quite is.&rdquo;
              </blockquote>
              <Button asChild size="lg" className="mt-10">
                <a href={appUrl}>
                  Start reading
                  <span aria-hidden="true"> →</span>
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
