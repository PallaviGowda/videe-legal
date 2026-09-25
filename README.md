# Videe Legal

> Simplifying Digital Personal Data Protection Compliance for Businesses

Consulting website for Videe Legal, a DPDP Act compliance and privacy consulting practice. Built with **Next.js (App Router)** and **Tailwind CSS**, ready to deploy on **Vercel**.

## Features

- Pages: Home, About, Services, Resource Center (blog), Contact
- Book Consultation and Contact forms (Formspree, with email fallback)
- DPDP Readiness Checklist lead magnet (email capture → printable/PDF checklist)
- Blog/Resource Center with statically generated article pages
- SEO: per-page metadata, Open Graph/Twitter tags, canonical URLs, JSON-LD, `sitemap.xml`, `robots.txt`
- WhatsApp floating button
- Mobile responsive blue, white and gold legal-tech design

## Folder structure

```
app/
  layout.tsx              Root layout, global SEO metadata, JSON-LD
  page.tsx                Home
  about/page.tsx          About
  services/page.tsx       Services
  resources/page.tsx      Resource Center (article list)
  resources/[slug]/       Article pages
  contact/page.tsx        Contact + Book Consultation
  dpdp-checklist/         Free DPDP Readiness Checklist (printable)
  sitemap.ts, robots.ts   SEO files
  icon.svg                Favicon
components/               Header, Footer, forms, cards, WhatsApp button
lib/
  site.ts                 Site config (name, URL, contact details)
  services.ts             Services content
  articles.ts             Blog articles content
  checklist.ts            Checklist content
  submitLead.ts           Form submission logic
```

## Getting started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run lint    # TypeScript type check
npm run build   # production build
npm start       # run production build
```

## Configuration

Set these in `.env.local` (locally) and in Vercel → Project → Settings → Environment Variables:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Live domain, e.g. `https://videelegal.com` |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree endpoint, e.g. `https://formspree.io/f/xxxxxxx` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn page URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits only with country code (e.g. `919876543210`). Button is hidden if empty. |

### Forms and leads

1. Create a free account at [formspree.io](https://formspree.io) and a new form.
2. Copy the endpoint URL into `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
3. Submissions arrive by email; from Formspree you can forward leads to Google Sheets, HubSpot or other CRMs via its integrations.

Each submission includes a `formType` field (`consultation`, `contact` or `checklist-download`) so you can filter leads. If no endpoint is configured, forms open the visitor's email client instead.

## Editing content

- Services: `lib/services.ts`
- Articles: `lib/articles.ts` (add an object to publish a new article; it is added to the sitemap automatically)
- Checklist: `lib/checklist.ts`
- Contact details and SEO defaults: `lib/site.ts` / environment variables

## Deployment (GitHub + Vercel)

```bash
git init
git add .
git commit -m "Initial Videe Legal website"
git branch -M main
git remote add origin https://github.com/<your-account>/videe-legal.git
git push -u origin main
```

1. Sign in to [vercel.com](https://vercel.com) with GitHub and click **Add New → Project**.
2. Import the `videe-legal` repository (framework is auto-detected as Next.js).
3. Add the environment variables above and click **Deploy**.
4. Under **Settings → Domains**, add `videelegal.com` (or `.in`) and update DNS records at your registrar as instructed. SSL is issued automatically.
5. Submit `https://videelegal.com/sitemap.xml` in Google Search Console.

## Phase 2 roadmap

- Additional gated downloads: Privacy Policy Template, Consent Register Template
- Online courses: DPDP for Startups, DPDP Consultant Training, Privacy Practitioner Program
- AI Privacy Assistant for DPDP questions with lead capture

## Disclaimer

Website content is general information and does not constitute legal advice. Review all legal content before publishing.
