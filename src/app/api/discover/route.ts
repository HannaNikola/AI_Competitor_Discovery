import { NextResponse } from "next/server";
import { scrapeWebsite } from "@/src/lib/scraper";

// первый блок AI pipeline:

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    const websiteText = await scrapeWebsite(url);

    return NextResponse.json({
      success: true,
      text: websiteText,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to scrape website",
    });
  }
}
