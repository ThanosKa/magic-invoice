"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="border-t py-24">
            <div className="container mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to create your first invoice?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                        Join thousands of freelancers and small businesses who trust Magic Invoice
                        for their invoicing needs.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/invoice">
                            Start Creating Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
