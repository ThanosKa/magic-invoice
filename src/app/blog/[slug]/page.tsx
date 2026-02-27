import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog-data";
import { siteMetadata } from "@/lib/seo";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { JsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${siteMetadata.url}/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteMetadata.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: `${siteMetadata.url}/og-magic-invoice.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${siteMetadata.url}/og-magic-invoice.png`],
      site: "@KazakisThanos",
      creator: "@KazakisThanos",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const fallbackRelated = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3 - relatedPosts.length);

  const allRelated = [...relatedPosts, ...fallbackRelated].slice(0, 3);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteMetadata.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteMetadata.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteMetadata.url}/blog/${slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url: `${siteMetadata.url}/blog/${slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Thanos Kazakis",
      url: "https://twitter.com/KazakisThanos",
    },
    publisher: {
      "@type": "Organization",
      name: "Magic Invoice",
      logo: { "@type": "ImageObject", url: `${siteMetadata.url}/logo-rounded.svg` },
    },
    image: `${siteMetadata.url}/og-magic-invoice.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteMetadata.url}/blog/${slug}` },
  };

  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  return (
    <>
      <JsonLd id="json-ld-breadcrumb" data={breadcrumb} />
      <JsonLd id="json-ld-article" data={articleSchema} />
      {faqSchema && <JsonLd id="json-ld-faq" data={faqSchema} />}
      <SiteNav />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-14">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium truncate max-w-xs">{post.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readingTime}</span>
              <span className="text-xs text-muted-foreground">
                Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="container mx-auto px-4 md:px-8 max-w-3xl py-12">
          {post.content.map((section, i) => (
            <div key={i} className="mb-9">
              {section.heading && (
                <h2 className="text-2xl font-bold mb-3 mt-2">{section.heading}</h2>
              )}
              <p className="text-muted-foreground leading-relaxed mb-4">{section.body}</p>
              {section.list && (
                <ul className="space-y-2 ml-1">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Inline CTA */}
          <div className="my-12 rounded-xl border border-primary/30 bg-primary/5 p-7 text-center">
            <p className="font-bold text-lg mb-1">Create Your Invoice Now — Free</p>
            <p className="text-sm text-muted-foreground mb-4">
              No signup required. Professional PDF. Ready in 2 minutes.
            </p>
            <Link
              href="/invoice"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Create Free Invoice →
            </Link>
          </div>

          {/* FAQ */}
          {post.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        {allRelated.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-12">
            <div className="container mx-auto px-4 md:px-8 max-w-3xl">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {allRelated.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
                  >
                    <span className="text-xs text-primary mb-2">{rel.category}</span>
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-3">
                      {rel.title}
                    </h3>
                    <span className="mt-2 text-xs text-muted-foreground">{rel.readingTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
