'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/i18n/locales/en.json';

type Translations = typeof enTranslations;

interface TranslationContextType {
    locale: string;
    t: (key: string) => string;
    setLocale: (locale: string) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState('en');
    const [translations, setTranslations] = useState<Translations>(enTranslations);

    useEffect(() => {
        // Load locale from localStorage on mount
        const savedLocale = localStorage.getItem('magic-invoice-locale') || 'en';
        setLocaleState(savedLocale);
    }, []);

    const setLocale = (newLocale: string) => {
        setLocaleState(newLocale);
        localStorage.setItem('magic-invoice-locale', newLocale);
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) return key;
        }

        return typeof value === 'string' ? value : key;
    };

    return (
        <TranslationContext.Provider value={{ locale, t, setLocale }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}
