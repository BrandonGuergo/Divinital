export type VentureStatus = "live" | "waitlist";

export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: VentureStatus;
  /** Route of the venture's splash page within this app. */
  path: `/${string}`;
  /** External production URL of the venture's own product, when one is live. */
  productUrl?: string;
  /**
   * Domains that should serve this venture's splash page from this deployment
   * (see src/middleware.ts). Leave empty when the venture's domain hosts its
   * own product instead of a splash page.
   */
  splashDomains: readonly string[];
  /** `data-theme` value that scopes this venture's brand tokens (see globals.css). */
  theme: string;
}

/**
 * The single source of truth for every Divinital venture. Adding a venture
 * here automatically wires it into the ventures pages, navigation, sitemap,
 * and (via splashDomains) domain routing — pair it with a splash route under
 * src/app/<slug>/ and a [data-theme] block in globals.css.
 */
export const ventures: readonly Venture[] = [
  {
    slug: "intralocutor",
    name: "Intralocutor",
    tagline: "The reading companion that turns books into conversations.",
    description:
      "A reading-focused web app for people who don't just consume books — they argue with them. Annotate, question, and think alongside everything you read.",
    status: "live",
    path: "/intralocutor",
    productUrl: process.env.NEXT_PUBLIC_INTRALOCUTOR_APP_URL ?? "https://intralocutor.com",
    splashDomains: [],
    theme: "intralocutor",
  },
  {
    slug: "payshroud",
    name: "PayShroud",
    tagline: "Privacy-first payments for the modern web.",
    description:
      "Checkout without handing over your identity. PayShroud keeps your card details and purchase history out of merchant databases — launching soon.",
    status: "waitlist",
    path: "/payshroud",
    splashDomains: ["payshroud.com", "www.payshroud.com"],
    theme: "payshroud",
  },
  // {
  //   slug: "decynt",
  //   name: "Decynt",
  //   tagline: "Code intelligence that speaks human.",
  //   description:
  //     "An AI code assistant that understands not just your code, but its context and intent. Ask questions, get explanations, and write better software, faster.",
  //   status: "waitlist",
  //   path: "/decynt",
  //   splashDomains: [],
  //   theme: "decynt",
  // },
];

export function getVenture(slug: string): Venture | undefined {
  return ventures.find((venture) => venture.slug === slug);
}
