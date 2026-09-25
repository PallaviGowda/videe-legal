# Videe Legal – Agent Notes

- Stack: Next.js 15 (App Router) + Tailwind CSS 3, TypeScript. Deployed on Vercel.
- Content lives in `lib/` (services, articles, checklist, site config); pages in `app/`.
- Verification: `npm run lint` (tsc type check) and `npm run build`.
- Dev server: `npm run dev` (http://localhost:3000).
- Forms post to `NEXT_PUBLIC_FORMSPREE_ENDPOINT`; fallback is mailto.
