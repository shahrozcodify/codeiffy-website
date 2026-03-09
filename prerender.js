import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PATH = path.join(__dirname, 'dist');
const PORT = 3333;

const routes = [
    '/',
    '/services',
    '/services/artificial-intelligence',
    '/services/staff-augmentation',
    '/services/software-development',
    '/services/product-development',
    '/industries',
    '/blog',
    '/casestudy',
    '/about',
    '/contact',
    '/career',
    '/privacy-policy',
    '/terms-of-use',
];

async function prerender() {
    const app = express();
    // Read the clean index.html into memory at the start
    const template = fs.readFileSync(path.join(DIST_PATH, 'index.html'), 'utf-8');

    // Serve static assets from dist
    app.use(express.static(DIST_PATH));

    // For all other routes, serve the CLEAN template
    app.use((req, res, next) => {
        if (req.url.includes('.') || req.url.startsWith('/assets')) {
            return next();
        }
        res.send(template);
    });

    const server = app.listen(PORT, async () => {
        console.log(`Server started at http://localhost:${PORT}`);

        const browser = await puppeteer.launch({ headless: true });
        for (const route of routes) {
            let page;
            try {
                page = await browser.newPage();
                console.log(`Prerendering ${route}...`);
                await page.setViewport({ width: 1920, height: 1080 });

                await page.goto(`http://localhost:${PORT}${route}`, {
                    waitUntil: 'networkidle0',
                    timeout: 60000 // 60 seconds
                });

                // Wait for react-helmet-async to update the head
                await new Promise(resolve => setTimeout(resolve, 2000));

                const content = await page.content();
                const routePath = path.join(DIST_PATH, route);

                if (!fs.existsSync(routePath)) {
                    fs.mkdirSync(routePath, { recursive: true });
                }

                fs.writeFileSync(path.join(routePath, 'index.html'), content);
                console.log(`Finished ${route}`);
            } catch (err) {
                console.error(`Failed to prerender ${route}:`, err.message);
            } finally {
                if (page) await page.close();
            }
        }

        await browser.close();
        server.close();
        console.log('Prerendering process finished!');
        process.exit(0);
    });
}

prerender();
