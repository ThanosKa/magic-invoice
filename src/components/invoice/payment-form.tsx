'use client';

import { useFormContext, useWatch } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getCurrencySymbol } from '@/lib/helpers';

export function PaymentForm() {
    const { register, control, setValue } = useFormContext<FormSchemaType>();
    const currency = useWatch({ control, name: 'details.currency' });
    const currencySymbol = getCurrencySymbol(currency || 'USD');

    // Watch checks for toggles
    const discountEnabled = useWatch({ control, name: 'details.discountDetails.enabled' });
    const taxEnabled = useWatch({ control, name: 'details.taxDetails.enabled' });
    const shippingEnabled = useWatch({ control, name: 'details.shippingDetails.enabled' });

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Charges & Discounts</h3>

                {/* Discount Toggle */}
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card/30">
                    <div className="flex items-center space-x-4">
                        <Switch
                            checked={discountEnabled}
                            onCheckedChange={(c) => setValue('details.discountDetails.enabled', c)}
                        />
                        <Label>Apply Discount</Label>
                    </div>

                    {discountEnabled && (
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                className="w-24"
                                {...register('details.discountDetails.amount', { valueAsNumber: true })}
                            />
                            <Select
                                onValueChange={(v: any) => setValue('details.discountDetails.amountType', v)}
                                defaultValue={useWatch({ control, name: 'details.discountDetails.amountType' })}
                            >
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="amount">{currencySymbol}</SelectItem>
                                    <SelectItem value="percentage">%</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                </div>

                {/* Tax Toggle */}
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card/30">
                    <div className="flex items-center space-x-4">
                        <Switch
                            checked={taxEnabled}
                            onCheckedChange={(c) => setValue('details.taxDetails.enabled', c)}
                        />
                        <Label>Apply Tax / VAT</Label>
                    </div>

                    {taxEnabled && (
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                className="w-24"
                                {...register('details.taxDetails.amount', { valueAsNumber: true })}
                            />
                            <Select
                                onValueChange={(v: any) => setValue('details.taxDetails.amountType', v)}
                                defaultValue={useWatch({ control, name: 'details.taxDetails.amountType' })}
                            >
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="amount">{currencySymbol}</SelectItem>
                                    <SelectItem value="percentage">%</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                </div>

                {/* Shipping Toggle */}
                <div className="flex items-center justify-between p-4 border rounded-lg bg-card/30">
                    <div className="flex items-center space-x-4">
                        <Switch
                            checked={shippingEnabled}
                            onCheckedChange={(c) => setValue('details.shippingDetails.enabled', c)}
                        />
                        <Label>Shipping Cost</Label>
                    </div>

                    {shippingEnabled && (
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                className="w-24"
                                {...register('details.shippingDetails.amount', { valueAsNumber: true })}
                            />
                            <Select
                                onValueChange={(v: any) => setValue('details.shippingDetails.amountType', v)}
                                defaultValue={useWatch({ control, name: 'details.shippingDetails.amountType' })}
                            >
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="amount">{currencySymbol}</SelectItem>
                                    <SelectItem value="percentage">%</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment Information</h3>
                <div className="space-y-2">
                    <Label>Bank Details / Payment Instructions</Label>
                    <Textarea
                        {...register('details.paymentInformation')}
                        placeholder="Bank Name: Example Bank&#10;Account No: 123456789&#10;Swift Code: EXAMPLE"
                        className="h-24"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Terms & Conditions</Label>
                    <Textarea
                        {...register('details.termsConditions')}
                        placeholder="Payment due within 30 days..."
                    />
                </div>

                <div className="space-y-2">
                    <Label>Additional Notes</Label>
                    <Textarea
                        {...register('details.notes')}
                        placeholder="Thank you for your business!"
                    />
                </div>
            </div>
        </div>
    );
}
