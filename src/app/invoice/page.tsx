'use client';

import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FORM_DEFAULT_VALUES, FormSchemaType } from '@/lib/schemas';
import { ChargesProvider } from '@/contexts/ChargesContext';
import { useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '@/lib/helpers';
import { InvoiceForm } from '@/components/invoice/invoice-form';
import { InvoicePreview } from '@/components/invoice/invoice-preview';
import { useTranslation } from '@/contexts/TranslationContext';

const DRAFT_KEY = 'magic-invoice:invoiceDraft';

export default function InvoicePage() {
    const { t } = useTranslation();
    const methods = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: FORM_DEFAULT_VALUES,
        mode: 'onChange',
    });

    const { watch, reset } = methods;

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

    // Auto-save draft on change
    useEffect(() => {
        const subscription = watch((value) => {
            saveToLocalStorage(DRAFT_KEY, value);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <FormProvider {...methods}>
            <ChargesProvider>
                <div className="min-h-screen bg-background">
                    <div className="container mx-auto p-4 lg:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Form Section */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-3xl font-bold tracking-tight">{t('invoice.title')}</h1>
                                </div>
                                <InvoiceForm />
                            </div>

                            {/* Preview Section */}
                            <div className="lg:sticky lg:top-8 lg:self-start">
                                <InvoicePreview />
                            </div>
                        </div>
                    </div>
                </div>
            </ChargesProvider>
        </FormProvider>
    );
}
