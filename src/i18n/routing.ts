export const locales = ['en', 'gr'] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'en';

