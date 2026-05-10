import Image from "next/image";
import { TOKENS } from "@/data/tokens";
import { ArrowUpRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

/* Static placeholder prices matching Figma */
const PLACEHOLDER_PRICES: Record<string, { price: string; change: string; positive: boolean }> = {
  TSL2L: { price: "$437.32", change: "+4.14%", positive: true },
  TSL1S: { price: "$218.66", change: "-4.14%", positive: false },
  SPX3L: { price: "$89.54", change: "+1.87%", positive: true },
  SPX3S: { price: "$29.85", change: "-1.87%", positive: false },
  SOX3L: { price: "$52.18", change: "+3.42%", positive: true },
  SOX3S: { price: "$17.39", change: "-3.42%", positive: false },
};

export function MarketsTable() {
  return (
    <section id="markets" className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        <div className="mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-[#021c24]"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
          >
            SHIFT Markets
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          {/* Table header */}
          <div
            className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 bg-[#f9f9f9] border-b border-gray-200"
          >
            <span className="hidden md:block" />
            <span
              className="font-[var(--font-inter)] font-medium text-[#9ca3af] uppercase"
              style={{ fontSize: 12, letterSpacing: "1px" }}
            >
              Token
            </span>
            <span
              className="hidden md:block font-[var(--font-inter)] font-medium text-[#9ca3af] uppercase"
              style={{ fontSize: 12, letterSpacing: "1px" }}
            >
              Name
            </span>
            <span
              className="hidden md:block font-[var(--font-inter)] font-medium text-[#9ca3af] uppercase text-right"
              style={{ fontSize: 12, letterSpacing: "1px" }}
            >
              Price
            </span>
            <span
              className="hidden md:block font-[var(--font-inter)] font-medium text-[#9ca3af] uppercase text-right"
              style={{ fontSize: 12, letterSpacing: "1px" }}
            >
              24h Change
            </span>
            <span />
          </div>

          {/* Rows */}
          {TOKENS.map((t) => {
            const priceData = PLACEHOLDER_PRICES[t.ticker];
            return (
              <div
                key={t.ticker}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/80 transition-colors items-center"
              >
                <div className="hidden md:block">
                  <Image
                    src={t.image}
                    alt={t.ticker}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-lg object-cover"
                  />
                </div>
                <span className="font-[var(--font-mono)] font-bold text-[#021c24]" style={{ fontSize: 14 }}>
                  {t.ticker}
                </span>
                <span className="hidden md:block font-[var(--font-inter)] text-[#9ca3af]" style={{ fontSize: 14 }}>
                  {t.name}
                </span>
                <span
                  className="hidden md:block text-right font-[var(--font-mono)] tabular-nums text-[#021c24]"
                  style={{ fontSize: 14 }}
                >
                  {t.comingSoon ? "---" : (priceData?.price ?? "$ ---")}
                </span>
                <span
                  className={`hidden md:block text-right font-[var(--font-mono)] tabular-nums ${
                    priceData && !priceData.positive ? "text-[#ef4444]" : "text-[#26c8b8]"
                  }`}
                  style={{ fontSize: 14 }}
                >
                  {t.comingSoon ? "---" : (priceData?.change ?? "---%")}
                </span>
                <div className="text-right">
                  {!t.comingSoon ? (
                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#021c24] text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-[#021c24]/90"
                      style={{ fontSize: 13, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 100 }}
                    >
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="font-[var(--font-inter)] text-[#9ca3af]/50" style={{ fontSize: 13 }}>
                      Soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
