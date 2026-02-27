import { MetadataRoute } from 'next'
import { getAllTemplateSlugs } from '@/lib/templates-data'
import { getAllCompetitorSlugs } from '@/lib/competitors-data'
import { getAllBlogSlugs } from '@/lib/blog-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://magic-invoice-seven.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
    const templateUrls: MetadataRoute.Sitemap = getAllTemplateSlugs().map((slug) => ({
        url: `${siteUrl}/templates/${slug}`,
        lastModified: new Date('2026-02-27'),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const competitorUrls: MetadataRoute.Sitemap = getAllCompetitorSlugs().map((slug) => ({
        url: `${siteUrl}/vs/${slug}`,
        lastModified: new Date('2026-02-27'),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const blogUrls: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
        url: `${siteUrl}/blog/${slug}`,
        lastModified: new Date('2026-02-27'),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    return [
        {
            url: siteUrl,
            lastModified: new Date('2026-02-27'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/invoice`,
            lastModified: new Date('2026-02-27'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/templates`,
            lastModified: new Date('2026-02-27'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date('2026-02-27'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...templateUrls,
        ...competitorUrls,
        ...blogUrls,
    ]
}
