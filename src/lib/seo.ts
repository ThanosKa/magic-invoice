export const siteMetadata = {
    title: 'Magic Invoice - Professional Invoice Generator',
    description: 'Create beautiful, professional invoices in seconds. No account required. Free and secure.',
    ogImage: '/og-magic-invoice.png',
    name: 'Magic Invoice',
    url: 'https://magicinvoice.com',
};

export function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteMetadata.name,
        url: siteMetadata.url,
        logo: siteMetadata.ogImage,
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
