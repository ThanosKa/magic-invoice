import type { Metadata } from 'next';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { FAQ } from '@/components/landing/faq';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { faqs } from '@/lib/faqs';
import {
  faqJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
  webSiteJsonLd,
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
  siteMetadata,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Magic Invoice - Free Professional Invoice Generator',
  description:
    'Free online invoice generator — create professional invoices in seconds. No sign-up required. Instant PDF export, 100+ currencies, 11 languages. 100% browser-based, open source.',
  alternates: {
    canonical: siteMetadata.url,
  },
  openGraph: {
    title: 'Magic Invoice - Free Professional Invoice Generator',
    description:
      'Free online invoice generator. No sign-up required. Instant PDF export, 100+ currencies, 11 languages. 100% browser-based.',
    url: siteMetadata.url,
    images: [
      {
        url: `${siteMetadata.url}/og-magic-invoice.png`,
        width: 1200,
        height: 630,
        alt: 'Magic Invoice - Create Professional Invoices in Seconds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic Invoice - Free Professional Invoice Generator',
    description: 'Free online invoice generator. No sign-up required. Instant PDF export, 100+ currencies, 11 languages.',
    images: [`${siteMetadata.url}/og-magic-invoice.png`],
    site: '@KazakisThanos',
    creator: '@KazakisThanos',
  },
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      <JsonLd id="json-ld-organization" data={organizationJsonLd()} />
      <JsonLd id="json-ld-website" data={webSiteJsonLd()} />
      <JsonLd id="json-ld-webapp" data={webApplicationJsonLd()} />
      <JsonLd id="json-ld-software" data={softwareApplicationJsonLd()} />
      <JsonLd id="json-ld-faq" data={faqJsonLd(faqs)} />
      <JsonLd
        id="json-ld-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', url: siteMetadata.url },
        ])}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
