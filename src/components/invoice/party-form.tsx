'use client';

import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from "@/contexts/TranslationContext";

export function PartyForm() {
    const { register, formState: { errors } } = useFormContext<FormSchemaType>();
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            {/* Sender Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t('invoice.form.party.sender.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="sender-name">{t('invoice.form.party.sender.nameLabel')}</Label>
                        <Input
                            id="sender-name"
                            {...register('sender.name')}
                            placeholder={t('invoice.form.party.sender.namePlaceholder')}
                        />
                        {errors.sender?.name?.message && (
                            <p className="text-sm text-destructive">{t(errors.sender.name.message as string)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sender-email">{t('invoice.form.party.sender.emailLabel')}</Label>
                        <Input
                            id="sender-email"
                            type="email"
                            {...register('sender.email')}
                            placeholder={t('invoice.form.party.sender.emailPlaceholder')}
                        />
                        {errors.sender?.email?.message && (
                            <p className="text-sm text-destructive">{t(errors.sender.email.message as string)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sender-phone">{t('invoice.form.party.sender.phoneLabel')}</Label>
                        <Input
                            id="sender-phone"
                            {...register('sender.phone')}
                            placeholder={t('invoice.form.party.sender.phonePlaceholder')}
                        />
                        {errors.sender?.phone?.message && (
                            <p className="text-sm text-destructive">{t(errors.sender.phone.message as string)}</p>
                        )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="sender-address">{t('invoice.form.party.sender.addressLabel')}</Label>
                        <Input
                            id="sender-address"
                            {...register('sender.address')}
                            placeholder={t('invoice.form.party.sender.addressPlaceholder')}
                        />
                        {errors.sender?.address?.message && (
                            <p className="text-sm text-destructive">{t(errors.sender.address.message as string)}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Receiver Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t('invoice.form.party.receiver.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="receiver-name">{t('invoice.form.party.receiver.nameLabel')}</Label>
                        <Input
                            id="receiver-name"
                            {...register('receiver.name')}
                            placeholder={t('invoice.form.party.receiver.namePlaceholder')}
                        />
                        {errors.receiver?.name?.message && (
                            <p className="text-sm text-destructive">{t(errors.receiver.name.message as string)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="receiver-email">{t('invoice.form.party.receiver.emailLabel')}</Label>
                        <Input
                            id="receiver-email"
                            type="email"
                            {...register('receiver.email')}
                            placeholder={t('invoice.form.party.receiver.emailPlaceholder')}
                        />
                        {errors.receiver?.email?.message && (
                            <p className="text-sm text-destructive">{t(errors.receiver.email.message as string)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="receiver-phone">{t('invoice.form.party.receiver.phoneLabel')}</Label>
                        <Input
                            id="receiver-phone"
                            {...register('receiver.phone')}
                            placeholder={t('invoice.form.party.receiver.phonePlaceholder')}
                        />
                        {errors.receiver?.phone?.message && (
                            <p className="text-sm text-destructive">{t(errors.receiver.phone.message as string)}</p>
                        )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="receiver-address">{t('invoice.form.party.receiver.addressLabel')}</Label>
                        <Input
                            id="receiver-address"
                            {...register('receiver.address')}
                            placeholder={t('invoice.form.party.receiver.addressPlaceholder')}
                        />
                        {errors.receiver?.address?.message && (
                            <p className="text-sm text-destructive">{t(errors.receiver.address.message as string)}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
