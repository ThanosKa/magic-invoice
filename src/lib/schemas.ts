import { z } from "zod";

export const customInputSchema = z.object({
  key: z.string().min(1, "errors.customKeyRequired"),
  value: z.string().min(1, "errors.customValueRequired"),
});

export const partySchema = z.object({
  name: z.string().min(1, "errors.nameRequired"),
  email: z.string().email("errors.emailInvalid"),
  phone: z.string().min(1, "errors.phoneRequired"),
  address: z.string().min(1, "errors.addressRequired"),
  customInputs: z.array(customInputSchema).optional(),
});

export const itemSchema = z.object({
  name: z.string().min(1, "errors.itemNameRequired"),
  description: z.string(),
  quantity: z.number().min(0.01, "errors.quantityPositive"),
  unitPrice: z.number().min(0, "errors.unitPricePositive"),
  total: z.number(),
});

export const chargeSchema = z.object({
  enabled: z.boolean(),
  amount: z.number().min(0, "errors.amountNonNegative"),
  amountType: z.enum(["amount", "percentage"]),
});

export const signatureSchema = z
  .object({
    type: z.enum(["draw", "type", "upload"]),
    data: z.string(),
    font: z.string().optional(),
  })
  .optional();

export const invoiceDetailsSchema = z.object({
  invoiceNumber: z.string().min(1, "errors.invoiceNumberRequired"),
  invoiceDate: z.date(),
  dueDate: z.date(),
  invoiceLogo: z.string().optional(),
  currency: z.string().min(1, "errors.currencyRequired"),
  items: z.array(itemSchema).min(1, "errors.itemsRequired"),
  subTotal: z.number(),
  totalAmount: z.number(),
  pdfTemplate: z.union([z.literal(1), z.literal(2)]),

  discountDetails: chargeSchema,
  taxDetails: chargeSchema,
  shippingDetails: chargeSchema,

  paymentInformation: z.string().optional(),
  termsConditions: z.string().optional(),
  notes: z.string().optional(),

  signature: signatureSchema,
  totalInWordsEnabled: z.boolean().optional(),
  totalInWords: z.string().optional(),
});

export const formSchema = z.object({
  sender: partySchema,
  receiver: partySchema,
  details: invoiceDetailsSchema,
});

export type FormSchemaType = z.infer<typeof formSchema>;
export type PartySchemaType = z.infer<typeof partySchema>;
export type ItemSchemaType = z.infer<typeof itemSchema>;
export type ChargeSchemaType = z.infer<typeof chargeSchema>;

export function buildDefaultInvoice(): FormSchemaType {
  const invoiceDate = new Date();
  const dueDate = new Date(invoiceDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  return {
    sender: {
      name: "",
      email: "",
      phone: "",
      address: "",
      customInputs: [],
    },
    receiver: {
      name: "",
      email: "",
      phone: "",
      address: "",
      customInputs: [],
    },
    details: {
      invoiceNumber: "INV-0001",
      invoiceDate,
      dueDate,
      currency: "USD",
      items: [
        {
          name: "",
          description: "",
          quantity: 1,
          unitPrice: 0,
          total: 0,
        },
      ],
      subTotal: 0,
      totalAmount: 0,
      pdfTemplate: 1,
      discountDetails: {
        enabled: false,
        amount: 0,
        amountType: "amount" as const,
      },
      taxDetails: {
        enabled: false,
        amount: 0,
        amountType: "percentage" as const,
      },
      shippingDetails: {
        enabled: false,
        amount: 0,
        amountType: "amount" as const,
      },
      paymentInformation: "",
      termsConditions: "",
      notes: "",
      totalInWordsEnabled: false,
      totalInWords: "",
    },
  };
}

export const FORM_DEFAULT_VALUES: FormSchemaType = buildDefaultInvoice();
