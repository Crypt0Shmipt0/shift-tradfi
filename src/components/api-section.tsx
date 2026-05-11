import Image from "next/image";

export function ApiSection() {
  return (
    <section id="api" className="bg-white py-[80px] md:py-[100px] lg:py-[120px]" aria-label="API integration">
      <div className="mx-auto px-6 md:px-16 lg:px-[120px]" style={{ maxWidth: 1440 }}>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left copy */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-[18px]">
              <h2
                className="font-[var(--font-grotesk)] font-medium text-[#021c24] leading-[1.1] tracking-[-0.96px]"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                One API
                <br />
                Hundreds of stocks
              </h2>
              <p
                className="font-[var(--font-inter)] font-medium lowercase text-[#6b7280] leading-normal tracking-[-0.36px] max-w-[592px]"
                style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
              >
                programmatic mint, burn, and quoting — built for trading desks.
              </p>
            </div>
            <a
              href="https://shiftrwa.xyz/learn"
              className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[18px] capitalize tracking-[0.36px] px-8 py-[14px] rounded-full transition-colors hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 w-fit"
            >
              Read API Docs
            </a>
          </div>

          {/* Right cards — LIGHT surfaces with a transparent glass-dome chart visual */}
          <div className="flex flex-col gap-10 w-full lg:w-[512px] shrink-0">
            {/* Mint/Burn card */}
            <article
              className="relative rounded-xl overflow-hidden w-full bg-off-white border border-black/[0.04]"
              style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="relative rounded-xl px-8 py-[40px] md:py-[48px] flex items-center gap-6">
                <Image
                  src="/visuals/chart-dome.webp"
                  alt=""
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 120px, 160px"
                  className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain shrink-0"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-[10px] min-w-0">
                  <h3 className="font-[var(--font-grotesk)] font-medium text-[#021c24] text-[20px] md:text-[24px] tracking-[-0.5px] capitalize leading-[1.1]">
                    Mint/Burn via API
                  </h3>
                  <p className="font-[var(--font-inter)] font-normal text-[#6b7280] text-[14px] md:text-[15px] tracking-[-0.2px] leading-normal">
                    Programmatic issuance and redemption of tokenized equities,
                    with deterministic flows aligned to underlying asset settlement.
                  </p>
                </div>
              </div>
            </article>

            {/* Trading RFQ card */}
            <article
              className="relative rounded-xl overflow-hidden w-full bg-off-white border border-black/[0.04]"
              style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="relative rounded-xl px-8 py-[40px] md:py-[48px] flex items-center gap-6">
                <Image
                  src="/visuals/chart-dome.webp"
                  alt=""
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 120px, 160px"
                  className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain shrink-0 -scale-x-100"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-[10px] min-w-0">
                  <h3 className="font-[var(--font-grotesk)] font-medium text-[#021c24] text-[20px] md:text-[24px] tracking-[-0.5px] capitalize leading-[1.1]">
                    Trading RFQ
                  </h3>
                  <p className="font-[var(--font-inter)] font-normal text-[#6b7280] text-[14px] md:text-[15px] tracking-[-0.2px] leading-normal">
                    Request quotes on demand with low-latency pricing, enabling
                    precise execution in dynamic market conditions.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
