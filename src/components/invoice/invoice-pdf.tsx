"use client";

/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { FormSchemaType } from "@/lib/schemas";

// PDF styles (react-pdf uses React Native-style StyleSheet)
const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  pageModern: {
    backgroundColor: "#f8fafc", // slate-50
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  title: {
    fontSize: 30, // text-3xl
    fontWeight: "bold",
    color: "#0f172a", // slate-900
    marginBottom: 4,
  },
  titleModern: {
    color: "#3b82f6", // blue-500
  },
  invoiceNumber: {
    fontSize: 12,
    color: "#64748b", // slate-500
  },
  logo: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#f1f5f9", // slate-100
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addresses: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    gap: 24,
  },
  addressBlock: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#64748b", // slate-500
    textTransform: "uppercase",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  addressTitleModern: {
    color: "#3b82f6", // blue-500
  },
  addressName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
    marginBottom: 4,
  },
  addressText: {
    fontSize: 10,
    color: "#334155", // slate-700
    marginTop: 2,
    lineHeight: 1.4,
  },
  datesSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f8fafc", // slate-50
    padding: 20,
    borderRadius: 8,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#e2e8f0", // slate-200
  },
  datesSectionModern: {
    backgroundColor: "#eff6ff", // blue-50
    borderColor: "#bfdbfe", // blue-200
  },
  dateBlock: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#64748b", // slate-500
    textTransform: "uppercase",
    marginBottom: 4,
  },
  dateLabelModern: {
    color: "#3b82f6", // blue-500
  },
  dateValue: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
  },
  table: {
    marginBottom: 24,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0", // slate-200
    paddingBottom: 12,
    marginBottom: 12,
  },
  tableHeaderCell: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9", // slate-100
    paddingVertical: 12,
  },
  tableCell: {
    fontSize: 10,
    color: "#334155", // slate-700
  },
  tableCellBold: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
  },
  colDescription: {
    flex: 3,
  },
  colQty: {
    flex: 1,
    textAlign: "center",
  },
  colPrice: {
    flex: 1.5,
    textAlign: "right",
  },
  colAmount: {
    flex: 1.5,
    textAlign: "right",
  },
  totalsSection: {
    alignItems: "flex-end",
    marginBottom: 40,
  },
  totalsBox: {
    width: 280,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingVertical: 2,
  },
  totalLabel: {
    fontSize: 11,
    color: "#64748b", // slate-500
  },
  totalValue: {
    fontSize: 11,
    color: "#0f172a", // slate-900
    fontWeight: "medium",
  },
  grandTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    borderTopWidth: 2,
    borderTopColor: "#e2e8f0", // slate-200
    marginTop: 8,
  },
  grandTotalLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
  },
  totalInWords: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#64748b", // slate-500
    textAlign: "right",
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0", // slate-200
    gap: 32,
  },
  footerSection: {
    flex: 1,
  },
  footerTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a", // slate-900
    marginBottom: 6,
  },
  footerText: {
    fontSize: 10,
    color: "#475569", // slate-600
    lineHeight: 1.5,
  },
  signature: {
    alignItems: "flex-end",
    marginTop: 32,
  },
  signatureLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#64748b", // slate-500
    textTransform: "uppercase",
    marginBottom: 12,
  },
  signatureImage: {
    width: 140,
    height: 60,
    objectFit: "contain",
  },
  signatureText: {
    fontSize: 24,
    fontFamily: "Helvetica",
  },
});

interface InvoicePDFProps {
  data: FormSchemaType;
}

