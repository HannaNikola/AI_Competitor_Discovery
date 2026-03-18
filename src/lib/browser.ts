import { chromium as playwright } from "playwright-core";
import chromium from "@sparticuz/chromium";



import { chromium as playwrightCore } from "playwright-core";


export async function getBrowser() {
  let browser;

  // проверяем, где мы: Vercel или локально
  const isVercel = !!process.env.VERCEL;

  if (isVercel) {
    // serverless-compatible
    browser = await playwrightCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  } else {
    // локальная машина (Windows / Mac / Linux)
    const { chromium } = await import("playwright"); // обычный Playwright
    browser = await chromium.launch({ headless: true });
  }

  return browser;
}