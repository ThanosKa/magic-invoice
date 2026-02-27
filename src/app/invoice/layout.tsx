import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Invoice Editor - Create & Export Your Invoice',
  description:
    'Create your professional invoice in real-time. Fill in your details, add line items, apply taxes, and export as a pixel-perfect PDF instantly. No account required.',
  alternates: {
    canonical: `${siteMetadata.url}/invoice`,
  },
  openGraph: {
    title: 'Invoice Editor - Magic Invoice',
    description:
      'Create your professional invoice in real-time. Export as PDF, JSON, CSV, or XML instantly. No sign-up required.',
    url: `${siteMetadata.url}/invoice`,
    images: [
      {
        url: `${siteMetadata.url}/og-magic-invoice.png`,
        width: 1200,
        height: 630,
        alt: 'Magic Invoice Editor - Create Professional Invoices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Editor - Magic Invoice',
    description: 'Create your professional invoice in real-time. Export as PDF instantly. No sign-up required.',
    images: [`${siteMetadata.url}/og-magic-invoice.png`],
    site: '@KazakisThanos',
    creator: '@KazakisThanos',
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function InvoiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
