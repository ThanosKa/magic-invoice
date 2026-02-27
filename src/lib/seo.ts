export const siteMetadata = {
    title: 'Magic Invoice - Free Professional Invoice Generator',
    description: 'Create beautiful, professional invoices in seconds. No account required. Free forever, 100% browser-based, instant PDF export.',
    ogImage: '/og-magic-invoice.png',
    name: 'Magic Invoice',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://magic-invoice-seven.vercel.app',
};

export function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteMetadata.name,
        url: siteMetadata.url,
        logo: `${siteMetadata.url}/og-magic-invoice.png`,
        sameAs: [
            'https://github.com/kazakisthanos/magic-invoice',
        ],
    };
}

import { FAQItem } from './faqs';

export function faqJsonLd(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function webApplicationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: siteMetadata.name,
        url: siteMetadata.url,
        description: siteMetadata.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        featureList: [
            'Free invoice generator',
            'No account required',
            'Instant PDF export',
            'Real-time preview',
            '100+ currencies',
            '11 languages supported',
            'Digital signature support',
            'JSON, CSV, XML export',
            '100% browser-based',
            'Open source',
        ],
        screenshot: `${siteMetadata.url}/og-magic-invoice.png`,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '127',
        },
    };
}

export function webSiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteMetadata.name,
        url: siteMetadata.url,
        description: siteMetadata.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteMetadata.url}/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function softwareApplicationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: siteMetadata.name,
        url: siteMetadata.url,
        description: 'Free online invoice generator — create professional invoices in seconds, no signup required. Export as PDF, JSON, CSV, or XML.',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'InvoicingApplication',
        operatingSystem: 'Any',
        softwareVersion: '1.0.0',
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        author: {
            '@type': 'Person',
            name: 'Thanos Kazakis',
            url: 'https://twitter.com/KazakisThanos',
        },
    };
}
