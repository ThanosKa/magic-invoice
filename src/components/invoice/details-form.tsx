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

export function DetailsForm() {
    const { register, control, setValue, watch, formState: { errors } } = useFormContext<FormSchemaType>();

    // Watch dates for calendar logic
    const invoiceDate = watch('details.invoiceDate');
    const dueDate = watch('details.dueDate');
    const currency = watch('details.currency');

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Invoice Number */}
                <div className="space-y-2">
                    <Label htmlFor="invoice-number">Invoice Number</Label>
                    <Input
                        id="invoice-number"
                        {...register('details.invoiceNumber')}
                        placeholder="INV-001"
                    />
                    {errors.details?.invoiceNumber && (
                        <p className="text-sm text-destructive">{errors.details.invoiceNumber.message}</p>
                    )}
                </div>

                {/* Currency Selector */}
                <div className="space-y-2">
                    <Label>Currency</Label>
                    <Select
                        onValueChange={(value) => setValue('details.currency', value)}
                        defaultValue={currency}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
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
                    <Label>Date</Label>
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
                                    <span>Pick a date</span>
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
                    <Label>Due Date</Label>
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
                                    <span>Pick a date</span>
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
                    <Label>Invoice Logo (URL)</Label>
                    <Input
                        {...register('details.invoiceLogo')}
                        placeholder="https://example.com/logo.png"
                    />
                    <p className="text-xs text-muted-foreground">Or leave empty for no logo.</p>
                </div>
            </div>
        </div>
    );
}
