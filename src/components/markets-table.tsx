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
    <section id="markets" className="bg-white py-16 md:py-20" aria-label="Markets">
      <div className="mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        <div className="mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-[#021c24] tracking-[-0.96px] mb-3"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            SHIFT Markets
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal text-[#9ca3af]"
            style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
          >
            Trade your favorite stocks with embedded leverage — no margin, no liquidation
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden" role="table" aria-label="Token markets">
          {/* Table header */}
          <div
            className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 bg-[#f9f9f9] border-b border-gray-200"
            role="row"
          >
            <span className="hidden md:block" role="columnheader" />
            <span
              className="font-[var(--font-inter)] font-medium text-gray-text uppercase text-xs tracking-[1px]"
              role="columnheader"
            >
              Token
            </span>
            <span
              className="hidden md:block font-[var(--font-inter)] font-medium text-gray-text uppercase text-xs tracking-[1px]"
              role="columnheader"
            >
              Name
            </span>
            <span
              className="hidden md:block font-[var(--font-inter)] font-medium text-gray-text uppercase text-right text-xs tracking-[1px]"
              role="columnheader"
            >
              Price
            </span>
            <span
              className="hidden md:block font-[var(--font-inter)] font-medium text-gray-text uppercase text-right text-xs tracking-[1px]"
              role="columnheader"
            >
              24h Change
            </span>
            <span role="columnheader" />
          </div>

          {/* Rows */}
          {TOKENS.map((t) => {
            const priceData = PLACEHOLDER_PRICES[t.ticker];
            return (
              <div
                key={t.ticker}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_180px_1fr_120px_120px_100px] gap-4 px-6 py-4 border-b border-gray-100 transition-colors duration-150 hover:bg-gray-50/80 items-center"
                role="row"
              >
                <div className="hidden md:block" role="cell">
                  <Image
                    src={t.image}
                    alt={t.ticker}
                    width={36}
                    height={36}
                    sizes="36px"
                    className="w-9 h-9 rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-[var(--font-mono)] font-bold text-[#021c24] text-sm" role="cell">
                  {t.ticker}
                </span>
                <span className="hidden md:block font-[var(--font-inter)] text-gray-text text-sm" role="cell">
                  {t.name}
                </span>
                <span
                  className="hidden md:block text-right font-[var(--font-mono)] tabular-nums text-[#021c24] text-sm"
                  role="cell"
                >
                  {t.comingSoon ? "---" : (priceData?.price ?? "$ ---")}
                </span>
                <span
                  className={`hidden md:block text-right font-[var(--font-mono)] tabular-nums text-sm ${
                    priceData && !priceData.positive ? "text-[#ef4444]" : "text-[#26c8b8]"
                  }`}
                  role="cell"
                >
                  {t.comingSoon ? "---" : (priceData?.change ?? "---%")}
                </span>
                <div className="text-right" role="cell">
                  {!t.comingSoon ? (
                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Explore ${t.ticker} - ${t.name}`}
                      className="inline-flex items-center gap-1 bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[13px] px-4 py-2 rounded-full transition-all duration-200 hover:bg-[#021c24]/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2"
                    >
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="font-[var(--font-inter)] text-gray-text text-[13px]">
                      Soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium tracking-[0.36px] rounded-full transition-all duration-200 hover:bg-[#021c24]/90 hover:shadow-lg"
            style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
          >
            Explore Markets
          </a>
        </div>
      </div>
    </section>
  );
}
