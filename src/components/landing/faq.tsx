'use client';

import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslation } from '@/contexts/TranslationContext';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const faqKeys = ['isFree', 'accountRequired', 'customize', 'dataSecure'];

export function FAQ() {
    const { t } = useTranslation();

    return (
        <section id="faq" className="border-t border-border py-24">
            <div className="container mx-auto max-w-3xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        {t('faq.title')}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t('faq.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqKeys.map((key, index) => (
                            <motion.div key={index} variants={item}>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-base font-medium">
                                        {t(`faq.questions.${key}.question`)}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t(`faq.questions.${key}.answer`)}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
