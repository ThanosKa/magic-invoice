import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { competitors, getCompetitorBySlug, getAllCompetitorSlugs } from "@/lib/competitors-data";
import { siteMetadata } from "@/lib/seo";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { JsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ competitor: string }>;
}

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((competitor) => ({ competitor }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor } = await params;
  const data = getCompetitorBySlug(competitor);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `${siteMetadata.url}/vs/${competitor}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${siteMetadata.url}/vs/${competitor}`,
      images: [{ url: `${siteMetadata.url}/og-magic-invoice.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [`${siteMetadata.url}/og-magic-invoice.png`],
      site: "@KazakisThanos",
      creator: "@KazakisThanos",
    },
  };
}

export default async function VsPage({ params }: Props) {
  const { competitor } = await params;
  const data = getCompetitorBySlug(competitor);
  if (!data) notFound();

  const otherCompetitors = competitors.filter((c) => c.slug !== competitor).slice(0, 4);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteMetadata.url },
      { "@type": "ListItem", position: 2, name: `Magic Invoice vs ${data.name}`, item: `${siteMetadata.url}/vs/${competitor}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd id="json-ld-breadcrumb" data={breadcrumb} />
      <JsonLd id="json-ld-faq" data={faqSchema} />
      <SiteNav />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">Magic Invoice vs {data.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">⚡</span>
              <span className="text-3xl font-bold text-muted-foreground">vs</span>
              <span className="text-4xl">{data.emoji}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {data.h1}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              {data.subheader}
            </p>

            {/* Verdict Box */}
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-3">
              <span className="text-primary font-bold text-lg">Verdict:</span>
              <span className="text-sm">Magic Invoice wins for pure invoicing — free, private, no account required.</span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12">
          {/* About Competitor */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3">What is {data.name}?</h2>
            <p className="text-muted-foreground leading-relaxed">{data.competitorDescription}</p>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-5">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left py-3 px-4 font-semibold w-1/3">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-primary">Magic Invoice</th>
                    <th className="text-center py-3 px-4 font-semibold">{data.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                      <td className="py-3 px-4 font-medium text-foreground">{row.feature}</td>
                      <td className={`py-3 px-4 text-center ${row.winner === "magic" ? "text-green-600 dark:text-green-400 font-medium" : "text-muted-foreground"}`}>
                        {row.winner === "magic" && <span className="mr-1">✓</span>}
                        {row.magicInvoice}
                      </td>
                      <td className={`py-3 px-4 text-center ${row.winner === "competitor" ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Magic Invoice Wins */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-5">Why Magic Invoice Wins for Invoicing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.magicInvoiceAdvantages.map((adv, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <span className="text-primary font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-sm">{adv}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Try Magic Invoice — It&apos;s Free</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              No credit card. No account. Create a professional PDF invoice in under 2 minutes.
            </p>
            <Link
              href="/invoice"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Create Free Invoice →
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              100% browser-based · No signup · Instant PDF · Open source
            </p>
          </section>

          {/* When to Choose Competitor */}
          <section className="mb-12 bg-muted/30 rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-3">When {data.name} Is the Better Choice</h2>
            <p className="text-muted-foreground leading-relaxed">{data.whenToChooseCompetitor}</p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {data.faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Comparisons */}
          <section>
            <h2 className="text-2xl font-bold mb-4">More Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherCompetitors.map((c) => (
                <Link
                  key={c.slug}
                  href={`/vs/${c.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 transition-all"
                >
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="font-medium text-sm">Magic Invoice vs {c.name}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
