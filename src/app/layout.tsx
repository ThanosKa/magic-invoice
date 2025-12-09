import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Professional invoice editor with instant PDF export. No sign-up required. Create, customize, and download beautiful invoices in seconds.",
  keywords: ["invoice", "invoice generator", "PDF invoice", "free invoice", "invoice maker"],
  authors: [{ name: "Magic Invoice" }],
  openGraph: {
    title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
    description: "Professional invoice editor with instant PDF export. No sign-up required.",
    type: "website",
    url: "https://magicinvoice.com",
    siteName: "Magic Invoice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Invoice - Create Beautiful Invoices in Real-Time",
    description: "Professional invoice editor with instant PDF export.",
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
