import Image from "next/image";
import { TOKENS } from "@/data/tokens";
import { ArrowUpRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function MarketsTable() {
  return (
    <section id="markets" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px]">
        <div className="mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-foreground mb-4"
            style={{ fontSize: 48, letterSpacing: "-0.96px" }}
          >
            SHIFT Markets
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 bg-[#f9f9f9] border-b border-gray-200">
            <span className="hidden md:block" />
            <span className="font-[var(--font-inter)] font-medium text-gray-text uppercase" style={{ fontSize: 12, letterSpacing: "1px" }}>Token</span>
            <span className="hidden md:block font-[var(--font-inter)] font-medium text-gray-text uppercase" style={{ fontSize: 12, letterSpacing: "1px" }}>Name</span>
            <span className="hidden md:block font-[var(--font-inter)] font-medium text-gray-text uppercase text-right" style={{ fontSize: 12, letterSpacing: "1px" }}>Price</span>
            <span className="hidden md:block font-[var(--font-inter)] font-medium text-gray-text uppercase text-right" style={{ fontSize: 12, letterSpacing: "1px" }}>24h Change</span>
            <span />
          </div>

          {TOKENS.map((t) => (
            <div
              key={t.ticker}
              className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/80 transition-colors items-center"
            >
              <div className="hidden md:block">
                <Image src={t.image} alt={t.ticker} width={36} height={36} className="w-9 h-9 rounded-lg object-cover" />
              </div>
              <span className="font-mono font-bold text-foreground" style={{ fontSize: 14 }}>{t.ticker}</span>
              <span className="hidden md:block font-[var(--font-inter)] text-gray-text" style={{ fontSize: 14 }}>{t.name}</span>
              <span className="hidden md:block text-right font-mono tabular-nums text-foreground" style={{ fontSize: 14 }}>
                {t.comingSoon ? "---" : "$ ---"}
              </span>
              <span className="hidden md:block text-right font-mono tabular-nums text-mint" style={{ fontSize: 14 }}>
                {t.comingSoon ? "---" : "---%"}
              </span>
              <div className="text-right">
                {!t.comingSoon ? (
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-foreground text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-foreground/90"
                    style={{ fontSize: 13, borderRadius: 100 }}
                  >
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="font-[var(--font-inter)] text-gray-text/50" style={{ fontSize: 13 }}>Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
