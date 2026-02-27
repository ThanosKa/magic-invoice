"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Mail, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background pt-12 pb-8">
      <div className="container px-4 mx-auto">
        {/* Nav links row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo-rounded.svg" alt="Magic Invoice Logo" width={22} height={22} className="rounded-md" />
              <span className="font-bold tracking-tight">{t("common.appName")}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Free professional invoice generator. No signup. No fees. Instant PDF export.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Templates</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/templates/freelance-invoice-template" className="hover:text-foreground transition-colors">Freelance Invoice</Link></li>
              <li><Link href="/templates/consulting-invoice-template" className="hover:text-foreground transition-colors">Consulting Invoice</Link></li>
              <li><Link href="/templates/photography-invoice-template" className="hover:text-foreground transition-colors">Photography Invoice</Link></li>
              <li><Link href="/templates/construction-invoice-template" className="hover:text-foreground transition-colors">Construction Invoice</Link></li>
              <li><Link href="/templates" className="hover:text-foreground transition-colors font-medium">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Comparisons</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/vs/freshbooks" className="hover:text-foreground transition-colors">vs FreshBooks</Link></li>
              <li><Link href="/vs/wave" className="hover:text-foreground transition-colors">vs Wave</Link></li>
              <li><Link href="/vs/quickbooks" className="hover:text-foreground transition-colors">vs QuickBooks</Link></li>
              <li><Link href="/vs/zoho-invoice" className="hover:text-foreground transition-colors">vs Zoho Invoice</Link></li>
              <li><Link href="/vs/xero" className="hover:text-foreground transition-colors">vs Xero</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/blog/how-to-write-a-professional-invoice" className="hover:text-foreground transition-colors">How to Write an Invoice</Link></li>
              <li><Link href="/blog/invoice-payment-terms-guide" className="hover:text-foreground transition-colors">Payment Terms Guide</Link></li>
              <li><Link href="/blog/how-to-invoice-as-a-freelancer" className="hover:text-foreground transition-colors">Freelancer Invoicing</Link></li>
              <li><Link href="/blog/vat-invoice-requirements" className="hover:text-foreground transition-colors">VAT Invoice Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="text-sm text-muted-foreground text-center">
            <p>{t("footer.copyright")}</p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/ThanosKa/magic-invoice"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/KazakisThanos"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              aria-label="X (Twitter)"
            >
              <X className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:kazakis.th@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
