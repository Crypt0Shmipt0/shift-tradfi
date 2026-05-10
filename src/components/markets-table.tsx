import { TOKENS } from "@/data/tokens";
import { ArrowUpRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

// Additional future tokens shown in the Figma
const FUTURE_TOKENS = [
  { ticker: "GDM2S", name: "Gold Miners Short ×2", direction: "short" as const, comingSoon: true },
  { ticker: "DRIP2L", name: "S&P Oil & Gas Long ×2", direction: "long" as const, comingSoon: true },
];

const ALL_ROWS = [
  ...TOKENS.map((t) => ({
    ticker: t.ticker,
    name: t.name,
    direction: t.direction,
    comingSoon: t.comingSoon,
  })),
  ...FUTURE_TOKENS,
];

export function MarketsTable() {
  return (
    <section id="markets" className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            SHIFT Markets
          </h2>
          <p className="text-muted text-lg">
            Leveraged and inverse tokenized equities. Trade any direction, any time.
          </p>
        </div>

        <div className="rounded-2xl border border-card-border bg-card/40 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_auto] md:grid-cols-[200px_1fr_120px_120px_100px] gap-4 px-6 py-4 border-b border-card-border text-xs font-mono uppercase tracking-wider text-muted">
            <span>Token</span>
            <span className="hidden md:block">Name</span>
            <span className="hidden md:block text-right">Direction</span>
            <span className="hidden md:block text-right">Status</span>
            <span />
          </div>

          {/* Rows */}
          {ALL_ROWS.map((t) => (
            <div
              key={t.ticker}
              className="grid grid-cols-[1fr_1fr_auto] md:grid-cols-[200px_1fr_120px_120px_100px] gap-4 px-6 py-4 border-b border-card-border/50 hover:bg-card/60 transition-colors items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-card border border-card-border flex items-center justify-center text-[10px] font-mono text-muted shrink-0">
                  {t.ticker.slice(0, 3)}
                </div>
                <span className="font-mono font-bold text-sm text-foreground">
                  {t.ticker}
                </span>
              </div>
              <span className="hidden md:block text-sm text-muted">
                {t.name}
              </span>
              <span className="hidden md:block text-right">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    t.direction === "long"
                      ? "bg-mint/10 text-mint"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {t.direction === "long" ? "Long" : "Short"}
                </span>
              </span>
              <span className="hidden md:block text-right text-xs text-muted">
                {t.comingSoon ? (
                  <span className="text-muted/50">Coming Soon</span>
                ) : (
                  <span className="text-mint">Live</span>
                )}
              </span>
              <div className="text-right">
                {!t.comingSoon && (
                  <a
                    href={`${APP_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-card-border text-xs font-semibold text-foreground hover:border-mint/50 hover:text-mint transition-colors"
                  >
                    Explore
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Explore Markets
          </a>
        </div>
      </div>
    </section>
  );
}
