"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { FormSchemaType } from "@/lib/schemas";
import { Card } from "@/components/ui/card";
import { formatDate, formatCurrency } from "@/lib/helpers";
import { Eye } from "lucide-react";
import { LOCALE_TO_BCP47, useTranslation } from "@/contexts/TranslationContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function InvoicePreview() {
  const { control } = useFormContext<FormSchemaType>();
  const { locale, t } = useTranslation();
  const intlLocale = LOCALE_TO_BCP47[locale];
  const values = useWatch({ control });

  const { sender, receiver, details } = values;

  if (!sender || !receiver || !details) return null;

  const isTemplate2 = details.pdfTemplate === 2;
  const bgClass = isTemplate2 ? "bg-slate-50" : "bg-white";
  const accentColor = isTemplate2 ? "text-blue-600" : "text-slate-900";
  const borderColor = isTemplate2 ? "border-blue-200" : "border-slate-200";
  const headingColor = isTemplate2 ? "text-blue-500" : "text-slate-400";

  return (
    <Card
      className={`overflow-hidden border shadow-xl ${bgClass} text-slate-900`}
      id="invoice-preview"
    >
      {/* Invoice Header / Status Bar */}
      <div className="bg-muted/50 dark:bg-muted/30 p-3 border-b border-border flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Eye className="h-3 w-3" /> {t("invoice.preview.livePreview")}
        </div>
        <div>
          {t("invoice.preview.a4Format")} - {t("invoice.form.details.template")}{" "}
          {details.pdfTemplate}
        </div>
      </div>

      {/* Invoice Content (Scaled A4 representation) */}
      <div className="p-8 min-h-[800px] text-sm relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className={`text-4xl font-bold tracking-tight ${accentColor}`}>
              {t("invoice.preview.invoiceLabel")}
            </h1>
            <p className="text-slate-500 mt-1">#{details.invoiceNumber}</p>
          </div>
          <div className="text-right">
            {details.invoiceLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={details.invoiceLogo}
                alt={t("invoice.preview.logoAlt")}
                className="h-16 object-contain ml-auto"
              />
            ) : (
              <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 ml-auto">
                {t("invoice.preview.logoPlaceholder")}
              </div>
            )}
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h3
              className={`text-xs uppercase tracking-wider font-bold ${headingColor} mb-2`}
            >
              {t("invoice.form.summary.fromTitle")}
            </h3>
            <div className="font-semibold text-slate-900">
              {sender.name || t("invoice.preview.placeholderSenderName")}
            </div>
            <div className="text-slate-600 whitespace-pre-wrap">
              {sender.address || t("invoice.preview.placeholderSenderAddress")}
            </div>
            {sender.email && (
              <div className="text-slate-600 mt-1">{sender.email}</div>
            )}
            {sender.phone && (
              <div className="text-slate-600 mt-1">{sender.phone}</div>
            )}
            {sender.customInputs && sender.customInputs.length > 0 && (
              <div className="mt-2 space-y-1">
                {sender.customInputs.map(
                  (custom, idx) =>
                    custom.key &&
                    custom.value && (
                      <div key={idx} className="text-xs text-slate-600">
                        <span className="font-medium">{custom.key}:</span>{" "}
                        {custom.value}
                      </div>
                    )
                )}
              </div>
            )}
          </div>
          <div className="text-right">
            <h3
              className={`text-xs uppercase tracking-wider font-bold ${headingColor} mb-2`}
            >
              {t("invoice.form.summary.toTitle")}
            </h3>
            <div className="font-semibold text-slate-900">
              {receiver.name || t("invoice.preview.placeholderClientName")}
            </div>
            <div className="text-slate-600 whitespace-pre-wrap">
              {receiver.address ||
                t("invoice.preview.placeholderClientAddress")}
            </div>
            {receiver.email && (
              <div className="text-slate-600 mt-1">{receiver.email}</div>
            )}
            {receiver.phone && (
              <div className="text-slate-600 mt-1">{receiver.phone}</div>
            )}
            {receiver.customInputs && receiver.customInputs.length > 0 && (
              <div className="mt-2 space-y-1">
                {receiver.customInputs.map(
                  (custom, idx) =>
                    custom.key &&
                    custom.value && (
                      <div key={idx} className="text-xs text-slate-600">
                        <span className="font-medium">{custom.key}:</span>{" "}
                        {custom.value}
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Dates */}
        <div
          className={`grid grid-cols-2 gap-8 mb-12 bg-slate-50 p-6 rounded-lg border ${borderColor}`}
        >
          <div>
            <div
              className={`text-xs uppercase tracking-wider font-bold ${headingColor} mb-1`}
            >
              {t("invoice.preview.dateIssue")}
            </div>
            <div className="font-medium cursor-pointer">
              {details.invoiceDate && details.invoiceDate instanceof Date
                ? formatDate(details.invoiceDate, undefined, intlLocale)
                : typeof details.invoiceDate === "string"
                ? details.invoiceDate
                : t("invoice.form.details.pickDate")}
            </div>
          </div>
          <div className="text-right">
            <div
              className={`text-xs uppercase tracking-wider font-bold ${headingColor} mb-1`}
            >
              {t("invoice.preview.dateDue")}
            </div>
            <div className="font-medium">
              {details.dueDate && details.dueDate instanceof Date
                ? formatDate(details.dueDate, undefined, intlLocale)
                : typeof details.dueDate === "string"
                ? details.dueDate
                : t("invoice.form.details.pickDate")}
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="mb-4">
          <Table className="text-left">
            <TableHeader>
              <TableRow className="border-b border-slate-200">
                <TableHead className="py-3 font-semibold text-slate-900">
                  {t("invoice.preview.description")}
                </TableHead>
                <TableHead className="py-3 text-right font-semibold text-slate-900 w-24">
                  {t("invoice.form.items.qtyLabel")}
                </TableHead>
                <TableHead className="py-3 text-right font-semibold text-slate-900 w-32">
                  {t("invoice.form.items.priceLabel")}
                </TableHead>
                <TableHead className="py-3 text-right font-semibold text-slate-900 w-32">
                  {t("invoice.preview.amountLabel")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.items?.map((item, i) => (
                <TableRow
                  key={i}
                  className="border-b border-slate-100 last:border-0"
                >
                  <TableCell className="py-4">
                    <div className="font-medium text-slate-900">
                      {item.name || t("invoice.preview.itemPlaceholder")}
                    </div>
                    {item.description && (
                      <div className="text-slate-500 text-xs mt-1">
                        {item.description}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="py-4 text-right text-slate-600">
                    {item.quantity}
                  </TableCell>
                  <TableCell className="py-4 text-right text-slate-600">
                    {formatCurrency(
                      Number(item.unitPrice || 0),
                      details.currency,
                      intlLocale
                    )}
                  </TableCell>
                  <TableCell className="py-4 text-right font-medium text-slate-900">
                    {formatCurrency(
                      Number(item.total || 0),
                      details.currency,
                      intlLocale
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {(!details.items || details.items.length === 0) && (
                <TableRow>
                  <TableCell
                    className="py-8 text-center text-slate-400"
                    colSpan={4}
                  >
                    {t("invoice.preview.noItems")}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-12">
          <div className="w-64 space-y-3">
            <div className="flex justify-between text-slate-600">
              <span>{t("invoice.preview.subtotal")}</span>
              <span>
                {formatCurrency(
                  Number(details.subTotal || 0),
                  details.currency,
                  intlLocale
                )}
              </span>
            </div>

            {details.discountDetails?.enabled && (
              <div className="flex justify-between text-emerald-600">
                <span>
                  {t("invoice.preview.discount")}
                  {details.discountDetails.amountType === "percentage" &&
                    ` (${details.discountDetails.amount}%)`}
                </span>
                <span>
                  -{" "}
                  {formatCurrency(
                    details.discountDetails.amountType === "percentage"
                      ? (Number(details.subTotal || 0) *
                          Number(details.discountDetails.amount || 0)) /
                          100
                      : Number(details.discountDetails.amount || 0),
                    details.currency,
                    intlLocale
                  )}
                </span>
              </div>
            )}

            {details.taxDetails?.enabled && (
              <div className="flex justify-between text-slate-600">
                <span>
                  {t("invoice.preview.tax")}
                  {details.taxDetails.amountType === "percentage" &&
                    ` (${details.taxDetails.amount}%)`}
                </span>
                <span>
                  +{" "}
                  {formatCurrency(
                    details.taxDetails.amountType === "percentage"
                      ? ((Number(details.subTotal || 0) -
                          (details.discountDetails?.enabled
                            ? details.discountDetails.amountType ===
                              "percentage"
                              ? (Number(details.subTotal || 0) *
                                  Number(details.discountDetails.amount || 0)) /
                                100
                              : Number(details.discountDetails.amount || 0)
                            : 0)) *
                          Number(details.taxDetails.amount || 0)) /
                          100
                      : Number(details.taxDetails.amount || 0),
                    details.currency,
                    intlLocale
                  )}
                </span>
              </div>
            )}

            {details.shippingDetails?.enabled && (
              <div className="flex justify-between text-slate-600">
                <span>{t("invoice.preview.shipping")}</span>
                <span>
                  +{" "}
                  {formatCurrency(
                    details.shippingDetails.amountType === "percentage"
                      ? (Number(details.subTotal || 0) *
                          Number(details.shippingDetails.amount || 0)) /
                          100
                      : Number(details.shippingDetails.amount || 0),
                    details.currency,
                    intlLocale
                  )}
                </span>
              </div>
            )}

            <div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-bold text-slate-900">
              <span>{t("invoice.preview.total")}</span>
              <span>
                {formatCurrency(
                  Number(details.totalAmount || 0),
                  details.currency,
                  intlLocale
                )}
              </span>
            </div>

            {details.totalInWordsEnabled && details.totalInWords && (
              <div className="border-t border-slate-100 pt-2 mt-2">
                <p className="text-xs text-slate-500 italic text-right">
                  {details.totalInWords}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Notes */}
        <div className="grid grid-cols-2 gap-8 text-sm pt-8 border-t border-slate-200">
          <div>
            {details.paymentInformation && (
              <div className="mb-4">
                <h4 className="font-bold text-slate-900 mb-1">
                  {t("invoice.form.payment.paymentInfoTitle")}
                </h4>
                <p className="text-slate-600 whitespace-pre-wrap">
                  {details.paymentInformation}
                </p>
              </div>
            )}
            {details.termsConditions && (
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  {t("invoice.form.payment.termsLabel")}
                </h4>
                <p className="text-slate-600 whitespace-pre-wrap">
                  {details.termsConditions}
                </p>
              </div>
            )}
          </div>

          {details.notes && (
            <div className="text-right">
              <h4 className="font-bold text-slate-900 mb-1">
                {t("invoice.form.payment.notesLabel")}
              </h4>
              <p className="text-slate-600 italic whitespace-pre-wrap">
                {details.notes}
              </p>
            </div>
          )}
        </div>

        {details.signature && (
          <div className="mt-8 text-right">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
              {t("invoice.preview.signature")}
            </p>
            {details.signature.type === "type" && (
              <div
                className="text-2xl font-semibold"
                style={{ fontFamily: details.signature.font }}
              >
                {details.signature.data}
              </div>
            )}
            {details.signature.type !== "type" && details.signature.data && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={details.signature.data}
                alt="Signature"
                className="h-16 ml-auto"
              />
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
