'use client';

import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { TranslationProvider } from '@/contexts/TranslationContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <TranslationProvider>{children}</TranslationProvider>
        </ThemeProvider>
    );
}

