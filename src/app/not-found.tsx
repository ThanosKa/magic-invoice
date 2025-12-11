"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FileText } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/landing/footer";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
            <Header />
            <main className="flex-1 flex items-center">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="mb-8 flex justify-center">
                            <span className="text-6xl font-bold bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                404
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {t("notFound.title")}
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                            {t("notFound.description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-8 font-medium min-w-[200px]"
                            >
                                <Link href="/">
                                    <Home className="mr-2 h-5 w-5" />
                                    {t("notFound.goHome")}
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8 font-medium min-w-[200px]"
                            >
                                <Link href="/invoice">
                                    <FileText className="mr-2 h-5 w-5" />
                                    {t("notFound.createInvoice")}
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-border/50">
                            <p className="text-sm text-muted-foreground">
                                {t("notFound.needHelp")}{" "}
                                <Link
                                    href="/"
                                    className="text-primary hover:underline font-medium"
                                >
                                    {t("notFound.returnHome")}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
