export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: "Is Magic Invoice free to use?",
        answer: "Yes, Magic Invoice is completely free to use. You can create unlimited invoices without any cost, forever. No hidden fees, no premium plans, no credit card required."
    },
    {
        question: "Do I need to create an account?",
        answer: "No account or sign-up is needed. You can create and download invoices instantly. Your data stays on your device — we never store your invoice data on our servers."
    },
    {
        question: "Can I customize the invoice design?",
        answer: "Yes, you can add your company logo, change colors, adjust the layout, add custom line items, and include payment terms to match your brand identity perfectly."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. Magic Invoice is 100% browser-based — all processing happens locally on your device. We don't store your invoice data on any server. Your financial data never leaves your browser."
    },
    {
        question: "What currencies does Magic Invoice support?",
        answer: "Magic Invoice supports over 100 currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, and many more. Simply select your currency from the dropdown and it applies automatically to all calculations."
    },
    {
        question: "Can I export invoices as PDF?",
        answer: "Yes, you can export your invoices as pixel-perfect PDFs with a single click. The PDF matches exactly what you see in the real-time preview. You can also export as JSON, CSV, or XML for accounting software integration."
    },
    {
        question: "What languages does Magic Invoice support?",
        answer: "Magic Invoice supports 11 languages: English, German, Spanish, French, Italian, Greek, Dutch, Portuguese, Swedish, Polish, and Czech. The entire invoice interface switches to your selected language instantly."
    },
    {
        question: "Can I add a digital signature to my invoice?",
        answer: "Yes, Magic Invoice includes digital signature support. You can draw or upload your signature directly on the invoice before exporting it as a PDF."
    },
    {
        question: "How do I send an invoice to a client?",
        answer: "Create your invoice in Magic Invoice, export it as a PDF, then send the PDF file to your client via email or any file sharing method you prefer. The PDF is professional and ready to send."
    },
    {
        question: "Can I use Magic Invoice on mobile?",
        answer: "Yes, Magic Invoice works on mobile browsers. The interface is responsive and you can create invoices on your phone or tablet, though desktop provides the best experience for the two-panel layout."
    },
    {
        question: "Does Magic Invoice support tax calculations?",
        answer: "Yes, you can add tax rates (VAT, GST, sales tax) as either a percentage or fixed amount. Magic Invoice automatically calculates subtotals, tax amounts, and the final total in real time."
    },
    {
        question: "Can I save my invoice and come back to it later?",
        answer: "Yes, Magic Invoice automatically saves your work-in-progress to your browser's local storage. Your invoice draft is restored the next time you visit, even if you close the browser tab."
    },
    {
        question: "Is Magic Invoice open source?",
        answer: "Yes, Magic Invoice is fully open source under the Apache 2.0 license. You can view the source code on GitHub, contribute improvements, or even self-host your own instance."
    },
    {
        question: "How is Magic Invoice different from FreshBooks or QuickBooks?",
        answer: "FreshBooks and QuickBooks are full accounting suites that cost $15-50/month and require account creation. Magic Invoice is free, requires no account, and focuses on doing one thing perfectly: creating beautiful professional invoices instantly."
    },
    {
        question: "Can I create invoices for freelance work?",
        answer: "Magic Invoice is perfect for freelancers. Create professional invoices for any type of freelance work — design, development, writing, consulting, photography, and more. Add your services, set hourly or fixed rates, and export a client-ready PDF in under 2 minutes."
    },
];
