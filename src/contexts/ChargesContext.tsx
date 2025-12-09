"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { FormSchemaType } from "@/lib/schemas";
import { formatPriceToString } from "@/lib/helpers";
import { LOCALE_TO_BCP47, useTranslation } from "@/contexts/TranslationContext";

interface ChargesContextType {
  calculateTotals: () => void;
}

const ChargesContext = createContext<ChargesContextType | undefined>(undefined);

export function ChargesProvider({ children }: { children: React.ReactNode }) {
  const { setValue, control } = useFormContext<FormSchemaType>();
  const { locale } = useTranslation();

  // Watch relevant fields
  const items = useWatch({ control, name: "details.items" });
  const discountDetails = useWatch({
    control,
    name: "details.discountDetails",
  });
  const taxDetails = useWatch({ control, name: "details.taxDetails" });
  const shippingDetails = useWatch({
    control,
    name: "details.shippingDetails",
  });
  const currency = useWatch({ control, name: "details.currency" });
  const totalInWordsEnabled = useWatch({
    control,
    name: "details.totalInWordsEnabled",
  });

  const calculateTotals = useCallback(() => {
    const bcpLocale = LOCALE_TO_BCP47[locale] || "en-US";

    if (!items || items.length === 0) {
      setValue("details.subTotal", 0);
      setValue("details.totalAmount", 0);
      setValue("details.totalInWords", "");
      return;
    }

    const safeNumber = (value: unknown): number => {
      const n = typeof value === "number" ? value : parseFloat(String(value));
      return Number.isFinite(n) ? n : 0;
    };

    const subTotal = items.reduce((sum, item) => {
      return sum + safeNumber(item?.total);
    }, 0);

    setValue("details.subTotal", subTotal);

    let total = subTotal;

    // Apply discount
    if (discountDetails?.enabled) {
      const amount = Math.max(0, safeNumber(discountDetails.amount));
      const discountAmount =
        discountDetails.amountType === "percentage"
          ? (total * amount) / 100
          : amount;
      total -= discountAmount;
    }

    // Apply tax
    if (taxDetails?.enabled) {
      const amount = Math.max(0, safeNumber(taxDetails.amount));
      const taxAmount =
        taxDetails.amountType === "percentage"
          ? (total * amount) / 100
          : amount;
      total += taxAmount;
    }

    // Apply shipping
    if (shippingDetails?.enabled) {
      const amount = Math.max(0, safeNumber(shippingDetails.amount));
      const shippingAmount =
        shippingDetails.amountType === "percentage"
          ? (total * amount) / 100
          : amount;
      total += shippingAmount;
    }

    const finalTotal = Number.isFinite(total) ? Math.max(0, total) : 0;

    setValue("details.totalAmount", finalTotal);

    if (totalInWordsEnabled) {
      const words = formatPriceToString(
        finalTotal,
        currency || "USD",
        bcpLocale
      );
      setValue("details.totalInWords", words);
    } else {
      setValue("details.totalInWords", "");
    }
  }, [
    items,
    discountDetails,
    taxDetails,
    shippingDetails,
    currency,
    totalInWordsEnabled,
    locale,
    setValue,
  ]);

  // Recalculate when dependencies change
  useEffect(() => {
    calculateTotals();
  }, [calculateTotals]);

  return (
    <ChargesContext.Provider value={{ calculateTotals }}>
      {children}
    </ChargesContext.Provider>
  );
}

export function useCharges() {
  const context = useContext(ChargesContext);
  if (!context) {
    throw new Error("useCharges must be used within ChargesProvider");
  }
  return context;
}
