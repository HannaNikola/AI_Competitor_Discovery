// import { chromium } from "playwright";
import { getBrowser } from "./browser";

// export async function scrapeWebsite(url: string) {
//   const browser = await chromium.launch();

//   const page = await browser.newPage();

//   await page.goto(url, {
//     waitUntil: "domcontentloaded",
//     timeout: 30000,
//   });

//   const text = await page.evaluate(() => {
//     return document.body.innerText;
//   });

//   await browser.close();

//   return text.slice(0, 8000);
// }




// export async function scrapeWebsite(url: string) {
//   const browser = await playwright.launch({
//     args: chromium.args,
//     executablePath: await chromium.executablePath(),
//     headless: true,
//   });

//   const page = await browser.newPage();

//   // 🚀 ускоряем загрузку (важно для Vercel)
//   await page.route("**/*", (route) => {
//     const type = route.request().resourceType();

//     if (["image", "stylesheet", "font"].includes(type)) {
//       route.abort();
//     } else {
//       route.continue();
//     }
//   });

//   try {
//     await page.goto(url, {
//       waitUntil: "domcontentloaded",
//       timeout: 10000, // уменьшили под лимиты Vercel
//     });
//   } catch (e) {
//     console.log("Page load timeout, продолжаем...");
//   }

//   // даём странице чуть дорендериться
//   await page.waitForTimeout(1000);

//   const text = await page.evaluate(() => {
//     return document.body.innerText;
//   });

//   await browser.close();

//   return text.slice(0, 8000);
// }





export async function scrapeWebsite(url: string) {
  const browser = await getBrowser();

  try {
    const page = await browser.newPage();

   
    await page.route("**/*", (route) => {
      const type = route.request().resourceType();
      if (["image", "stylesheet", "font"].includes(type)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
    await page.waitForTimeout(1000);

    const text = await page.evaluate(() => document.body.innerText);
    return text.slice(0, 8000);
  } catch (e) {
    console.error("Scraping error:", e);
    return "";
  } finally {
    await browser.close();
  }
}