"use client"

import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Is Magic Invoice really free?",
        answer: "Yes! Magic Invoice is completely free to use. No hidden fees, no subscriptions, no sign-up required.",
    },
    {
        question: "Do I need to create an account?",
        answer: "No account needed. Simply open the invoice editor and start creating your invoices immediately.",
    },
    {
        question: "Can I export my invoices to PDF?",
        answer: "Absolutely! Every invoice can be exported to a professional PDF with a single click, ready to send to your clients.",
    },
    {
        question: "Are my invoices saved?",
        answer: "Your invoice data is stored locally in your browser. Your data never leaves your device unless you explicitly export it.",
    },
    {
        question: "Can I customize the invoice design?",
        answer: "Yes! You can customize all invoice fields including company details, client information, items, taxes, and more.",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export function FAQ() {
    return (
        <section id="faq" className="border-t py-24">
            <div className="container mx-auto max-w-3xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about Magic Invoice.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} variants={item}>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-base font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
