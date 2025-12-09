"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { Sparkles, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        return scrollY.on("change", (latest) => {
            setScrolled(latest > 8)
        })
    }, [scrollY])

    return (
        <>
            <div className="h-16" />
            <header
                className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                        ? "border-b border-border bg-background/80 backdrop-blur"
                        : "border-b border-transparent bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <Sparkles className="h-6 w-6" />
                        <span>Magic Invoice</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Features
                        </Link>
                        <Link
                            href="#faq"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            FAQ
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button size="sm" className="rounded-full" asChild>
                            <Link href="/invoice">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}
