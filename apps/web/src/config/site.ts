export const siteConfig = {
  name: "Divinital",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://divinital.com",
  description:
    "Divinital is a product studio building a family of focused digital ventures — software crafted with care, shipped with intent.",
  contactEmail: "divinital@protonmail.com",
  founder: {
    name: "Brandon Guergo",
    url: "https://brandonguergo.com",
  },
} as const;
