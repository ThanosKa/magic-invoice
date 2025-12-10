import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";

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

function RenderPaymentForm() {
  const methods = useForm<FormSchemaType>({
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

function renderPaymentForm() {
  const view = render(<RenderPaymentForm />);

  return { ...view, user: userEvent.setup() };
}

describe("PaymentForm", () => {
  it("enables discount fields and switches to percentage mode", async () => {
    const { user } = renderPaymentForm();
    const [discountSwitch] = screen.getAllByRole("switch");

    await user.click(discountSwitch);

    await screen.findByPlaceholderText("$");
    expect(screen.getByPlaceholderText("$")).toBeInTheDocument();
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
