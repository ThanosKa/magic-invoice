'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSelector() {
    const { locale, setLocale, t } = useTranslation();
    const nextLocale = locale === 'en' ? 'gr' : 'en';

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(nextLocale)}
            title={locale === 'en' ? t('common.switchToGreek') : t('common.switchToEnglish')}
        >
            <Languages className="h-5 w-5" />
            <span className="sr-only">
                {locale === 'en' ? t('common.switchToGreek') : t('common.switchToEnglish')}
            </span>
        </Button>
    );
}
