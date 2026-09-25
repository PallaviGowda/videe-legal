export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "what-is-dpdp-act",
    title: "What is the DPDP Act? A Plain-English Guide for Businesses",
    excerpt:
      "An introduction to India's Digital Personal Data Protection Act, 2023 — who it applies to, key roles and what it means for your organisation.",
    date: "2026-09-01",
    readTime: "6 min read",
    sections: [
      {
        heading: "Overview",
        body: [
          "The Digital Personal Data Protection Act, 2023 (DPDP Act) is India's comprehensive law governing how organisations process digital personal data. It balances the rights of individuals to protect their personal data with the need for businesses to process that data for lawful purposes.",
          "The Digital Personal Data Protection Rules, 2025 operationalise the Act and provide a phased timeline for businesses to put the required measures in place.",
        ],
      },
      {
        heading: "Who does it apply to?",
        body: [
          "The Act applies to the processing of digital personal data within India, and to processing outside India where it relates to offering goods or services to individuals in India. This covers data collected digitally as well as non-digital data that is later digitised.",
        ],
      },
      {
        heading: "Key roles",
        body: [
          "Data Principal: the individual to whom the personal data relates. For children and persons with disabilities, this includes parents or lawful guardians.",
          "Data Fiduciary: the organisation that decides the purpose and means of processing personal data.",
          "Data Processor: any entity that processes personal data on behalf of a Data Fiduciary.",
          "Data Protection Board of India: the authority responsible for inquiries into breaches and imposing penalties.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Penalties under the Act can reach up to ₹250 crore for certain failures, such as not taking reasonable security safeguards to prevent a personal data breach. Beyond penalties, strong privacy practices build customer trust and support business growth.",
        ],
      },
    ],
  },
  {
    slug: "dpdp-vs-gdpr",
    title: "DPDP vs GDPR: Key Differences Every Business Should Know",
    excerpt:
      "Already GDPR compliant? Here are the important differences between India's DPDP Act and the EU's GDPR.",
    date: "2026-08-20",
    readTime: "7 min read",
    sections: [
      {
        heading: "Scope",
        body: [
          "The GDPR applies to personal data in any form, while the DPDP Act focuses on digital personal data, including data that is digitised after collection.",
        ],
      },
      {
        heading: "Grounds for processing",
        body: [
          "The GDPR offers six lawful bases, including legitimate interests. The DPDP Act relies primarily on consent, supplemented by a defined list of 'certain legitimate uses' — there is no broad legitimate-interests ground.",
        ],
      },
      {
        heading: "Sensitive data and children",
        body: [
          "The DPDP Act does not create separate categories of sensitive personal data, but it requires verifiable parental consent for processing the personal data of children under 18, compared to the GDPR's age threshold of 13 to 16 depending on the member state.",
        ],
      },
      {
        heading: "Penalties",
        body: [
          "GDPR fines are linked to global turnover, whereas the DPDP Act prescribes fixed maximum penalties per category of breach, up to ₹250 crore.",
        ],
      },
      {
        heading: "What this means for you",
        body: [
          "GDPR compliance is a strong foundation, but it does not automatically make you DPDP compliant. A targeted gap assessment helps you reuse existing controls and close India-specific gaps.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy-checklist",
    title: "Privacy Policy Checklist Under the DPDP Act",
    excerpt:
      "A practical checklist to review whether your privacy notice communicates what the DPDP Act expects.",
    date: "2026-08-05",
    readTime: "5 min read",
    sections: [
      {
        heading: "Essential elements of a privacy notice",
        body: [
          "Describe the personal data you collect and the specific purpose for which it is processed.",
          "Explain how individuals can exercise their rights and withdraw consent — withdrawal should be as easy as giving consent.",
          "Explain how individuals can raise grievances and how they can complain to the Data Protection Board.",
          "Present the notice in clear and plain language, and make it available in English or languages listed in the Eighth Schedule of the Constitution where required.",
        ],
      },
      {
        heading: "Good practices",
        body: [
          "Keep the notice standalone and easy to find, avoid bundling it with unrelated terms, and review it whenever your processing activities change.",
        ],
      },
    ],
  },
  {
    slug: "consent-requirements-explained",
    title: "Consent Requirements Explained",
    excerpt:
      "What makes consent valid under the DPDP Act and how to design consent journeys that work for users and regulators.",
    date: "2026-07-22",
    readTime: "6 min read",
    sections: [
      {
        heading: "Valid consent",
        body: [
          "Consent under the DPDP Act must be free, specific, informed, unconditional and unambiguous, given through a clear affirmative action, and limited to the personal data necessary for the specified purpose.",
        ],
      },
      {
        heading: "Withdrawal and records",
        body: [
          "Individuals must be able to withdraw consent with comparable ease. Organisations should maintain records that demonstrate when and how notice was given and consent was obtained.",
        ],
      },
      {
        heading: "Consent Managers",
        body: [
          "The Act introduces registered Consent Managers — entities that allow individuals to give, manage, review and withdraw consent through an accessible and interoperable platform.",
        ],
      },
    ],
  },
  {
    slug: "data-fiduciary-obligations",
    title: "Data Fiduciary Obligations Under the DPDP Act",
    excerpt:
      "A summary of core obligations for organisations that determine how and why personal data is processed.",
    date: "2026-07-08",
    readTime: "6 min read",
    sections: [
      {
        heading: "Core obligations",
        body: [
          "Process personal data only for lawful purposes with valid consent or a recognised legitimate use.",
          "Implement reasonable security safeguards to prevent personal data breaches.",
          "Notify the Data Protection Board and affected individuals in the event of a personal data breach.",
          "Erase personal data when the purpose is no longer served, unless retention is required by law.",
          "Publish contact details for grievance redressal and respond to requests from individuals.",
          "Ensure Data Processors act only under a valid contract.",
        ],
      },
      {
        heading: "Significant Data Fiduciaries",
        body: [
          "Organisations notified as Significant Data Fiduciaries have additional duties, including appointing a Data Protection Officer based in India, appointing an independent data auditor and conducting periodic Data Protection Impact Assessments.",
        ],
      },
    ],
  },
  {
    slug: "how-startups-can-comply-with-dpdp",
    title: "How Startups Can Comply with the DPDP Act",
    excerpt:
      "A lean, step-by-step approach for startups and SMEs to build privacy compliance without slowing growth.",
    date: "2026-06-25",
    readTime: "5 min read",
    sections: [
      {
        heading: "Start with a data map",
        body: [
          "List the personal data you collect, where it is stored, who can access it and which vendors receive it. This single exercise makes every other compliance step easier.",
        ],
      },
      {
        heading: "Fix the customer-facing essentials",
        body: [
          "Update your privacy notice, design clear consent flows, and set up a simple process for handling access, correction, erasure and grievance requests.",
        ],
      },
      {
        heading: "Build privacy into product and vendors",
        body: [
          "Adopt privacy-by-design for new features, review vendor contracts for data protection clauses, and document basic security safeguards and a breach response plan.",
        ],
      },
      {
        heading: "Train your team",
        body: [
          "Short, practical training ensures everyone understands how to handle personal data. A startup privacy package can cover these steps quickly and affordably.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
