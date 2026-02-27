import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { templates, getTemplateBySlug, getAllTemplateSlugs } from "@/lib/templates-data";
import { siteMetadata } from "@/lib/seo";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { JsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTemplateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};

  return {
    title: template.metaTitle,
    description: template.metaDescription,
    alternates: {
      canonical: `${siteMetadata.url}/templates/${slug}`,
    },
    openGraph: {
      title: template.metaTitle,
      description: template.metaDescription,
      url: `${siteMetadata.url}/templates/${slug}`,
      images: [{ url: `${siteMetadata.url}/og-magic-invoice.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: template.metaTitle,
      description: template.metaDescription,
      images: [`${siteMetadata.url}/og-magic-invoice.png`],
      site: "@KazakisThanos",
      creator: "@KazakisThanos",
    },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const related = template.relatedSlugs
    .map((s) => templates.find((t) => t.slug === s))
    .filter(Boolean);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteMetadata.url },
      { "@type": "ListItem", position: 2, name: "Invoice Templates", item: `${siteMetadata.url}/templates` },
      { "@type": "ListItem", position: 3, name: `${template.industry} Invoice Template`, item: `${siteMetadata.url}/templates/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: template.metaTitle,
    description: template.metaDescription,
    url: `${siteMetadata.url}/templates/${slug}`,
    isPartOf: { "@type": "WebSite", url: siteMetadata.url, name: "Magic Invoice" },
  };

  return (
    <>
      <JsonLd id="json-ld-breadcrumb" data={breadcrumb} />
      <JsonLd id="json-ld-faq" data={faqSchema} />
      <JsonLd id="json-ld-webpage" data={webPage} />
      <SiteNav />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/templates" className="hover:text-foreground transition-colors">Templates</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">{template.industry}</li>
              </ol>
            </nav>

            <div className="flex items-start gap-4">
              <span className="text-5xl">{template.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  {template.h1}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {template.subheader}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/invoice"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Create {template.industry} Invoice Free →
              </Link>
              <span className="inline-flex items-center justify-center px-4 py-3 text-sm text-muted-foreground">
                ✓ No signup &nbsp; ✓ Instant PDF &nbsp; ✓ Free forever
              </span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12">
          {/* What to Include */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              What to Include in a {template.industry} Invoice
            </h2>
            <p className="text-muted-foreground mb-5">
              A professional {template.industry.toLowerCase()} invoice should contain the following information to ensure timely payment and legal compliance:
            </p>
            <ul className="space-y-3">
              {template.whatToInclude.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section className="mb-12 bg-muted/40 rounded-xl border border-border p-6">
            <h2 className="text-2xl font-bold mb-4">
              {template.industry} Invoicing Tips
            </h2>
            <ul className="space-y-3">
              {template.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to Create CTA */}
          <section className="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Create Your {template.industry} Invoice in 2 Minutes
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Magic Invoice is 100% free — no account, no subscription. Fill in your details,
              add your services, and export a professional PDF instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/invoice"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Create Free Invoice →
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              No signup required · Instant PDF · 100+ currencies · 11 languages
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {template.faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Templates */}
          {related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Related Invoice Templates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => {
                  if (!rel) return null;
                  return (
                    <Link
                      key={rel.slug}
                      href={`/templates/${rel.slug}`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all"
                    >
                      <span className="text-2xl">{rel.emoji}</span>
                      <span className="font-medium text-sm">{rel.industry} Invoice</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
