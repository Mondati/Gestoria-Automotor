import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 5050;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.ico':  'image/x-icon',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
  '.webmanifest': 'application/manifest+json',
};

// Minimal static server for dist/
const server = createServer((req, res) => {
  const url = req.url.split('?')[0];
  let filePath = join(DIST, url === '/' ? 'index.html' : url);
  try {
    statSync(filePath);
  } catch {
    filePath = join(DIST, 'index.html'); // SPA fallback
  }
  const type = MIME[extname(filePath)] ?? 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  res.end(readFileSync(filePath));
});

await new Promise(resolve => server.listen(PORT, resolve));
console.log(`[prerender] serving dist/ on :${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });

console.log('[prerender] navigating...');
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait for React to mount the main content
await page.waitForSelector('#main', { timeout: 15000 });

// Allow animations / web fonts to settle
await new Promise(resolve => setTimeout(resolve, 1500));

const html = await page.evaluate(() => document.documentElement.outerHTML);

await browser.close();
server.close();

writeFileSync(join(DIST, 'index.html'), '<!DOCTYPE html>\n' + html, 'utf-8');
console.log('[prerender] dist/index.html pre-rendered successfully');
