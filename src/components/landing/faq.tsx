"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/contexts/TranslationContext";

const faqKeys = ["isFree", "accountRequired", "customize", "dataSecure"];

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
            {t("faq.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqKeys.map((key, index) => {
              const itemValue = `item-${index}`;
              return (
                <AccordionItem key={itemValue} value={itemValue}>
                  <AccordionTrigger className="text-left text-lg">
                    {t(`faq.questions.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {t(`faq.questions.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
