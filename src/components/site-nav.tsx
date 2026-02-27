import Link from "next/link";
import Image from "next/image";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-rounded.svg"
            alt="Magic Invoice"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-bold text-lg tracking-tight">Magic Invoice</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/templates" className="hover:text-foreground transition-colors">
            Templates
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/#faq" className="hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>

        <Link
          href="/invoice"
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Create Invoice →
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10 mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo-rounded.svg"
                alt="Magic Invoice"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="font-bold">Magic Invoice</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free professional invoice generator. No signup. No fees. Instant PDF.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Templates</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/templates/freelance-invoice-template" className="hover:text-foreground transition-colors">Freelance Invoice</Link></li>
              <li><Link href="/templates/consulting-invoice-template" className="hover:text-foreground transition-colors">Consulting Invoice</Link></li>
              <li><Link href="/templates/photography-invoice-template" className="hover:text-foreground transition-colors">Photography Invoice</Link></li>
              <li><Link href="/templates/construction-invoice-template" className="hover:text-foreground transition-colors">Construction Invoice</Link></li>
              <li><Link href="/templates" className="hover:text-foreground transition-colors font-medium">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Comparisons</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/vs/freshbooks" className="hover:text-foreground transition-colors">vs FreshBooks</Link></li>
              <li><Link href="/vs/wave" className="hover:text-foreground transition-colors">vs Wave</Link></li>
              <li><Link href="/vs/quickbooks" className="hover:text-foreground transition-colors">vs QuickBooks</Link></li>
              <li><Link href="/vs/zoho-invoice" className="hover:text-foreground transition-colors">vs Zoho Invoice</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/blog/how-to-write-a-professional-invoice" className="hover:text-foreground transition-colors">How to Write an Invoice</Link></li>
              <li><Link href="/blog/invoice-payment-terms-guide" className="hover:text-foreground transition-colors">Payment Terms Guide</Link></li>
              <li><Link href="/blog/how-to-invoice-as-a-freelancer" className="hover:text-foreground transition-colors">Freelancer Invoicing</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Magic Invoice. Free and open source (Apache 2.0).</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ThanosKa/magic-invoice" target="_blank" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://x.com/KazakisThanos" target="_blank" className="hover:text-foreground transition-colors">
              Twitter / X
            </Link>
            <Link href="/invoice" className="hover:text-foreground transition-colors font-medium">
              Create Free Invoice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
