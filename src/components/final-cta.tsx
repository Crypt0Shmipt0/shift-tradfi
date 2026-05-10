import Image from "next/image";

const APP_URL = "https://app.shiftrwa.xyz";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 bg-dark-bg text-white overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image
          src="/visuals/cta-bg-geometric.png"
          alt=""
          fill
          className="object-cover opacity-60"
        />
      </div>
      {/* Giant SHIFT watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span
          className="font-[var(--font-grotesk)] font-bold text-white/[0.04] tracking-tighter leading-none"
          style={{ fontSize: "clamp(200px, 25vw, 400px)" }}
        >
          SHIFT
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-[128px] text-center">
        <h2
          className="font-[var(--font-grotesk)] font-medium text-white mb-10"
          style={{ fontSize: 48, letterSpacing: "-0.96px" }}
        >
          Start trading now
        </h2>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white text-foreground font-[var(--font-inter)] font-medium transition-colors hover:bg-white/90"
          style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
        >
          Trade Now
        </a>
      </div>
    </section>
  );
}
