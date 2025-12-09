"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
            {/* Radial gradient background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted via-background to-background" />

            <div className="container mx-auto max-w-6xl px-4">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Announcement chip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-block"
                    >
                        <Link
                            href="#features"
                            className="group inline-flex items-center rounded-full border px-4 py-1.5 text-sm shadow-sm transition-all hover:shadow-md"
                        >
                            <AnimatedShinyText className="inline-flex items-center gap-2">
                                <Sparkles className="h-3 w-3" />
                                <span>✨ Create beautiful invoices instantly</span>
                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </Link>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                    >
                        Create Invoices in{" "}
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Real-Time
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        Professional invoice editor with instant PDF export. No sign-up required.
                        Create, customize, and download beautiful invoices in seconds.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/invoice">
                                Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent" asChild>
                            <Link href="#features">Learn More</Link>
                        </Button>
                    </motion.div>

                    {/* Preview image card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                                <div className="text-center">
                                    <Sparkles className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground">Invoice Editor Preview</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
