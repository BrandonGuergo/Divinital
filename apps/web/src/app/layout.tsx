import { MotionProvider } from "@divinital/ui/components/motion-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Divinital — A studio of focused digital ventures",
    template: "%s — Divinital",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder.name, url: siteConfig.founder.url }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: ["Divinital", "product studio", "software ventures", "Intralocutor"],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  // Divinital's committed dark background — brands the mobile browser chrome.
  themeColor: "#0d0e19",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
