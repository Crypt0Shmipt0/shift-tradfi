import Image from "next/image";
import { TOKENS } from "@/data/tokens";
import { APP_URL } from "@/lib/constants";

/* Static placeholder prices — differentiated per token */
const PLACEHOLDER_PRICES: Record<string, { price: string; change: string; positive: boolean }> = {
  TSL2L: { price: "$ 175.60", change: "+2.41%", positive: true },
  TSL1S: { price: "$ 42.77", change: "-1.85%", positive: false },
  SPX3L: { price: "$ 563.22", change: "+0.84%", positive: true },
  SPX3S: { price: "$ 89.33", change: "-0.74%", positive: false },
  SOX3L: { price: "$ 142.18", change: "+3.15%", positive: true },
  SOX3S: { price: "$ 38.45", change: "-2.87%", positive: false },
  URA2L: { price: "$ 28.94", change: "+1.62%", positive: true },
};

export function MarketsTable() {
  return (
    <section id="markets" className="py-[80px] md:py-[120px] px-4 md:px-[80px]" aria-label="Markets" style={{ background: "white" }}>
      <div className="mx-auto flex flex-col gap-[48px] md:gap-[80px] items-center" style={{ maxWidth: 1440 }}>
        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center text-center w-full">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-black tracking-[-0.96px] leading-[1.1] w-full"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            Shift Markets
          </h2>
          <p
            className="font-[var(--font-grotesk)] font-medium lowercase text-[#8d8d8d] tracking-[-0.64px] leading-[1.04] w-full"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
          >
            Trade all your favorite stocks, and eliminate risks of margin and liquidation
          </p>
        </div>

        {/* ───────────────────  Desktop / tablet table  ─────────────────── */}
        <div className="hidden md:block bg-white rounded-[32px] p-[40px] w-full" role="table" aria-label="Token markets">
          <div className="flex flex-col gap-[12px] items-center w-full">
            {/* Table header */}
            <div className="flex flex-col gap-[18px] items-start w-full">
              <div className="flex items-center py-[12px] pr-[108px] w-full text-[#8d8d8d] text-[18px]" role="row">
                <div className="flex flex-1 items-center px-[10px]" role="columnheader">
                  <span className="flex-1 max-w-[280px] font-[var(--font-inter)] font-medium capitalize leading-normal">Token</span>
                  <span className="flex-1 font-[var(--font-inter)] font-medium capitalize leading-normal">Token Name</span>
                </div>
                <div className="flex flex-1 items-center max-w-[320px] font-[var(--font-inter)] font-normal" role="columnheader">
                  <span className="flex-1">Price</span>
                  <span className="flex-1">24h change</span>
                </div>
              </div>
              <div className="w-full h-px bg-[#e5e5e5]" />
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-[20px] items-center w-full">
              {TOKENS.map((t) => {
                const priceData = PLACEHOLDER_PRICES[t.ticker];
                const isPositive = priceData?.positive ?? true;
                const priceColor = isPositive ? "text-[#01b95a]" : "text-[#c4162f]";
                return (
                  <div key={t.ticker}>
                    <div className="flex items-center w-full" role="row">
                      <div className="flex flex-1 items-center px-[10px]">
                        <div className="flex flex-1 gap-[18px] items-center max-w-[280px]" role="cell">
                          <Image src={t.image} alt={t.ticker} width={36} height={36} sizes="36px" className="w-[36px] h-[36px] rounded-full object-cover shrink-0" loading="lazy" />
                          <span className="font-[var(--font-inter)] font-medium text-black text-[18px] capitalize leading-normal whitespace-nowrap">{t.ticker}</span>
                        </div>
                        <span className="flex-1 font-[var(--font-inter)] font-medium text-black text-[18px] leading-normal" role="cell">{t.name.toUpperCase()}</span>
                      </div>
                      <div className={`flex flex-1 items-center max-w-[320px] font-[var(--font-inter)] font-normal text-[18px] ${priceColor}`}>
                        <span className="flex-1 leading-[20px]" role="cell">{t.comingSoon ? "---" : (priceData?.price ?? "$ ---")}</span>
                        <span className="flex-1 leading-[20px]" role="cell">{t.comingSoon ? "---" : (priceData?.change ?? "---%")}</span>
                      </div>
                      <div role="cell">
                        {!t.comingSoon ? (
                          <a href={APP_URL} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${t.ticker} - ${t.name}`} className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[16px] tracking-[0.32px] capitalize px-[24px] py-[6px] rounded-full transition-all duration-200 hover:bg-black/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2">
                            Explore
                          </a>
                        ) : (
                          <span className="font-[var(--font-inter)] text-[#8d8d8d] text-[16px] px-[24px] py-[6px]">Soon</span>
                        )}
                      </div>
                    </div>
                    <div className="w-full h-px bg-[#e5e5e5] mt-[20px]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ───────────────────  Mobile cards  ─────────────────── */}
        <ul className="md:hidden flex flex-col gap-3 w-full" role="list" aria-label="Token markets (mobile)">
          {TOKENS.map((t) => {
            const priceData = PLACEHOLDER_PRICES[t.ticker];
            const isPositive = priceData?.positive ?? true;
            const priceColor = isPositive ? "text-[#01b95a]" : "text-[#c4162f]";
            return (
              <li key={t.ticker} className="bg-white rounded-[20px] border border-[#ececec] p-4 flex flex-col gap-3">
                {/* Top row: icon + ticker/name + button */}
                <div className="flex items-center gap-3">
                  <Image src={t.image} alt={t.ticker} width={44} height={44} sizes="44px" className="w-11 h-11 rounded-full object-cover shrink-0" loading="lazy" />
                  <div className="flex-1 min-w-0 flex flex-col">
                    <span className="font-[var(--font-inter)] font-semibold text-black text-[16px] leading-tight">{t.ticker}</span>
                    <span className="font-[var(--font-inter)] font-normal text-[#6b7280] text-[13px] leading-tight truncate">{t.name.toUpperCase()}</span>
                  </div>
                  {!t.comingSoon ? (
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${t.ticker} - ${t.name}`} className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[14px] tracking-[0.28px] capitalize px-4 py-2 rounded-full shrink-0 transition-colors hover:bg-black/90 focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2">
                      Explore
                    </a>
                  ) : (
                    <span className="font-[var(--font-inter)] text-[#8d8d8d] text-[14px] px-4 py-2 shrink-0">Soon</span>
                  )}
                </div>
                {/* Divider */}
                <div className="h-px bg-[#f3f3f3]" />
                {/* Bottom row: price + change */}
                <div className="flex items-baseline justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-[var(--font-inter)] text-[#8d8d8d] text-[11px] uppercase tracking-wide">Price</span>
                    <span className={`font-[var(--font-inter)] font-medium text-[16px] ${priceColor}`}>{t.comingSoon ? "—" : (priceData?.price ?? "$ —")}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 items-end">
                    <span className="font-[var(--font-inter)] text-[#8d8d8d] text-[11px] uppercase tracking-wide">24h</span>
                    <span className={`font-[var(--font-inter)] font-medium text-[16px] ${priceColor}`}>{t.comingSoon ? "—" : (priceData?.change ?? "—")}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[24px] tracking-[0.48px] capitalize px-[32px] py-[14px] rounded-full transition-all duration-200 hover:bg-black/90 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2"
        >
          Explore Markets
        </a>
      </div>
    </section>
  );
}
