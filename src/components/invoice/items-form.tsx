'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { useCharges } from '@/contexts/ChargesContext';
import { useEffect } from 'react';
import { getCurrencySymbol } from '@/lib/helpers';
import { useTranslation } from "@/contexts/TranslationContext";

export function ItemsForm() {
    const { t } = useTranslation();
    const { register, control, watch, setValue } = useFormContext<FormSchemaType>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'details.items',
    });
    const { calculateTotals } = useCharges();

    const currency = watch('details.currency');
    const currencySymbol = getCurrencySymbol(currency || 'USD');

    // Recalculate totals when items change
    // Note: We use a separate useEffect in ChargesContext to watch field values changes 
    // but explicitly calling it here ensures updates on add/remove row immediately
    useEffect(() => {
        calculateTotals();
    }, [fields, calculateTotals]);

    const handleCreateItem = () => {
        append({
            name: '',
            description: '',
            quantity: 1,
            unitPrice: 0,
            total: 0
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{t('invoice.form.items.title')}</h3>
                <Button onClick={handleCreateItem} size="sm" className="flex gap-2">
                    <Plus className="h-4 w-4" /> {t('invoice.form.items.addItem')}
                </Button>
            </div>

            <div className="space-y-4">
                {fields.map((field, index) => {
                    // Watch values for this specific item to calculate row total
                    const quantity = watch(`details.items.${index}.quantity`);
                    const unitPrice = watch(`details.items.${index}.unitPrice`);

                    // Update row total effect
                    useEffect(() => {
                        const total = (parseFloat(String(quantity)) || 0) * (parseFloat(String(unitPrice)) || 0);
                        setValue(`details.items.${index}.total`, total);
                        // Trigger global recalculation
                        calculateTotals();
                    }, [quantity, unitPrice, setValue, index, calculateTotals]);

                    return (
                        <div key={field.id} className="grid grid-cols-12 gap-4 p-4 border rounded-lg bg-card/50 relative group">
                            <div className="col-span-12 md:col-span-5 space-y-2">
                                <Label>{t('invoice.form.items.itemNameLabel')}</Label>
                                <Input
                                    {...register(`details.items.${index}.name`)}
                                    placeholder={t('invoice.form.items.itemNamePlaceholder')}
                                />
                                <Input
                                    {...register(`details.items.${index}.description`)}
                                    placeholder={t('invoice.form.items.descriptionPlaceholder')}
                                    className="text-xs text-muted-foreground h-8"
                                />
                            </div>

                            <div className="col-span-4 md:col-span-2 space-y-2">
                                <Label>{t('invoice.form.items.qtyLabel')}</Label>
                                <Input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    {...register(`details.items.${index}.quantity`, { valueAsNumber: true })}
                                />
                            </div>

                            <div className="col-span-4 md:col-span-3 space-y-2">
                                <Label>{t('invoice.form.items.priceLabel')}</Label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-xs text-muted-foreground">{currencySymbol}</span>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        className="pl-8"
                                        {...register(`details.items.${index}.unitPrice`, { valueAsNumber: true })}
                                    />
                                </div>
                            </div>

                            <div className="col-span-3 md:col-span-1 space-y-2">
                                <Label>{t('invoice.form.items.totalLabel')}</Label>
                                <div className="h-10 flex items-center text-sm font-medium">
                                    {currencySymbol}{(watch(`details.items.${index}.total`) || 0).toFixed(2)}
                                </div>
                            </div>

                            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    className="h-6 w-6 rounded-full"
                                    onClick={() => remove(index)}
                                    disabled={fields.length === 1} // Prevent removing last item
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {fields.length === 0 && (
                <div className="text-center p-8 border-2 border-dashed rounded-lg text-muted-foreground">
                    {t('invoice.form.items.emptyState')}
                </div>
            )}
        </div>
    );
}
