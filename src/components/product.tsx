import Image from "next/image";
import { LIVE_TOKENS } from "@/data/tokens";

export function Product() {
  return (
    <section id="product" className="bg-dark-bg text-white" aria-label="Product overview">
      <div className="flex flex-col gap-[80px] items-center py-[80px] md:py-[100px] lg:py-[120px] mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        {/* Chain pill + chain logos */}
        <div className="flex flex-col gap-[40px] items-center">
          {/* Pill */}
          <div className="flex items-start">
            <span
              className="inline-flex items-center gap-[12px] font-[var(--font-inter)] font-medium text-[#26c8b8] text-[14px] md:text-[18px] tracking-[0.36px] px-[24px] py-[10px] rounded-full border border-[#26c8b8]/40"
              style={{ backgroundColor: "rgba(38,200,184,0.12)" }}
            >
              <span className="w-[10px] h-[10px] rounded-full bg-[#26c8b8] shrink-0" />
              Live on Solana &amp; BNB Chain
            </span>
          </div>

          {/* Chain icons */}
          <div className="flex items-start gap-[20px]">
            <div className="flex items-center justify-center gap-[18px] w-[250px] h-[80px] rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/partners/solana.svg" alt="Solana" className="max-h-[48px] w-auto object-contain" loading="lazy" />
              <span className="font-[var(--font-inter)] font-semibold text-white text-[28px] whitespace-nowrap">
                Solana
              </span>
            </div>
            <div className="flex items-center justify-center gap-[18px] w-[250px] h-[80px] rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/partners/bnb.svg" alt="BNB Chain" className="max-h-[48px] w-auto object-contain" loading="lazy" />
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
            className="font-[var(--font-inter)] font-medium text-[#ededed] tracking-[-0.36px] leading-normal w-full max-w-[760px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
          >
            Spot-style execution. Perp-style leverage. No funding, no margin calls.
          </p>
        </div>

        {/* Token strip — 2-col mobile, 3-col tablet, 6-up desktop */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-[24px] gap-y-[28px] w-full justify-items-start"
          role="region"
          aria-label="Available tokens"
        >
          {LIVE_TOKENS.map((t) => (
            <div key={t.ticker} className="flex items-center gap-[12px] w-full">
              <Image
                src={t.image}
                alt={t.ticker}
                width={100}
                height={100}
                sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 100px"
                className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] rounded-[16px] bg-[#2a2b2b] object-cover shrink-0"
                loading="lazy"
              />
              <div className="flex flex-col gap-[4px] justify-center min-w-0">
                <span className="font-[var(--font-inter)] font-semibold text-white text-[18px] md:text-[22px] lg:text-[24px] leading-tight">
                  {t.ticker}
                </span>
                <span className="font-[var(--font-inter)] font-normal text-[#edeeee] text-[12px] md:text-[14px] leading-tight truncate">
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
            className="relative rounded-[12px] overflow-hidden flex flex-col gap-[10px] items-start px-[40px] py-[60px] w-full md:w-[512px] h-auto md:h-[512px] border border-[rgba(0,0,0,0.32)]"
            style={{
              boxShadow: "0px 4px 2px rgba(0,0,0,0.25)",
            }}
          >
            {/* Background layers */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden">
              <div className="absolute bg-[#151515] inset-0 rounded-[12px]" />
              <div className="absolute inset-0 opacity-50 overflow-hidden rounded-[12px]">
                <Image
                  src="/visuals/arrow-up.png"
                  alt=""
                  width={760}
                  height={760}
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="absolute max-w-none"
                  style={{ left: "17.52%", top: "7.78%", width: "148.56%", height: "148.56%" }}
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
                className="font-[var(--font-inter)] font-normal text-[#a8a8a8] text-[18px] capitalize leading-normal tracking-[-0.36px] max-w-[337px]"
              >
                Capture amplified upside on your thesis. Up to 3x leveraged exposure
                to major equities without margin accounts or funding fees.
              </p>
            </div>
          </article>

          {/* Short card */}
          <article
            className="relative rounded-[12px] overflow-hidden flex flex-col gap-[10px] items-end px-[40px] py-[60px] w-full md:w-[512px] h-auto md:h-[512px]"
            style={{
              boxShadow: "0px 4px 2px rgba(0,0,0,0.25)",
            }}
          >
            {/* Background layers */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden">
              <div className="absolute bg-[#151515] inset-0 rounded-[12px]" />
              <div className="absolute inset-0 opacity-50 overflow-hidden rounded-[12px]">
                <Image
                  src="/visuals/arrow-down.png"
                  alt=""
                  width={760}
                  height={760}
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="absolute max-w-none"
                  style={{ left: "-65.38%", top: "-36.86%", width: "148.56%", height: "148.56%" }}
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
                className="font-[var(--font-inter)] font-normal text-[#a8a8a8] text-[18px] text-right capitalize leading-normal tracking-[-0.36px] max-w-[337px]"
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
