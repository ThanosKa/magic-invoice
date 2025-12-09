export const siteMetadata = {
    title: 'Magic Invoice - Professional Invoice Generator',
    description: 'Create beautiful, professional invoices in seconds. No account required. Free and secure.',
    ogImage: 'https://magicinvoice.com/og.png', // Placeholder
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

export function faqJsonLd(faqs: any[]) {
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
