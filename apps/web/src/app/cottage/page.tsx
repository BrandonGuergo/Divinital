import { Badge } from "@divinital/ui/components/badge";
import { Button } from "@divinital/ui/components/button";
import { Card, CardContent } from "@divinital/ui/components/card";
import { Container } from "@divinital/ui/components/container";
import { Reveal } from "@divinital/ui/components/reveal";
import { Section } from "@divinital/ui/components/section";
import type { Metadata } from "next";

import { FreshBoard } from "@/components/cottage/fresh-board";
import { getVenture } from "@/config/ventures";

const venture = getVenture("cottage");
if (!venture) {
  throw new Error("Cottage is missing from the ventures registry.");
}
const cottage = venture;

export const metadata: Metadata = {
  title: {
    absolute: "Cottage — What's fresh from Florida home kitchens nearby",
  },
  description: cottage.description,
  openGraph: {
    title: "Cottage — What's fresh from Florida home kitchens nearby",
    description: cottage.description,
    type: "website",
  },
  alternates: { canonical: "/cottage" },
};

const pillars = [
  {
    title: "For bakers",
    body: "Keep a page, post what came out of the oven today, print a legal label, and take orders — without a marketplace standing between you and your neighbor.",
  },
  {
    title: "For neighbors",
    body: "See what's fresh nearby and ask for some. You pay the baker directly. Cottage never sees a card number, and never takes a cut.",
  },
  {
    title: "Florida, on purpose",
    body: "Cottage food handed over in person, or posted to a Florida address. Built around the law as it is — not a workaround for it.",
  },
] as const;

export default function CottagePage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <Badge>A Divinital venture</Badge>
              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                What&apos;s coming out of the oven, nearby.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Cottage is a live board of Florida cottage food — a storefront for the baker, a
                bulletin board for the neighbor. No cut. No checkout through us. Just what&apos;s
                fresh from a home kitchen.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="/support">
                    Cottage support
                    <span aria-hidden="true"> →</span>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/privacy">Privacy</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <FreshBoard />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="pillars-heading" className="border-t border-border/60">
        <Container>
          <h2 id="pillars-heading" className="sr-only">
            Why Cottage
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg tracking-tight">{pillar.title}</h3>
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
