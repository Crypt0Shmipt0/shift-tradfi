import Image from "next/image";
import { LIVE_TOKENS } from "@/data/tokens";

export function Product() {
  return (
    <section id="product" className="bg-black text-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        {/* Chain pill */}
        <div className="flex items-center justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 bg-[#26c8b8] text-white font-[var(--font-inter)] font-medium"
            style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 100 }}
          >
            Live Across Top Tier Blockchains
          </span>
        </div>

        {/* Chain icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <img src="/partners/solana.svg" alt="Solana" className="h-7 w-7 object-contain" />
            <span className="font-[var(--font-inter)] font-semibold text-white" style={{ fontSize: 18 }}>
              Solana
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <img src="/partners/bnb.svg" alt="BNB Chain" className="h-7 w-7 object-contain" />
            <span className="font-[var(--font-inter)] font-semibold text-white" style={{ fontSize: 18 }}>
              BNB Chain
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
          >
            Trade like Perps, Never Liquidated
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal text-[#9ca3af]"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)", letterSpacing: "-0.64px" }}
          >
            Leveraged exposure without margin calls or funding rates
          </p>
        </div>

        {/* Token strip */}
        <div className="flex items-center justify-center gap-8 mb-16 overflow-x-auto pb-4 px-4" style={{ marginTop: 48 }}>
          {LIVE_TOKENS.map((t) => (
            <div key={t.ticker} className="flex items-center gap-3 shrink-0">
              <Image
                src={t.image}
                alt={t.ticker}
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <div className="font-[var(--font-mono)] font-bold text-white" style={{ fontSize: 14 }}>
                  {t.ticker}
                </div>
                <div className="text-white/50" style={{ fontSize: 12 }}>{t.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Long / Short cards */}
        <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Long card */}
          <div
            className="relative rounded-2xl bg-[#111820] border border-white/10 overflow-hidden p-6 md:p-8"
            style={{ minHeight: 400 }}
          >
            <h3
              className="font-[var(--font-grotesk)] font-medium text-white mb-3"
              style={{ fontSize: "clamp(20px, 3.5vw, 32px)", letterSpacing: "-0.64px" }}
            >
              Long 5X
            </h3>
            <p
              className="font-[var(--font-inter)] font-normal text-white/60 leading-relaxed"
              style={{ fontSize: 16, maxWidth: 280 }}
            >
              Capture amplified upside on your thesis. Up to 5x leveraged exposure
              to major equities without margin accounts or funding fees.
            </p>
            <div className="absolute bottom-0 right-0" style={{ width: 280, height: 280 }}>
              <Image
                src="/visuals/arrow-up.png"
                alt="Long position"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Short card */}
          <div
            className="relative rounded-2xl bg-[#111820] border border-white/10 overflow-hidden p-6 md:p-8"
            style={{ minHeight: 400 }}
          >
            <h3
              className="font-[var(--font-grotesk)] font-medium text-white mb-3 text-right"
              style={{ fontSize: "clamp(20px, 3.5vw, 32px)", letterSpacing: "-0.64px" }}
            >
              Short 3X
            </h3>
            <p
              className="font-[var(--font-inter)] font-normal text-white/60 leading-relaxed ml-auto text-right"
              style={{ fontSize: 16, maxWidth: 280 }}
            >
              Take the other side without borrowing or shorting on margin.
              Inverse exposure on the same underlyings, up to 3x leverage.
            </p>
            <div className="absolute bottom-0 left-0" style={{ width: 280, height: 280 }}>
              <Image
                src="/visuals/arrow-down.png"
                alt="Short position"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
