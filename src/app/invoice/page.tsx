"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FORM_DEFAULT_VALUES, FormSchemaType } from "@/lib/schemas";
import { useEffect } from "react";
import { saveToLocalStorage, loadFromLocalStorage } from "@/lib/helpers";
import { InvoiceForm } from "@/components/invoice/invoice-form";
import { InvoicePreview } from "@/components/invoice/invoice-preview";
import { useTranslation } from "@/contexts/TranslationContext";
import { InvoiceAppProviders } from "@/contexts/InvoiceAppProviders";
import { ThemeDropdown } from "@/components/theme-dropdown";
import { LanguageSelector } from "@/components/language-selector";
import { InvoiceActions } from "@/components/invoice/invoice-actions";

const DRAFT_KEY = "magic-invoice:invoiceDraft";

export default function InvoicePage() {
  const { t } = useTranslation();
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: FORM_DEFAULT_VALUES,
    mode: "onChange",
  });

  const { reset, control } = methods;

  // Load draft on mount
  useEffect(() => {
    const draft = loadFromLocalStorage<FormSchemaType | null>(DRAFT_KEY, null);
    if (draft) {
      // Revive dates
      if (draft.details.invoiceDate) {
        draft.details.invoiceDate = new Date(draft.details.invoiceDate);
      }
      if (draft.details.dueDate) {
        draft.details.dueDate = new Date(draft.details.dueDate);
      }
      reset(draft);
    }
  }, [reset]);

  // Auto-save draft on change using useWatch
  const watchedValues = useWatch({ control });

  useEffect(() => {
    if (watchedValues && Object.keys(watchedValues).length > 0) {
      saveToLocalStorage(DRAFT_KEY, watchedValues);
    }
  }, [watchedValues]);

  return (
    <InvoiceAppProviders methods={methods}>
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-card/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight">
                {t("invoice.title")}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeDropdown />
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-6">
              <InvoiceForm />
            </div>

            {/* Preview Section */}
            <div className="lg:sticky lg:top-8 lg:self-start space-y-4">
              <InvoiceActions />
              <InvoicePreview />
            </div>
          </div>
        </div>
      </div>
    </InvoiceAppProviders>
  );
}
