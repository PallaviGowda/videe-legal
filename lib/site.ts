export const site = {
  name: "Videe Legal",
  tagline: "Simplifying Digital Personal Data Protection Compliance for Businesses",
  description:
    "Videe Legal helps Indian businesses comply with the Digital Personal Data Protection (DPDP) Act through practical gap assessments, privacy policies, consent management and data processing agreements.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://videelegal.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@videelegal.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/146645610/",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918618744390").replace(/\D/g, ""),
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  grievanceOfficer: {
    name: process.env.NEXT_PUBLIC_GRIEVANCE_OFFICER_NAME || "",
    email: process.env.NEXT_PUBLIC_GRIEVANCE_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@videelegal.com",
  },
  privacyNoticeUpdated: "2026-10-25",
  whatsappMessage: "Hello Videe Legal, I would like to know more about DPDP compliance for my business.",
  expertise: [
    {
      title: "15+ Years IT Industry Experience",
      text: "Deep understanding of enterprise systems, software delivery and how personal data moves through technology.",
    },
    {
      title: "Legal Expertise in Data Protection",
      text: "Sound interpretation of the DPDP Act, the DPDP Rules and related regulatory requirements.",
    },
    {
      title: "Technology + Law Combined",
      text: "We bridge legal, engineering and business teams, translating obligations into controls they can implement.",
    },
    {
      title: "Practical, Business-Focused Advice",
      text: "Right-sized recommendations that protect your business without unnecessary cost or complexity.",
    },
  ],
  promises: [
    "Strictly confidential consultations",
    "Response within one business day",
    "Free initial discovery call",
    "Advice from experienced privacy professionals",
  ],
  personas: [
    {
      title: "B2B SaaS & Tech Companies",
      text: "Answer enterprise privacy questionnaires with confidence, sign DPAs faster and shorten security reviews in sales cycles.",
    },
    {
      title: "D2C, E-commerce & Consumer Apps",
      text: "Get privacy notices, consent flows and grievance handling right for high volumes of customer data.",
    },
    {
      title: "Startups & SMEs",
      text: "Right-sized DPDP compliance that fits your stage and budget, built in early instead of retrofitted later.",
    },
    {
      title: "Enterprises & Their Vendors",
      text: "Map data flows across teams and third parties, manage processor risk and keep contracts aligned with the DPDP Act.",
    },
  ],
  keywords: [
    "DPDP Act",
    "DPDP compliance",
    "Digital Personal Data Protection Act 2023",
    "DPDP consultant India",
    "privacy policy drafting",
    "consent management",
    "data processing agreement",
    "privacy impact assessment",
    "data protection advisory",
  ],
};

export const whatsappUrl = (message = site.whatsappMessage) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}` : "";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
