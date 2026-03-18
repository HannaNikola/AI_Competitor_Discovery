



import { chromium as playwright } from "playwright-core";
import chromium from "@sparticuz/chromium";

const getBrowser = await playwright.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: true,
});