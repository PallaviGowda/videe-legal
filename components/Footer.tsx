import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed">{site.tagline}.</p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-gold-400">
              {site.email}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate-400 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Videe Legal. All rights reserved.</p>
          <p>Information on this website is general in nature and does not constitute legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
