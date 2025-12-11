"use client";

import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/lib/schemas";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrencySymbol } from "@/lib/helpers";
import { useTranslation } from "@/contexts/TranslationContext";

export function PaymentForm() {
  const { t } = useTranslation();
  const { register, setValue, getValues, watch } =
    useFormContext<FormSchemaType>();

  // Use single watch call for all needed values to prevent multiple re-renders
  const watchedValues = watch();

  const currency = watchedValues.details?.currency;
  const currencySymbol = getCurrencySymbol(currency || "USD");

  const discountEnabled = watchedValues.details?.discountDetails?.enabled;
  const discountAmountType = watchedValues.details?.discountDetails?.amountType;

  const taxEnabled = watchedValues.details?.taxDetails?.enabled;
  const taxAmountType = watchedValues.details?.taxDetails?.amountType;

  const shippingEnabled = watchedValues.details?.shippingDetails?.enabled;
  const shippingAmountType = watchedValues.details?.shippingDetails?.amountType;

  const ensureAmount = (
    path:
      | "details.discountDetails.amount"
      | "details.taxDetails.amount"
      | "details.shippingDetails.amount"
  ) => {
    const current = getValues(path);
    if (!Number.isFinite(current)) {
      setValue(path, 0);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          {t("invoice.form.payment.chargesTitle")}
        </h3>

        <div className="flex items-center justify-between p-4 border rounded-lg bg-card/30">
          <div className="flex items-center space-x-4">
            <Switch
              checked={discountEnabled}
              onCheckedChange={(c) => {
                setValue("details.discountDetails.enabled", c);
                if (c) ensureAmount("details.discountDetails.amount");
              }}
            />
            <Label className="cursor-pointer">
              {t("invoice.form.payment.applyDiscount")}
            </Label>
          </div>

          {discountEnabled && (
            <div className="flex items-center gap-2">
              <Input
                type="number"
                inputMode="decimal"
                min={0}
                step={0.01}
                className="w-24"
                placeholder={
                  discountAmountType === "percentage" ? "%" : currencySymbol
                }
                {...register("details.discountDetails.amount", {
                  valueAsNumber: true,
                })}
              />
              <Select
                onValueChange={(v: "amount" | "percentage") =>
                  setValue("details.discountDetails.amountType", v)
                }
                value={discountAmountType}
                defaultValue="amount"
              >
                <SelectTrigger className="w-24 cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="cursor-pointer">
                  <SelectItem value="amount" className="cursor-pointer">
                    {currencySymbol}
                  </SelectItem>
                  <SelectItem value="percentage" className="cursor-pointer">
                    %
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg bg-card/30">
          <div className="flex items-center space-x-4">
            <Switch
              checked={taxEnabled}
              onCheckedChange={(c) => {
                setValue("details.taxDetails.enabled", c);
                if (c) ensureAmount("details.taxDetails.amount");
              }}
            />
            <Label className="cursor-pointer">
              {t("invoice.form.payment.applyTax")}
            </Label>
          </div>

          {taxEnabled && (
            <div className="flex items-center gap-2">
              <Input
                type="number"
                inputMode="decimal"
                min={0}
                step={0.01}
                className="w-24"
                placeholder={
                  taxAmountType === "percentage" ? "%" : currencySymbol
                }
                {...register("details.taxDetails.amount", {
                  valueAsNumber: true,
                })}
              />
              <Select
                onValueChange={(v: "amount" | "percentage") =>
                  setValue("details.taxDetails.amountType", v)
                }
                value={taxAmountType}
                defaultValue="percentage"
              >
                <SelectTrigger className="w-24 cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="cursor-pointer">
                  <SelectItem value="amount" className="cursor-pointer">
                    {currencySymbol}
                  </SelectItem>
                  <SelectItem value="percentage" className="cursor-pointer">
                    %
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg bg-card/30">
          <div className="flex items-center space-x-4">
            <Switch
              checked={shippingEnabled}
              onCheckedChange={(c) => {
                setValue("details.shippingDetails.enabled", c);
                if (c) ensureAmount("details.shippingDetails.amount");
              }}
            />
            <Label className="cursor-pointer">
              {t("invoice.form.payment.shippingCost")}
            </Label>
          </div>

          {shippingEnabled && (
            <div className="flex items-center gap-2">
              <Input
                type="number"
                inputMode="decimal"
                min={0}
                step={0.01}
                className="w-24"
                placeholder={
                  shippingAmountType === "percentage" ? "%" : currencySymbol
                }
                {...register("details.shippingDetails.amount", {
                  valueAsNumber: true,
                })}
              />
              <Select
                onValueChange={(v: "amount" | "percentage") =>
                  setValue("details.shippingDetails.amountType", v)
                }
                value={shippingAmountType}
                defaultValue="amount"
              >
                <SelectTrigger className="w-24 cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="cursor-pointer">
                  <SelectItem value="amount" className="cursor-pointer">
                    {currencySymbol}
                  </SelectItem>
                  <SelectItem value="percentage" className="cursor-pointer">
                    %
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          {t("invoice.form.payment.paymentInfoTitle")}
        </h3>
        <div className="space-y-2">
          <Label>{t("invoice.form.payment.bankDetailsLabel")}</Label>
          <Textarea
            {...register("details.paymentInformation")}
            placeholder={t("invoice.form.payment.bankDetailsPlaceholder")}
            className="h-24"
          />
        </div>

        <div className="space-y-2">
          <Label>{t("invoice.form.payment.termsLabel")}</Label>
          <Textarea
            {...register("details.termsConditions")}
            placeholder={t("invoice.form.payment.termsPlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Label>{t("invoice.form.payment.notesLabel")}</Label>
          <Textarea
            {...register("details.notes")}
            placeholder={t("invoice.form.payment.notesPlaceholder")}
          />
        </div>
      </div>
    </div>
  );
}
