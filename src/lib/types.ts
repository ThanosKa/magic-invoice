export type InvoiceType = {
  sender: PartyType;
  receiver: PartyType;
  details: InvoiceDetailsType;
};

export type PartyType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  customInputs?: CustomInputType[];
};

export type CustomInputType = {
  key: string;
  value: string;
};

export type InvoiceDetailsType = {
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  invoiceLogo?: string;
  currency: string;
  items: ItemType[];
  subTotal: number;
  totalAmount: number;
  pdfTemplate: 1 | 2;

  discountDetails: ChargeType;
  taxDetails: ChargeType;
  shippingDetails: ChargeType;

  paymentInformation?: string;
  termsConditions?: string;
  notes?: string;

  signature?: SignatureType;
  totalInWords?: string;
  totalInWordsEnabled?: boolean;
};

export type ItemType = {
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

export type ChargeType = {
  enabled: boolean;
  amount: number;
  amountType: "amount" | "percentage";
};

export type SignatureType = {
  type: "draw" | "type" | "upload";
  data: string;
  font?: string;
};

export type FormType = InvoiceType;

export type WizardStepType =
  | "from-to"
  | "invoice-details"
  | "items"
  | "payment"
  | "summary";

export type ExportType = "json" | "csv" | "xml" | "xlsx";

export const SIGNATURE_FONTS = [
  "Satisfy",
  "Dancing Script",
  "Pacifico",
  "Great Vibes",
  "Allura",
] as const;

export const SIGNATURE_COLORS = [
  "#000000",
  "#1e40af",
  "#991b1b",
  "#166534",
] as const;
