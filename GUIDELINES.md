# Aeth3rius Website Guidelines

Single-source reference for maintaining and evolving the **Aeth3rius** Drop Bar Additional Grips website.

---

## 1. Brand & Purpose

- **Brand:** Aeth3rius
- **Core Product:** Drop Bar Additional Grips for cycling enthusiasts & fixed-gear riders in Indonesia.
- **Lineup (5 Models):**
  1. `01` — Vertex Grips
  2. `02` — Apex Grips
  3. `03` — Short Vertex Grips
  4. `04` — Short Apex Grips
  5. `05` — Devil Grips
- **Goal:** Showcase all 5 grip models with transparent dual-tier IDR pricing and route riders to their preferred purchasing channel in 1–2 taps.

---

## 2. Sales Channels & Pricing Rules

- **Direct / Best-Price Tier (Lower Price):**
  - **Toco**
  - **WhatsApp Business Direct Order** (auto-generates a pre-filled WhatsApp message containing the selected grip model in the active language)
- **Official Marketplace Tier (Standard Price — identical across all three):**
  - **Shopee**
  - **Tokopedia**
  - **TikTok Shop**
- **Currency & Localization:**
  - Prices are stored as raw integer IDR values in `js/catalog-data.js` and formatted via `Intl.NumberFormat('id-ID')` (`Rp ...`).
  - Savings (`marketplacePrice - directPrice`) are calculated automatically.
  - Full bilingual toggle: **Indonesian (`id`, default)** and **English (`en`)**, persisted in `localStorage`.

---

## 3. Visual Direction — Clean Minimal Cycling Boutique

- **Aesthetic:** Bright, airy, editorial minimalism inspired by Rapha and Pas Normal Studios — generous whitespace, sharp hairline borders, photography-first cards, zero e-commerce clutter.
- **Color Tokens (`css/tokens.css`):**
  - Canvas: `#F8F7F4` (Warm Alabaster)
  - Surface: `#FFFFFF` (Pure Crisp White)
  - Subtle Band / Placeholder: `#F0EEE9` (Warm Stone)
  - Hairline Border: `#E4E1DA`
  - Primary Ink: `#141413` · Secondary Ink: `#575550` · Muted Ink: `#8C8982`
  - Direct / Best-Price Accent: `#1E4D3B` (Deep Racing Green) with `#EAF2EE` soft tint
  - Special Edition Accent: `#A63429` (Muted Track Crimson)
- **Typography:** `Plus Jakarta Sans` (editorial display & body) + `IBM Plex Mono` (catalog numbers `01`–`05`, IDR prices, spec tags).
- **Shop Button Restraint:** Channel links live inside a clean Order Channel Modal (`<dialog>`) rather than crowding every product card. Buttons stay cohesive with monochrome surfaces and subtle brand accent indicators.

---

## 4. Architecture & Maintenance

Zero build tools — plain HTML5, CSS3, and Vanilla JS (works as a static site on Cloudflare Pages, Netlify, Vercel, GitHub Pages, or opened directly).

```text
aeth3rius website/
├── index.html             # Semantic markup & native <dialog> Order Channel Modal
├── css/
│   ├── tokens.css         # Design tokens (colors, typography, spacing, radii)
│   ├── base.css           # Reset, typography defaults, accessibility utilities
│   └── styles.css         # Section & component styles
├── js/
│   ├── catalog-data.js    # EDIT HERE: prices, shop URLs, WA number, copy, images
│   ├── i18n.js            # UI translations (ID/EN), language persistence, IDR formatter
│   └── app.js             # Catalog rendering, modal state, WA link generator
└── assets/
    ├── brand/             # Optional: logo.svg / logo.png
    ├── hero/              # Optional: hero.jpg / hero.webp
    └── products/          # Optional: vertex-grips.jpg, apex-grips.jpg, etc.
```

### How to Update Products, Prices, or Links
1. Open `js/catalog-data.js`.
2. Update `STORE_CONFIG.whatsappNumber` (international format without `+`, e.g., `6281234567890`) and store URLs.
3. For each of the 5 models in `GRIP_CATALOG`, edit `directPrice`, `marketplacePrice`, `image`, `channels`, and bilingual `summary` / `details`.
4. Drop real photos into `assets/products/`, `assets/hero/`, and `assets/brand/` — placeholders switch automatically to your real images as soon as the paths resolve.
