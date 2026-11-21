/* ==========================================================================
   Aeth3rius — Single Source of Truth (EDIT YOUR DATA HERE)
   ==========================================================================
   How to update:
   1. Set your WhatsApp Business number in STORE_CONFIG.whatsappNumber
      (Indonesian international format without "+" or spaces, e.g. "6281234567890").
   2. Drop your logo / hero / product photos into the assets/ folders and
      fill in the relative file paths below (leave [] to show studio placeholders).
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
  heroImage: "assets/hero/hero.jpg",

  // WhatsApp Business number in international format without "+"
  whatsappNumber: "6289665774307",

  // General storefront & social links (used in Footer & Concierge card)
  storeLinks: {
    toco: "https://toco.id/store/theory808",
    shopee: "https://shopee.co.id/theory808.fo",
    tokopedia: "https://www.tokopedia.com/theory808",
    tiktok: "https://vt.tiktok.com/ZS9PkrqhwcNFP-tHrWs/",
    instagram: "https://www.instagram.com/aeth3rius",
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
    images: [
      "assets/products/vertexgrips/VertexGrips-1.jpg",
      "assets/products/vertexgrips/VertexGrips-2.jpg",
      "assets/products/vertexgrips/VertexGrips-3.jpg",
      "assets/products/vertexgrips/VertexGrips-4.jpg",
      "assets/products/vertexgrips/VertexGrips-5.jpg",
    ],
    illustration: "vertex",
    directPrice: 115000,      // Lower price on Toco & WhatsApp Business (IDR)
    marketplacePrice: 135000, // Standard price on Shopee, Tokopedia, TikTok Shop (IDR)
    summary: {
      id: "Profil full-length dengan sudut tegas untuk kontrol ekstra saat sprint dan skid di drop bar.",
      en: "Full-length angular profile built for locked-in leverage during sprints and skids on drop bars.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Full Profile · Fixed Gear",
      en: "Drop Bar Additional Grip · Full Profile · Fixed Gear",
    },
    channels: {
      toco: "https://toco.id/link/rCtUYUM7RdVYtt7WinR51L",
      shopee: "https://shopee.co.id/product/824709262/40452762456/",
      tokopedia: "https://tk.tokopedia.com/ZSsJqWV43/",
      tiktok: "https://vt.tiktok.com/ZS9PkrqhwcNFP-tHrWs/",
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
    images: [
      "assets/products/apexgrips/ApexGrips1.jpg",
      "assets/products/apexgrips/ApexGrips2.jpg",
      "assets/products/apexgrips/ApexGrips3.jpg",
      "assets/products/apexgrips/ApexGrips4.jpg",
      "assets/products/apexgrips/ApexGrips5.jpg",
    ],
    illustration: "apex",
    directPrice: 115000,
    marketplacePrice: 135000,
    summary: {
      id: "Kontur ergonomis full-length yang mengikuti telapak tangan untuk kenyamanan jarak jauh.",
      en: "Full-length contoured ergonomics shaped to follow natural palm pressure on longer rides.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Contoured Full · Fixed Gear",
      en: "Drop Bar Additional Grip · Contoured Full · Fixed Gear",
    },
    channels: {
      toco: "https://toco.id/link/tZouHCcT1V5JVzYGTtxe9d",
      shopee: "https://shopee.co.id/product/824709262/28084006335/",
      tokopedia: "https://tk.tokopedia.com/ZSsJbLM9j/",
      tiktok: "https://vt.tiktok.com/ZS9PkrqhwcNFP-tHrWs/",
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
    images: [
      "assets/products/shortvertexgrips/ShortVertexGrips1.jpg",
      "assets/products/shortvertexgrips/ShortVertexGrips2.jpg",
      "assets/products/shortvertexgrips/ShortVertexGrips3.jpg",
      "assets/products/shortvertexgrips/ShortVertexGrips4.jpg",
      "assets/products/shortvertexgrips/ShortVertexGrips5.jpg",
    ],
    illustration: "short-vertex",
    directPrice: 95000,
    marketplacePrice: 115000,
    summary: {
      id: "Versi ringkas dari Vertex untuk tampilan kokpit bersih dan posisi tangan agresif.",
      en: "Compact edition of the Vertex for a minimal cockpit footprint and agile hand placement.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Compact Angular · Fixed Gear",
      en: "Drop Bar Additional Grip · Compact Angular · Fixed Gear",
    },
    channels: {
      toco: "https://toco.id/link/2HaMShmNrSu987cZ3u7YaE",
      shopee: "https://shopee.co.id/product/824709262/41714902133/",
      tokopedia: "https://tk.tokopedia.com/ZSsJqs9a9/",
      tiktok: "https://vt.tiktok.com/ZS9PkrqhwcNFP-tHrWs/",
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
    images: [
      "assets/products/shortapexgrips/ShortApexGrips1.jpg",
      "assets/products/shortapexgrips/ShortApexGrips2.jpg",
      "assets/products/shortapexgrips/ShortApexGrips3.jpg",
      "assets/products/shortapexgrips/ShortApexGrips4.jpg",
      "assets/products/shortapexgrips/ShortApexGrips5.jpg",
    ],
    illustration: "short-apex",
    directPrice: 95000,
    marketplacePrice: 115000,
    summary: {
      id: "Siluet pendek dengan kurva halus Apex—ringan, rapi, dan responsif di lalu lintas padat.",
      en: "Shortened silhouette with the signature Apex curve—light, tidy, and quick in city traffic.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Compact Contoured · Fixed Gear",
      en: "Drop Bar Additional Grip · Compact Contoured · Fixed Gear",
    },
    channels: {
      toco: "https://toco.id/link/fLQy8i9P8smCb2uftpGFtr",
      shopee: "https://shopee.co.id/product/824709262/44214897595/",
      tokopedia: "https://tk.tokopedia.com/ZSsJbLDNC/",
      tiktok: "https://vt.tiktok.com/ZS9PkrqhwcNFP-tHrWs/",
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
    // Drop photos in assets/products/devilgrips/ and add paths here when ready
    images: [],
    illustration: "devil",
    directPrice: 95000,
    marketplacePrice: 115000,
    summary: {
      id: "Model signature berkarakter agresif dengan cengkeraman maksimal untuk gaya berkendara penuh presisi.",
      en: "Signature aggressive profile delivering maximum lock-in grip and unmistakable cockpit presence.",
    },
    specs: {
      id: "Drop Bar Additional Grip · Signature Edition · Fixed Gear",
      en: "Drop Bar Additional Grip · Signature Edition · Fixed Gear",
    },
    channels: {
      toco: "https://toco.id/store/theory808",
      shopee: "https://shopee.co.id/product/824709262/40218568286/",
      tokopedia: "https://tk.tokopedia.com/ZSsJbRwMC/",
      tiktok: "https://vt.tiktok.com/ZS9PkrqhwcNFP-tHrWs/",
    },
  },
];
