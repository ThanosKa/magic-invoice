'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from '@/lib/helpers';

type ExportFormat = 'json' | 'csv' | 'xml' | 'xlsx';

type SavedInvoice = {
    invoiceNumber: string;
    updatedAt: string;
    data: FormSchemaType;
};

interface InvoiceContextType {
    invoicePdf: Blob | null;
    generating: boolean;
    generatePdf: () => Promise<void>;
    downloadPdf: () => void;
    exportInvoice: (format: ExportFormat) => Promise<void>;
    sendPdfToEmail: (email: string) => Promise<void>;
    savedInvoices: SavedInvoice[];
    saveInvoice: () => void;
    loadInvoice: (invoiceNumber: string) => FormSchemaType | null;
    deleteInvoice: (invoiceNumber: string) => void;
    importInvoice: (file: File) => Promise<FormSchemaType>;
    setInvoicePdf: (blob: Blob | null) => void;
}

const SAVED_KEY = 'magic-invoice:savedInvoices';

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export function InvoiceProvider({ children }: { children: React.ReactNode }) {
    const { getValues, reset } = useFormContext<FormSchemaType>();
    const [invoicePdf, setInvoicePdf] = useState<Blob | null>(null);
    const [generating, setGenerating] = useState(false);

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

    const importInvoice = useCallback(
        async (file: File) => {
            const text = await file.text();
            const parsed = JSON.parse(text) as FormSchemaType;
            const revived = reviveDates(parsed);
            reset(revived);
            return revived;
        },
        [reset]
    );

    const generatePdf = useCallback(async () => {
        setGenerating(true);
        try {
            const formValues = getValues();
            const res = await fetch('/api/invoice/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ invoice: formValues }),
            });
            if (!res.ok) throw new Error('Failed to generate PDF');
            const blob = await res.blob();
            setInvoicePdf(blob);
        } finally {
            setGenerating(false);
        }
    }, [getValues]);

    const downloadBlob = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    const downloadPdf = useCallback(() => {
        if (!invoicePdf) return;
        downloadBlob(invoicePdf, 'invoice.pdf');
    }, [invoicePdf]);

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
            if (!invoicePdf) throw new Error('No PDF generated yet');
            const formValues = getValues();
            const formData = new FormData();
            formData.append('email', email);
            formData.append('invoiceNumber', formValues.details.invoiceNumber);
            formData.append('invoicePdf', invoicePdf, 'invoice.pdf');
            const res = await fetch('/api/invoice/send', { method: 'POST', body: formData });
            if (!res.ok) throw new Error('Failed to send email');
        },
        [getValues, invoicePdf]
    );

    const value: InvoiceContextType = {
        invoicePdf,
        generating,
        generatePdf,
        downloadPdf,
        exportInvoice,
        sendPdfToEmail,
        savedInvoices,
        saveInvoice,
        loadInvoice,
        deleteInvoice,
        importInvoice,
        setInvoicePdf,
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

