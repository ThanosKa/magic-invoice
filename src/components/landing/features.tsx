"use client"

import { motion } from "framer-motion"
import { Zap, FileDown, Layout, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
    {
        icon: Zap,
        title: "Real-Time Editing",
        description: "See your invoice update instantly as you type. No delays, no waiting.",
    },
    {
        icon: FileDown,
        title: "PDF Export",
        description: "Download professional PDFs with a single click. Perfect for sending to clients.",
    },
    {
        icon: Layout,
        title: "Beautiful Templates",
        description: "Professional designs that make your invoices stand out from the crowd.",
    },
    {
        icon: Cloud,
        title: "No Sign-Up Required",
        description: "Start creating immediately. No account needed, no hidden fees.",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export function Features() {
    return (
        <section id="features" className="border-t bg-muted/30 py-24">
            <div className="container mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Everything you need to create invoices
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Powerful features that make invoice creation fast, easy, and professional.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((feature) => (
                        <motion.div key={feature.title} variants={item}>
                            <Card className="h-full border-border/50 bg-background transition-colors hover:border-border">
                                <CardContent className="pt-6">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                                        <feature.icon className="h-6 w-6 text-foreground" />
                                    </div>
                                    <h3 className="mb-2 font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
