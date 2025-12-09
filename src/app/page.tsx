import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { FAQ } from "@/components/landing/faq";
import { CTASection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
  description: "Professional invoice editor with instant PDF export. No sign-up required. Create, customize, and download beautiful invoices in seconds.",
  openGraph: {
    title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
    description: "Professional invoice editor with instant PDF export. No sign-up required.",
    type: "website",
  },
};

export default function Home() {
  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Magic Invoice",
    url: "https://magicinvoice.com",
    logo: "https://magicinvoice.com/logo.png",
    description: "Professional invoice editor with instant PDF export",
  };

  // JSON-LD Schema for WebApplication
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Magic Invoice",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Create beautiful invoices in real-time with instant PDF export",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema),
        }}
      />

      <Header />
      <main>
        <Hero />
        <Features />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
