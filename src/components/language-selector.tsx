'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSelector() {
    const { locale, setLocale } = useTranslation();

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'de' : 'en');
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            title={`Switch to ${locale === 'en' ? 'German' : 'English'}`}
        >
            <Languages className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}
