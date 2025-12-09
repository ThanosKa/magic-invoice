'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from '@/lib/schemas';

type SignatureMode = 'draw' | 'type' | 'upload';

interface SignatureContextType {
    mode: SignatureMode;
    data: string;
    font?: string;
    setDrawData: (dataUrl: string) => void;
    setTyped: (text: string, font?: string) => void;
    setUploaded: (dataUrl: string) => void;
    clearSignature: () => void;
    setMode: (mode: SignatureMode) => void;
}

const SignatureContext = createContext<SignatureContextType | undefined>(undefined);

export function SignatureProvider({ children }: { children: React.ReactNode }) {
    const { setValue } = useFormContext<FormSchemaType>();
    const [mode, setMode] = useState<SignatureMode>('draw');
    const [data, setData] = useState('');
    const [font, setFont] = useState<string | undefined>(undefined);

    const persist = useCallback(
        (next: { type: SignatureMode; data: string; font?: string }) => {
            setValue('details.signature', next);
        },
        [setValue]
    );

    const setDrawData = useCallback(
        (dataUrl: string) => {
            setData(dataUrl);
            setMode('draw');
            setFont(undefined);
            persist({ type: 'draw', data: dataUrl });
        },
        [persist]
    );

    const setTyped = useCallback(
        (text: string, nextFont?: string) => {
            setData(text);
            setMode('type');
            setFont(nextFont);
            persist({ type: 'type', data: text, font: nextFont });
        },
        [persist]
    );

    const setUploaded = useCallback(
        (dataUrl: string) => {
            setData(dataUrl);
            setMode('upload');
            setFont(undefined);
            persist({ type: 'upload', data: dataUrl });
        },
        [persist]
    );

    const clearSignature = useCallback(() => {
        setData('');
        setFont(undefined);
        setMode('draw');
        setValue('details.signature', undefined);
    }, [setValue]);

    return (
        <SignatureContext.Provider
            value={{ mode, data, font, setDrawData, setTyped, setUploaded, clearSignature, setMode }}
        >
            {children}
        </SignatureContext.Provider>
    );
}

export function useSignature() {
    const ctx = useContext(SignatureContext);
    if (!ctx) throw new Error('useSignature must be used within SignatureProvider');
    return ctx;
}

