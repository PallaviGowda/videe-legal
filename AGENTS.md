# Videe Legal – Agent Notes

- Stack: Next.js 15 (App Router) + Tailwind CSS 3, TypeScript. Deployed on Vercel.
- Content lives in `lib/` (services, FAQs, checklist, site config) and `content/blog/*.md` (blog posts, parsed by `lib/blog.ts` with `marked`); pages in `app/`.
- Keep the site generic: no personal names, photos or personal contact details. Contact defaults are in `lib/site.ts`.
- On Windows/OneDrive, if `next dev` fails with `EINVAL readlink .next`, delete the `.next` folder and restart.
- Verification: `npm run lint` (tsc type check) and `npm run build`.
- Dev server: `npm run dev` (http://localhost:3000).
- Forms post to `NEXT_PUBLIC_FORMSPREE_ENDPOINT`; fallback is mailto.
