import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border py-12 md:py-16 bg-background">
            <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight">Magic Invoice</span>
                </div>
                <div className="text-sm text-muted-foreground text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Magic Invoice. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
