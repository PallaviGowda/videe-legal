export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="hero-bg text-white">
      <div className="container-page py-16 md:py-20">
        <p className="eyebrow text-gold-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-200">{intro}</p>
      </div>
    </section>
  );
}
