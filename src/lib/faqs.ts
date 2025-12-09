export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: "Is Magic Invoice free to use?",
        answer: "Yes, Magic Invoice is completely free to use. You can create unlimited invoices without any cost."
    },
    {
        question: "Do I need to create an account?",
        answer: "No, you can create and download invoices instantly without signing up. Your data stays on your device."
    },
    {
        question: "Can I customize the invoice design?",
        answer: "Yes, you can add your logo, change colors, and adjust the layout to match your brand identity."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We don't store your invoice data on our servers. Everything is processed locally in your browser."
    }
];
