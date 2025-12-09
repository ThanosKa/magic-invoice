'use client';

import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function PartyForm() {
    const { register, formState: { errors } } = useFormContext<FormSchemaType>();

    return (
        <div className="space-y-8">
            {/* Sender Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">From (Sender)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="sender-name">Name / Company</Label>
                        <Input
                            id="sender-name"
                            {...register('sender.name')}
                            placeholder="Your Name or Company"
                        />
                        {errors.sender?.name && (
                            <p className="text-sm text-destructive">{errors.sender.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sender-email">Email</Label>
                        <Input
                            id="sender-email"
                            type="email"
                            {...register('sender.email')}
                            placeholder="your@email.com"
                        />
                        {errors.sender?.email && (
                            <p className="text-sm text-destructive">{errors.sender.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sender-phone">Phone</Label>
                        <Input
                            id="sender-phone"
                            {...register('sender.phone')}
                            placeholder="+1 234 567 8900"
                        />
                        {errors.sender?.phone && (
                            <p className="text-sm text-destructive">{errors.sender.phone.message}</p>
                        )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="sender-address">Address</Label>
                        <Input
                            id="sender-address"
                            {...register('sender.address')}
                            placeholder="123 Main St, City, Country"
                        />
                        {errors.sender?.address && (
                            <p className="text-sm text-destructive">{errors.sender.address.message}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Receiver Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">To (Client)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="receiver-name">Name / Company</Label>
                        <Input
                            id="receiver-name"
                            {...register('receiver.name')}
                            placeholder="Client Name or Company"
                        />
                        {errors.receiver?.name && (
                            <p className="text-sm text-destructive">{errors.receiver.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="receiver-email">Email</Label>
                        <Input
                            id="receiver-email"
                            type="email"
                            {...register('receiver.email')}
                            placeholder="client@email.com"
                        />
                        {errors.receiver?.email && (
                            <p className="text-sm text-destructive">{errors.receiver.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="receiver-phone">Phone</Label>
                        <Input
                            id="receiver-phone"
                            {...register('receiver.phone')}
                            placeholder="+1 234 567 8900"
                        />
                        {errors.receiver?.phone && (
                            <p className="text-sm text-destructive">{errors.receiver.phone.message}</p>
                        )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="receiver-address">Address</Label>
                        <Input
                            id="receiver-address"
                            {...register('receiver.address')}
                            placeholder="456 Client St, City, Country"
                        />
                        {errors.receiver?.address && (
                            <p className="text-sm text-destructive">{errors.receiver.address.message}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
