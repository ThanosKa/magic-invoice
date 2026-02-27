import type { Metadata } from "next";
import Link from "next/link";
import { templates } from "@/lib/templates-data";
import { siteMetadata } from "@/lib/seo";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Free Invoice Templates - Download PDF by Industry",
  description:
    "Download free professional invoice templates for every industry. Freelance, construction, photography, consulting, and 20+ more. No signup — instant PDF export.",
  alternates: {
    canonical: `${siteMetadata.url}/templates`,
  },
  openGraph: {
    title: "Free Invoice Templates - Download PDF by Industry",
    description:
      "Free professional invoice templates for every industry. No signup, instant PDF export.",
    url: `${siteMetadata.url}/templates`,
    images: [{ url: `${siteMetadata.url}/og-magic-invoice.png`, width: 1200, height: 630 }],
  },
};

const categories = [
  {
    label: "Creative & Digital",
    slugs: [
      "freelance-invoice-template",
      "graphic-design-invoice-template",
      "web-design-invoice-template",
      "photography-invoice-template",
      "video-production-invoice-template",
      "writing-invoice-template",
      "translation-invoice-template",
    ],
  },
  {
    label: "Business & Professional",
    slugs: [
      "consulting-invoice-template",
      "marketing-agency-invoice-template",
      "accounting-invoice-template",
      "legal-invoice-template",
      "it-services-invoice-template",
      "real-estate-invoice-template",
    ],
  },
  {
    label: "Trades & Home Services",
    slugs: [
      "construction-invoice-template",
      "plumbing-invoice-template",
      "electrical-invoice-template",
      "landscaping-invoice-template",
      "cleaning-service-invoice-template",
    ],
  },
  {
    label: "Health, Education & Events",
    slugs: [
      "tutoring-invoice-template",
      "coaching-invoice-template",
      "personal-trainer-invoice-template",
      "healthcare-invoice-template",
      "catering-invoice-template",
      "event-planning-invoice-template",
    ],
  },
];

export default function TemplatesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteMetadata.url },
      { "@type": "ListItem", position: 2, name: "Invoice Templates", item: `${siteMetadata.url}/templates` },
    ],
  };

  return (
    <>
      <JsonLd id="json-ld-breadcrumb" data={breadcrumb} />
      <SiteNav />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">Free Invoice Templates</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Professional Invoice Templates for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              24 industry-specific invoice templates — all free, no signup required.
              Fill in your details and export a pixel-perfect PDF in under 2 minutes.
            </p>
            <Link
              href="/invoice"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Create Your Invoice Now →
            </Link>
          </div>
        </section>

        {/* Template Grid by Category */}
        <section className="container mx-auto px-4 md:px-8 max-w-6xl py-16">
          {categories.map((cat) => {
            const catTemplates = cat.slugs
              .map((slug) => templates.find((t) => t.slug === slug))
              .filter(Boolean);

            return (
              <div key={cat.label} className="mb-14">
                <h2 className="text-2xl font-bold mb-6">{cat.label}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {catTemplates.map((template) => {
                    if (!template) return null;
                    return (
                      <Link
                        key={template.slug}
                        href={`/templates/${template.slug}`}
                        className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all"
                      >
                        <span className="text-3xl">{template.emoji}</span>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {template.industry} Invoice
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {template.subheader}
                          </p>
                          <span className="inline-block mt-2 text-xs font-medium text-primary">
                            Free template →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Why Magic Invoice */}
        <section className="bg-muted/30 border-y border-border py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Why Use Magic Invoice?</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              All 24 templates are powered by one free tool — no software to install, no account to create.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Zero Signup", desc: "Start creating immediately. No email, no password, no account." },
                { title: "Instant PDF", desc: "Export a pixel-perfect PDF with one click. Ready to email to your client." },
                { title: "100% Private", desc: "All processing happens in your browser. Your data never leaves your device." },
              ].map((f) => (
                <div key={f.title} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/invoice"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Create a Free Invoice →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
