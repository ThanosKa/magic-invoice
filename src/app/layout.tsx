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

export const metadata: Metadata = {
  metadataBase: new URL("https://magicinvoice.com"),
  title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
  description:
    "Professional invoice editor with instant PDF export. No sign-up required. Create, customize, and download beautiful invoices in seconds.",
  keywords: [
    "invoice",
    "invoice generator",
    "PDF invoice",
    "free invoice",
    "invoice maker",
  ],
  authors: [{ name: "Magic Invoice" }],
  icons: {
    icon: [{ url: "/logo-rounded.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-rounded.svg" }],
  },
  openGraph: {
    title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
    description:
      "Professional invoice editor with instant PDF export. No sign-up required.",
    type: "website",
    url: "https://magicinvoice.com",
    siteName: "Magic Invoice",
    images: [
      {
        url: "/og-magic-invoice.png",
        width: 1200,
        height: 630,
        alt: "Magic Invoice - Create Professional Invoices in Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
    description: "Professional invoice editor with instant PDF export.",
    images: ["/og-magic-invoice.png"],
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
