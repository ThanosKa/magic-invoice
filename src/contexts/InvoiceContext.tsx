'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { pdf } from '@react-pdf/renderer';
import { FormSchemaType } from '@/lib/schemas';
import { loadFromLocalStorage, saveToLocalStorage } from '@/lib/helpers';
import { InvoicePDF } from '@/components/invoice/invoice-pdf';

type ExportFormat = 'json' | 'csv' | 'xml' | 'xlsx';

type SavedInvoice = {
    invoiceNumber: string;
    updatedAt: string;
    data: FormSchemaType;
};

interface InvoiceContextType {
    downloadPdf: () => Promise<void>;
    exportInvoice: (format: ExportFormat) => Promise<void>;
    sendPdfToEmail: (email: string) => Promise<void>;
    savedInvoices: SavedInvoice[];
    saveInvoice: () => void;
    loadInvoice: (invoiceNumber: string) => FormSchemaType | null;
    deleteInvoice: (invoiceNumber: string) => void;
}

const SAVED_KEY = 'magic-invoice:savedInvoices';

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export function InvoiceProvider({ children }: { children: React.ReactNode }) {
    const { getValues, reset } = useFormContext<FormSchemaType>();

    const [savedInvoices, setSavedInvoices] = useState<SavedInvoice[]>(
        () => loadFromLocalStorage<SavedInvoice[]>(SAVED_KEY, [])
    );

    const persistSavedInvoices = (items: SavedInvoice[]) => {
        setSavedInvoices(items);
        saveToLocalStorage(SAVED_KEY, items);
    };

    const saveInvoice = useCallback(() => {
        const formValues = getValues();
        const list = loadFromLocalStorage<SavedInvoice[]>(SAVED_KEY, []);
        const next: SavedInvoice = {
            invoiceNumber: formValues.details.invoiceNumber,
            updatedAt: new Date().toISOString(),
            data: formValues,
        };
        const updated = [
            next,
            ...list.filter((i) => i.invoiceNumber !== formValues.details.invoiceNumber),
        ];
        persistSavedInvoices(updated);
    }, [getValues]);

    const loadInvoice = useCallback(
        (invoiceNumber: string) => {
            const list = loadFromLocalStorage<SavedInvoice[]>(SAVED_KEY, []);
            const found = list.find((i) => i.invoiceNumber === invoiceNumber);
            if (found) {
                const revived = reviveDates(found.data);
                reset(revived);
                return revived;
            }
            return null;
        },
        [reset]
    );

    const deleteInvoice = useCallback((invoiceNumber: string) => {
        const list = loadFromLocalStorage<SavedInvoice[]>(SAVED_KEY, []);
        const updated = list.filter((i) => i.invoiceNumber !== invoiceNumber);
        persistSavedInvoices(updated);
    }, []);

    const downloadBlob = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    const downloadPdf = useCallback(async () => {
        const formValues = getValues();
        const blob = await pdf(<InvoicePDF data={formValues} />).toBlob();
        downloadBlob(blob, `invoice-${formValues.details.invoiceNumber}.pdf`);
    }, [getValues]);

    const exportInvoice = useCallback(
        async (format: ExportFormat) => {
            const formValues = getValues();
            const res = await fetch(`/api/invoice/export?format=${format}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });
            if (!res.ok) throw new Error('Failed to export invoice');
            const blob = await res.blob();
            const extension = format === 'json' ? 'json' : format === 'csv' ? 'csv' : 'xml';
            downloadBlob(blob, `invoice.${extension}`);
        },
        [getValues]
    );

    const sendPdfToEmail = useCallback(
        async (email: string) => {
            const formValues = getValues();
            const blob = await pdf(<InvoicePDF data={formValues} />).toBlob();
            const formData = new FormData();
            formData.append('email', email);
            formData.append('invoiceNumber', formValues.details.invoiceNumber);
            formData.append('invoicePdf', blob, 'invoice.pdf');
            const res = await fetch('/api/invoice/send', { method: 'POST', body: formData });
            if (!res.ok) throw new Error('Failed to send email');
        },
        [getValues]
    );

    const value: InvoiceContextType = {
        downloadPdf,
        exportInvoice,
        sendPdfToEmail,
        savedInvoices,
        saveInvoice,
        loadInvoice,
        deleteInvoice,
    };

    return <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>;
}

function reviveDates(payload: FormSchemaType): FormSchemaType {
    const clone = structuredClone(payload);
    if (clone.details.invoiceDate) clone.details.invoiceDate = new Date(clone.details.invoiceDate);
    if (clone.details.dueDate) clone.details.dueDate = new Date(clone.details.dueDate);
    return clone;
}

export function useInvoice() {
    const ctx = useContext(InvoiceContext);
    if (!ctx) throw new Error('useInvoice must be used within InvoiceProvider');
    return ctx;
}

