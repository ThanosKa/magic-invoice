import { NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { invoice } = await req.json();
    logger.info("Generating invoice PDF");
    const html = renderInvoiceHtml(invoice);

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
      defaultViewport: chromium.defaultViewport,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: ["domcontentloaded"] });
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();

    const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });

    return new NextResponse(pdfBlob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=invoice.pdf",
      },
    });
  } catch (error) {
    logger.error({ err: error }, "PDF generation failed");
    return new NextResponse("PDF generation failed", { status: 500 });
  }
}

function renderInvoiceHtml(invoice: any) {
  const { sender, receiver, details } = invoice || {};
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; }
          .row { display: flex; justify-content: space-between; }
          .items { width: 100%; border-collapse: collapse; margin-top: 16px; }
          .items th, .items td { border: 1px solid #ddd; padding: 8px; }
          .totals { margin-top: 16px; width: 300px; float: right; }
        </style>
      </head>
      <body>
        <h1>Invoice ${details?.invoiceNumber || ""}</h1>
        <div class="row">
          <div>
            <h3>From</h3>
            <div>${sender?.name || ""}</div>
            <div>${sender?.email || ""}</div>
            <div>${sender?.phone || ""}</div>
            <div>${sender?.address || ""}</div>
          </div>
          <div>
            <h3>To</h3>
            <div>${receiver?.name || ""}</div>
            <div>${receiver?.email || ""}</div>
            <div>${receiver?.phone || ""}</div>
            <div>${receiver?.address || ""}</div>
          </div>
        </div>
        <p>Date: ${details?.invoiceDate ? new Date(details.invoiceDate).toDateString() : ""}</p>
        <p>Due: ${details?.dueDate ? new Date(details.dueDate).toDateString() : ""}</p>
        <table class="items">
          <thead>
            <tr><th>Description</th><th>Qty</th><th>Unit</th><th>Total</th></tr>
          </thead>
          <tbody>
            ${(details?.items || []).map((item: any) => `
              <tr>
                <td>${item.name || ""}</td>
                <td>${item.quantity || 0}</td>
                <td>${item.unitPrice || 0}</td>
                <td>${item.total || 0}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <div class="totals">
          <div>Subtotal: ${details?.subTotal || 0}</div>
          <div>Total: ${details?.totalAmount || 0}</div>
        </div>
      </body>
    </html>
  `;
}

