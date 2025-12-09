import Link from "next/link";
import { Twitter, Github, Linkedin, Disc as Discord } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-muted/30 py-16">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="size-6 rounded-md bg-foreground" />
                            <span className="text-lg font-bold tracking-tight">Magic Invoice</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Create professional invoices in seconds. Export to PDF, track payments, and get paid faster with our premium invoicing solution.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Templates</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Magic Invoice. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
