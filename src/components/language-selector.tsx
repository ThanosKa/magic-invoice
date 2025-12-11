"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { locales, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
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

interface LanguageSelectorProps {
  compact?: boolean;
}

export function LanguageSelector({ compact = false }: LanguageSelectorProps = {}) {
  const { locale, setLocale, t } = useTranslation();

  const labels: Record<AppLocale, string> = {
    en: "English",
    gr: "Ελληνικά",
    it: "Italiano",
    es: "Español",
    de: "Deutsch",
    fr: "Français",
    nl: "Nederlands",
    pt: "Português",
    sv: "Svenska",
    pl: "Polski",
    cs: "Čeština",
  };

  return (
    <Select
      value={locale}
      onValueChange={(val) => setLocale(val as typeof locale)}
    >
      <SelectTrigger className={cn(
        "cursor-pointer",
        compact ? "w-32 h-9 px-2" : "w-40"
      )}>
        <div className="flex items-center gap-2">
          <GlobeIcon className={cn(
            "flex-shrink-0",
            compact ? "h-3 w-3" : "h-4 w-4"
          )} />
          <SelectValue placeholder={t("common.language")} />
        </div>
      </SelectTrigger>
      <SelectContent className="cursor-pointer max-h-[500px]">
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc} className="cursor-pointer">
            {labels[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
