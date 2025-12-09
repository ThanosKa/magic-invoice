"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-balance text-foreground mb-8">
                        Invoicing made <br className="hidden md:block" />
                        beautifully simple.
                    </h1>
                    <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
                        Create professional, stunning invoices in seconds. No account required.
                        Export to PDF and get paid faster.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium" asChild>
                            <Link href="/invoice">
                                Start Invoicing Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-medium bg-transparent" asChild>
                            <Link href="#features">
                                Learn more
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
