/* Edit this file to reuse the landing page for another business. See README.md. */
window.siteConfig = {
  business: {
    name: "Zona Roofing Supplies",
    shortName: "Zona Roofing Supplies",
    phoneDisplay: "09134928471",
    phoneDial: "+2349134928471",
    whatsapp: "2349134928471",
    address: "09, Ajiboye Cresent, Agege, Lagos.",
    deliveryArea: "Nationwide delivery",
    logo: "assets/zona-roofing-logo.png?v=zona-products-20261016",
    logoAlt: "Zona Roofing Supplies logo",
    logoZoom: 1.5,
    seoTitle: "Zona Roofing Supplies | Roofing materials in Lagos",
    seoDescription: "Explore Long-span, Step Tiles and Metcoppo roofing materials. Request a quotation with delivery to your location. Based in Agege, Lagos.",
    accent: "#ed8824",
    navy: "#0b2548"
  },
  sections: {
    products: true,
    benefits: true,
    gallery: true,
    process: true,
    quote: true,
    faqs: true,
    testimonials: false
  },
  navigation: [
    { label: "Roofing options", section: "products" },
    { label: "How it works", section: "process" },
    { label: "FAQs", section: "faqs" }
  ],
  cta: {
    primary: "Request a quotation",
    secondary: "Explore roofing options",
    product: "Ask about this roofing type",
    form: "Continue on WhatsApp",
    mobile: "Get a quotation",
    whatsapp: "Chat on WhatsApp",
    direct: "Not sure what you need? Chat with us."
  },
  hero: {
    eyebrow: "Roofing materials · Lagos, Nigeria",
    title: "Long-span, Step Tiles & Metcoppo Roofing—Delivered Nationwide.",
    description: "Compare roofing profiles, discuss specifications and get measurement assistance if needed.",
    image: "assets/longspan-sheets.jpeg",
    imageAlt: "Beige Long-span roofing sheets stacked at a material facility",
    imageCaption: "Real material photo · Long-span roofing sheets",
    highlights: [
      "Based in Agege, Lagos",
      "Nationwide delivery",
      "Delivery charges included in your quotation"
    ]
  },
  products: {
    eyebrow: "The options",
    title: "Choose the profile that fits your project.",
    introduction: "We supply roofing materials through factory arrangements. Tell us the profile and specifications you need, or ask us to help you compare options.",
    items: [
      {
        name: "Long-span roofing sheets",
        description: "A straight, ribbed sheet profile. Discuss your required dimensions, standard and preferred colour before ordering.",
        image: "assets/longspan-sheets.jpeg",
        imageAlt: "Stacked beige Long-span roofing sheets",
        imageCaption: "Long-span sheets",
        standards: ["Market Standard", "Caliper Standard"],
        pricing: {
          currency: "NGN",
          unit: "m²",
          lists: [
            {
              standard: "Market Standard",
              prices: [
                { thickness: "0.45mm", amount: 5600 },
                { thickness: "0.50mm", amount: 6200 },
                { thickness: "0.55(B)mm", amount: 6500 },
                { thickness: "0.55(A)mm", amount: 7000 },
                { thickness: "0.58mm", amount: 8100 },
                { thickness: "0.60mm", amount: 11000 },
                { thickness: "0.65mm", amount: 11500 },
                { thickness: "0.70mm", amount: 13800 }
              ]
            },
            {
              standard: "Caliper Standard",
              prices: [
                { thickness: "0.37mm", amount: 8000 },
                { thickness: "0.40mm", amount: 9000 },
                { thickness: "0.45mm", amount: 9800 },
                { thickness: "0.50mm", amount: 11500 },
                { thickness: "0.55mm", amount: 12600 },
                { thickness: "0.60mm", amount: 14000 },
                { thickness: "0.70mm", amount: 15500 }
              ]
            }
          ]
        }
      },
      {
        name: "Metcoppo",
        description: "A curved tile-style roof profile. Ask us about specifications and current colour availability.",
        image: "assets/tile-profile-sheets.jpeg",
        imageAlt: "Black and brown Metcoppo profile roofing sheets displayed side by side",
        standards: ["Market Standard"],
        pricing: {
          currency: "NGN",
          unit: "m²",
          lists: [{
            standard: "Market Standard",
            prices: [
              { thickness: "0.55(B)mm", amount: 6900 },
              { thickness: "0.55(A)mm", amount: 7500 },
              { thickness: "0.58mm", amount: 8300 },
              { thickness: "0.60mm", amount: 11800 }
            ]
          }]
        }
      },
      {
        name: "Step Tiles",
        description: "A stepped tile-style roof profile. Share your plans or measurements so we can discuss a suitable specification.",
        image: "assets/sheet-forming-process.jpeg",
        imageAlt: "Light-brown Step Tiles sheet emerging from forming equipment",
        standards: ["Market Standard"],
        pricing: {
          currency: "NGN",
          unit: "m²",
          lists: [{
            standard: "Market Standard",
            prices: [
              { thickness: "0.55(B)mm", amount: 6900 },
              { thickness: "0.55(A)mm", amount: 7500 },
              { thickness: "0.58mm", amount: 8300 },
              { thickness: "0.60mm", amount: 11800 }
            ]
          }]
        }
      }
    ],
    standardsNote: "Market Standard rates are listed for all three profiles. Caliper Standard rates are for Long-span only.",
    priceNote: "Material rates per square metre, from lists supplied on 14 October 2026. Delivery, accessories, measurement and installation are quoted separately. Confirm current rates and availability when requesting a quotation.",
    standardsLabel: "About the standards",
    priceLabel: "Rates and quotations"
  },
  benefits: {
    eyebrow: "Clear decisions",
    title: "Plan your roofing purchase with confidence.",
    items: [
      { number: "01", title: "Compare profiles", text: "Discuss the available profiles and standards." },
      { number: "02", title: "Use your roofer", text: "Send your own measurements or material list." },
      { number: "03", title: "Understand the full cost", text: "Review materials, delivery and any services in your quotation." }
    ]
  },
  gallery: {
    eyebrow: "The materials",
    title: "A closer look at real roofing materials",
    introduction: "Explore the sheet profiles and materials shown here, then tell us what you have in mind for your roof.",
    images: [
      { src: "assets/longspan-sheets.jpeg", alt: "Beige Long-span sheets stacked at a material facility", caption: "Stacked Long-span sheets" },
      { src: "assets/tile-profile-sheets.jpeg", alt: "Brown and dark tile-profile roofing sheets laid out at a facility", caption: "Tile-profile roofing sheets" },
      { src: "assets/sheet-forming-process.jpeg", alt: "Roofing sheet emerging from forming equipment", caption: "Sheet-forming process" }
    ]
  },
  process: {
    eyebrow: "From enquiry to supply",
    title: "How your quotation comes together",
    introduction: "Four simple steps from your first message to an agreed supply plan.",
    steps: [
      { title: "Share your project", text: "Tell us the location and preferred roofing profile." },
      { title: "Confirm measurements", text: "Send your roofer’s figures, or arrange a visit with the fee agreed first." },
      { title: "Review your quotation", text: "Check the applicable material, accessory, delivery and labour charges." },
      { title: "Agree on supply", text: "Confirm delivery and any installation scope before work begins." }
    ]
  },
  quote: {
    eyebrow: "Start an enquiry",
    title: "Tell us what you need",
    introduction: "A few details help us discuss the right materials and prepare a quotation for your location.",
    guidance: [
      "Have measurements? Add them below. If you need a roofer, choose that option in the form."
    ],
    directMessage: "Hello Zona Roofing Supplies, I am planning a roofing purchase and would like help choosing an option.",
    privacyNote: "Your details are passed to WhatsApp when you continue. Nothing is submitted or saved on this website.",
    colourNote: "Colour availability will be confirmed with your quotation.",
    fields: {
      location: "Project location",
      product: "Roofing profile",
      standard: "Standard",
      colour: "Preferred colour",
      measurement: "Measurement status",
      timeframe: "Planned purchase timeframe",
      details: "Additional details"
    },
    placeholders: {
      location: "e.g. Ikeja, Lagos",
      product: "Select a roofing profile",
      standard: "Select a standard (optional)",
      colour: "Choose a colour (optional)",
      timeframe: "e.g. Next month",
      details: "Measurements, roof size, accessories or questions"
    },
    helpMeChoose: "Help me choose",
    colours: ["Black", "Grey", "Brown", "Beige", "Blue", "Green", "Red", "Other"],
    measurements: ["I have measurements", "I need a roofer"],
    messageIntro: "Hello Zona Roofing Supplies, I would like a roofing quotation."
  },
  faqs: {
    eyebrow: "Good to know",
    title: "Frequently asked questions",
    items: [
      { question: "Do you deliver outside Lagos?", answer: "Yes. We arrange nationwide delivery. Share your project location so we can obtain a delivery charge for your quotation." },
      { question: "How is delivery priced?", answer: "We obtain a delivery charge based on your location and include it in your quotation. It is not assumed to be part of the sheet price." },
      { question: "Can I use my own roofer?", answer: "Yes. Your roofer can provide measurements or a material list for us to review." },
      { question: "Can you arrange measurement and installation?", answer: "If you need a roofer, we can arrange measurement. The roofer who takes measurements usually handles installation. The installation scope and charges are agreed before work begins." },
      { question: "Are measurements free?", answer: "Measurement visit fees are agreed before the visit." },
      { question: "How do I get a quotation?", answer: "Send your project location, roofing preference and any measurements or material requirements through the form on this page or on WhatsApp. Your quotation identifies applicable material, accessory, delivery and labour charges." },
      { question: "How do I confirm colour and thickness availability?", answer: "Tell us the colour and specification you prefer. We will confirm available options with your quotation before you order." }
    ]
  },
  testimonials: {
    eyebrow: "Customer feedback",
    title: "What customers say",
    items: [] /* Enable only after genuine, approved reviews are supplied. */
  },
  footer: {
    title: "Let's talk about your roof.",
    text: "Share your location and requirements, and we’ll help you take the next step.",
    addressLabel: "Visit or find us",
    contactLabel: "Call us",
    deliveryLabel: "Delivery",
    copyright: "Zona Roofing Supplies"
  }
};
