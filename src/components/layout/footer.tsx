"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t bg-muted/30 py-8"
        >
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                        © 2024 Magic Invoice. All rights reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link
                            href="mailto:hello@magicinvoice.com"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
