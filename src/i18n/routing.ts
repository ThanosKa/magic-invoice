export const locales = ['en', 'gr', 'it', 'es', 'de', 'fr', 'nl', 'pt', 'sv', 'pl', 'cs'] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'en';

