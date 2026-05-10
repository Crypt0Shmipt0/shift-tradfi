import Image from "next/image";
import { LIVE_TOKENS } from "@/data/tokens";

const APP_URL = "https://app.shiftrwa.xyz";

export function Product() {
  return (
    <section id="product" className="py-20 md:py-28 bg-dark-bg text-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px]">
        {/* Chain pill */}
        <div className="flex items-center justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-mint text-white font-[var(--font-inter)] font-medium"
            style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, borderRadius: 100 }}
          >
            Live Across Top Tier Blockchains
          </span>
        </div>

        {/* Chain icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Image src="/partners/solana.png" alt="Solana" width={28} height={28} className="h-7 w-7 object-contain" />
            <span className="font-[var(--font-inter)] font-semibold text-white" style={{ fontSize: 18 }}>Solana</span>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <span className="font-[var(--font-inter)] font-semibold text-white" style={{ fontSize: 18 }}>BNB Chain</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4"
            style={{ fontSize: 48, letterSpacing: "-0.96px" }}
          >
            Trade like Perps, Never Liquidated
          </h2>
        </div>

        {/* Token strip */}
        <div className="flex items-center justify-center gap-8 mb-16 overflow-x-auto pb-4 px-4">
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
                <div className="font-mono font-bold text-sm text-white">{t.ticker}</div>
                <div className="text-xs text-white/50">{t.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Long / Short cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          <div className="relative rounded-2xl bg-dark-card-alt border border-white/10 p-8 overflow-hidden min-h-[400px]">
            <h3 className="font-[var(--font-grotesk)] font-medium text-white mb-3" style={{ fontSize: 32 }}>Long 5X</h3>
            <p className="font-[var(--font-inter)] font-normal text-white/60 leading-relaxed max-w-[280px]" style={{ fontSize: 16 }}>
              Capture amplified upside on your thesis. Up to 5x leveraged exposure
              to major equities without margin accounts or funding fees.
            </p>
            <div className="absolute bottom-0 right-0 w-[280px] h-[280px]">
              <Image
                src="/visuals/arrow-long-3d.png"
                alt="Long position"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative rounded-2xl bg-dark-card-alt border border-white/10 p-8 overflow-hidden min-h-[400px]">
            <h3 className="font-[var(--font-grotesk)] font-medium text-white mb-3 text-right" style={{ fontSize: 32 }}>Short 3X</h3>
            <p className="font-[var(--font-inter)] font-normal text-white/60 leading-relaxed max-w-[280px] ml-auto text-right" style={{ fontSize: 16 }}>
              Take the other side without borrowing or shorting on margin.
              Inverse exposure on the same underlyings, up to 3x leverage.
            </p>
            <div className="absolute bottom-0 left-0 w-[280px] h-[280px]">
              <Image
                src="/visuals/arrow-short-3d.png"
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
