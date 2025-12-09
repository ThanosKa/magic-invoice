import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = String(formData.get("email") || "");
    const invoiceNumber = String(formData.get("invoiceNumber") || "invoice");
    const file = formData.get("invoicePdf") as File | null;

    if (!email || !file) {
      logger.warn({ hasEmail: Boolean(email), hasFile: Boolean(file) }, "Missing email or file");
      return new NextResponse("Missing email or file", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: `Invoice Ready: #${invoiceNumber}`,
      text: "Your invoice is attached.",
      attachments: [
        {
          filename: "invoice.pdf",
          content: buffer,
        },
      ],
    });

    logger.info({ email, invoiceNumber }, "Invoice email sent");
    return NextResponse.json({ ok: true });
  } catch (error) {
    logger.error({ err: error }, "Email send failed");
    return new NextResponse("Email send failed", { status: 500 });
  }
}

