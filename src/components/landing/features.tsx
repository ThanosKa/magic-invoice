"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const featureKeys = [
  { icon: Zap, key: "lightningFast" },
  { icon: Shield, key: "privateSecure" },
  { icon: Globe, key: "globalUniversal" },
  { icon: CheckCircle2, key: "pixelPerfect" },
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24 border-t border-border">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border bg-card transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-2 text-xl font-bold tracking-tight">
                    {t(`features.${feature.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t(`features.${feature.key}.description`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
