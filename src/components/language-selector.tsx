"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { locales, type AppLocale } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function LanguageSelector() {
  const { locale, setLocale, t } = useTranslation();

  const labels: Record<AppLocale, string> = {
    en: "English",
    gr: "Ελληνικά",
    it: "Italiano",
    es: "Español",
    de: "Deutsch",
    fr: "Français",
  };

  return (
    <Select
      value={locale}
      onValueChange={(val) => setLocale(val as typeof locale)}
    >
      <SelectTrigger className="w-40 cursor-pointer">
        <div className="flex items-center gap-2">
          <GlobeIcon className="h-4 w-4" />
          <SelectValue placeholder={t("common.language")} />
        </div>
      </SelectTrigger>
      <SelectContent className="cursor-pointer">
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc} className="cursor-pointer">
            {labels[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
