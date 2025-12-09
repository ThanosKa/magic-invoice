'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { PartyForm } from './party-form';
import { DetailsForm } from './details-form';
import { ItemsForm } from './items-form';
import { PaymentForm } from './payment-form';
import { SummaryView } from './summary-view';
import { useTranslation } from "@/contexts/TranslationContext";

export function InvoiceForm() {
    const [activeTab, setActiveTab] = useState(0);
    const { formState } = useFormContext<FormSchemaType>();
    const { t } = useTranslation();

    const tabs = [
        { id: 'from-to', label: t('invoice.form.tabs.fromTo') },
        { id: 'details', label: t('invoice.form.tabs.details') },
        { id: 'items', label: t('invoice.form.tabs.items') },
        { id: 'payment', label: t('invoice.form.tabs.payment') },
        { id: 'summary', label: t('invoice.form.tabs.summary') },
    ] as const;

    const canGoNext = activeTab < tabs.length - 1;
    const canGoBack = activeTab > 0;

    const handleNext = () => {
        if (canGoNext) setActiveTab(activeTab + 1);
    };

    const handleBack = () => {
        if (canGoBack) setActiveTab(activeTab - 1);
    };

    return (
        <div className="space-y-6">
            {/* Tabs Navigation */}
            <div className="border-b border-border">
                <div className="flex space-x-4 overflow-x-auto">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${activeTab === index
                                ? 'border-foreground text-foreground'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="py-4">
                {activeTab === 0 && <PartyForm />}
                {activeTab === 1 && <DetailsForm />}
                {activeTab === 2 && <ItemsForm />}
                {activeTab === 3 && <PaymentForm />}
                {activeTab === 4 && <SummaryView />}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 border-t">
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={!canGoBack}
                >
                    {t('common.previous')}
                </Button>
                <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!canGoNext}
                >
                    {t('common.next')}
                </Button>
            </div>
        </div>
    );
}
