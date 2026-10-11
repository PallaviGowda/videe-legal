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
