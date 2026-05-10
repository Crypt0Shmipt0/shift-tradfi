import Image from "next/image";
import { TOKENS } from "@/data/tokens";
import { ArrowUpRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

const FUTURE_TOKENS = [
  { ticker: "GDM2S", name: "Gold Miners Short ×2", direction: "short" as const, image: null, comingSoon: true },
  { ticker: "DRIP2L", name: "S&P Oil & Gas Long ×2", direction: "long" as const, image: null, comingSoon: true },
];

const ALL_ROWS = [
  ...TOKENS.map((t) => ({ ticker: t.ticker, name: t.name, direction: t.direction, image: t.image, comingSoon: t.comingSoon })),
  ...FUTURE_TOKENS,
];

export function MarketsTable() {
  return (
    <section id="markets" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">SHIFT Markets</h2>
          <p className="text-text-light text-lg">
            Trade all your favorite stocks, and eliminate risks of margin and liquidation
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-xs font-mono uppercase tracking-wider text-text-light">
            <span className="hidden md:block" />
            <span>Token</span>
            <span className="hidden md:block">Name</span>
            <span className="hidden md:block text-right">Price</span>
            <span className="hidden md:block text-right">24h Change</span>
            <span />
          </div>

          {ALL_ROWS.map((t) => (
            <div
              key={t.ticker}
              className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/80 transition-colors items-center"
            >
              <div className="hidden md:block">
                {t.image ? (
                  <Image src={t.image} alt={t.ticker} width={36} height={36} className="w-9 h-9 rounded-lg object-cover" />
                ) : (
                  <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-mono text-text-light">
                    {t.ticker.slice(0, 3)}
                  </div>
                )}
              </div>
              <span className="font-mono font-bold text-sm text-foreground">{t.ticker}</span>
              <span className="hidden md:block text-sm text-text-light">{t.name}</span>
              <span className="hidden md:block text-right text-sm text-foreground font-mono tabular-nums">
                {t.comingSoon ? "—" : "$ —"}
              </span>
              <span className="hidden md:block text-right text-sm font-mono tabular-nums text-mint">
                {t.comingSoon ? "—" : "—%"}
              </span>
              <div className="text-right">
                {!t.comingSoon ? (
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-foreground text-white text-xs font-semibold hover:bg-foreground/90 transition-colors"
                  >
                    Explore
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-xs text-text-light/50">Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-white text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Explore Markets
          </a>
        </div>
      </div>
    </section>
  );
}
