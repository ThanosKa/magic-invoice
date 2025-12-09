import Head from 'next/head';
import Script from 'next/script';

export function JsonLd({ data }: { data: any | any[] }) {
    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
