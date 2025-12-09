export function formatNumberWithCommas(
  num: number,
  locale: string = "en-US"
): string {
  if (!Number.isFinite(num)) return "0.00";
  return num.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (error) {
    return `${getCurrencySymbol(currency)}${formatNumberWithCommas(
      amount,
      locale
    )}`;
  }
}

export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CAD: "C$",
    AUD: "A$",
    CHF: "CHF",
    CNY: "¥",
    INR: "₹",
  };
  return symbols[currency] || currency + " ";
}

export function parseNumber(value: string | number): number {
  if (typeof value === "number") return value;
  return parseFloat(value.replace(/,/g, "")) || 0;
}

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = DATE_OPTIONS,
  locale: string = "en-US"
): string {
  return new Intl.DateTimeFormat(locale, options).format(date);
}

import { ToWords } from "to-words";

const TO_WORDS_LOCALES: Record<string, string> = {
  en: "en-US",
  gr: "el-GR",
};

const CURRENCY_LABELS = {
  en: {
    singular: "Dollar",
    plural: "Dollars",
    centSingular: "Cent",
    centPlural: "Cents",
  },
  gr: {
    singular: "Δολάριο",
    plural: "Δολάρια",
    centSingular: "Σεντ",
    centPlural: "Σεντ",
  },
} as const;

export function formatPriceToString(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  if (!Number.isFinite(amount)) return "Zero";

  const localeKey =
    locale.toLowerCase().startsWith("el") ||
    locale.toLowerCase().startsWith("gr")
      ? "gr"
      : "en";

  const toWords = getToWords(localeKey);
  const fallbackFormatter =
    localeKey === "gr" ? numberToWordsGr : numberToWordsEn;

  const convert = (value: number): string => {
    try {
      return toWords.convert(value, { ignoreDecimal: true });
    } catch {
      return fallbackFormatter(value);
    }
  };

  const isNegative = amount < 0;
  const absolute = Math.abs(amount);
  const integerPart = Math.floor(absolute);
  const decimalPart = Math.round((absolute - integerPart) * 100);

  const currencyLabels = CURRENCY_LABELS[localeKey] || CURRENCY_LABELS.en;

  const integerWords = convert(integerPart);
  const currencyWord =
    currency === "USD"
      ? integerPart === 1
        ? currencyLabels.singular
        : currencyLabels.plural
      : currency;

  const decimalText =
    decimalPart > 0
      ? ` and ${convert(decimalPart)} ${
          currency === "USD"
            ? decimalPart === 1
              ? currencyLabels.centSingular
              : currencyLabels.centPlural
            : currency
        }`
      : "";

  const prefix = isNegative ? (localeKey === "gr" ? "Μείον " : "Minus ") : "";

  return `${prefix}${integerWords} ${currencyWord}${decimalText}`.trim();
}

function getToWords(localeKey: "en" | "gr") {
  const localeCode = TO_WORDS_LOCALES[localeKey] || "en-US";
  try {
    return new ToWords({ localeCode });
  } catch {
    return new ToWords({ localeCode: "en-US" });
  }
}

function numberToWordsEn(num: number): string {
  if (!Number.isFinite(num) || num < 0) return "Zero";
  if (num === 0) return "Zero";

  const belowTwenty = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const scales = ["", "Thousand", "Million", "Billion", "Trillion"];

  const chunkToWords = (n: number): string => {
    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;
    const tensPart =
      remainder < 20
        ? belowTwenty[remainder]
        : `${tens[Math.floor(remainder / 10)]}${
            remainder % 10 ? " " + belowTwenty[remainder % 10] : ""
          }`;
    const hundredsPart = hundreds
      ? `${belowTwenty[hundreds]} Hundred${remainder ? " " : ""}`
      : "";
    return `${hundredsPart}${remainder ? tensPart : ""}`.trim();
  };

  const words: string[] = [];
  let remainder = num;
  let scaleIndex = 0;

  while (remainder > 0 && scaleIndex < scales.length) {
    const chunk = remainder % 1000;
    if (chunk > 0) {
      const chunkWords = chunkToWords(chunk);
      const scaleWord = scales[scaleIndex];
      words.unshift(scaleWord ? `${chunkWords} ${scaleWord}` : chunkWords);
    }
    remainder = Math.floor(remainder / 1000);
    scaleIndex += 1;
  }

  return words.join(" ").trim();
}

function numberToWordsGr(num: number): string {
  if (!Number.isFinite(num) || num < 0) return "Μηδέν";
  if (num === 0) return "Μηδέν";

  const belowTwenty = [
    "Μηδέν",
    "Ένα",
    "Δύο",
    "Τρία",
    "Τέσσερα",
    "Πέντε",
    "Έξι",
    "Επτά",
    "Οκτώ",
    "Εννέα",
    "Δέκα",
    "Έντεκα",
    "Δώδεκα",
    "Δεκατρία",
    "Δεκατέσσερα",
    "Δεκαπέντε",
    "Δεκαέξι",
    "Δεκαεπτά",
    "Δεκαοκτώ",
    "Δεκαεννέα",
  ];
  const tens = [
    "",
    "",
    "Είκοσι",
    "Τριάντα",
    "Σαράντα",
    "Πενήντα",
    "Εξήντα",
    "Εβδομήντα",
    "Ογδόντα",
    "Ενενήντα",
  ];
  const scales = [
    "",
    "Χίλια",
    "Εκατομμύριο",
    "Δισεκατομμύριο",
    "Τρισεκατομμύριο",
  ];

  const chunkToWords = (n: number): string => {
    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;
    const hundredsPart = hundreds
      ? `${belowTwenty[hundreds]} Εκατό${remainder ? "ν " : ""}`
      : "";
    const tensPart =
      remainder < 20
        ? belowTwenty[remainder]
        : `${tens[Math.floor(remainder / 10)]}${
            remainder % 10 ? " " + belowTwenty[remainder % 10] : ""
          }`;
    return `${hundredsPart}${remainder ? tensPart : ""}`.trim();
  };

  const words: string[] = [];
  let remainder = num;
  let scaleIndex = 0;

  while (remainder > 0 && scaleIndex < scales.length) {
    const chunk = remainder % 1000;
    if (chunk > 0) {
      const chunkWords = chunkToWords(chunk);
      const scaleWord = scales[scaleIndex];
      words.unshift(scaleWord ? `${chunkWords} ${scaleWord}` : chunkWords);
    }
    remainder = Math.floor(remainder / 1000);
    scaleIndex += 1;
  }

  return words.join(" ").trim();
}

export function saveToLocalStorage(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return defaultValue;
  }
}

export function removeFromLocalStorage(key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage:", error);
  }
}

export function isDataUrl(str: string): boolean {
  return str.startsWith("data:");
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
