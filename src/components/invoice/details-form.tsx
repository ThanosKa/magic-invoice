"use client";

import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import currencies from "@/lib/currencies.json";
import { useTranslation } from "@/contexts/TranslationContext";
import SignatureCanvas from "react-signature-canvas";
import { fileToBase64 } from "@/lib/helpers";
import { useRef, useState } from "react";
import { useSignature } from "@/contexts/SignatureContext";
import { Switch } from "@/components/ui/switch";

export function DetailsForm() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<FormSchemaType>();
  const { t } = useTranslation();
  const {
    setDrawData,
    setTyped,
    setUploaded,
    clearSignature,
    mode,
    data,
    setMode,
  } = useSignature();
  const sigPad = useRef<SignatureCanvas | null>(null);
  const [typedSignature, setTypedSignature] = useState("");

  const invoiceDate = watch("details.invoiceDate");
  const dueDate = watch("details.dueDate");
  const currency = watch("details.currency");
  const totalInWordsEnabled = watch("details.totalInWordsEnabled");
  const pdfTemplate = watch("details.pdfTemplate");
  const invoiceLogo = watch("details.invoiceLogo");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleLogoUpload = async (file?: File) => {
    if (!file) return;
    const base64 = await fileToBase64(file);
    setValue("details.invoiceLogo", base64);
  };

  const clearLogo = () => setValue("details.invoiceLogo", "");

  const triggerLogoSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Invoice Number */}
        <div className="space-y-2">
          <Label htmlFor="invoice-number">
            {t("invoice.form.details.invoiceNumberLabel")}
          </Label>
          <Input
            id="invoice-number"
            {...register("details.invoiceNumber")}
            placeholder={t("invoice.form.details.invoiceNumberPlaceholder")}
          />
          {errors.details?.invoiceNumber?.message && (
            <p className="text-sm text-destructive">
              {t(errors.details.invoiceNumber.message as string)}
            </p>
          )}
        </div>

        {/* Currency Selector */}
        <div className="space-y-2">
          <Label>{t("invoice.form.details.currencyLabel")}</Label>
          <Select
            onValueChange={(value) => setValue("details.currency", value)}
            value={currency}
          >
            <SelectTrigger className="cursor-pointer">
              <SelectValue
                placeholder={t("invoice.form.details.currencyPlaceholder")}
              />
            </SelectTrigger>
            <SelectContent className="cursor-pointer">
              {currencies.map((curr) => (
                <SelectItem
                  key={curr.code}
                  value={curr.code}
                  className="cursor-pointer"
                >
                  {curr.name} ({curr.symbol})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.details?.currency?.message && (
            <p className="text-sm text-destructive">
              {t(errors.details.currency.message as string)}
            </p>
          )}
        </div>

        {/* Invoice Date */}
        <div className="space-y-2 flex flex-col">
          <Label>{t("invoice.form.details.dateLabel")}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !invoiceDate && "text-muted-foreground"
                )}
              >
                {invoiceDate ? (
                  format(invoiceDate, "PPP")
                ) : (
                  <span>{t("invoice.form.details.pickDate")}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={invoiceDate}
                onSelect={(date) =>
                  date && setValue("details.invoiceDate", date)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.details?.invoiceDate?.message && (
            <p className="text-sm text-destructive">
              {t(errors.details.invoiceDate.message as string)}
            </p>
          )}
        </div>

        {/* Due Date */}
        <div className="space-y-2 flex flex-col">
          <Label>{t("invoice.form.details.dueDateLabel")}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !dueDate && "text-muted-foreground"
                )}
              >
                {dueDate ? (
                  format(dueDate, "PPP")
                ) : (
                  <span>{t("invoice.form.details.pickDate")}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dueDate}
                onSelect={(date) => date && setValue("details.dueDate", date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.details?.dueDate?.message && (
            <p className="text-sm text-destructive">
              {t(errors.details.dueDate.message as string)}
            </p>
          )}
        </div>

        {/* Logo Upload Placeholder - Todo: Implement File Upload */}
        <div className="space-y-2 md:col-span-2">
          <Label>{t("invoice.form.details.logoLabel")}</Label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleLogoUpload(e.target.files?.[0])}
          />
          <div
            onClick={triggerLogoSelect}
            className="flex items-center gap-3 border border-dashed rounded-lg p-3 hover:border-primary cursor-pointer transition bg-card/50"
          >
            <div className="flex-1">
              <p className="text-sm font-medium">
                {t("invoice.form.details.logoUploadCta")}
              </p>
              <p className="text-xs text-muted-foreground">
                {t("invoice.form.details.logoHelp")}
              </p>
            </div>
            {invoiceLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={invoiceLogo}
                alt="Logo preview"
                className="h-14 w-14 object-contain rounded border"
              />
            ) : (
              <Button type="button" variant="outline" size="sm">
                {t("invoice.form.details.logoUploadButton")}
              </Button>
            )}
          </div>
          {invoiceLogo && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={triggerLogoSelect}
              >
                {t("invoice.form.details.logoChange")}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                onClick={clearLogo}
              >
                {t("invoice.form.details.logoRemove")}
              </Button>
            </div>
          )}
        </div>

        {/* Template Selector */}
        <div className="space-y-2 md:col-span-2">
          <Label>{t("invoice.form.details.templateLabel")}</Label>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map((tpl) => (
              <button
                key={tpl}
                type="button"
                onClick={() => setValue("details.pdfTemplate", tpl as 1 | 2)}
                className={`border rounded-lg p-3 text-left transition cursor-pointer ${
                  pdfTemplate === tpl
                    ? "border-primary shadow-sm"
                    : "border-border"
                }`}
              >
                <p className="font-medium">
                  {t("invoice.form.details.template")} {tpl}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("invoice.form.details.templateDescription")}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Total in words toggle */}
        <div className="space-y-2 md:col-span-2">
          <Label>{t("invoice.form.details.totalInWordsLabel")}</Label>
          <div className="flex items-center gap-3">
            <Switch
              checked={!!totalInWordsEnabled}
              onCheckedChange={(checked) =>
                setValue("details.totalInWordsEnabled", checked)
              }
            />
            <span className="text-sm text-muted-foreground">
              {t("invoice.form.details.totalInWordsHelp")}
            </span>
          </div>
        </div>

        {/* Signature capture */}
        <div className="space-y-3 md:col-span-2">
          <Label>{t("invoice.form.details.signatureLabel")}</Label>
          <div className="flex gap-2">
            {(["draw", "type", "upload"] as const).map((m) => (
              <Button
                key={m}
                type="button"
                variant={mode === m ? "default" : "outline"}
                size="sm"
                onClick={() => setMode(m)}
              >
                {t(`invoice.form.signature.${m}`)}
              </Button>
            ))}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSignature}
            >
              {t("common.clear")}
            </Button>
          </div>
          {mode === "draw" && (
            <div className="border rounded-lg">
              <SignatureCanvas
                ref={sigPad}
                penColor="#111827"
                canvasProps={{
                  width: 500,
                  height: 160,
                  className: "w-full h-full cursor-crosshair",
                }}
                onEnd={() => {
                  const val =
                    sigPad.current?.getTrimmedCanvas().toDataURL("image/png") ||
                    "";
                  setDrawData(val);
                }}
              />
            </div>
          )}
          {mode === "type" && (
            <div className="space-y-2">
              <Input
                value={typedSignature}
                onChange={(e) => {
                  setTypedSignature(e.target.value);
                  setTyped(e.target.value, "Satisfy");
                }}
                placeholder={t("invoice.form.signature.typePlaceholder")}
              />
            </div>
          )}
          {mode === "upload" && (
            <Input
              type="file"
              accept="image/*"
              className="cursor-pointer file:cursor-pointer"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const base = await fileToBase64(file);
                setUploaded(base);
              }}
            />
          )}
          {data && (
            <div className="mt-2 text-sm text-muted-foreground">
              {t("invoice.form.details.signatureSaved")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
