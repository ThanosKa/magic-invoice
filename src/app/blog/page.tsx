import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { siteMetadata } from "@/lib/seo";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Invoicing Blog — Guides, Tips & Resources",
  description:
    "Free invoicing guides for freelancers and small businesses. Learn how to write invoices, set payment terms, handle late payments, understand VAT, and more.",
  alternates: {
    canonical: `${siteMetadata.url}/blog`,
  },
  openGraph: {
    title: "Invoicing Blog — Guides, Tips & Resources",
    description:
      "Free invoicing guides for freelancers and small businesses.",
    url: `${siteMetadata.url}/blog`,
    images: [{ url: `${siteMetadata.url}/og-magic-invoice.png`, width: 1200, height: 630 }],
  },
};

const categories = ["All", "Invoicing Basics", "Invoicing Strategy", "Getting Paid", "Tax & Compliance", "Freelancing", "How-To Guides", "Templates", "Invoice Types"];

export default function BlogPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteMetadata.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteMetadata.url}/blog` },
    ],
  };

  const blogList = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Magic Invoice Blog",
    url: `${siteMetadata.url}/blog`,
    description: "Invoicing guides, tips, and resources for freelancers and small businesses.",
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${siteMetadata.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt,
    })),
  };

  return (
    <>
      <JsonLd id="json-ld-breadcrumb" data={breadcrumb} />
      <JsonLd id="json-ld-blog" data={blogList} />
      <SiteNav />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Invoicing Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Invoicing Guides & Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free guides to help freelancers and small businesses invoice professionally,
              get paid faster, and stay tax-compliant.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="container mx-auto px-4 md:px-8 max-w-5xl py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readingTime}</span>
                </div>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 border-y border-border py-14">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Create Your Invoice?</h2>
            <p className="text-muted-foreground mb-6">
              Put this knowledge to work. Create a professional PDF invoice in under 2 minutes — free, no signup.
            </p>
            <Link
              href="/invoice"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Create Free Invoice →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
