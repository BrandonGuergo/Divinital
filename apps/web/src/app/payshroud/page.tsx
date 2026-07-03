import { Badge } from "@divinital/ui/components/badge";
import { Card, CardContent } from "@divinital/ui/components/card";
import { Container } from "@divinital/ui/components/container";
import { Reveal } from "@divinital/ui/components/reveal";
import { Section } from "@divinital/ui/components/section";
import type { Metadata } from "next";

import { WaitlistForm } from "@/components/waitlist-form";
import { getVenture } from "@/config/ventures";

const venture = getVenture("payshroud");
if (!venture) {
  throw new Error("PayShroud is missing from the ventures registry.");
}
const payshroud = venture;

export const metadata: Metadata = {
  title: {
    absolute: "PayShroud — Privacy-first payments, coming soon",
  },
  description: payshroud.description,
  openGraph: {
    title: "PayShroud — Privacy-first payments, coming soon",
    description: payshroud.description,
    type: "website",
  },
};

const pillars = [
  {
    title: "Shielded checkout",
    body: "Pay online without your real card number or identity landing in a merchant's database — or the next breach dump.",
  },
  {
    title: "Data that stays yours",
    body: "Your purchase history is not a product. We don't sell it, share it, or mine it for advertising. Ever.",
  },
  {
    title: "Private, not opaque",
    body: "Built to work with regulated financial rails, not around them. Privacy from surveillance marketing — full transparency where the law requires it.",
  },
] as const;

export default function PayShroudPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container className="max-w-3xl">
          <Reveal>
            <Badge>Coming soon</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Privacy-first payments for the modern web.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every checkout today leaks who you are and what you buy. PayShroud puts a layer
              between your identity and the internet&apos;s cash registers.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 max-w-md">
              <WaitlistForm />
              <p className="mt-3 text-xs text-muted-foreground">
                Join the waitlist for early access. No spam — one email when we launch.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="pillars-heading" className="border-t border-border/60">
        <Container>
          <h2 id="pillars-heading" className="sr-only">
            Why PayShroud
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-base font-semibold">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
