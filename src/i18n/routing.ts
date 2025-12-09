export const locales = ['en', 'gr', 'it', 'es', 'de', 'fr'] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'en';