export function InvoicePDF({ data }: InvoicePDFProps) {
  const { sender, receiver, details } = data;

  if (!sender || !receiver || !details) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text>Invalid invoice data</Text>
        </Page>
      </Document>
    );
  }

  const isModern = details.pdfTemplate === 2;

  return (
    <Document>
      <Page
        size="A4"
        style={isModern ? [styles.page, styles.pageModern] : styles.page}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text
              style={
                isModern ? [styles.title, styles.titleModern] : styles.title
              }
            >
              INVOICE
            </Text>
            <Text style={styles.invoiceNumber}>#{details.invoiceNumber}</Text>
          </View>
          <View>
            {details.invoiceLogo ? (
              <Image src={details.invoiceLogo} style={styles.logo} />
            ) : (
              <View style={styles.logoPlaceholder}>
                <Text style={{ fontSize: 10, color: "#94a3b8" }}>LOGO</Text>
              </View>
            )}
          </View>
        </View>

        {/* Addresses */}
        <View style={styles.addresses}>
          <View style={styles.addressBlock}>
            <Text
              style={
                isModern
                  ? [styles.addressTitle, styles.addressTitleModern]
                  : styles.addressTitle
              }
            >
              FROM
            </Text>
            <Text style={styles.addressName}>
              {sender.name || "Sender Name"}
            </Text>
            {sender.address && (
              <Text style={styles.addressText}>{sender.address}</Text>
            )}
            {sender.email && (
              <Text style={styles.addressText}>{sender.email}</Text>
            )}
            {sender.phone && (
              <Text style={styles.addressText}>{sender.phone}</Text>
            )}
            {sender.customInputs?.map(
              (custom, idx) =>
                custom.key &&
                custom.value && (
                  <Text key={idx} style={styles.addressText}>
                    {custom.key}: {custom.value}
                  </Text>
                )
            )}
          </View>
          <View style={[styles.addressBlock, { alignItems: "flex-end" }]}>
            <Text
              style={
                isModern
                  ? [styles.addressTitle, styles.addressTitleModern]
                  : styles.addressTitle
              }
            >
              TO
            </Text>
            <Text style={[styles.addressName, { textAlign: "right" }]}>
              {receiver.name || "Client Name"}
            </Text>
            <View style={{ alignItems: "flex-end" }}>
              {receiver.address && (
                <Text style={styles.addressText}>{receiver.address}</Text>
              )}
              {receiver.email && (
                <Text style={styles.addressText}>{receiver.email}</Text>
              )}
              {receiver.phone && (
                <Text style={styles.addressText}>{receiver.phone}</Text>
              )}
              {receiver.customInputs?.map(
                (custom, idx) =>
                  custom.key &&
                  custom.value && (
                    <Text key={idx} style={styles.addressText}>
                      {custom.key}: {custom.value}
                    </Text>
                  )
              )}
            </View>
          </View>
        </View>

        {/* Dates */}
        <View
          style={
            isModern
              ? [styles.datesSection, styles.datesSectionModern]
              : styles.datesSection
          }
        >
          <View style={styles.dateBlock}>
            <Text
              style={
                isModern
                  ? [styles.dateLabel, styles.dateLabelModern]
                  : styles.dateLabel
              }
            >
              ISSUE DATE
            </Text>
            <Text style={styles.dateValue}>
              {details.invoiceDate
                ? new Date(details.invoiceDate).toLocaleDateString()
                : "-"}
            </Text>
          </View>
          <View style={[styles.dateBlock, { alignItems: "flex-end" }]}>
            <Text
              style={
                isModern
                  ? [styles.dateLabel, styles.dateLabelModern]
                  : styles.dateLabel
              }
            >
              DUE DATE
            </Text>
            <Text style={styles.dateValue}>
              {details.dueDate
                ? new Date(details.dueDate).toLocaleDateString()
                : "-"}
            </Text>
          </View>
        </View>

        {/* Line Items Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, styles.colDescription]}>
              DESCRIPTION
            </Text>
            <Text style={[styles.tableHeaderCell, styles.colQty]}>QTY</Text>
            <Text style={[styles.tableHeaderCell, styles.colPrice]}>PRICE</Text>
            <Text style={[styles.tableHeaderCell, styles.colAmount]}>
              AMOUNT
            </Text>
          </View>
          {details.items?.map((item, i) => (
            <View key={i} style={styles.tableRow}>
              <View style={styles.colDescription}>
                <Text style={styles.tableCellBold}>{item.name || "Item"}</Text>
                {item.description && (
                  <Text
                    style={[styles.tableCell, { fontSize: 9, marginTop: 4 }]}
                  >
                    {item.description}
                  </Text>
                )}
              </View>
              <Text style={[styles.tableCell, styles.colQty]}>
                {item.quantity}
              </Text>
              <Text style={[styles.tableCell, styles.colPrice]}>
                {details.currency} {Number(item.unitPrice || 0).toFixed(2)}
              </Text>
              <Text style={[styles.tableCellBold, styles.colAmount]}>
                {details.currency} {Number(item.total || 0).toFixed(2)}
              </Text>
            </View>
          ))}
          {(!details.items || details.items.length === 0) && (
            <View style={{ paddingVertical: 32, alignItems: "center" }}>
              <Text style={{ color: "#94a3b8" }}>No items added</Text>
            </View>
          )}
        </View>

        {/* Totals */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsBox}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalValue}>
                {details.currency} {Number(details.subTotal || 0).toFixed(2)}
              </Text>
            </View>

            {details.discountDetails?.enabled && (
              <View style={styles.totalRow}>
                <Text style={[styles.totalLabel, { color: "#16a34a" }]}>
                  Discount{" "}
                  {details.discountDetails.amountType === "percentage" &&
                    `(${details.discountDetails.amount}%)`}
                </Text>
                <Text style={[styles.totalValue, { color: "#16a34a" }]}>
                  - {details.currency}{" "}
                  {(details.discountDetails.amountType === "percentage"
                    ? (Number(details.subTotal || 0) *
                        Number(details.discountDetails.amount || 0)) /
                      100
                    : Number(details.discountDetails.amount || 0)
                  ).toFixed(2)}
                </Text>
              </View>
            )}

            {details.taxDetails?.enabled && (
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>
                  Tax{" "}
                  {details.taxDetails.amountType === "percentage" &&
                    `(${details.taxDetails.amount}%)`}
                </Text>
                <Text style={styles.totalValue}>
                  + {details.currency}{" "}
                  {(details.taxDetails.amountType === "percentage"
                    ? ((Number(details.subTotal || 0) -
                        (details.discountDetails?.enabled
                          ? details.discountDetails.amountType === "percentage"
                            ? (Number(details.subTotal || 0) *
                                Number(details.discountDetails.amount || 0)) /
                              100
                            : Number(details.discountDetails.amount || 0)
                          : 0)) *
                        Number(details.taxDetails.amount || 0)) /
                      100
                    : Number(details.taxDetails.amount || 0)
                  ).toFixed(2)}
                </Text>
              </View>
            )}

            {details.shippingDetails?.enabled && (
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Shipping</Text>
                <Text style={styles.totalValue}>
                  + {details.currency}{" "}
                  {(details.shippingDetails.amountType === "percentage"
                    ? (Number(details.subTotal || 0) *
                        Number(details.shippingDetails.amount || 0)) /
                      100
                    : Number(details.shippingDetails.amount || 0)
                  ).toFixed(2)}
                </Text>
              </View>
            )}

            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total</Text>
              <Text style={styles.grandTotalValue}>
                {details.currency} {Number(details.totalAmount || 0).toFixed(2)}
              </Text>
            </View>

            {details.totalInWordsEnabled && details.totalInWords && (
              <Text style={styles.totalInWords}>{details.totalInWords}</Text>
            )}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerSection}>
            {details.paymentInformation && (
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.footerTitle}>Payment Information</Text>
                <Text style={styles.footerText}>
                  {details.paymentInformation}
                </Text>
              </View>
            )}
            {details.termsConditions && (
              <View>
                <Text style={styles.footerTitle}>Terms & Conditions</Text>
                <Text style={styles.footerText}>{details.termsConditions}</Text>
              </View>
            )}
          </View>

          {details.notes && (
            <View
              style={[
                styles.footerSection,
                { alignItems: "flex-end", marginLeft: 16 },
              ]}
            >
              <Text style={styles.footerTitle}>Notes</Text>
              <Text
                style={[
                  styles.footerText,
                  { fontStyle: "italic", textAlign: "right" },
                ]}
              >
                {details.notes}
              </Text>
            </View>
          )}
        </View>

        {/* Signature */}
        {details.signature && (
          <View style={styles.signature}>
            <Text style={styles.signatureLabel}>SIGNATURE</Text>
            {details.signature.type === "type" && details.signature.data && (
              <Text
                style={
                  details.signature.font
                    ? [
                        styles.signatureText,
                        { fontFamily: details.signature.font },
                      ]
                    : styles.signatureText
                }
              >
                {details.signature.data}
              </Text>
            )}
            {details.signature.type !== "type" && details.signature.data && (
              <Image
                src={details.signature.data}
                style={styles.signatureImage}
              />
            )}
          </View>
        )}
      </Page>
    </Document>
  );
}
