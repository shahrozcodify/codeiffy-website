# Coders Wire - Fully Dynamic Content Platform

This project is engineered to be **100% dynamic** while **strictly preserving the existing layout**. From the navigation menus to the SEO tags and the individual sections of a page, every element is driven by a modular API-first architecture without altering the visual design.

## 🔄 The "Everything Dynamic" Architecture

Our application transitions from static JSX components to a data-driven model where the front-end acts as a **visual engine** for the API content.

### 1. Dynamic Pages & Sections
Instead of hardcoding components in `App.jsx`, pages are constructed on-the-fly:
- **`pageService.js`**: Fetches a page by its slug (e.g., `home`, `about-us`).
- **`SectionRenderer`**: Receives an array of `sections` from the API. It loops through this array and renders the corresponding React component based on the `idForfrontendUse` tag.
- **Example Flow**: API sends `AnimatedHeroSection` → Renderer displays `<Hero />`.

### 2. Dynamic SEO & Scripts (Metadata Management)
Every page manages its own identity dynamically via the `SEO` component:
- **Meta Fields**: The API returns a `meteFields` array containing `og:title`, `description`, `canonical`, etc. These are automatically mapped to the browser's `<head>`.
- **Google Scripts**: Schema Markup (JSON-LD), GTM, and other tracking scripts are injected dynamically into the head using the `googleScripts` array from the API response.

### 3. Dynamic Navigation (Menu API)
The Header and Footer are no longer static:
- **Menu API**: Provides the hierarchy, links, and labels for all navigation items.
- **Global States**: Menus are fetched once and shared across the application, ensuring consistency and ease of updates.

### 4. Per-Page Service Isolation
To ensure maximum speed and maintainability, each major page has its own dedicated service:
```bash
services/
├── config.js         # Centralized Endpoint Configuration
├── apiClient.js      # Global fetch wrapper with error handling
└── pages/            # Page-specific isolation (Home, Blog, etc.)
```

## 🛠️ How to Update Endpoints

Because of our modular design, moving from a staging API to a production API is handled in **one file**:
1. Open `src/services/config.js`.
2. Update the `BASE_URL`.
3. All page services and menu services will automatically point to the new location.

## ⚙️ Development Highlights

- **Fast Refresh**: Optimized Vite setup for near-instant development.
- **Glassmorphism UI**: Built with a custom, premium CSS utility system.
- **Responsive by Design**: Every dynamic section is tested for full mobile responsiveness.

---
**Coders Wire** — *Empowering scalable, data-driven web solutions.*
