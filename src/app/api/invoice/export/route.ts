import { NextResponse } from "next/server";
import { Parser as Json2CsvParser } from "json2csv";
import { Builder as XmlBuilder } from "xml2js";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const format = (searchParams.get("format") || "json") as "json" | "csv" | "xml";
    const body = await req.json();

    if (format === "json") {
      const data = JSON.stringify(body, null, 2);
      return new NextResponse(data, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": "attachment; filename=invoice.json",
        },
      });
    }

    if (format === "csv") {
      const parser = new Json2CsvParser();
      const csv = parser.parse(Array.isArray(body) ? body : [body]);
      return new NextResponse(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": "attachment; filename=invoice.csv",
        },
      });
    }

    const builder = new XmlBuilder();
    const xml = builder.buildObject(body);
    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Content-Disposition": "attachment; filename=invoice.xml",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Export failed", { status: 500 });
  }
}

