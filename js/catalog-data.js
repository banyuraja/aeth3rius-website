/* ==========================================================================
   Aeth3rius — Single Source of Truth (EDIT YOUR DATA HERE)
   ==========================================================================
   How to update:
   1. Set your WhatsApp Business number in STORE_CONFIG.whatsappNumber
      (Indonesian international format without "+" or spaces, e.g. "6281234567890").
   2. Drop your logo / hero / product photos into the assets/ folders and
      fill in the relative file paths below (leave "" to show studio placeholders).
   3. Update directPrice (Toco & WhatsApp) and marketplacePrice (Shopee,
      Tokopedia, TikTok Shop) as plain integers in IDR — formatting and
      savings are calculated automatically.
   4. Paste each product's live shop URLs into channels.toco / shopee /
      tokopedia / tiktok.
   ========================================================================== */

window.AETH3RIUS = window.AETH3RIUS || {};

window.AETH3RIUS.STORE_CONFIG = {
  brandName: "AETH3RIUS",

  // Optional: drop logo into assets/brand/logo.svg and set path below
  logo: "",

  // Optional: drop hero photo into assets/hero/hero.jpg and set path below
  heroImage: "",

  // WhatsApp Business number in international format without "+" (e.g. "6281234567890")
  // Leave empty "" while using placeholders; replace with your real number before launch.
  whatsappNumber: "",

  // General storefront & social links (used in Footer & Concierge card)
  storeLinks: {
    toco: "#",
    shopee: "#",
    tokopedia: "#",
    tiktok: "#",
    instagram: "#",
  },
};

window.AETH3RIUS.GRIP_CATALOG = [
  {
    id: "vertex-grips",
    index: "01",
    name: "Vertex Grips",
    badge: {
      id: "Full Length",
      en: "Full Length",
    },
    isSpecial: false,
    // Drop photo in assets/products/vertex-grips.jpg and set path below
    image: "",
    illustration: "vertex",
    directPrice: 125000,      // Lower price on Toco & WhatsApp Business (IDR)
    marketplacePrice: 145000, // Standard price on Shopee, Tokopedia, TikTok Shop (IDR)
    summary: {
      id: "Profil full-length dengan sudut tegas untuk kontrol ekstra saat sprint dan skid di drop bar.",
      en: "Full-length angular profile built for locked-in leverage during sprints and skids on drop bars.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Full Profile · Fixed Gear",
      en: "Drop Bar Additional Grip · Full Profile · Fixed Gear",
    },
    channels: {
      toco: "#",
      shopee: "#",
      tokopedia: "#",
      tiktok: "#",
    },
  },
  {
    id: "apex-grips",
    index: "02",
    name: "Apex Grips",
    badge: {
      id: "Full Length",
      en: "Full Length",
    },
    isSpecial: false,
    // Drop photo in assets/products/apex-grips.jpg and set path below
    image: "",
    illustration: "apex",
    directPrice: 135000,
    marketplacePrice: 155000,
    summary: {
      id: "Kontur ergonomis full-length yang mengikuti telapak tangan untuk kenyamanan jarak jauh.",
      en: "Full-length contoured ergonomics shaped to follow natural palm pressure on longer rides.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Contoured Full · Fixed Gear",
      en: "Drop Bar Additional Grip · Contoured Full · Fixed Gear",
    },
    channels: {
      toco: "#",
      shopee: "#",
      tokopedia: "#",
      tiktok: "#",
    },
  },
  {
    id: "short-vertex-grips",
    index: "03",
    name: "Short Vertex Grips",
    badge: {
      id: "Compact",
      en: "Compact",
    },
    isSpecial: false,
    // Drop photo in assets/products/short-vertex-grips.jpg and set path below
    image: "",
    illustration: "short-vertex",
    directPrice: 105000,
    marketplacePrice: 120000,
    summary: {
      id: "Versi ringkas dari Vertex untuk tampilan kokpit bersih dan posisi tangan agresif.",
      en: "Compact edition of the Vertex for a minimal cockpit footprint and agile hand placement.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Compact Angular · Fixed Gear",
      en: "Drop Bar Additional Grip · Compact Angular · Fixed Gear",
    },
    channels: {
      toco: "#",
      shopee: "#",
      tokopedia: "#",
      tiktok: "#",
    },
  },
  {
    id: "short-apex-grips",
    index: "04",
    name: "Short Apex Grips",
    badge: {
      id: "Compact",
      en: "Compact",
    },
    isSpecial: false,
    // Drop photo in assets/products/short-apex-grips.jpg and set path below
    image: "",
    illustration: "short-apex",
    directPrice: 115000,
    marketplacePrice: 130000,
    summary: {
      id: "Siluet pendek dengan kurva halus Apex—ringan, rapi, dan responsif di lalu lintas padat.",
      en: "Shortened silhouette with the signature Apex curve—light, tidy, and quick in city traffic.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Compact Contoured · Fixed Gear",
      en: "Drop Bar Additional Grip · Compact Contoured · Fixed Gear",
    },
    channels: {
      toco: "#",
      shopee: "#",
      tokopedia: "#",
      tiktok: "#",
    },
  },
  {
    id: "devil-grips",
    index: "05",
    name: "Devil Grips",
    badge: {
      id: "Signature",
      en: "Signature",
    },
    isSpecial: true,
    // Drop photo in assets/products/devil-grips.jpg and set path below
    image: "",
    illustration: "devil",
    directPrice: 150000,
    marketplacePrice: 175000,
    summary: {
      id: "Model signature berkarakter agresif dengan cengkeraman maksimal untuk gaya berkendara penuh presisi.",
      en: "Signature aggressive profile delivering maximum lock-in grip and unmistakable cockpit presence.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Signature Edition · Fixed Gear",
      en: "Drop Bar Additional Grip · Signature Edition · Fixed Gear",
    },
    channels: {
      toco: "#",
      shopee: "#",
      tokopedia: "#",
      tiktok: "#",
    },
  },
];
