import { Container } from "@divinital/ui/components/container";
import { Reveal } from "@divinital/ui/components/reveal";
import { Section } from "@divinital/ui/components/section";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Divinital is a product studio building a small family of focused software ventures, each held to a single standard of craft.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-sm text-accent">About</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Small studio. Serious software.
            </h1>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <Reveal>
            <p>
              Divinital exists because good software is usually built by small teams who care
              about a specific problem — and diluted by everything that gets bolted on afterwards.
              We keep our ventures separate so each one can stay sharp.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Every product we run has its own identity, its own users, and its own reason to
              exist. What they share is underneath: one design system, one engineering standard,
              and one belief that the people using our software deserve speed, clarity, and
              privacy by default.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Today that family includes <strong className="text-foreground">Intralocutor</strong>,
              a reading companion for people who think alongside their books.
              More will follow — only when they meet the bar.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border/60">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-4 text-muted-foreground">
              For partnerships, press, or anything else:{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
