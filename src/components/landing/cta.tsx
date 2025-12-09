'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from "@/contexts/TranslationContext";

export function CTA() {
    const { t } = useTranslation();

    return (
        <section className="border-t border-border py-24">
            <div className="container mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
                        {t('cta.title')}
                    </h2>
                    <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
                        {t('cta.subtitle')}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 rounded-full px-8 text-base"
                    >
                        <Link href="/invoice">
                            {t('cta.buttonText')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
