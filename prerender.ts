import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const routes = [
  '/',
  '/locations',
  '/locations/chambre-privee',
  '/locations/dependance',
  '/locations/maison-entiere',
  '/contact',
];

async function prerender() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  // Import the SSR bundle built by Vite
  const serverEntry = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href;
  const { render } = (await import(serverEntry)) as { render: (url: string) => string };

  for (const route of routes) {
    const html = render(route);
    const page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const filePath = route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');

    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, page);
    console.log(`  Prerendered: ${route}`);
  }

  console.log('Prerendering complete!');
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
