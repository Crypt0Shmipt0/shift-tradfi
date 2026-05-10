import Image from "next/image";

const APP_URL = "https://app.shiftrwa.xyz";

export function FinalCta() {
  return (
    <section className="relative bg-black text-white overflow-hidden" style={{ paddingTop: 96, paddingBottom: 128 }}>
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/visuals/cta-bg.png"
          alt=""
          fill
          className="object-cover opacity-60"
        />
      </div>

      {/* Giant SHIFT watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-[var(--font-grotesk)] font-bold text-white/[0.04] tracking-tighter leading-none"
          style={{ fontSize: "clamp(200px, 25vw, 400px)" }}
        >
          SHIFT
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto text-center" style={{ maxWidth: 1440, paddingLeft: 128, paddingRight: 128 }}>
        <h2
          className="font-[var(--font-grotesk)] font-medium text-white mb-4"
          style={{ fontSize: 48, letterSpacing: "-0.96px" }}
        >
          Start trading now
        </h2>
        <p
          className="font-[var(--font-inter)] font-normal text-white/60 mb-10"
          style={{ fontSize: 18 }}
        >
          24/7 markets. No liquidations. Fully backed tokenized equities.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-[#021c24] font-[var(--font-inter)] font-medium transition-colors hover:bg-white/90"
          style={{
            fontSize: 18,
            letterSpacing: "0.36px",
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 100,
          }}
        >
          Trade Now
        </a>
      </div>
    </section>
  );
}
