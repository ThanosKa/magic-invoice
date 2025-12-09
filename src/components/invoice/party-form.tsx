'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { useTranslation } from "@/contexts/TranslationContext";

export function PartyForm() {
    const { register, control, formState: { errors } } = useFormContext<FormSchemaType>();
    const { t } = useTranslation();

    const senderCustomInputs = useFieldArray({ control, name: 'sender.customInputs' });
    const receiverCustomInputs = useFieldArray({ control, name: 'receiver.customInputs' });

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t('invoice.form.party.sender.title')}</h3>
                    <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => senderCustomInputs.append({ key: '', value: '' })}
                    >
                        <Plus className="h-4 w-4 mr-1" /> {t('invoice.form.items.addItem')}
                    </Button>
                </div>

                <div className="space-y-3">
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

                    <div className="space-y-3">
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
                    </div>

                    <div className="space-y-2">
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

                <div className="space-y-2">
                    <Label>{t('invoice.form.party.sender.customInputs')}</Label>
                    <div className="space-y-2">
                        {senderCustomInputs.fields.map((field, idx) => (
                            <div key={field.id} className="grid grid-cols-6 gap-2">
                                <Input
                                    className="col-span-2 sm:col-span-2"
                                    placeholder={t('invoice.form.party.sender.customKey')}
                                    {...register(`sender.customInputs.${idx}.key`)}
                                />
                                <Input
                                    className="col-span-3 sm:col-span-3"
                                    placeholder={t('invoice.form.party.sender.customValue')}
                                    {...register(`sender.customInputs.${idx}.value`)}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => senderCustomInputs.remove(idx)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                        {senderCustomInputs.fields.length === 0 && (
                            <p className="text-xs text-muted-foreground">{t('invoice.form.party.sender.customHint')}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="rounded-lg border bg-card p-4 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t('invoice.form.party.receiver.title')}</h3>
                    <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => receiverCustomInputs.append({ key: '', value: '' })}
                    >
                        <Plus className="h-4 w-4 mr-1" /> {t('invoice.form.items.addItem')}
                    </Button>
                </div>

                <div className="space-y-3">
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

                    <div className="space-y-3">
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
                    </div>

                    <div className="space-y-2">
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

                <div className="space-y-2">
                    <Label>{t('invoice.form.party.receiver.customInputs')}</Label>
                    <div className="space-y-2">
                        {receiverCustomInputs.fields.map((field, idx) => (
                            <div key={field.id} className="grid grid-cols-6 gap-2">
                                <Input
                                    className="col-span-2 sm:col-span-2"
                                    placeholder={t('invoice.form.party.receiver.customKey')}
                                    {...register(`receiver.customInputs.${idx}.key`)}
                                />
                                <Input
                                    className="col-span-3 sm:col-span-3"
                                    placeholder={t('invoice.form.party.receiver.customValue')}
                                    {...register(`receiver.customInputs.${idx}.value`)}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => receiverCustomInputs.remove(idx)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                        {receiverCustomInputs.fields.length === 0 && (
                            <p className="text-xs text-muted-foreground">{t('invoice.form.party.receiver.customHint')}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
