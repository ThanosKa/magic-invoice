import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";

import { TranslationProvider } from "@/contexts/TranslationContext";
import { PaymentForm } from "./payment-form";
import { FORM_DEFAULT_VALUES, FormSchemaType } from "@/lib/schemas";

function createDefaultValues(): FormSchemaType {
  return {
    sender: { ...FORM_DEFAULT_VALUES.sender },
    receiver: { ...FORM_DEFAULT_VALUES.receiver },
    details: {
      ...FORM_DEFAULT_VALUES.details,
      invoiceDate: new Date(),
      dueDate: new Date(Date.now() + 86_400_000),
      items: FORM_DEFAULT_VALUES.details.items.map((item) => ({ ...item })),
      discountDetails: { ...FORM_DEFAULT_VALUES.details.discountDetails },
      taxDetails: { ...FORM_DEFAULT_VALUES.details.taxDetails },
      shippingDetails: { ...FORM_DEFAULT_VALUES.details.shippingDetails },
    },
  };
}

function renderPaymentForm() {
  let methods: UseFormReturn<FormSchemaType> | undefined;

  function Wrapper() {
    methods = useForm<FormSchemaType>({
      defaultValues: createDefaultValues(),
    });

    return (
      <TranslationProvider>
        <FormProvider {...methods}>
          <PaymentForm />
        </FormProvider>
      </TranslationProvider>
    );
  }

  const view = render(<Wrapper />);

  if (!methods) {
    throw new Error("Form methods not initialized");
  }

  return { ...view, user: userEvent.setup(), methods };
}

describe("PaymentForm", () => {
  it("enables discount fields and switches to percentage mode", async () => {
    const { user, methods } = renderPaymentForm();
    const [discountSwitch] = screen.getAllByRole("switch");

    expect(methods.getValues("details.discountDetails.enabled")).toBe(false);

    await user.click(discountSwitch);

    expect(methods.getValues("details.discountDetails.enabled")).toBe(true);

    await screen.findByPlaceholderText("$");
    await act(async () => {
      methods.setValue("details.discountDetails.amountType", "percentage");
    });

    await waitFor(() =>
      expect(methods.getValues("details.discountDetails.amountType")).toBe(
        "percentage"
      )
    );
    expect(screen.getByPlaceholderText("%")).toBeInTheDocument();
  });

  it("shows tax and shipping inputs with their placeholders", async () => {
    const { user } = renderPaymentForm();
    const [, taxSwitch, shippingSwitch] = screen.getAllByRole("switch");

    await user.click(taxSwitch);
    await user.click(shippingSwitch);

    expect(await screen.findByPlaceholderText("%")).toBeInTheDocument();
    expect(await screen.findByPlaceholderText("$")).toBeInTheDocument();
  });
});
