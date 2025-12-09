"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "@/i18n/locales/en.json";
import grTranslations from "@/i18n/locales/gr.json";
import itTranslations from "@/i18n/locales/it.json";
import esTranslations from "@/i18n/locales/es.json";
import deTranslations from "@/i18n/locales/de.json";
import frTranslations from "@/i18n/locales/fr.json";

export type Locale = "en" | "gr" | "it" | "es" | "de" | "fr";
type Translations = typeof enTranslations;
type TranslationMap = Record<Locale, Translations>;

interface TranslationContextType {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const LOCALE_TO_BCP47: Record<Locale, string> = {
  en: "en-US",
  gr: "el-GR",
  it: "it-IT",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
};

const TRANSLATIONS: TranslationMap = {
  en: enTranslations,
  gr: grTranslations,
  it: itTranslations,
  es: esTranslations,
  de: deTranslations,
  fr: frTranslations,
};

const FALLBACK_LOCALE: Locale = "en";

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(FALLBACK_LOCALE);
  const [translations, setTranslations] =
    useState<Translations>(enTranslations);

  const setLocale = (newLocale: Locale) => {
    const nextLocale = TRANSLATIONS[newLocale] ? newLocale : FALLBACK_LOCALE;
    setLocaleState(nextLocale);
    localStorage.setItem("magic-invoice-locale", nextLocale);
  };

  useEffect(() => {
    // Load locale from localStorage on mount
    const savedLocale =
      (localStorage.getItem("magic-invoice-locale") as Locale | null) ||
      FALLBACK_LOCALE;
    setLocale(savedLocale);
  }, []);

  useEffect(() => {
    const resolvedTranslations =
      TRANSLATIONS[locale] || TRANSLATIONS[FALLBACK_LOCALE];
    setTranslations(resolvedTranslations);
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split(".");
    const lookup = (source: Translations): string | undefined => {
      let value: unknown = source;
      for (const k of keys) {
        value = (value as Record<string, unknown>)?.[k];
        if (value === undefined) return undefined;
      }
      return typeof value === "string" ? value : undefined;
    };

    return lookup(translations) || lookup(TRANSLATIONS[FALLBACK_LOCALE]) || key;
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
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
