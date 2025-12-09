'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { locales } from '@/i18n/routing';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Languages } from 'lucide-react';

export function LanguageSelector() {
    const { locale, setLocale, t } = useTranslation();

    const labelFor = (loc: string) => {
        switch (loc) {
            case 'en':
                return t('common.languageEnglish');
            case 'gr':
                return t('common.languageGreek');
            default:
                return loc.toUpperCase();
        }
    };

    return (
        <Select value={locale} onValueChange={(val) => setLocale(val as typeof locale)}>
            <SelectTrigger className="w-36">
                <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    <SelectValue placeholder={t('common.language')} />
                </div>
            </SelectTrigger>
            <SelectContent>
                {locales.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                        {labelFor(loc)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
