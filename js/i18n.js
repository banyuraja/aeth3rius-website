/* ==========================================================================
   Aeth3rius — Bilingual Copy (ID / EN) & IDR Currency Utilities
   ========================================================================== */

window.AETH3RIUS = window.AETH3RIUS || {};

window.AETH3RIUS.TRANSLATIONS = {
  id: {
    skipLink: "Langsung ke katalog",
    navCatalog: "Katalog",
    navPricing: "Info Harga",
    navChannels: "Toko Resmi",

    heroEyebrow: "DROP BAR ADDITIONAL GRIPS · FIXED GEAR",
    heroTitle: "Kontrol Tambahan untuk Drop Bar Fixed-Gear.",
    heroSubtitle:
      "Lima model grip rancangan Aeth3rius untuk posisi tangan lebih stabil di jalanan kota. Jelajahi katalog, bandingkan harga, dan pesan melalui platform pilihan Anda.",
    heroCtaPrimary: "Lihat 5 Katalog",
    heroCtaSecondary: "Direct Order — Lebih Hemat",
    heroMetaModels: "05 Model Grip",
    heroMetaChannels: "5 Platform Order",
    heroMetaRegion: "Pengiriman Indonesia",
    heroPlaceholderTop: "AETH3RIUS · STUDIO",
    heroPlaceholderTag: "DROP BAR PROFILE",
    heroPlaceholderBottomLeft: "FIXED GEAR COCKPIT",
    heroPlaceholderBottomRight: "1:1 EDITORIAL SLOT",

    pricingEyebrow: "TRANSPARANSI HARGA · IDR",
    pricingTitle: "Dua Pilihan Harga Sesuai Kenyamanan Belanja Anda",
    tierDirectTitle: "Direct Order (Toco & WhatsApp)",
    tierDirectPill: "Lebih Hemat",
    tierDirectDesc:
      "Harga lebih rendah untuk pemesanan langsung tanpa biaya tambahan marketplace. Proses cepat dan bisa langsung konsultasi model.",
    tierMarketTitle: "Official Marketplaces",
    tierMarketPill: "Harga Standar",
    tierMarketDesc:
      "Harga seragam di Shopee, Tokopedia, dan TikTok Shop. Pilihan tepat bila ingin memakai voucher, gratis ongkir, atau pembayaran marketplace.",

    catalogEyebrow: "KOLEKSI · 01—05",
    catalogTitle: "Katalog Drop Bar Grips",
    catalogNote: "Klik kartu model untuk melihat detail harga dan memilih toko tujuan.",

    priceDirectLabel: "Toco / WhatsApp",
    priceMarketLabel: "Shopee · Tokopedia · TikTok",
    savePrefix: "Hemat",
    cardCta: "Pilih Toko & Order",
    photosLabel: (n) => `${n} Foto`,
    prevPhoto: "Foto sebelumnya",
    nextPhoto: "Foto berikutnya",

    conciergeEyebrow: "DIRECT CONCIERGE",
    conciergeTitle: "Bingung Pilih Model yang Pas untuk Drop Bar Anda?",
    conciergeDesc:
      "Chat langsung via WhatsApp Business untuk rekomendasi profil grip atau pemesanan langsung dengan harga lebih hemat.",
    conciergePoint1: "Harga lebih rendah dibanding marketplace",
    conciergePoint2: "Tanya ukuran & posisi grip sebelum order",
    conciergePoint3: "Respon langsung dari tim Aeth3rius",
    conciergeWaBtn: "Chat WhatsApp Business",
    conciergeTocoBtn: "Buka Toko di Toco",

    modalCloseLabel: "Tutup pilihan toko",
    modalEyebrowPrefix: "KATALOG",
    modalDirectGroup: "Direct Order · Lebih Hemat",
    modalMarketGroup: "Official Marketplaces · Harga Standar",
    channelTocoSub: "Checkout langsung · Harga lebih hemat",
    channelWaSub: "Pesan otomatis via chat · Harga lebih hemat",
    channelShopeeSub: "Official store · Voucher & promo Shopee",
    channelTokopediaSub: "Official store · Pengiriman & proteksi Tokopedia",
    channelTiktokSub: "Official store · Checkout cepat TikTok Shop",
    orderAction: "Order",

    footerTagline:
      "Drop Bar Additional Grips untuk pengendara fixed-gear dan antusias sepeda di Indonesia.",
    footerDirectTitle: "Direct Order (Lebih Hemat)",
    footerMarketTitle: "Official Marketplaces",
    footerCopyright: "© 2026 Aeth3rius. All rights reserved.",

    waGeneralMessage:
      "Halo Aeth3rius, saya ingin bertanya / order Drop Bar Additional Grips.",
    waProductMessage: (name) =>
      `Halo Aeth3rius, saya ingin order ${name} (Direct Order). Apakah stok tersedia?`,

    toastPlaceholderLink: (platform) =>
      `Link ${platform} masih placeholder — edit URL di js/catalog-data.js.`,
    toastPlaceholderWa:
      "Nomor WhatsApp masih placeholder — isi STORE_CONFIG.whatsappNumber di js/catalog-data.js.",
  },

  en: {
    skipLink: "Skip to catalog",
    navCatalog: "Catalog",
    navPricing: "Pricing",
    navChannels: "Channels",

    heroEyebrow: "DROP BAR ADDITIONAL GRIPS · FIXED GEAR",
    heroTitle: "Precision Additional Grips for Fixed-Gear Drop Bars.",
    heroSubtitle:
      "Five Aeth3rius grip profiles built for confident hand positions on urban rides. Explore the lineup, compare pricing, and order via your preferred shop.",
    heroCtaPrimary: "Explore 5 Models",
    heroCtaSecondary: "Direct Order — Best Price",
    heroMetaModels: "05 Grip Models",
    heroMetaChannels: "5 Order Channels",
    heroMetaRegion: "Indonesia Shipping",
    heroPlaceholderTop: "AETH3RIUS · STUDIO",
    heroPlaceholderTag: "DROP BAR PROFILE",
    heroPlaceholderBottomLeft: "FIXED GEAR COCKPIT",
    heroPlaceholderBottomRight: "1:1 EDITORIAL SLOT",

    pricingEyebrow: "PRICING STRUCTURE · IDR",
    pricingTitle: "Transparent Pricing Across Direct & Marketplace Channels",
    tierDirectTitle: "Direct Order (Toco & WhatsApp)",
    tierDirectPill: "Best Price",
    tierDirectDesc:
      "Lower direct-to-rider pricing without extra marketplace fees. Fast checkout and direct fitment chat whenever you need it.",
    tierMarketTitle: "Official Marketplaces",
    tierMarketPill: "Standard Price",
    tierMarketDesc:
      "Uniform pricing across Shopee, Tokopedia, and TikTok Shop. Ideal if you prefer platform vouchers, shipping promos, or escrow checkout.",

    catalogEyebrow: "COLLECTION · 01—05",
    catalogTitle: "Drop Bar Grip Catalog",
    catalogNote: "Click any model card to inspect pricing and choose your shop.",

    priceDirectLabel: "Toco / WhatsApp",
    priceMarketLabel: "Shopee · Tokopedia · TikTok",
    savePrefix: "Save",
    cardCta: "Choose Shop & Order",
    photosLabel: (n) => `${n} Photos`,
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",

    conciergeEyebrow: "DIRECT CONCIERGE",
    conciergeTitle: "Not Sure Which Model Fits Your Drop Bar Setup?",
    conciergeDesc:
      "Message us directly on WhatsApp Business for quick grip recommendations or to order straight at our lowest direct price.",
    conciergePoint1: "Lower direct pricing than marketplaces",
    conciergePoint2: "Quick fitment & hand-position guidance",
    conciergePoint3: "Direct response from Aeth3rius",
    conciergeWaBtn: "Chat WhatsApp Business",
    conciergeTocoBtn: "Visit Toco Store",

    modalCloseLabel: "Close order channels",
    modalEyebrowPrefix: "CATALOG",
    modalDirectGroup: "Direct Order · Best Price",
    modalMarketGroup: "Official Marketplaces · Standard Price",
    channelTocoSub: "Direct checkout · Lower direct price",
    channelWaSub: "Pre-filled order chat · Lower direct price",
    channelShopeeSub: "Official store · Shopee vouchers & promos",
    channelTokopediaSub: "Official store · Tokopedia checkout & shipping",
    channelTiktokSub: "Official store · Fast TikTok Shop checkout",
    orderAction: "Order",

    footerTagline:
      "Drop Bar Additional Grips crafted for fixed-gear riders and cycling enthusiasts across Indonesia.",
    footerDirectTitle: "Direct Order (Best Price)",
    footerMarketTitle: "Official Marketplaces",
    footerCopyright: "© 2026 Aeth3rius. All rights reserved.",

    waGeneralMessage:
      "Hello Aeth3rius, I'd like to ask about / order Drop Bar Additional Grips.",
    waProductMessage: (name) =>
      `Hello Aeth3rius, I'd like to order ${name} (Direct Order). Is it currently available?`,

    toastPlaceholderLink: (platform) =>
      `${platform} link is still a placeholder — update URLs in js/catalog-data.js.`,
    toastPlaceholderWa:
      "WhatsApp number is not set yet — update STORE_CONFIG.whatsappNumber in js/catalog-data.js.",
  },
};

const idrFormatter = new Intl.NumberFormat("id-ID");

window.AETH3RIUS.formatIDR = function formatIDR(amount) {
  return `Rp ${idrFormatter.format(Number(amount) || 0)}`;
};

window.AETH3RIUS.getSavedLanguage = function getSavedLanguage() {
  try {
    const saved = window.localStorage.getItem("aeth3rius-lang");
    if (saved === "id" || saved === "en") return saved;
  } catch (_) {
    // Ignore storage access errors in restricted contexts
  }
  return "id";
};

window.AETH3RIUS.saveLanguage = function saveLanguage(lang) {
  try {
    window.localStorage.setItem("aeth3rius-lang", lang);
  } catch (_) {
    // Ignore storage access errors
  }
};
