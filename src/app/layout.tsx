import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/contexts/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
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
        <Script
          id="bmc-widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-name="BMC-Widget"
          data-cfasync="false"
          data-id="thaka"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
