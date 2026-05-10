import Image from "next/image";
import { LIVE_TOKENS } from "@/data/tokens";

const APP_URL = "https://app.shiftrwa.xyz";

export function Product() {
  return (
    <section id="product" className="py-20 md:py-28 bg-section-dark text-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Chain badges */}
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-mint/10 border border-mint/30 text-sm text-mint font-medium">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Live Across Top Tier Blockchains
          </span>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <Image src="/partners/solana.png" alt="Solana" width={28} height={28} className="h-7 w-7 object-contain" />
            <span className="text-lg font-semibold">Solana</span>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <span className="text-lg font-semibold">BNB Chain</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trade like Perps, Never Liquidated
          </h2>
          <p className="text-white/60 text-lg max-w-[600px] mx-auto">
            Trade all your favorite stocks, and eliminate risks of margin and liquidation
          </p>
        </div>

        {/* Token strip — horizontal scroll */}
        <div className="flex items-center justify-center gap-6 mb-16 overflow-x-auto pb-4 px-4">
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
                <div className="font-mono font-bold text-sm">{t.ticker}</div>
                <div className="text-xs text-white/50">{t.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Long / Short cards with arrow visuals */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          <div className="relative rounded-2xl bg-[#111820] border border-white/10 p-8 overflow-hidden min-h-[350px]">
            <h3 className="text-2xl font-bold mb-3">Long 5X</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-[280px]">
              Capture amplified upside on your thesis. Up to 5× leveraged exposure
              to major equities without margin accounts or funding fees.
            </p>
            {/* Up arrow placeholder */}
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] flex items-end justify-end">
              <div className="text-mint/20 text-[120px] font-bold leading-none">↑</div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#111820] border border-white/10 p-8 overflow-hidden min-h-[350px]">
            <h3 className="text-2xl font-bold mb-3 text-right">Short 3X</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-[280px] ml-auto text-right">
              Take the other side without borrowing or shorting on margin.
              Inverse exposure on the same underlyings, up to 3× leverage.
            </p>
            {/* Down arrow placeholder */}
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] flex items-end">
              <div className="text-accent/20 text-[120px] font-bold leading-none">↓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
