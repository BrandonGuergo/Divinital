import { Container } from "@divinital/ui/components/container";
import { Reveal } from "@divinital/ui/components/reveal";
import { Section } from "@divinital/ui/components/section";
import type { Metadata } from "next";

import { VentureCard } from "@/components/venture-card";
import { ventures } from "@/config/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The Divinital family of products: Intralocutor, Decynt, and the ventures still to come.",
};

export default function VenturesPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-sm text-accent">Ventures</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Independent products, one standard of craft.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Each venture stands on its own — its own brand, domain, and roadmap — built on the
              same foundations.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {ventures.map((venture, index) => (
              <Reveal key={venture.slug} delay={index * 0.1}>
                <VentureCard venture={venture} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
