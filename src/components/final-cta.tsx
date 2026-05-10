const APP_URL = "https://app.shiftrwa.xyz";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 bg-section-dark text-white overflow-hidden">
      {/* Giant SHIFT watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="text-[200px] md:text-[300px] lg:text-[400px] font-bold text-white/[0.04] tracking-tighter leading-none">
          SHIFT
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto section-padding text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Start trading now
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-[500px] mx-auto">
          Access tokenized stocks with 24/7 markets, transparency, and capital efficiency.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-foreground text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Trade Now
        </a>
      </div>
    </section>
  );
}
