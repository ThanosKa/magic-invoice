'use client';

import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import currencies from '@/lib/currencies.json';
import { useTranslation } from "@/contexts/TranslationContext";

export function DetailsForm() {
    const { register, control, setValue, watch, formState: { errors } } = useFormContext<FormSchemaType>();
    const { t } = useTranslation();

    // Watch dates for calendar logic
    const invoiceDate = watch('details.invoiceDate');
    const dueDate = watch('details.dueDate');
    const currency = watch('details.currency');

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Invoice Number */}
                <div className="space-y-2">
                    <Label htmlFor="invoice-number">{t('invoice.form.details.invoiceNumberLabel')}</Label>
                    <Input
                        id="invoice-number"
                        {...register('details.invoiceNumber')}
                        placeholder={t('invoice.form.details.invoiceNumberPlaceholder')}
                    />
                    {errors.details?.invoiceNumber && (
                        <p className="text-sm text-destructive">{errors.details.invoiceNumber.message}</p>
                    )}
                </div>

                {/* Currency Selector */}
                <div className="space-y-2">
                    <Label>{t('invoice.form.details.currencyLabel')}</Label>
                    <Select
                        onValueChange={(value) => setValue('details.currency', value)}
                        defaultValue={currency}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={t('invoice.form.details.currencyPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            {currencies.map((curr) => (
                                <SelectItem key={curr.code} value={curr.code}>
                                    {curr.name} ({curr.symbol})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.details?.currency && (
                        <p className="text-sm text-destructive">{errors.details.currency.message}</p>
                    )}
                </div>

                {/* Invoice Date */}
                <div className="space-y-2 flex flex-col">
                    <Label>{t('invoice.form.details.dateLabel')}</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !invoiceDate && "text-muted-foreground"
                                )}
                            >
                                {invoiceDate ? (
                                    format(invoiceDate, "PPP")
                                ) : (
                                    <span>{t('invoice.form.details.pickDate')}</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={invoiceDate}
                                onSelect={(date) => date && setValue('details.invoiceDate', date)}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {errors.details?.invoiceDate && (
                        <p className="text-sm text-destructive">{errors.details.invoiceDate.message}</p>
                    )}
                </div>

                {/* Due Date */}
                <div className="space-y-2 flex flex-col">
                    <Label>{t('invoice.form.details.dueDateLabel')}</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !dueDate && "text-muted-foreground"
                                )}
                            >
                                {dueDate ? (
                                    format(dueDate, "PPP")
                                ) : (
                                    <span>{t('invoice.form.details.pickDate')}</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={dueDate}
                                onSelect={(date) => date && setValue('details.dueDate', date)}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {errors.details?.dueDate && (
                        <p className="text-sm text-destructive">{errors.details.dueDate.message}</p>
                    )}
                </div>

                {/* Logo Upload Placeholder - Todo: Implement File Upload */}
                <div className="space-y-2 md:col-span-2">
                    <Label>{t('invoice.form.details.logoLabel')}</Label>
                    <Input
                        {...register('details.invoiceLogo')}
                        placeholder={t('invoice.form.details.logoPlaceholder')}
                    />
                    <p className="text-xs text-muted-foreground">{t('invoice.form.details.logoHelp')}</p>
                </div>
            </div>
        </div>
    );
}
