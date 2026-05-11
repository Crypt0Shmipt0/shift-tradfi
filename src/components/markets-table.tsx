import Image from "next/image";
import { TOKENS } from "@/data/tokens";
import { APP_URL } from "@/lib/constants";

/* Static placeholder prices matching Figma */
const PLACEHOLDER_PRICES: Record<string, { price: string; change: string; positive: boolean }> = {
  TSL2L: { price: "$ 437.32", change: "+4.14%", positive: true },
  TSL1S: { price: "$ 437.32", change: "+4.14%", positive: false },
  SPX3L: { price: "$ 437.32", change: "+4.14%", positive: true },
  SPX3S: { price: "$ 437.32", change: "+4.14%", positive: false },
  SOX3L: { price: "$ 437.32", change: "+4.14%", positive: true },
  SOX3S: { price: "$ 437.32", change: "+4.14%", positive: false },
  URA2L: { price: "$ 437.32", change: "+4.14%", positive: true },
};

export function MarketsTable() {
  return (
    <section id="markets" className="py-[120px] px-[80px]" aria-label="Markets" style={{ background: "white" }}>
      <div className="mx-auto flex flex-col gap-[80px] items-center" style={{ maxWidth: 1440 }}>
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

        {/* Table card */}
        <div className="bg-white rounded-[32px] p-[40px] w-full" role="table" aria-label="Token markets">
          {/* Table contents */}
          <div className="flex flex-col gap-[12px] items-center w-full">
            {/* Table header */}
            <div className="flex flex-col gap-[18px] items-start w-full">
              <div
                className="flex items-center py-[12px] pr-[108px] w-full text-[#8d8d8d] text-[18px]"
                role="row"
              >
                <div className="flex flex-1 items-center px-[10px]" role="columnheader">
                  <span className="flex-1 max-w-[280px] font-[var(--font-inter)] font-medium capitalize leading-normal">
                    Token
                  </span>
                  <span className="flex-1 font-[var(--font-inter)] font-medium capitalize leading-normal hidden md:block">
                    Token Name
                  </span>
                </div>
                <div className="flex flex-1 items-center max-w-[320px] font-[var(--font-inter)] font-normal hidden md:flex" role="columnheader">
                  <span className="flex-1">Price</span>
                  <span className="flex-1">24h change</span>
                </div>
              </div>
              {/* Divider */}
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
                    <div
                      className="flex items-center w-full"
                      role="row"
                    >
                      {/* Token + Name */}
                      <div className="flex flex-1 items-center px-[10px]">
                        <div className="flex flex-1 gap-[18px] items-center max-w-[280px]" role="cell">
                          <Image
                            src={t.image}
                            alt={t.ticker}
                            width={36}
                            height={36}
                            sizes="36px"
                            className="w-[36px] h-[36px] rounded-full object-cover shrink-0"
                            loading="lazy"
                          />
                          <span className="font-[var(--font-inter)] font-medium text-black text-[18px] capitalize leading-normal whitespace-nowrap">
                            {t.ticker}
                          </span>
                        </div>
                        <span className="flex-1 font-[var(--font-inter)] font-medium text-black text-[18px] leading-normal hidden md:block" role="cell">
                          {t.name.toUpperCase()}
                        </span>
                      </div>

                      {/* Price + Change */}
                      <div className={`flex flex-1 items-center max-w-[320px] font-[var(--font-inter)] font-normal text-[18px] ${priceColor} hidden md:flex`}>
                        <span className="flex-1 leading-[20px]" role="cell">
                          {t.comingSoon ? "---" : (priceData?.price ?? "$ ---")}
                        </span>
                        <span className="flex-1 leading-[20px]" role="cell">
                          {t.comingSoon ? "---" : (priceData?.change ?? "---%")}
                        </span>
                      </div>

                      {/* Explore button */}
                      <div role="cell">
                        {!t.comingSoon ? (
                          <a
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Explore ${t.ticker} - ${t.name}`}
                            className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[16px] tracking-[0.32px] capitalize px-[24px] py-[6px] rounded-full transition-all duration-200 hover:bg-black/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2"
                          >
                            Explore
                          </a>
                        ) : (
                          <span className="font-[var(--font-inter)] text-[#8d8d8d] text-[16px] px-[24px] py-[6px]">
                            Soon
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row divider */}
                    <div className="w-full h-px bg-[#e5e5e5] mt-[20px]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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
