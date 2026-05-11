import Image from "next/image";
import { LIVE_TOKENS } from "@/data/tokens";

export function Product() {
  return (
    <section id="product" className="bg-black text-white" aria-label="Product overview">
      <div className="flex flex-col gap-[80px] items-center py-[120px] mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        {/* Chain pill + chain logos */}
        <div className="flex flex-col gap-[40px] items-center">
          {/* Pill */}
          <div className="flex items-start">
            <span
              className="inline-flex items-center gap-[18px] font-[var(--font-inter)] font-medium text-[#26c8b8] text-base md:text-[24px] tracking-[0.48px] capitalize px-[32px] py-[14px] rounded-full border border-[#26c8b8]"
              style={{ backgroundColor: "rgba(38,200,184,0.35)" }}
            >
              <span className="w-[14px] h-[14px] rounded-full bg-[#26c8b8] shrink-0" />
              Live Across Top Tier Blockchains
            </span>
          </div>

          {/* Chain icons */}
          <div className="flex items-start gap-[20px]">
            <div className="flex items-center justify-center gap-[18px] w-[250px] h-[80px] rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/partners/solana.svg" alt="Solana" className="h-[32px] w-[41px] object-contain" loading="lazy" />
              <span className="font-[var(--font-inter)] font-semibold text-white text-[28px] whitespace-nowrap">
                Solana
              </span>
            </div>
            <div className="flex items-center justify-center gap-[18px] w-[250px] h-[80px] rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/partners/bnb.svg" alt="BNB Chain" className="h-[48px] w-[48px] object-contain" loading="lazy" />
              <span className="font-[var(--font-inter)] font-semibold text-white text-[28px] whitespace-nowrap">
                BNB Chain
              </span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center text-center w-full">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white tracking-[-0.96px] leading-[1.1] w-full"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            Trade like Perps, Never Liquidated
          </h2>
          <p
            className="font-[var(--font-grotesk)] font-medium lowercase text-[#ededed] tracking-[-0.64px] leading-[1.04] w-full"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
          >
            Trade all your favorite stocks, and eliminate risks of margin and liquidation
          </p>
        </div>

        {/* Token strip */}
        <div
          className="flex flex-wrap items-start justify-center gap-x-[60px] gap-y-[40px] w-full"
          role="region"
          aria-label="Available tokens"
        >
          {LIVE_TOKENS.map((t) => (
            <div key={t.ticker} className="flex items-center gap-[15px] shrink-0">
              <Image
                src={t.image}
                alt={t.ticker}
                width={100}
                height={100}
                sizes="100px"
                className="w-[100px] h-[100px] rounded-[16px] bg-[#2a2b2b] object-cover"
                loading="lazy"
              />
              <div className="flex flex-col gap-[8px] justify-center">
                <span className="font-[var(--font-inter)] font-semibold text-white text-[28px] leading-normal">
                  {t.ticker}
                </span>
                <span className="font-[var(--font-inter)] font-normal text-[#edeeee] text-[18px] leading-normal">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Long / Short cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-[40px] items-start justify-center overflow-clip w-full max-w-[1320px]">
          {/* Long card */}
          <article
            className="relative rounded-[12px] overflow-hidden flex flex-col gap-[10px] items-start px-[40px] py-[60px] w-full md:w-[512px] h-auto md:h-[512px] transition-all duration-300"
            style={{
              boxShadow: "0px 4px 2px rgba(0,0,0,0.25)",
            }}
          >
            {/* Background layers */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute bg-[#111] inset-0 rounded-[12px]" />
              <div className="absolute inset-0 opacity-50 overflow-hidden rounded-[12px]">
                <Image
                  src="/visuals/arrow-up.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-contain object-bottom"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-start w-full">
              <h3
                className="font-[var(--font-grotesk)] font-medium text-white capitalize tracking-[-0.64px] leading-[1.04]"
                style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}
              >
                Long 3X
              </h3>
            </div>
            <div className="relative z-10 flex flex-col items-start w-full">
              <p
                className="font-[var(--font-inter)] font-normal text-[#8d8d8d] text-[18px] capitalize leading-normal tracking-[-0.36px] max-w-[337px]"
              >
                Capture amplified upside on your thesis. Up to 3x leveraged exposure
                to major equities without margin accounts or funding fees.
              </p>
            </div>
          </article>

          {/* Short card */}
          <article
            className="relative rounded-[12px] overflow-hidden flex flex-col gap-[10px] items-end px-[40px] py-[60px] w-full md:w-[512px] h-auto md:h-[512px] transition-all duration-300"
            style={{
              boxShadow: "0px 4px 2px rgba(0,0,0,0.25)",
            }}
          >
            {/* Background layers */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute bg-[#151515] inset-0 rounded-[12px]" />
              <div className="absolute inset-0 opacity-50 overflow-hidden rounded-[12px]">
                <Image
                  src="/visuals/arrow-down.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-contain object-bottom"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-end w-full">
              <h3
                className="font-[var(--font-grotesk)] font-medium text-white capitalize text-right tracking-[-0.64px] leading-[1.04]"
                style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}
              >
                Short 3X
              </h3>
            </div>
            <div className="relative z-10 flex flex-col items-end w-full">
              <p
                className="font-[var(--font-inter)] font-normal text-[#8d8d8d] text-[18px] text-right capitalize leading-normal tracking-[-0.36px] max-w-[337px]"
              >
                Take the other side without borrowing or shorting on margin.
                Inverse exposure on the same underlyings, up to 3x leverage.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
