# Zona Roofing Supplies landing page

A mobile-first, plain HTML/CSS/JavaScript product landing-page template. It uses no framework, backend, database, trackers, or third-party runtime assets. Enquiries continue to WhatsApp with a prefilled message; the site does not submit or save them.

## Local preview

From this folder, run `python -m http.server 8000` (or `py -m http.server 8000` on Windows), then open `http://localhost:8000`. You can also open `index.html` directly, but a local server best matches normal web hosting.

To prepare a clean static publish bundle, run `node build-site.mjs`. It writes the website to `dist/` and includes only the logo and roofing photos used by the page; legacy branding and source price-list images stay out of the bundle. Preview that bundle from this folder at `http://localhost:8000/dist/`.

## Adapt the template

1. Edit `config.js` for business name, phone, WhatsApp number, address, copy, services, products, photos, price lists, FAQs, colours, CTA labels and section visibility. The existing renderer in `script.js` and styles in `styles.css` control presentation.
2. Replace images in `assets/` and update their paths and alt text in `config.js`. Keep file sizes small. The supplied logo is used in the header and footer; the three supplied material photos are used on the page.
3. Set `sections.testimonials` to `true` only after adding genuine, approved reviews to `testimonials.items`.
4. Product price lists are stored with each product in `config.js`, including standard, thickness, amount, currency and unit. The price rows expand inside the product card. This template does not add checkout.
5. Duplicate this folder for another business and replace the content and images. `script.js` and `styles.css` are the reusable rendering layer.

The two supplied price-list images were inspected and renamed to `assets/market-standard-price-list.jpeg` and `assets/caliper-standard-longspan-price-list.jpeg`. Their listed prices are transcribed into `config.js`; the source images are not rendered because they carry the former business branding. The page identifies the list date as 14 October 2026, states that prices cover materials only, and advises customers to confirm current rates and availability when requesting a quotation.

## Details to confirm before publishing

- Confirm that the 14 October 2026 price lists remain current before publishing.
- Exact material specifications and current thickness options.
- Current colour availability for each profile and standard.
- Measurement visit fees and locations served for visits.
- Installation scope, labour charges and who will perform the work for each enquiry.
- Delivery charge for each customer location; it belongs in the quotation.
- The spelling and map search result for the supplied address, plus phone and WhatsApp reachability.
