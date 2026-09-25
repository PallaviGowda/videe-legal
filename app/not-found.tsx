import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-28 text-center">
      <p className="eyebrow text-gold-600">404</p>
      <h1 className="section-title mt-3">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
