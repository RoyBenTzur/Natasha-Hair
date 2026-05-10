/**
 * Runs the SSR bundle in Node.js to pre-render the root route and writes
 * dist/client/index.html so Vercel can serve the app as a static SPA.
 *
 * The Cloudflare Workers fetch() interface is Fetch-API-compatible, so the
 * bundle runs as-is in Node 18+.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const serverEntry = pathToFileURL(join(root, 'dist/server/index.js')).href;

const { default: handler } = await import(serverEntry);

const response = await handler.fetch(
  new Request('http://localhost/'),
  {},
  { waitUntil: () => {}, passThroughOnException: () => {} },
);

if (!response.ok) {
  throw new Error(`Prerender failed — server responded ${response.status}`);
}

const html = await response.text();
const out = join(root, 'dist/client/index.html');
writeFileSync(out, html, 'utf8');
console.log(`Prerendered dist/client/index.html (${html.length} bytes)`);
