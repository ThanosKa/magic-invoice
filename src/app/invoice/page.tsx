import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Invoice Editor - Magic Invoice",
    description: "Create and customize professional invoices with our real-time editor. Export to PDF instantly.",
    openGraph: {
        title: "Invoice Editor - Magic Invoice",
        description: "Create and customize professional invoices with our real-time editor.",
        type: "website",
    },
};

export default function InvoicePage() {
    // JSON-LD Schema for WebApplication
    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Magic Invoice Editor",
        applicationCategory: "BusinessApplication",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Real-time invoice editor with PDF export",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webAppSchema),
                }}
            />

            <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
                <div className="w-full max-w-4xl rounded-xl border border-border bg-card p-12 text-center shadow-lg">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight">
                        Invoice Editor
                    </h1>
                    <p className="mb-8 text-lg text-muted-foreground">
                        The invoice editor will be implemented in the next phase.
                        <br />
                        Stay tuned for real-time editing and PDF export features!
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-6 py-2 text-sm">
                        <span className="text-2xl">🎉</span>
                        <span>Coming Soon</span>
                    </div>
                </div>
            </div>
        </>
    );
}
