export const site = {
  name: "Videe Legal",
  tagline: "Simplifying Digital Personal Data Protection Compliance for Businesses",
  description:
    "Videe Legal helps Indian businesses comply with the Digital Personal Data Protection (DPDP) Act through practical gap assessments, privacy policies, consent management and privacy training.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://videelegal.com").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@videelegal.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, ""),
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
  keywords: [
    "DPDP Act",
    "DPDP compliance",
    "Digital Personal Data Protection Act 2023",
    "DPDP consultant India",
    "privacy policy drafting",
    "consent management",
    "privacy impact assessment",
    "data protection advisory",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resource Center" },
  { href: "/contact", label: "Contact" },
];
