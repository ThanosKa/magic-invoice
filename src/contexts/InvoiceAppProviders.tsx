'use client';

import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { ChargesProvider } from './ChargesContext';
import { InvoiceProvider } from './InvoiceContext';
import { SignatureProvider } from './SignatureContext';
import { FormSchemaType } from '@/lib/schemas';

export function InvoiceAppProviders({
    methods,
    children,
}: {
    methods: UseFormReturn<FormSchemaType>;
    children: React.ReactNode;
}) {
    return (
        <FormProvider {...methods}>
            <SignatureProvider>
                <ChargesProvider>
                    <InvoiceProvider>{children}</InvoiceProvider>
                </ChargesProvider>
            </SignatureProvider>
        </FormProvider>
    );
}

