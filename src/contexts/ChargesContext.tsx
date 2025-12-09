'use client';

import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';
import { formatPriceToString } from '@/lib/helpers';

interface ChargesContextType {
    calculateTotals: () => void;
}

const ChargesContext = createContext<ChargesContextType | undefined>(undefined);

export function ChargesProvider({ children }: { children: React.ReactNode }) {
    const { setValue, control } = useFormContext<FormSchemaType>();

    // Watch relevant fields
    const items = useWatch({ control, name: 'details.items' });
    const discountDetails = useWatch({ control, name: 'details.discountDetails' });
    const taxDetails = useWatch({ control, name: 'details.taxDetails' });
    const shippingDetails = useWatch({ control, name: 'details.shippingDetails' });
    const currency = useWatch({ control, name: 'details.currency' });
    const totalInWordsEnabled = useWatch({ control, name: 'details.totalInWordsEnabled' });

    const calculateTotals = useCallback(() => {
        if (!items || items.length === 0) return;

        // Calculate subtotal
        const subTotal = items.reduce((sum, item) => {
            return sum + (parseFloat(String(item.total)) || 0);
        }, 0);

        setValue('details.subTotal', subTotal);

        let total = subTotal;

        // Apply discount
        if (discountDetails?.enabled) {
            const discountAmount = discountDetails.amountType === 'percentage'
                ? (total * discountDetails.amount) / 100
                : discountDetails.amount;
            total -= discountAmount;
        }

        // Apply tax
        if (taxDetails?.enabled) {
            const taxAmount = taxDetails.amountType === 'percentage'
                ? (total * taxDetails.amount) / 100
                : taxDetails.amount;
            total += taxAmount;
        }

        // Apply shipping
        if (shippingDetails?.enabled) {
            const shippingAmount = shippingDetails.amountType === 'percentage'
                ? (total * shippingDetails.amount) / 100
                : shippingDetails.amount;
            total += shippingAmount;
        }

        setValue('details.totalAmount', total);

        // Generate total in words if enabled
        if (totalInWordsEnabled) {
            const words = formatPriceToString(total, currency || 'USD');
            setValue('details.totalInWords', words);
        } else {
            setValue('details.totalInWords', '');
        }
    }, [items, discountDetails, taxDetails, shippingDetails, currency, totalInWordsEnabled, setValue]);

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
        throw new Error('useCharges must be used within ChargesProvider');
    }
    return context;
}
