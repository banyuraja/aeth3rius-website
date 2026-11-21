/* ==========================================================================
   Aeth3rius — Interactive Catalog, Bilingual State & Order Channel Modal
   ========================================================================== */

(function initAeth3rius() {
  const {
    STORE_CONFIG,
    GRIP_CATALOG,
    TRANSLATIONS,
    formatIDR,
    getSavedLanguage,
    saveLanguage,
  } = window.AETH3RIUS;

  let currentLang = getSavedLanguage();
  let activeProductId = null;
  let lastTriggerEl = null;
  let toastTimer = null;

  /* ---------- Minimal Architectural SVG Silhouettes (Placeholders) ---------- */

  const ILLUSTRATIONS = {
    vertex: `
      <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
        <path d="M36 52 H132 C164 52 178 72 178 98 C178 126 160 142 128 142 H98" stroke="currentColor" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round"/>
        <path d="M56 52 L118 52 L134 62 L134 74 L56 68 Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <line x1="56" y1="34" x2="134" y2="34" stroke="currentColor" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="56" cy="34" r="2" fill="currentColor"/>
        <circle cx="134" cy="34" r="2" fill="currentColor"/>
      </svg>
    `,
    apex: `
      <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
        <path d="M36 52 H132 C164 52 178 72 178 98 C178 126 160 142 128 142 H98" stroke="currentColor" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round"/>
        <path d="M54 52 C78 44 110 44 136 58 C144 63 142 74 130 74 C104 72 78 68 54 66 Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M68 56 C92 52 112 54 128 62" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.25" stroke-linecap="round"/>
      </svg>
    `,
    "short-vertex": `
      <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
        <path d="M36 52 H132 C164 52 178 72 178 98 C178 126 160 142 128 142 H98" stroke="currentColor" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round"/>
        <path d="M84 52 L126 52 L138 62 L138 72 L84 66 Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <line x1="84" y1="34" x2="138" y2="34" stroke="currentColor" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="84" cy="34" r="2" fill="currentColor"/>
        <circle cx="138" cy="34" r="2" fill="currentColor"/>
      </svg>
    `,
    "short-apex": `
      <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
        <path d="M36 52 H132 C164 52 178 72 178 98 C178 126 160 142 128 142 H98" stroke="currentColor" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round"/>
        <path d="M82 52 C100 45 122 46 138 58 C144 63 141 72 131 72 C113 70 98 67 82 65 Z" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M92 56 C108 53 120 55 131 62" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.25" stroke-linecap="round"/>
      </svg>
    `,
    devil: `
      <svg viewBox="0 0 220 180" fill="none" aria-hidden="true">
        <path d="M36 56 H132 C164 56 178 76 178 102 C178 130 160 146 128 146 H98" stroke="currentColor" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round"/>
        <path d="M64 56 L108 52 L144 36 L136 62 L146 74 L64 70 Z" fill="#A63429" fill-opacity="0.12" stroke="#A63429" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="144" cy="36" r="2.5" fill="#A63429"/>
      </svg>
    `,
  };

  /* ---------- DOM References ---------- */

  const heroVisual = document.getElementById("hero-visual");
  const catalogGrid = document.getElementById("catalog-grid");
  const orderModal = document.getElementById("order-modal");
  const modalCloseBtn = document.getElementById("modal-close");
  const modalEyebrow = document.getElementById("modal-eyebrow");
  const modalTitle = document.getElementById("modal-title");
  const modalThumb = document.getElementById("modal-thumb");
  const modalDesc = document.getElementById("modal-desc");
  const modalSpecs = document.getElementById("modal-specs");
  const modalDirectPrice = document.getElementById("modal-direct-price");
  const modalMarketPrice = document.getElementById("modal-market-price");
  const modalDirectList = document.getElementById("modal-direct-list");
  const modalMarketList = document.getElementById("modal-market-list");
  const toastEl = document.getElementById("toast");

  /* ---------- Helpers ---------- */

  function t() {
    return TRANSLATIONS[currentLang];
  }

  function isConfiguredUrl(url) {
    return typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
  }

  function buildWhatsAppUrl(message) {
    const cleanNumber = String(STORE_CONFIG.whatsappNumber || "").replace(/[^\d]/g, "");
    if (!cleanNumber) return "";
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.classList.remove("is-visible");
    }, 3400);
  }

  function attachOptionalImage(container, src, alt, eager) {
    if (!src || !src.trim()) return;
    const img = document.createElement("img");
    img.src = src.trim();
    img.alt = alt;
    if (!eager) {
      img.loading = "lazy";
    }
    img.decoding = "async";
    img.addEventListener("load", () => {
      img.classList.add("is-loaded");
    });
    img.addEventListener("error", () => {
      img.remove();
    });
    container.appendChild(img);
  }

  function createChannelLinkElement({ name, sub, dotClass, href, isDirect, isWhatsApp }) {
    const link = document.createElement("a");
    link.className = `channel-btn${isDirect ? " channel-btn--direct" : ""}`;
    link.href = isConfiguredUrl(href) ? href : "#";
    if (isConfiguredUrl(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast(isWhatsApp ? t().toastPlaceholderWa : t().toastPlaceholderLink(name));
      });
    }

    const left = document.createElement("span");
    left.className = "channel-btn-left";

    const dot = document.createElement("span");
    dot.className = `platform-dot ${dotClass}`;
    dot.setAttribute("aria-hidden", "true");

    const textWrap = document.createElement("span");
    textWrap.className = "channel-btn-text";

    const nameEl = document.createElement("span");
    nameEl.className = "channel-btn-name";
    nameEl.textContent = name;

    const subEl = document.createElement("span");
    subEl.className = "channel-btn-sub";
    subEl.textContent = sub;

    textWrap.append(nameEl, subEl);
    left.append(dot, textWrap);

    const right = document.createElement("span");
    right.className = "channel-btn-right";
    right.textContent = `${t().orderAction} ↗`;

    link.append(left, right);
    return link;
  }

  /* ---------- Static Slot Hydration ---------- */

  function hydrateBrandAndHero() {
    if (STORE_CONFIG.logo && STORE_CONFIG.logo.trim()) {
      document.querySelectorAll("[data-brand-logo]").forEach((slot) => {
        const img = document.createElement("img");
        img.src = STORE_CONFIG.logo.trim();
        img.alt = STORE_CONFIG.brandName;
        img.addEventListener("load", () => {
          slot.textContent = "";
          slot.appendChild(img);
        });
      });
    }

    if (heroVisual && STORE_CONFIG.heroImage && STORE_CONFIG.heroImage.trim()) {
      attachOptionalImage(
        heroVisual,
        STORE_CONFIG.heroImage,
        `${STORE_CONFIG.brandName} Drop Bar Additional Grips`,
        true
      );
    }
  }

  function hydrateStoreLinks() {
    const generalWaUrl = buildWhatsAppUrl(t().waGeneralMessage);

    document.querySelectorAll("[data-store-link]").forEach((anchor) => {
      const key = anchor.getAttribute("data-store-link");
      const label = anchor.getAttribute("data-platform-label") || key;
      const isWa = key === "whatsapp";
      const targetUrl = isWa ? generalWaUrl : STORE_CONFIG.storeLinks[key];

      if (isConfiguredUrl(targetUrl)) {
        anchor.href = targetUrl;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.dataset.placeholder = "false";
      } else {
        anchor.href = "#";
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
        anchor.dataset.placeholder = "true";
        anchor.dataset.platformLabel = label;
      }
    });
  }

  function bindPlaceholderStoreLinks() {
    document.addEventListener("click", (event) => {
      const anchor = event.target.closest("[data-store-link]");
      if (!anchor || anchor.dataset.placeholder !== "true") return;
      event.preventDefault();
      const key = anchor.getAttribute("data-store-link");
      const label = anchor.dataset.platformLabel || key;
      showToast(key === "whatsapp" ? t().toastPlaceholderWa : t().toastPlaceholderLink(label));
    });
  }

  /* ---------- Render Catalog Grid ---------- */

  function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.textContent = "";

    const dict = t();

    GRIP_CATALOG.forEach((product) => {
      const savings = Math.max(0, product.marketplacePrice - product.directPrice);

      const card = document.createElement("article");
      card.className = "grip-card";

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "grip-card-trigger";
      trigger.setAttribute("aria-haspopup", "dialog");
      trigger.addEventListener("click", () => openOrderModal(product.id, trigger));

      // Media Container
      const media = document.createElement("div");
      media.className = "grip-media";

      const placeholder = document.createElement("div");
      placeholder.className = "studio-placeholder";

      const topBar = document.createElement("div");
      topBar.className = "studio-placeholder-top";

      const idx = document.createElement("span");
      idx.textContent = product.index;

      const badge = document.createElement("span");
      badge.className = `card-badge${product.isSpecial ? " card-badge--special" : ""}`;
      badge.textContent = product.badge[currentLang];

      topBar.append(idx, badge);

      const artWrap = document.createElement("div");
      artWrap.className = "studio-placeholder-art";
      artWrap.innerHTML = ILLUSTRATIONS[product.illustration] || ILLUSTRATIONS.vertex;

      const bottomBar = document.createElement("div");
      bottomBar.className = "studio-placeholder-bottom";

      const specLeft = document.createElement("span");
      specLeft.textContent = product.name;

      const specRight = document.createElement("span");
      specRight.textContent = "4:5";

      bottomBar.append(specLeft, specRight);
      placeholder.append(topBar, artWrap, bottomBar);
      media.appendChild(placeholder);

      attachOptionalImage(media, product.image, product.name, false);

      // Card Body
      const body = document.createElement("div");
      body.className = "grip-body";

      const header = document.createElement("div");
      header.className = "grip-header";

      const title = document.createElement("h3");
      title.className = "grip-name";
      title.textContent = product.name;

      const summary = document.createElement("p");
      summary.className = "grip-summary";
      summary.textContent = product.summary[currentLang];

      header.append(title, summary);

      // Dual-Tier Price Stack
      const priceStack = document.createElement("div");
      priceStack.className = "price-stack";

      const directRow = document.createElement("div");
      directRow.className = "price-row";

      const directLabel = document.createElement("span");
      directLabel.className = "price-label price-label--direct";
      directLabel.textContent = dict.priceDirectLabel;

      const directValueGroup = document.createElement("span");
      directValueGroup.className = "price-value-group";

      if (savings > 0) {
        const savingsBadge = document.createElement("span");
        savingsBadge.className = "savings-tag";
        savingsBadge.textContent = `${dict.savePrefix} ${formatIDR(savings)}`;
        directValueGroup.appendChild(savingsBadge);
      }

      const directValue = document.createElement("span");
      directValue.className = "price-direct";
      directValue.textContent = formatIDR(product.directPrice);
      directValueGroup.appendChild(directValue);

      directRow.append(directLabel, directValueGroup);

      const marketRow = document.createElement("div");
      marketRow.className = "price-row";

      const marketLabel = document.createElement("span");
      marketLabel.className = "price-label";
      marketLabel.textContent = dict.priceMarketLabel;

      const marketValue = document.createElement("span");
      marketValue.className = "price-market";
      marketValue.textContent = formatIDR(product.marketplacePrice);

      marketRow.append(marketLabel, marketValue);
      priceStack.append(directRow, marketRow);

      // Card CTA Footer
      const cta = document.createElement("div");
      cta.className = "card-cta";

      const ctaLabel = document.createElement("span");
      ctaLabel.textContent = dict.cardCta;

      const ctaArrow = document.createElement("span");
      ctaArrow.className = "card-cta-arrow";
      ctaArrow.setAttribute("aria-hidden", "true");
      ctaArrow.textContent = "→";

      cta.append(ctaLabel, ctaArrow);

      body.append(header, priceStack, cta);
      trigger.append(media, body);
      card.appendChild(trigger);
      catalogGrid.appendChild(card);
    });

    // 6th Editorial Utility Card (Direct Order Concierge — balances 3x2 desktop grid)
    const concierge = document.createElement("aside");
    concierge.className = "concierge-card";

    const conciergeTop = document.createElement("div");
    conciergeTop.className = "concierge-top";

    const cEyebrow = document.createElement("span");
    cEyebrow.className = "eyebrow";
    cEyebrow.textContent = dict.conciergeEyebrow;

    const cTitle = document.createElement("h3");
    cTitle.className = "concierge-title";
    cTitle.textContent = dict.conciergeTitle;

    const cDesc = document.createElement("p");
    cDesc.className = "concierge-desc";
    cDesc.textContent = dict.conciergeDesc;

    const cPoints = document.createElement("ul");
    cPoints.className = "concierge-points";
    [dict.conciergePoint1, dict.conciergePoint2, dict.conciergePoint3].forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      cPoints.appendChild(li);
    });

    conciergeTop.append(cEyebrow, cTitle, cDesc, cPoints);

    const cActions = document.createElement("div");
    cActions.className = "concierge-actions";

    const waBtn = document.createElement("a");
    waBtn.className = "btn btn-direct";
    waBtn.setAttribute("data-store-link", "whatsapp");
    waBtn.setAttribute("data-platform-label", "WhatsApp Business");
    waBtn.textContent = `${dict.conciergeWaBtn} ↗`;

    const tocoBtn = document.createElement("a");
    tocoBtn.className = "btn btn-secondary";
    tocoBtn.setAttribute("data-store-link", "toco");
    tocoBtn.setAttribute("data-platform-label", "Toco");
    tocoBtn.textContent = `${dict.conciergeTocoBtn} ↗`;

    cActions.append(waBtn, tocoBtn);
    concierge.append(conciergeTop, cActions);
    catalogGrid.appendChild(concierge);

    hydrateStoreLinks();
  }

  /* ---------- Order Channel Modal (<dialog>) ---------- */

  function renderOrderModalContent(product) {
    const dict = t();
    const savings = Math.max(0, product.marketplacePrice - product.directPrice);

    modalEyebrow.textContent = `${dict.modalEyebrowPrefix} ${product.index} · ${product.badge[currentLang]}`;
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.summary[currentLang];
    modalSpecs.textContent = product.specs[currentLang];

    modalThumb.textContent = "";
    const svgWrap = document.createElement("div");
    svgWrap.innerHTML = ILLUSTRATIONS[product.illustration] || ILLUSTRATIONS.vertex;
    if (svgWrap.firstElementChild) {
      modalThumb.appendChild(svgWrap.firstElementChild);
    }
    attachOptionalImage(modalThumb, product.image, product.name, true);

    modalDirectPrice.textContent = formatIDR(product.directPrice);
    modalMarketPrice.textContent = formatIDR(product.marketplacePrice);

    const directLabelEl = document.getElementById("modal-direct-group-label");
    if (directLabelEl) {
      directLabelEl.textContent =
        savings > 0
          ? `${dict.modalDirectGroup} (${dict.savePrefix} ${formatIDR(savings)})`
          : dict.modalDirectGroup;
    }

    const marketLabelEl = document.getElementById("modal-market-group-label");
    if (marketLabelEl) {
      marketLabelEl.textContent = dict.modalMarketGroup;
    }

    // Tier 1: Direct Channels (Toco & WhatsApp Business)
    modalDirectList.textContent = "";
    const waProductUrl = buildWhatsAppUrl(dict.waProductMessage(product.name));

    modalDirectList.append(
      createChannelLinkElement({
        name: "Toco",
        sub: dict.channelTocoSub,
        dotClass: "platform-dot--toco",
        href: product.channels.toco,
        isDirect: true,
        isWhatsApp: false,
      }),
      createChannelLinkElement({
        name: "WhatsApp Business",
        sub: dict.channelWaSub,
        dotClass: "platform-dot--whatsapp",
        href: waProductUrl,
        isDirect: true,
        isWhatsApp: true,
      })
    );

    // Tier 2: Official Marketplaces (Shopee, Tokopedia, TikTok Shop)
    modalMarketList.textContent = "";
    modalMarketList.append(
      createChannelLinkElement({
        name: "Shopee",
        sub: dict.channelShopeeSub,
        dotClass: "platform-dot--shopee",
        href: product.channels.shopee,
        isDirect: false,
        isWhatsApp: false,
      }),
      createChannelLinkElement({
        name: "Tokopedia",
        sub: dict.channelTokopediaSub,
        dotClass: "platform-dot--tokopedia",
        href: product.channels.tokopedia,
        isDirect: false,
        isWhatsApp: false,
      }),
      createChannelLinkElement({
        name: "TikTok Shop",
        sub: dict.channelTiktokSub,
        dotClass: "platform-dot--tiktok",
        href: product.channels.tiktok,
        isDirect: false,
        isWhatsApp: false,
      })
    );
  }

  function openOrderModal(productId, triggerEl) {
    const product = GRIP_CATALOG.find((item) => item.id === productId);
    if (!product || !orderModal) return;

    activeProductId = product.id;
    lastTriggerEl = triggerEl || null;
    renderOrderModalContent(product);

    if (typeof orderModal.showModal === "function") {
      if (!orderModal.open) orderModal.showModal();
    } else {
      orderModal.setAttribute("open", "");
    }
  }

  function closeOrderModal() {
    if (!orderModal) return;
    if (typeof orderModal.close === "function" && orderModal.open) {
      orderModal.close();
    } else {
      orderModal.removeAttribute("open");
    }
  }

  function bindModalEvents() {
    if (!orderModal) return;

    modalCloseBtn?.addEventListener("click", closeOrderModal);

    // Light dismiss when clicking outside modal bounds (backdrop click)
    orderModal.addEventListener("click", (event) => {
      if (event.target === orderModal) {
        closeOrderModal();
      }
    });

    orderModal.addEventListener("close", () => {
      activeProductId = null;
      if (lastTriggerEl && typeof lastTriggerEl.focus === "function") {
        lastTriggerEl.focus();
      }
    });
  }

  /* ---------- Language Switch ---------- */

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "id";
    saveLanguage(currentLang);
    document.documentElement.lang = currentLang;

    const dict = t();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (typeof dict[key] === "string") {
        el.textContent = dict[key];
      }
    });

    if (modalCloseBtn) {
      modalCloseBtn.setAttribute("aria-label", dict.modalCloseLabel);
    }

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const isSelected = btn.getAttribute("data-lang-btn") === currentLang;
      btn.setAttribute("aria-pressed", String(isSelected));
    });

    renderCatalog();

    if (activeProductId && orderModal?.open) {
      const activeProduct = GRIP_CATALOG.find((item) => item.id === activeProductId);
      if (activeProduct) renderOrderModalContent(activeProduct);
    }
  }

  function bindLanguageButtons() {
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextLang = btn.getAttribute("data-lang-btn");
        if (nextLang && nextLang !== currentLang) {
          applyLanguage(nextLang);
        }
      });
    });
  }

  /* ---------- Initialize ---------- */

  hydrateBrandAndHero();
  bindPlaceholderStoreLinks();
  bindModalEvents();
  bindLanguageButtons();
  applyLanguage(currentLang);
})();
