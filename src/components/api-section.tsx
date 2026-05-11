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

          {/* Right cards — LIGHT surfaces on the white section (was dark, flipped per UX audit) */}
          <div className="flex flex-col gap-10 w-full lg:w-[512px] shrink-0">
            {/* Mint/Burn card */}
            <article
              className="relative rounded-xl overflow-hidden w-full bg-off-white border border-black/[0.04]"
              style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="relative rounded-xl px-10 py-[48px] md:py-[56px] flex flex-col items-center gap-[10px]">
                <Image
                  src="/visuals/chart-globe.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 512px"
                  className="object-cover opacity-[0.08]"
                  style={{ objectPosition: "65% center" }}
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="relative z-10 w-full text-center">
                  <h3 className="font-[var(--font-grotesk)] font-medium text-[#021c24] text-[22px] md:text-[28px] tracking-[-0.6px] capitalize leading-[1.04]">
                    Mint/Burn via API
                  </h3>
                </div>
                <div className="relative z-10 w-full flex justify-center">
                  <p className="font-[var(--font-inter)] font-normal text-[#6b7280] text-[15px] md:text-[17px] tracking-[-0.3px] leading-normal text-center max-w-[360px]">
                    Programmatic issuance and redemption of tokenized equities via API,
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
              <div className="relative rounded-xl px-10 py-[48px] md:py-[56px] flex flex-col items-center gap-[10px]">
                <Image
                  src="/visuals/api-rfq-bg.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 512px"
                  className="object-cover opacity-[0.08]"
                  style={{ objectPosition: "60% center" }}
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="relative z-10 w-full text-center">
                  <h3 className="font-[var(--font-grotesk)] font-medium text-[#021c24] text-[22px] md:text-[28px] tracking-[-0.6px] capitalize leading-[1.04]">
                    Trading RFQ
                  </h3>
                </div>
                <div className="relative z-10 w-full flex justify-center">
                  <p className="font-[var(--font-inter)] font-normal text-[#6b7280] text-[15px] md:text-[17px] tracking-[-0.3px] leading-normal text-center max-w-[360px]">
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
