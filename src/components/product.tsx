import Image from "next/image";
import { LIVE_TOKENS } from "@/data/tokens";

export function Product() {
  return (
    <section id="product" className="bg-black text-white py-16 md:py-20" aria-label="Product overview">
      <div className="mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        {/* Chain pill */}
        <div className="flex items-center justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 text-[#021c24] font-[var(--font-inter)] font-medium text-sm px-5 py-2 rounded-full"
            style={{ backgroundColor: "#26c8b8" }}
          >
            Live Across Top Tier Blockchains
          </span>
        </div>

        {/* Chain icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/solana.svg" alt="Solana" className="h-7 w-7 object-contain" loading="lazy" />
            <span className="font-[var(--font-inter)] font-semibold text-white text-lg">
              Solana
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/bnb.svg" alt="BNB Chain" className="h-7 w-7 object-contain" loading="lazy" />
            <span className="font-[var(--font-inter)] font-semibold text-white text-lg">
              BNB Chain
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4 tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            Trade like Perps, Never Liquidated
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal text-[#848c99] tracking-[-0.64px]"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
          >
            Leveraged exposure without margin calls or funding rates
          </p>
        </div>

        {/* Token strip */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-16 overflow-x-auto pb-4 px-4 mt-12" tabIndex={0} role="region" aria-label="Available tokens">
          {LIVE_TOKENS.map((t) => (
            <div key={t.ticker} className="flex items-center gap-3 shrink-0">
              <Image
                src={t.image}
                alt={t.ticker}
                width={48}
                height={48}
                sizes="48px"
                className="w-12 h-12 rounded-xl object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-[var(--font-mono)] font-bold text-white text-sm">
                  {t.ticker}
                </div>
                <div className="text-white/50 text-xs">{t.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Long / Short cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          {/* Long card */}
          <article
            className="relative rounded-2xl bg-dark-card-alt border border-white/10 overflow-hidden p-6 md:p-8 min-h-[320px] md:min-h-[400px] transition-all duration-300 hover:border-mint/30"
          >
            <h3
              className="font-[var(--font-grotesk)] font-medium text-white mb-3 tracking-[-0.64px]"
              style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
            >
              Long 5X
            </h3>
            <p
              className="font-[var(--font-inter)] font-normal text-white/60 leading-relaxed text-base max-w-[280px]"
            >
              Capture amplified upside on your thesis. Up to 5x leveraged exposure
              to major equities without margin accounts or funding fees.
            </p>
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-[280px] md:h-[280px]">
              <Image
                src="/visuals/arrow-up.png"
                alt=""
                fill
                sizes="(max-width: 768px) 192px, 280px"
                className="object-contain"
                loading="lazy"
                aria-hidden="true"
              />
            </div>
          </article>

          {/* Short card */}
          <article
            className="relative rounded-2xl bg-dark-card-alt border border-white/10 overflow-hidden p-6 md:p-8 min-h-[320px] md:min-h-[400px] transition-all duration-300 hover:border-mint/30"
          >
            <h3
              className="font-[var(--font-grotesk)] font-medium text-white mb-3 text-right tracking-[-0.64px]"
              style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
            >
              Short 3X
            </h3>
            <p
              className="font-[var(--font-inter)] font-normal text-white/60 leading-relaxed ml-auto text-right text-base max-w-[280px]"
            >
              Take the other side without borrowing or shorting on margin.
              Inverse exposure on the same underlyings, up to 3x leverage.
            </p>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[280px] md:h-[280px]">
              <Image
                src="/visuals/arrow-down.png"
                alt=""
                fill
                sizes="(max-width: 768px) 192px, 280px"
                className="object-contain"
                loading="lazy"
                aria-hidden="true"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
