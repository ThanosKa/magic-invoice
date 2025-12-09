'use client';

import { useFormContext, useWatch } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency, formatDate } from '@/lib/helpers';
import { LOCALE_TO_BCP47, useTranslation } from "@/contexts/TranslationContext";
import { Button } from '@/components/ui/button';
import { useInvoice } from '@/contexts/InvoiceContext';

export function SummaryView() {
    const { control } = useFormContext<FormSchemaType>();
    const { t, locale } = useTranslation();
    const intlLocale = LOCALE_TO_BCP47[locale];
    const values = useWatch({ control });
    const { generatePdf, downloadPdf, exportInvoice, saveInvoice, savedInvoices, loadInvoice, deleteInvoice } = useInvoice();

    if (!values.details) return null;

    const { sender, receiver, details } = values;

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={saveInvoice}>{t('invoice.actions.save')}</Button>
                <Button size="sm" variant="outline" onClick={generatePdf}>{t('invoice.actions.generatePdf')}</Button>
                <Button size="sm" variant="outline" onClick={downloadPdf}>{t('invoice.actions.downloadPdf')}</Button>
                <Button size="sm" variant="outline" onClick={() => exportInvoice('json')}>JSON</Button>
                <Button size="sm" variant="outline" onClick={() => exportInvoice('csv')}>CSV</Button>
                <Button size="sm" variant="outline" onClick={() => exportInvoice('xml')}>XML</Button>
            </div>

            {savedInvoices.length > 0 && (
                <div className="border rounded-lg p-3 space-y-2">
                    <p className="text-sm font-medium">{t('invoice.actions.savedList')}</p>
                    <div className="flex flex-wrap gap-2">
                        {savedInvoices.map((inv) => (
                            <div key={inv.invoiceNumber} className="flex items-center gap-2 border rounded px-2 py-1">
                                <span className="text-sm">{inv.invoiceNumber}</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-muted-foreground">{t('invoice.form.summary.fromTitle')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold text-lg">{sender?.name}</p>
                        <div className="text-sm text-muted-foreground space-y-1 mt-2">
                            <p>{sender?.email}</p>
                            <p>{sender?.phone}</p>
                            <p className="whitespace-pre-wrap">{sender?.address}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-muted-foreground">{t('invoice.form.summary.toTitle')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold text-lg">{receiver?.name}</p>
                        <div className="text-sm text-muted-foreground space-y-1 mt-2">
                            <p>{receiver?.email}</p>
                            <p>{receiver?.phone}</p>
                            <p className="whitespace-pre-wrap">{receiver?.address}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('invoice.form.summary.invoiceDetailsTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">{t('invoice.form.summary.numberLabel')}</p>
                            <p className="font-medium">{details.invoiceNumber}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">{t('invoice.form.summary.dateLabel')}</p>
                            <p className="font-medium">{details.invoiceDate ? formatDate(details.invoiceDate, undefined, intlLocale) : '-'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">{t('invoice.form.summary.dueDateLabel')}</p>
                            <p className="font-medium">{details.dueDate ? formatDate(details.dueDate, undefined, intlLocale) : '-'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">{t('invoice.form.summary.totalLabel')}</p>
                            <p className="font-bold text-primary">
                                {formatCurrency(Number(details.totalAmount || 0), details.currency, intlLocale)}
                            </p>
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-2">{t('invoice.form.summary.itemsLabel')} ({details.items?.length || 0})</p>
                        <ul className="space-y-2">
                            {details.items?.map((item, i) => (
                                <li key={i} className="flex justify-between text-sm">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>{formatCurrency(Number(item.total || 0), details.currency, intlLocale)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
