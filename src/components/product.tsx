import { LIVE_TOKENS } from "@/data/tokens";
import { TrendingUp, TrendingDown, Shield } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Long",
    desc: "2× and 3× exposure to major equities. Capture amplified upside on your thesis without margin accounts.",
    color: "text-mint",
  },
  {
    icon: TrendingDown,
    title: "Short",
    desc: "Inverse exposure on the same underlyings. Take the other side without borrowing or shorting on margin.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Zero Liquidation",
    desc: "NAV moves with the underlying, but no engine can force-close your position. You decide when to exit.",
    color: "text-foreground",
  },
];

export function Product() {
  return (
    <section id="product" className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Chain badges */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mint/30 bg-mint/5 text-sm text-mint">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Live on Solana
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border text-sm text-muted">
            BNB Chain — Coming Soon
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trade like Perps, Never Liquidated
          </h2>
          <p className="text-muted text-lg max-w-[600px] mx-auto">
            All the leverage of perpetual futures, without the margin calls or forced liquidation.
          </p>
        </div>

        {/* Token strip */}
        <div className="flex items-center justify-center gap-8 mb-16 overflow-x-auto pb-4">
          {LIVE_TOKENS.map((t) => (
            <div key={t.ticker} className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-xs font-mono text-muted">
                {t.ticker.slice(0, 3)}
              </div>
              <div>
                <div className="font-mono font-bold text-sm text-foreground">
                  {t.ticker}
                </div>
                <div className="text-xs text-muted">{t.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl border border-card-border bg-card/60 hover:border-mint/30 transition-colors"
            >
              <f.icon className={`h-8 w-8 mb-4 ${f.color}`} />
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Show Markets
          </a>
        </div>
      </div>
    </section>
  );
}
