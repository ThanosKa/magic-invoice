import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, FileText } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/logo.png"
                            alt="Magic Invoice Logo"
                            width={64}
                            height={64}
                            className="dark:invert rounded-xl"
                        />
                    </div>

                    {/* 404 Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <FileQuestion className="w-32 h-32 text-muted-foreground/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-6xl font-bold bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                    404
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Page Not Found
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                        Oops! The page you&apos;re looking for doesn&apos;t exist. It might
                        have been moved or deleted.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 font-medium min-w-[200px]"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-5 w-5" />
                                Go Home
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
                                Create Invoice
                            </Link>
                        </Button>
                    </div>

                    {/* Additional Help */}
                    <div className="mt-12 pt-8 border-t border-border/50">
                        <p className="text-sm text-muted-foreground">
                            Need help?{" "}
                            <Link
                                href="/"
                                className="text-primary hover:underline font-medium"
                            >
                                Return to homepage
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
