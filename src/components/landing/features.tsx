"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const featureKeys = [
    { icon: Zap, key: 'lightningFast' },
    { icon: Shield, key: 'privateSecure' },
    { icon: Globe, key: 'globalUniversal' },
    { icon: CheckCircle2, key: 'pixelPerfect' },
];

export function Features() {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-24 border-t border-border">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
                    {featureKeys.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex flex-col items-start"
                        >
                            <div className="mb-4 text-foreground">
                                <feature.icon className="h-8 w-8 stroke-1" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">
                                {t(`features.${feature.key}.title`)}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t(`features.${feature.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
