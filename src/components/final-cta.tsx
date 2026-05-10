import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="cta" className="relative bg-black text-white overflow-hidden py-24 md:py-32" aria-label="Call to action">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/visuals/cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          loading="lazy"
        />
      </div>

      {/* Dark overlay to fully obscure ghost text in bg image */}
      <div className="absolute inset-0 bg-black/95 z-[1]" aria-hidden="true" />

      {/* Giant SHIFT watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[2]"
        aria-hidden="true"
      >
        <span
          className="font-[var(--font-grotesk)] font-bold text-white/[0.06] tracking-tighter leading-none"
          style={{ fontSize: "clamp(200px, 25vw, 400px)" }}
        >
          SHIFT
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto text-center px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        <h2
          className="font-[var(--font-grotesk)] font-medium text-white mb-4 tracking-[-0.96px]"
          style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
        >
          Start trading now
        </h2>
        <p
          className="font-[var(--font-inter)] font-normal text-white/60 mb-10 text-lg"
        >
          24/7 markets. No liquidations. Fully backed tokenized equities.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-[#021c24] font-[var(--font-inter)] font-medium text-lg tracking-[0.36px] px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Trade Now
        </a>
      </div>
    </section>
  );
}
