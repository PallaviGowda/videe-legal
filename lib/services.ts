export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "dpdp-gap-assessment",
    title: "DPDP Gap Assessment",
    summary:
      "Understand your organisation's current compliance posture and identify gaps against DPDP Act requirements.",
    deliverables: [
      "Personal data inventory and data-flow mapping",
      "Gap analysis report against DPDP obligations",
      "Risk-prioritised remediation roadmap",
    ],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    slug: "privacy-policy-drafting",
    title: "Privacy Policy Drafting",
    summary:
      "Clear website and application privacy notices aligned with DPDP requirements and written in plain language.",
    deliverables: [
      "Website and mobile app privacy notices",
      "Cookie and tracking disclosures",
      "Internal data protection policies",
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    slug: "consent-management-framework",
    title: "Consent Management Framework",
    summary:
      "Design and implementation advisory for capturing, recording and withdrawing consent across your digital journeys.",
    deliverables: [
      "Consent journey design and notice wording",
      "Consent register and withdrawal process",
      "Consent manager and tooling advisory",
    ],
    icon: "M5 13l4 4L19 7",
  },
  {
    slug: "dpa-drafting",
    title: "Data Processing Agreement Drafting",
    summary:
      "Drafting and reviewing data processing agreements (DPAs) with vendors and processors, aligned with DPDP Act obligations.",
    deliverables: [
      "DPDP-aligned DPA templates and clauses",
      "Review and negotiation support for vendor DPAs",
      "Processor obligations for security, breach notification and erasure",
    ],
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  },
  {
    slug: "privacy-impact-assessment",
    title: "Privacy Impact Assessment",
    summary:
      "Assess privacy risks of new products, processes and technologies before launch, including data protection impact assessments.",
    deliverables: [
      "Processing activity risk analysis",
      "Mitigation controls and recommendations",
      "Documented assessment report",
    ],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    slug: "vendor-privacy-assessment",
    title: "Vendor Privacy Assessment",
    summary:
      "Evaluate third-party vendors and data processors from a privacy and compliance perspective.",
    deliverables: [
      "Vendor privacy due-diligence questionnaires",
      "Data flow and access review for third parties",
      "Vendor risk rating and monitoring plan",
    ],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export const additionalServices = [
  "Data Protection Officer Advisory",
  "Startup Privacy Compliance Packages",
  "Website Privacy Compliance Reviews",
  "Ongoing Privacy Retainership",
];
