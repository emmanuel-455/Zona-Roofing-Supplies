(() => {
  "use strict";

  const config = window.siteConfig;
  if (!config) throw new Error("Missing siteConfig. Load config.js before script.js.");

  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const whatsappUrl = (message) => `https://wa.me/${encodeURIComponent(config.business.whatsapp)}?text=${encodeURIComponent(message)}`;
  const phoneUrl = `tel:${config.business.phoneDial.replace(/[^+\d]/g, "")}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.business.address)}`;
  const isOn = (key) => config.sections[key] !== false;
  const section = (id, html) => {
    const target = $(id);
    target.hidden = !isOn(id);
    if (!target.hidden) target.innerHTML = html;
  };
  const sectionHeading = (data) => `
    <div class="section-head">
      <p class="eyebrow">${esc(data.eyebrow)}</p>
      <h2>${esc(data.title)}</h2>
      ${data.introduction ? `<p>${esc(data.introduction)}</p>` : ""}
    </div>`;
  const image = (src, alt, extra = "") => `<img src="${esc(src)}" alt="${esc(alt)}" ${extra}>`;
  const arrow = '<span class="arrow" aria-hidden="true">↗</span>';

  document.title = config.business.seoTitle;
  document.querySelector('meta[name="description"]').content = config.business.seoDescription;
  document.documentElement.style.setProperty("--navy", config.business.navy);
  document.documentElement.style.setProperty("--orange", config.business.accent);
  document.documentElement.style.setProperty("--logo-zoom", config.business.logoZoom || 1);

  const nav = config.navigation.filter((item) => isOn(item.section));
  const navLinks = nav.map((item) => `<a href="#${esc(item.section)}">${esc(item.label)}</a>`).join("");
  $("site-header").innerHTML = `
    <header class="site-header">
      <div class="container header-main">
        <a class="brand" href="#main" aria-label="${esc(config.business.name)} home">
          <span class="brand-mark">${image(config.business.logo, config.business.logoAlt)}</span>
          <span class="brand-name">${esc(config.business.name)}</span>
        </a>
        <nav class="header-nav" aria-label="Main navigation">${navLinks}</nav>
        <a class="button button-primary header-cta" href="${whatsappUrl(`Hello ${config.business.name}, I would like to ask about your products.`)}" target="_blank" rel="noopener noreferrer">${esc(config.cta.whatsapp)} ${arrow}</a>
      </div>
      <nav class="container mobile-nav" aria-label="Mobile navigation">${navLinks}</nav>
    </header>`;

  const primaryTarget = isOn("quote") ? "#quote" : whatsappUrl(`Hello ${config.business.name}, I would like a quotation.`);
  $("hero").innerHTML = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${esc(config.hero.eyebrow)}</p>
          <h1 id="hero-title">${esc(config.hero.title)}</h1>
          <p class="hero-description">${esc(config.hero.description)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${primaryTarget}">${esc(config.cta.primary)} ${arrow}</a>
            ${isOn("products") ? `<a class="button button-secondary" href="#products">${esc(config.cta.secondary)}</a>` : ""}
          </div>
        </div>
        <div class="hero-image-wrap">
          ${image(config.hero.image, config.hero.imageAlt, 'fetchpriority="high" decoding="async"')}
          <span class="image-caption">${esc(config.hero.imageCaption)}</span>
        </div>
      </div>
    </section>
    <div class="hero-highlights"><div class="container highlight-grid">
      ${config.hero.highlights.map((text) => `<span>${esc(text)}</span>`).join("")}
    </div></div>`;

  const priceLabel = (product) => {
    const { pricing } = product;
    if (!Array.isArray(pricing?.lists) || !pricing.lists.length) return "";
    const formatter = new Intl.NumberFormat("en-NG", { style: "currency", currency: pricing.currency || "NGN", maximumFractionDigits: 0 });
    return `<div class="product-prices">${pricing.lists.map((list) => {
      const prices = list.prices.map((item) => item.amount);
      const minimum = formatter.format(Math.min(...prices));
      const maximum = formatter.format(Math.max(...prices));
      const range = minimum === maximum ? minimum : `${minimum}–${maximum}`;
      return `<details class="product-price-list"><summary>
        <span class="price-list-standard">${esc(list.standard)}</span>
        <span class="price-list-range">${esc(range)} / ${esc(pricing.unit || "m²")}</span>
        <span class="price-list-action"><span class="price-action-open">View prices by thickness</span><span class="price-action-close">Hide prices by thickness</span><span class="price-list-chevron" aria-hidden="true"></span></span>
      </summary>
        <div class="price-table-wrap"><table class="price-table"><thead><tr><th scope="col">Thickness</th><th scope="col">Price / ${esc(pricing.unit || "m²")}</th></tr></thead><tbody>
          ${list.prices.map((item) => `<tr><th scope="row">${esc(item.thickness)}</th><td>${esc(formatter.format(item.amount))}</td></tr>`).join("")}
        </tbody></table></div></details>`;
    }).join("")}</div>`;
  };
  section("products", `
    <section class="section-space" aria-labelledby="products-title">
      <div class="container">
        ${sectionHeading(config.products).replace("<h2>", '<h2 id="products-title">')}
        <div class="product-grid">
          ${config.products.items.map((product, index) => `
            <article class="product-card ${product.image ? "" : "product-card--text"}">
              ${product.image ? image(product.image, product.imageAlt, 'loading="lazy" decoding="async"') : ""}
              <div class="product-content">
                <span class="product-number">OPTION ${String(index + 1).padStart(2, "0")}</span>
                <h3>${esc(product.name)}</h3>
                <p>${esc(product.description)}</p>
                ${product.pricing?.lists?.length ? "" : `<div class="product-meta">${product.standards.map((standard) => `<span class="pill">${esc(standard)}</span>`).join("")}</div>`}
                ${priceLabel(product)}
                <a class="button button-plain" href="${whatsappUrl(`Hello ${config.business.name}, I would like to ask about ${product.name}.`)}" target="_blank" rel="noopener noreferrer">${esc(config.cta.product)} ${arrow}</a>
              </div>
            </article>`).join("")}
        </div>
        <div class="standards-panel">
          <div><strong>${esc(config.products.standardsLabel)}</strong><p>${esc(config.products.standardsNote)}</p></div>
          <div><strong>${esc(config.products.priceLabel)}</strong><p>${esc(config.products.priceNote)}</p></div>
        </div>
      </div>
    </section>`);

  section("benefits", `
    <section class="benefits section-space" aria-labelledby="benefits-title">
      <div class="container">
        ${sectionHeading(config.benefits).replace("<h2>", '<h2 id="benefits-title">')}
        <div class="benefit-grid">${config.benefits.items.map((item) => `
          <div class="benefit"><span>${esc(item.number)}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div>`).join("")}</div>
      </div>
    </section>`);

  section("gallery", `
    <section class="gallery section-space" aria-labelledby="gallery-title">
      <div class="container">
        ${sectionHeading(config.gallery).replace("<h2>", '<h2 id="gallery-title">')}
        <div class="gallery-grid">${config.gallery.images.map((item) => `
          <figure>${image(item.src, item.alt, 'loading="lazy" decoding="async"')}<figcaption>${esc(item.caption)}</figcaption></figure>`).join("")}</div>
      </div>
    </section>`);

  section("process", `
    <section class="process section-space" aria-labelledby="process-title">
      <div class="container">
        ${sectionHeading(config.process).replace("<h2>", '<h2 id="process-title">')}
        <div class="process-grid">${config.process.steps.map((item, index) => `
          <div class="process-step"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div></div>`).join("")}</div>
      </div>
    </section>`);

  const q = config.quote;
  const field = (id, label, control, extraClass = "", required = false) => `<div class="field ${extraClass}"><label for="${id}">${esc(label)}${required ? ' <span class="required" aria-hidden="true">*</span>' : ""}</label>${control}</div>`;
  const select = (id, items, placeholder, required = false) => `<select id="${id}" name="${id}" ${required ? "required" : ""}><option value="">${esc(placeholder)}</option>${items.map((item) => `<option value="${esc(item)}">${esc(item)}</option>`).join("")}</select>`;
  section("quote", `
    <section class="quote section-space" aria-labelledby="quote-title">
      <div class="container quote-layout">
        <div class="quote-lead">
          ${sectionHeading(q).replace("<h2>", '<h2 id="quote-title">')}
          <div class="quote-aside">
            ${q.guidance.map((text) => `<p>${esc(text)}</p>`).join("")}
            <a class="button button-secondary quote-direct" href="${whatsappUrl(q.directMessage)}" target="_blank" rel="noopener noreferrer">${esc(config.cta.direct)} ${arrow}</a>
          </div>
        </div>
        <form id="quote-form" class="quote-form" novalidate>
          <div class="form-grid">
            ${field("location", q.fields.location, `<input id="location" name="location" type="text" autocomplete="address-level2" placeholder="${esc(q.placeholders.location)}" required>`, "field-full", true)}
            ${field("product", q.fields.product, select("product", [q.helpMeChoose, ...config.products.items.map((item) => item.name)], q.placeholders.product, true), "", true)}
            ${field("standard", q.fields.standard, select("standard", [q.helpMeChoose, ...new Set(config.products.items.flatMap((item) => item.standards))], q.placeholders.standard))}
            ${field("colour", q.fields.colour, `${select("colour", [...q.colours, q.helpMeChoose], q.placeholders.colour)}<p class="field-hint">${esc(q.colourNote)}</p>`)}
            <div class="field"><fieldset><legend>${esc(q.fields.measurement)} <span class="required" aria-hidden="true">*</span></legend><div class="radio-options">${q.measurements.map((item, index) => `<label class="radio-option"><input type="radio" name="measurement" value="${esc(item)}" ${index === 0 ? "required" : ""}><span>${esc(item)}</span></label>`).join("")}</div></fieldset></div>
            ${field("timeframe", q.fields.timeframe, `<input id="timeframe" name="timeframe" type="text" placeholder="${esc(q.placeholders.timeframe)}">`)}
            ${field("details", q.fields.details, `<textarea id="details" name="details" placeholder="${esc(q.placeholders.details)}"></textarea>`, "field-full")}
          </div>
          <button class="button button-primary form-submit" type="submit">${esc(config.cta.form)} ${arrow}</button>
          <p class="form-privacy">${esc(q.privacyNote)}</p>
        </form>
      </div>
    </section>`);

  section("faqs", `
    <section class="section-space" aria-labelledby="faqs-title">
      <div class="container">
        ${sectionHeading(config.faqs).replace("<h2>", '<h2 id="faqs-title">')}
        <div class="faq-list">${config.faqs.items.map((item) => `
          <details class="faq-item"><summary>${esc(item.question)}</summary><p>${esc(item.answer)}</p></details>`).join("")}</div>
      </div>
    </section>`);

  section("testimonials", `
    <section class="testimonials section-space" aria-labelledby="testimonials-title">
      <div class="container">
        ${sectionHeading(config.testimonials).replace("<h2>", '<h2 id="testimonials-title">')}
        <div class="testimonial-grid">${config.testimonials.items.map((item) => `
          <blockquote class="testimonial"><p>“${esc(item.quote)}”</p><cite>${esc(item.name)}</cite></blockquote>`).join("")}</div>
      </div>
    </section>`);

  $("site-footer").innerHTML = `
    <footer class="site-footer" id="contact">
      <div class="container footer-grid">
        <div class="footer-intro">
          <p class="eyebrow">Contact</p>
          <h2>${esc(config.footer.title)}</h2>
          <p>${esc(config.footer.text)}</p>
          <a class="button button-primary" href="${whatsappUrl(`Hello ${config.business.name}, I would like to discuss my project.`)}" target="_blank" rel="noopener noreferrer">${esc(config.cta.whatsapp)} ${arrow}</a>
        </div>
        <div class="footer-details">
          <div><strong>${esc(config.footer.addressLabel)}</strong><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${esc(config.business.address)}</a></div>
          <div><strong>${esc(config.footer.contactLabel)}</strong><a href="${phoneUrl}">${esc(config.business.phoneDisplay)}</a></div>
          <div><strong>${esc(config.footer.deliveryLabel)}</strong><span>${esc(config.business.deliveryArea)}</span></div>
          <span class="footer-logo-frame">${image(config.business.logo, config.business.logoAlt, 'class="footer-logo" loading="lazy" decoding="async"')}</span>
        </div>
      </div>
      <div class="container footer-bottom">© ${new Date().getFullYear()} ${esc(config.footer.copyright)}.</div>
    </footer>`;

  $("mobile-cta").innerHTML = `<div class="mobile-cta"><a class="button button-primary" href="${primaryTarget}">${esc(config.cta.mobile)} ${arrow}</a></div>`;

  if (isOn("quote")) {
    const form = $("quote-form");
    const productSelect = $("product");
    const standardSelect = $("standard");
    productSelect.addEventListener("change", () => {
      const product = config.products.items.find((item) => item.name === productSelect.value);
      const allowed = product ? product.standards : [...new Set(config.products.items.flatMap((item) => item.standards))];
      const previous = standardSelect.value;
      standardSelect.innerHTML = `<option value="">${esc(q.placeholders.standard)}</option><option value="${esc(q.helpMeChoose)}">${esc(q.helpMeChoose)}</option>${allowed.map((item) => `<option value="${esc(item)}">${esc(item)}</option>`).join("")}`;
      standardSelect.value = allowed.includes(previous) || previous === q.helpMeChoose ? previous : "";
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const location = String(data.get("location") || "").trim();
      if (!location) {
        $("location").setCustomValidity("Please enter a project location.");
        form.reportValidity();
        return;
      }
      $("location").setCustomValidity("");
      const lines = [
        q.messageIntro,
        "",
        `${q.fields.location}: ${location}`,
        `${q.fields.product}: ${data.get("product")}`,
        `${q.fields.standard}: ${data.get("standard") || "Not specified"}`,
        `${q.fields.colour}: ${data.get("colour") || "Not specified"}`,
        `${q.fields.measurement}: ${data.get("measurement")}`,
        `${q.fields.timeframe}: ${String(data.get("timeframe") || "").trim() || "Not specified"}`,
        `${q.fields.details}: ${String(data.get("details") || "").trim() || "None"}`
      ];
      window.location.assign(whatsappUrl(lines.join("\n")));
    });
    $("location").addEventListener("input", () => $("location").setCustomValidity(""));
  }
})();
