'use client';

import Link from "next/link";
import { useTranslation } from "@/contexts/TranslationContext";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-border py-12 md:py-16 bg-background">
            <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight">{t('common.appName')}</span>
                </div>
                <div className="text-sm text-muted-foreground text-center md:text-right">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
