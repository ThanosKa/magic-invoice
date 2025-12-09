'use client';

import { useFormContext, useWatch } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency, formatDate } from '@/lib/helpers';

export function SummaryView() {
    const { control } = useFormContext<FormSchemaType>();
    const values = useWatch({ control });

    if (!values.details) return null;

    const { sender, receiver, details } = values;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-muted-foreground">From</CardTitle>
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
                        <CardTitle className="text-base text-muted-foreground">To</CardTitle>
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
                    <CardTitle>Invoice Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Number</p>
                            <p className="font-medium">{details.invoiceNumber}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-medium">{details.invoiceDate ? formatDate(details.invoiceDate) : '-'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Due Date</p>
                            <p className="font-medium">{details.dueDate ? formatDate(details.dueDate) : '-'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total</p>
                            <p className="font-bold text-primary">
                                {formatCurrency(Number(details.totalAmount || 0), details.currency)}
                            </p>
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-2">Items ({details.items?.length || 0})</p>
                        <ul className="space-y-2">
                            {details.items?.map((item, i) => (
                                <li key={i} className="flex justify-between text-sm">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>{formatCurrency(Number(item.total || 0), details.currency)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
