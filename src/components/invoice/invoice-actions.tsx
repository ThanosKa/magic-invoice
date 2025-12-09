'use client';

import { Button } from '@/components/ui/button';
import { useInvoice } from '@/contexts/InvoiceContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Download } from 'lucide-react';

export function InvoiceActions() {
    const { t } = useTranslation();
    const { downloadPdf, exportInvoice, saveInvoice, savedInvoices, loadInvoice, deleteInvoice } = useInvoice();

    return (
        <div className="rounded-lg border bg-card p-4 shadow-sm space-y-4">
            <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={saveInvoice}>{t('invoice.actions.save')}</Button>
                <Button size="sm" variant="outline" onClick={downloadPdf}>
                    <Download className="h-4 w-4 mr-1" />
                    {t('invoice.actions.downloadPdf')}
                </Button>
                <Button size="sm" variant="secondary" onClick={() => exportInvoice('json')}>
                    <Download className="h-4 w-4 mr-1" />
                    Download JSON
                </Button>
                <Button size="sm" variant="secondary" onClick={() => exportInvoice('csv')}>
                    <Download className="h-4 w-4 mr-1" />
                    Download CSV
                </Button>
                <Button size="sm" variant="secondary" onClick={() => exportInvoice('xml')}>
                    <Download className="h-4 w-4 mr-1" />
                    Download XML
                </Button>
            </div>

            {savedInvoices.length > 0 && (
                <div className="space-y-2">
                    <p className="text-sm font-medium">{t('invoice.actions.savedList')}</p>
                    <div className="flex flex-wrap gap-2">
                        {savedInvoices.map((inv) => (
                            <div key={inv.invoiceNumber} className="flex items-center gap-2 rounded border px-2 py-1 text-sm">
                                <span className="font-medium">{inv.invoiceNumber}</span>
                                <Button size="sm" variant="ghost" onClick={() => loadInvoice(inv.invoiceNumber)}>
                                    {t('common.load')}
                                </Button>
                                <Button size="sm" variant="ghost" onClick={() => deleteInvoice(inv.invoiceNumber)}>
                                    {t('common.delete')}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

