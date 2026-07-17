import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";

/**
 * Organization + WebSite structured data for divinital.com. Scoped to the
 * company layout (not the root) so venture splash pages served on their own
 * domains don't claim Divinital's identity for their URLs.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      email: siteConfig.contactEmail,
      description: siteConfig.description,
      founder: {
        "@type": "Person",
        name: siteConfig.founder.name,
        url: siteConfig.founder.url,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function CompanyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-svh flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
