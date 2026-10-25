# Videe Legal

> Simplifying Digital Personal Data Protection Compliance for Businesses

Consulting website for Videe Legal, a DPDP Act compliance and privacy consulting practice. Built with **Next.js (App Router)** and **Tailwind CSS**, ready to deploy on **Vercel**.

## Features

- Pages: Home, About, Services, Blog, Contact
- Book Consultation form (Formspree, with email fallback)
- DPDP Readiness Checklist lead magnet (email capture → printable/PDF checklist)
- Markdown-powered blog (`content/blog/*.md`) with statically generated post pages
- SEO: per-page metadata, Open Graph/Twitter tags, canonical URLs, JSON-LD (incl. FAQ and BlogPosting), `sitemap.xml`, `robots.txt`
- WhatsApp Business buttons (header, hero, floating button, mobile action bar)
- Mobile responsive blue, white and gold legal-tech design

## Folder structure

```
app/
  layout.tsx              Root layout, global SEO metadata, JSON-LD
  page.tsx                Home
  about/page.tsx          About
  services/page.tsx       Services
  blog/page.tsx           Blog (post list)
  blog/[slug]/            Blog post pages
  contact/page.tsx        Contact + Book Consultation
  dpdp-checklist/         Free DPDP Readiness Checklist (printable)
  sitemap.ts, robots.ts   SEO files
  icon.svg                Favicon
components/               Header, Footer, forms, cards, WhatsApp buttons
content/blog/             Blog posts as Markdown files
lib/
  site.ts                 Site config (contact details, expertise, trust points)
  services.ts             Services content
  blog.ts                 Reads and renders blog posts
  faqs.ts                 FAQ content
  checklist.ts            Checklist content
  submitLead.ts           Form submission logic
```

## Getting started

Requires Node.js 22.

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

Contact details have built-in defaults in `lib/site.ts`. Set these in `.env.local` (locally) or in Vercel → Project → Settings → Environment Variables only to override them:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Live domain | `https://videelegal.com` |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree endpoint, e.g. `https://formspree.io/f/xxxxxxx` | none (forms open email client) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email | `info@videelegal.com` |
| `NEXT_PUBLIC_LINKEDIN_URL` | Company LinkedIn page | `https://www.linkedin.com/company/146645610/` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp Business number, digits only with country code | `918618744390` |
| `NEXT_PUBLIC_BOOKING_URL` | Cal.com / Calendly booking page; shows "Pick a time" buttons | none (buttons hidden) |
| `NEXT_PUBLIC_GRIEVANCE_OFFICER_NAME` | Grievance Officer name shown in the Privacy Notice | none |
| `NEXT_PUBLIC_GRIEVANCE_EMAIL` | Grievance Officer email | contact email |

Values are baked in at build time, so redeploy after changing them.

### Forms and leads

1. Create a free account at [formspree.io](https://formspree.io) and a new form.
2. Copy the endpoint URL into `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
3. Submissions arrive by email; from Formspree you can forward leads to Google Sheets, HubSpot or other CRMs via its integrations.

Each submission includes a `formType` field (`consultation` or `checklist-download`) so you can filter leads. If no endpoint is configured, forms open the visitor's email client instead.

## Writing blog posts

Posts live in `content/blog/` as Markdown (`.md`) files. The file name becomes the URL: `content/blog/dpa-checklist.md` → `/blog/dpa-checklist`.

1. Copy `content/blog/_template.md` and rename it (lowercase words separated by hyphens).
2. Fill in the details at the top:

   ```markdown
   ---
   title: "Your post title"
   description: "Short summary shown on cards and in Google results."
   date: "2026-10-15"
   tags: DPDP Act, Consent
   ---
   ```

   Optional fields: `author` (defaults to "Videe Legal Team") and `draft: true` (hides the post).
3. Write the post below the `---` line using Markdown (`## Heading`, `- bullet`, `**bold**`, `[link](https://...)`).
4. Commit and push. Vercel rebuilds the site, and the post appears on `/blog`, on the home page (latest 3) and in `sitemap.xml`.

You can also add or edit files directly on GitHub (**Add file → Create new file** in `content/blog/`). Files starting with `_` are never published. Posts are newest first by `date`.

## Editing content

- Services: `lib/services.ts`
- Blog posts: `content/blog/*.md` (see above)
- Checklist: `lib/checklist.ts`
- Contact details, expertise points, trust points, personas ("Who we help") and SEO defaults: `lib/site.ts`
- Methodology steps, engagement models and scope (included / not included): `lib/services.ts`
- Privacy Notice: `app/privacy-notice/page.tsx` — update `privacyNoticeUpdated` in `lib/site.ts` whenever you change it, and update the processor list if you add analytics, a CRM or other tools
- FAQs: `lib/faqs.ts`

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
3. Optionally add the environment variables above, then click **Deploy**.
4. Under **Settings → Domains**, add `videelegal.com` (or `.in`) and update DNS records at your registrar as instructed. SSL is issued automatically.
5. Submit `https://videelegal.com/sitemap.xml` in Google Search Console.

## Phase 2 roadmap

- Additional gated downloads: Privacy Policy Template, Consent Register Template
- Online courses: DPDP for Startups, DPDP Consultant Training, Privacy Practitioner Program
- AI Privacy Assistant for DPDP questions with lead capture

## Disclaimer

Website content is general information and does not constitute legal advice. Review all legal content before publishing.
