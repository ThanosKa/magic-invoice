'use client';

import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { FormSchemaType } from '@/lib/schemas';

// PDF styles (react-pdf uses React Native-style StyleSheet)
const styles = StyleSheet.create({
    page: {
        padding: 24,
        fontSize: 10,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff',
    },
    pageModern: {
        backgroundColor: '#f8fafc',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    titleModern: {
        color: '#2563eb',
    },
    invoiceNumber: {
        fontSize: 10,
        color: '#64748b',
        marginTop: 4,
    },
    logo: {
        width: 64,
        height: 64,
        objectFit: 'contain',
    },
    logoPlaceholder: {
        width: 64,
        height: 64,
        backgroundColor: '#f1f5f9',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addresses: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    addressBlock: {
        flex: 1,
    },
    addressTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#94a3b8',
        textTransform: 'uppercase',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    addressTitleModern: {
        color: '#60a5fa',
    },
    addressName: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 4,
    },
    addressText: {
        fontSize: 10,
        color: '#475569',
        marginTop: 2,
    },
    datesSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f8fafc',
        padding: 16,
        borderRadius: 8,
        marginBottom: 32,
        border: '1pt solid #e2e8f0',
    },
    datesSectionModern: {
        border: '1pt solid #bfdbfe',
    },
    dateBlock: {
        flex: 1,
    },
    dateLabel: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#94a3b8',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    dateLabelModern: {
        color: '#60a5fa',
    },
    dateValue: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    table: {
        marginBottom: 16,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottom: '1pt solid #e2e8f0',
        paddingBottom: 8,
        marginBottom: 8,
    },
    tableHeaderCell: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: '0.5pt solid #f1f5f9',
        paddingVertical: 12,
    },
    tableCell: {
        fontSize: 10,
        color: '#475569',
    },
    tableCellBold: {
        fontWeight: 'bold',
        color: '#0f172a',
    },
    colDescription: {
        flex: 3,
    },
    colQty: {
        flex: 1,
        textAlign: 'right',
    },
    colPrice: {
        flex: 1,
        textAlign: 'right',
    },
    colAmount: {
        flex: 1,
        textAlign: 'right',
    },
    totalsSection: {
        alignItems: 'flex-end',
        marginBottom: 32,
    },
    totalsBox: {
        width: 250,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        color: '#475569',
    },
    totalLabel: {
        fontSize: 10,
    },
    totalValue: {
        fontSize: 10,
    },
    grandTotalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        borderTop: '1pt solid #e2e8f0',
        marginBottom: 12,
    },
    grandTotalLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    grandTotalValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0f172a',
    },
    totalInWords: {
        fontSize: 9,
        fontStyle: 'italic',
        color: '#64748b',
        textAlign: 'right',
        marginTop: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 24,
        borderTop: '1pt solid #e2e8f0',
    },
    footerSection: {
        flex: 1,
    },
    footerTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 4,
    },
    footerText: {
        fontSize: 9,
        color: '#475569',
    },
    signature: {
        alignItems: 'flex-end',
        marginTop: 24,
    },
    signatureLabel: {
        fontSize: 9,
        color: '#94a3b8',
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    signatureImage: {
        width: 150,
        height: 60,
    },
    signatureText: {
        fontSize: 20,
        fontWeight: 'bold',
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
            <Page size="A4" style={isModern ? [styles.page, styles.pageModern] : styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={isModern ? [styles.title, styles.titleModern] : styles.title}>INVOICE</Text>
                        <Text style={styles.invoiceNumber}>#{details.invoiceNumber}</Text>
                    </View>
                    <View>
                        {details.invoiceLogo ? (
                            <Image src={details.invoiceLogo} style={styles.logo} />
                        ) : (
                            <View style={styles.logoPlaceholder}>
                                <Text style={{ fontSize: 8, color: '#94a3b8' }}>LOGO</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Addresses */}
                <View style={styles.addresses}>
                    <View style={styles.addressBlock}>
                        <Text style={isModern ? [styles.addressTitle, styles.addressTitleModern] : styles.addressTitle}>FROM</Text>
                        <Text style={styles.addressName}>{sender.name || 'Sender Name'}</Text>
                        {sender.address && <Text style={styles.addressText}>{sender.address}</Text>}
                        {sender.email && <Text style={styles.addressText}>{sender.email}</Text>}
                        {sender.phone && <Text style={styles.addressText}>{sender.phone}</Text>}
                        {sender.customInputs?.map((custom, idx) => (
                            custom.key && custom.value && (
                                <Text key={idx} style={styles.addressText}>
                                    {custom.key}: {custom.value}
                                </Text>
                            )
                        ))}
                    </View>
                    <View style={[styles.addressBlock, { alignItems: 'flex-end' }]}>
                        <Text style={isModern ? [styles.addressTitle, styles.addressTitleModern] : styles.addressTitle}>TO</Text>
                        <Text style={styles.addressName}>{receiver.name || 'Client Name'}</Text>
                        {receiver.address && <Text style={styles.addressText}>{receiver.address}</Text>}
                        {receiver.email && <Text style={styles.addressText}>{receiver.email}</Text>}
                        {receiver.phone && <Text style={styles.addressText}>{receiver.phone}</Text>}
                        {receiver.customInputs?.map((custom, idx) => (
                            custom.key && custom.value && (
                                <Text key={idx} style={styles.addressText}>
                                    {custom.key}: {custom.value}
                                </Text>
                            )
                        ))}
                    </View>
                </View>

                {/* Dates */}
                <View style={isModern ? [styles.datesSection, styles.datesSectionModern] : styles.datesSection}>
                    <View style={styles.dateBlock}>
                        <Text style={isModern ? [styles.dateLabel, styles.dateLabelModern] : styles.dateLabel}>ISSUE DATE</Text>
                        <Text style={styles.dateValue}>
                            {details.invoiceDate ? new Date(details.invoiceDate).toLocaleDateString() : '-'}
                        </Text>
                    </View>
                    <View style={[styles.dateBlock, { alignItems: 'flex-end' }]}>
                        <Text style={isModern ? [styles.dateLabel, styles.dateLabelModern] : styles.dateLabel}>DUE DATE</Text>
                        <Text style={styles.dateValue}>
                            {details.dueDate ? new Date(details.dueDate).toLocaleDateString() : '-'}
                        </Text>
                    </View>
                </View>

                {/* Line Items Table */}
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableHeaderCell, styles.colDescription]}>DESCRIPTION</Text>
                        <Text style={[styles.tableHeaderCell, styles.colQty]}>QTY</Text>
                        <Text style={[styles.tableHeaderCell, styles.colPrice]}>PRICE</Text>
                        <Text style={[styles.tableHeaderCell, styles.colAmount]}>AMOUNT</Text>
                    </View>
                    {details.items?.map((item, i) => (
                        <View key={i} style={styles.tableRow}>
                            <View style={styles.colDescription}>
                                <Text style={styles.tableCellBold}>{item.name || 'Item'}</Text>
                                {item.description && <Text style={[styles.tableCell, { fontSize: 8, marginTop: 2 }]}>{item.description}</Text>}
                            </View>
                            <Text style={[styles.tableCell, styles.colQty]}>{item.quantity}</Text>
                            <Text style={[styles.tableCell, styles.colPrice]}>{details.currency} {Number(item.unitPrice || 0).toFixed(2)}</Text>
                            <Text style={[styles.tableCellBold, styles.colAmount]}>{details.currency} {Number(item.total || 0).toFixed(2)}</Text>
                        </View>
                    ))}
                    {(!details.items || details.items.length === 0) && (
                        <View style={{ paddingVertical: 24, alignItems: 'center' }}>
                            <Text style={{ color: '#94a3b8' }}>No items</Text>
                        </View>
                    )}
                </View>

                {/* Totals */}
                <View style={styles.totalsSection}>
                    <View style={styles.totalsBox}>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Subtotal</Text>
                            <Text style={styles.totalValue}>{details.currency} {Number(details.subTotal || 0).toFixed(2)}</Text>
                        </View>

                        {details.discountDetails?.enabled && (
                            <View style={[styles.totalRow, { color: '#10b981' }]}>
                                <Text style={styles.totalLabel}>
                                    Discount {details.discountDetails.amountType === 'percentage' && `(${details.discountDetails.amount}%)`}
                                </Text>
                                <Text style={styles.totalValue}>
                                    - {details.currency} {(
                                        details.discountDetails.amountType === 'percentage'
                                            ? (Number(details.subTotal || 0) * Number(details.discountDetails.amount || 0) / 100)
                                            : Number(details.discountDetails.amount || 0)
                                    ).toFixed(2)}
                                </Text>
                            </View>
                        )}

                        {details.taxDetails?.enabled && (
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>
                                    Tax {details.taxDetails.amountType === 'percentage' && `(${details.taxDetails.amount}%)`}
                                </Text>
                                <Text style={styles.totalValue}>
                                    + {details.currency} {(
                                        details.taxDetails.amountType === 'percentage'
                                            ? ((Number(details.subTotal || 0) - (details.discountDetails?.enabled ? (details.discountDetails.amountType === 'percentage' ? Number(details.subTotal || 0) * Number(details.discountDetails.amount || 0) / 100 : Number(details.discountDetails.amount || 0)) : 0)) * Number(details.taxDetails.amount || 0) / 100)
                                            : Number(details.taxDetails.amount || 0)
                                    ).toFixed(2)}
                                </Text>
                            </View>
                        )}

                        {details.shippingDetails?.enabled && (
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Shipping</Text>
                                <Text style={styles.totalValue}>
                                    + {details.currency} {(
                                        details.shippingDetails.amountType === 'percentage'
                                            ? (Number(details.subTotal || 0) * Number(details.shippingDetails.amount || 0) / 100)
                                            : Number(details.shippingDetails.amount || 0)
                                    ).toFixed(2)}
                                </Text>
                            </View>
                        )}

                        <View style={styles.grandTotalRow}>
                            <Text style={styles.grandTotalLabel}>Total</Text>
                            <Text style={styles.grandTotalValue}>{details.currency} {Number(details.totalAmount || 0).toFixed(2)}</Text>
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
                            <View style={{ marginBottom: 16 }}>
                                <Text style={styles.footerTitle}>Payment Information</Text>
                                <Text style={styles.footerText}>{details.paymentInformation}</Text>
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
                        <View style={[styles.footerSection, { alignItems: 'flex-end' }]}>
                            <Text style={styles.footerTitle}>Notes</Text>
                            <Text style={[styles.footerText, { fontStyle: 'italic' }]}>{details.notes}</Text>
                        </View>
                    )}
                </View>

                {/* Signature */}
                {details.signature && (
                    <View style={styles.signature}>
                        <Text style={styles.signatureLabel}>SIGNATURE</Text>
                        {details.signature.type === 'type' && details.signature.data && (
                            <Text style={details.signature.font ? [styles.signatureText, { fontFamily: details.signature.font }] : styles.signatureText}>
                                {details.signature.data}
                            </Text>
                        )}
                        {details.signature.type !== 'type' && details.signature.data && (
                            <Image src={details.signature.data} style={styles.signatureImage} />
                        )}
                    </View>
                )}
            </Page>
        </Document>
    );
}
