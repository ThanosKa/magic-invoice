'use client';

import { useFormContext, useWatch } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Card } from '@/components/ui/card';
import { formatDate, formatCurrency } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { Eye } from 'lucide-react';

export function InvoicePreview() {
    const { control } = useFormContext<FormSchemaType>();
    const values = useWatch({ control });

    const { sender, receiver, details } = values;

    if (!sender || !receiver || !details) return null;

    return (
        <Card className="overflow-hidden border-2 shadow-xl bg-white text-slate-900" id="invoice-preview">
            {/* Invoice Header / Status Bar */}
            <div className="bg-slate-100 p-3 border-b flex justify-between items-center text-xs text-slate-500">
                <div className="flex items-center gap-2">
                    <Eye className="h-3 w-3" /> Live Preview
                </div>
                <div>A4 Format</div>
            </div>

            {/* Invoice Content (Scaled A4 representation) */}
            <div className="p-8 min-h-[800px] text-sm relative">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">INVOICE</h1>
                        <p className="text-slate-500 mt-1">#{details.invoiceNumber}</p>
                    </div>
                    <div className="text-right">
                        {details.invoiceLogo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={details.invoiceLogo} alt="Logo" className="h-16 object-contain ml-auto" />
                        ) : (
                            <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 ml-auto">
                                Logo
                            </div>
                        )}
                    </div>
                </div>

                {/* Addresses */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">From</h3>
                        <div className="font-semibold text-slate-900">{sender.name || 'Sender Name'}</div>
                        <div className="text-slate-600 whitespace-pre-wrap">{sender.address || 'Sender Address...'}</div>
                        {sender.email && <div className="text-slate-600 mt-1">{sender.email}</div>}
                    </div>
                    <div className="text-right">
                        <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">To</h3>
                        <div className="font-semibold text-slate-900">{receiver.name || 'Client Name'}</div>
                        <div className="text-slate-600 whitespace-pre-wrap">{receiver.address || 'Client Address...'}</div>
                        {receiver.email && <div className="text-slate-600 mt-1">{receiver.email}</div>}
                    </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-8 mb-12 bg-slate-50 p-6 rounded-lg">
                    <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Date Issue</div>
                        <div className="font-medium cursor-pointer">
                            {details.invoiceDate && details.invoiceDate instanceof Date ? formatDate(details.invoiceDate) : (typeof details.invoiceDate === 'string' ? details.invoiceDate : 'Select date')}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Date Due</div>
                        <div className="font-medium">
                            {details.dueDate && details.dueDate instanceof Date ? formatDate(details.dueDate) : (typeof details.dueDate === 'string' ? details.dueDate : 'Select due date')}
                        </div>
                    </div>
                </div>

                {/* Line Items Table */}
                <div className="mb-4">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="py-3 font-semibold text-slate-900">Description</th>
                                <th className="py-3 text-right font-semibold text-slate-900 w-24">Qty</th>
                                <th className="py-3 text-right font-semibold text-slate-900 w-32">Price</th>
                                <th className="py-3 text-right font-semibold text-slate-900 w-32">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.items?.map((item, i) => (
                                <tr key={i} className="border-b border-slate-100 last:border-0">
                                    <td className="py-4">
                                        <div className="font-medium text-slate-900">{item.name || 'Item Name'}</div>
                                        {item.description && <div className="text-slate-500 text-xs mt-1">{item.description}</div>}
                                    </td>
                                    <td className="py-4 text-right text-slate-600">{item.quantity}</td>
                                    <td className="py-4 text-right text-slate-600">
                                        {formatCurrency(Number(item.unitPrice || 0), details.currency)}
                                    </td>
                                    <td className="py-4 text-right font-medium text-slate-900">
                                        {formatCurrency(Number(item.total || 0), details.currency)}
                                    </td>
                                </tr>
                            ))}
                            {(!details.items || details.items.length === 0) && (
                                <tr>
                                    <td className="py-8 text-center text-slate-400" colSpan={4}>
                                        No items added
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end mb-12">
                    <div className="w-64 space-y-3">
                        <div className="flex justify-between text-slate-600">
                            <span>Subtotal</span>
                            <span>{formatCurrency(Number(details.subTotal || 0), details.currency)}</span>
                        </div>

                        {details.discountDetails?.enabled && (
                            <div className="flex justify-between text-emerald-600">
                                <span>Discount {details.discountDetails.amountType === 'percentage' && `(${details.discountDetails.amount}%)`}</span>
                                <span>- {formatCurrency(
                                    details.discountDetails.amountType === 'percentage'
                                        ? (Number(details.subTotal || 0) * Number(details.discountDetails.amount || 0) / 100)
                                        : Number(details.discountDetails.amount || 0),
                                    details.currency
                                )}</span>
                            </div>
                        )}

                        {details.taxDetails?.enabled && (
                            <div className="flex justify-between text-slate-600">
                                <span>Tax {details.taxDetails.amountType === 'percentage' && `(${details.taxDetails.amount}%)`}</span>
                                <span>+ {formatCurrency(
                                    details.taxDetails.amountType === 'percentage'
                                        ? ((Number(details.subTotal || 0) - (details.discountDetails?.enabled ? (details.discountDetails.amountType === 'percentage' ? Number(details.subTotal || 0) * Number(details.discountDetails.amount || 0) / 100 : Number(details.discountDetails.amount || 0)) : 0)) * Number(details.taxDetails.amount || 0) / 100)
                                        : Number(details.taxDetails.amount || 0),
                                    details.currency
                                )}</span>
                            </div>
                        )}

                        {details.shippingDetails?.enabled && (
                            <div className="flex justify-between text-slate-600">
                                <span>Shipping</span>
                                <span>+ {formatCurrency(
                                    details.shippingDetails.amountType === 'percentage'
                                        ? (Number(details.subTotal || 0) * Number(details.shippingDetails.amount || 0) / 100)
                                        : Number(details.shippingDetails.amount || 0),
                                    details.currency
                                )}</span>
                            </div>
                        )}

                        <div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-bold text-slate-900">
                            <span>Total</span>
                            <span>{formatCurrency(Number(details.totalAmount || 0), details.currency)}</span>
                        </div>
                    </div>
                </div>

                {/* Footer Notes */}
                <div className="grid grid-cols-2 gap-8 text-sm pt-8 border-t border-slate-200">
                    <div>
                        {details.paymentInformation && (
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-900 mb-1">Payment Info</h4>
                                <p className="text-slate-600 whitespace-pre-wrap">{details.paymentInformation}</p>
                            </div>
                        )}
                        {details.termsConditions && (
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Terms & Conditions</h4>
                                <p className="text-slate-600 whitespace-pre-wrap">{details.termsConditions}</p>
                            </div>
                        )}
                    </div>

                    {details.notes && (
                        <div className="text-right">
                            <h4 className="font-bold text-slate-900 mb-1">Notes</h4>
                            <p className="text-slate-600 italic whitespace-pre-wrap">{details.notes}</p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
