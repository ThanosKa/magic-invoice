import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contexts/Providers";
import BMACWidget from "@/components/bmac-widget";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magic-invoice-seven.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Magic Invoice - Free Professional Invoice Generator",
    template: "%s | Magic Invoice",
  },
  description:
    "Free online invoice generator — create professional invoices in seconds. No sign-up required. Instant PDF export, 100+ currencies, 11 languages. 100% browser-based.",
  keywords: [
    "invoice generator",
    "free invoice generator",
    "online invoice maker",
    "invoice template",
    "invoice creator",
    "PDF invoice",
    "free invoice",
    "invoice maker",
    "create invoice online",
    "freelance invoice",
    "billing software free",
    "professional invoice",
    "small business invoice",
    "invoice PDF download",
    "invoice no signup",
  ],
  authors: [{ name: "Thanos Kazakis", url: "https://twitter.com/KazakisThanos" }],
  creator: "Thanos Kazakis",
  publisher: "Magic Invoice",
  icons: {
    icon: [{ url: "/logo-rounded.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-rounded.svg" }],
  },
  openGraph: {
    title: "Magic Invoice - Free Professional Invoice Generator",
    description:
      "Free online invoice generator. No sign-up required. Instant PDF export, 100+ currencies, 11 languages. 100% browser-based.",
    type: "website",
    url: siteUrl,
    siteName: "Magic Invoice",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-magic-invoice.png`,
        width: 1200,
        height: 630,
        alt: "Magic Invoice - Create Professional Invoices in Seconds",
        type: "image/png",
        secureUrl: `${siteUrl}/og-magic-invoice.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Invoice - Free Professional Invoice Generator",
    description: "Free online invoice generator. No sign-up required. Instant PDF export, 100+ currencies, 11 languages.",
    images: [`${siteUrl}/og-magic-invoice.png`],
    site: "@KazakisThanos",
    creator: "@KazakisThanos",
  },
  verification: {
    google: "sI5IoP56qmWRshEy6pdms48hYZIoufNnintjdZI_dtQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "og:image:secure_url": `${siteUrl}/og-magic-invoice.png`,
    "og:image:type": "image/png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <BMACWidget />
        <Analytics />
      </body>
    </html>
  );
}
