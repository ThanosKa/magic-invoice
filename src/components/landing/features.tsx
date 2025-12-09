"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built for speed. Create, edit, and send invoices in milliseconds."
    },
    {
        icon: Shield,
        title: "Private & Secure",
        description: "Your data stays on your device. We don't store your financial information."
    },
    {
        icon: Globe,
        title: "Global & Universal",
        description: "Support for 100+ currencies and languages."
    },
    {
        icon: CheckCircle2,
        title: "Pixel Perfect PDF",
        description: "Generate professionally designed PDFs instantly."
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 border-t border-border">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex flex-col items-start"
                        >
                            <div className="mb-4 text-foreground">
                                <feature.icon className="h-8 w-8 stroke-1" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
