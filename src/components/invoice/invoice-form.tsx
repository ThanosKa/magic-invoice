'use client';

import { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Wizard, useWizard } from 'react-use-wizard';
import { FormSchemaType } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { PartyForm } from './party-form';
import { DetailsForm } from './details-form';
import { ItemsForm } from './items-form';
import { PaymentForm } from './payment-form';
import { SummaryView } from './summary-view';
import { useTranslation } from "@/contexts/TranslationContext";

type StepConfig = {
    id: string;
    label: string;
    Component: React.ComponentType;
};

export function InvoiceForm() {
    const { trigger, formState } = useFormContext<FormSchemaType>();
    const { t } = useTranslation();

    const steps: StepConfig[] = useMemo(() => [
        { id: 'from-to', label: t('invoice.form.tabs.fromTo'), Component: PartyForm },
        { id: 'details', label: t('invoice.form.tabs.details'), Component: DetailsForm },
        { id: 'items', label: t('invoice.form.tabs.items'), Component: ItemsForm },
        { id: 'payment', label: t('invoice.form.tabs.payment'), Component: PaymentForm },
        { id: 'summary', label: t('invoice.form.tabs.summary'), Component: SummaryView },
    ], [t]);

    return (
        <div className="space-y-6">
            <Wizard
                header={<WizardProgress steps={steps} errors={formState.errors} />}
                footer={
                    <WizardNavigation
                        steps={steps}
                        validateCurrentStep={useCallback(() => trigger(), [trigger])}
                    />
                }
            >
                {steps.map(({ id, Component }) => (
                    <div key={id}>
                        <Component />
                    </div>
                ))}
            </Wizard>
        </div>
    );
}

function WizardProgress({ steps, errors }: { steps: StepConfig[]; errors: Record<string, unknown> }) {
    const { activeStep, goToStep } = useWizard();
    return (
        <div className="border-b border-border">
            <div className="flex space-x-4 overflow-x-auto">
                {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    const hasError = Object.keys(errors || {}).length > 0 && index <= activeStep;
                    return (
                        <button
                            key={step.id}
                            onClick={() => goToStep(index)}
                            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${isActive
                                ? 'border-foreground text-foreground'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                                } ${hasError ? 'text-destructive' : ''}`}
                        >
                            {step.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function WizardNavigation({
    steps,
    validateCurrentStep,
}: {
    steps: StepConfig[];
    validateCurrentStep: () => Promise<boolean>;
}) {
    const { activeStep, nextStep, previousStep, isFirstStep, isLastStep } = useWizard();
    const { t } = useTranslation();

    const handleNext = async () => {
        const valid = await validateCurrentStep();
        if (valid && !isLastStep) {
            nextStep();
        }
    };

    return (
        <div className="flex justify-between pt-4 border-t">
            <Button
                type="button"
                variant="outline"
                onClick={previousStep}
                disabled={isFirstStep}
            >
                {t('common.previous')}
            </Button>
            <Button
                type="button"
                onClick={handleNext}
                disabled={isLastStep}
            >
                {isLastStep ? t('invoice.form.tabs.summary') : t('common.next')}
            </Button>
        </div>
    );
}
