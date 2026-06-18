import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = resolve("projects/chaztrickey-com/prototype");
const reportDir = resolve(root, "qa");
await mkdir(reportDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",
});
const pages = [
  { name: "home", file: "index.html" },
  { name: "who-i-am", file: "who-i-am.html" },
  { name: "follow", file: "follow.html" },
];
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 1100 },
];

const results = [];

for (const pageSpec of pages) {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const consoleErrors = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => consoleErrors.push(error.message));

    const url = pathToFileURL(resolve(root, pageSpec.file)).href;
    await page.goto(url, { waitUntil: "load" });

    const title = await page.title();
    const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const missingImages = await page.$$eval("img", (images) =>
      images
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.getAttribute("src"))
    );
    const links = await page.$$eval("a[href]", (anchors) => anchors.map((anchor) => anchor.getAttribute("href")));
    await page.screenshot({ path: resolve(reportDir, `${pageSpec.name}-${viewport.name}.png`), fullPage: true });
    await page.close();

    results.push({
      page: pageSpec.file,
      viewport: viewport.name,
      title,
      horizontalOverflow,
      missingImages,
      consoleErrors,
      links,
    });
  }
}

await browser.close();

console.log(JSON.stringify(results, null, 2));
