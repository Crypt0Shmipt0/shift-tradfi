import Image from "next/image";

export function ApiSection() {
  return (
    <section id="api" className="bg-white py-[120px]" aria-label="API integration">
      <div className="mx-auto px-6 md:px-16 lg:px-[120px]" style={{ maxWidth: 1440 }}>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left copy */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-[18px]">
              <h2
                className="font-[var(--font-grotesk)] font-medium text-black leading-[1.1] tracking-[-0.96px] text-[32px] md:text-[48px]"
              >
                One API
                <br />
                Hundreds of stocks
              </h2>
              <p className="font-[var(--font-grotesk)] font-medium text-[#8d8d8d] leading-[1.04] tracking-[-0.64px] lowercase text-[20px] md:text-[32px] max-w-[592px]">
                trade all your favorite stocks, and eliminate risks of margin and liquidation
              </p>
            </div>
            <a
              href="https://shiftrwa.xyz/learn"
              className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[20px] md:text-[24px] capitalize tracking-[0.48px] px-8 py-[14px] rounded-full transition-all duration-200 hover:bg-black/90 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 w-fit"
            >
              Read API Docs
            </a>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-10 w-full lg:w-[512px] shrink-0">
            {/* Mint/Burn card */}
            <article
              className="relative rounded-xl overflow-hidden w-full"
              style={{
                boxShadow: "0px 4px 2px rgba(0,0,0,0.25), 0px 4px 2px rgba(0,0,0,0.25)",
              }}
            >
              <div className="relative bg-black rounded-xl px-10 py-[120px] flex flex-col items-center gap-[10px]">
                {/* Background image */}
                <Image
                  src="/visuals/chart-globe.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 512px"
                  className="object-cover opacity-60"
                  style={{ objectPosition: "65% center" }}
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="relative z-10 w-full text-center">
                  <h3 className="font-[var(--font-grotesk)] font-medium text-white text-[24px] md:text-[32px] tracking-[-0.64px] capitalize leading-[1.04]">
                    Mint/Burn via API
                  </h3>
                </div>
                <div className="relative z-10 w-full flex justify-center">
                  <p className="font-[var(--font-inter)] font-normal text-[#edeeee] text-[16px] md:text-[18px] tracking-[-0.36px] leading-normal text-center max-w-[337px]">
                    Seamless issuance and redemption of tokenized equities via API,
                    with deterministic flows aligned to underlying asset settlement.
                  </p>
                </div>
              </div>
            </article>

            {/* Trading RFQ card */}
            <article
              className="relative rounded-xl overflow-hidden w-full"
              style={{
                boxShadow: "0px 4px 2px rgba(0,0,0,0.25), 0px 4px 2px rgba(0,0,0,0.25)",
              }}
            >
              <div className="relative bg-black rounded-xl px-10 py-[120px] flex flex-col items-center gap-[10px]">
                {/* Background image */}
                <Image
                  src="/visuals/api-rfq-bg.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 512px"
                  className="object-cover opacity-60"
                  style={{ objectPosition: "60% center" }}
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="relative z-10 w-full text-center">
                  <h3 className="font-[var(--font-grotesk)] font-medium text-white text-[24px] md:text-[32px] tracking-[-0.64px] capitalize leading-[1.04]">
                    Trading RFQ
                  </h3>
                </div>
                <div className="relative z-10 w-full flex justify-center">
                  <p className="font-[var(--font-inter)] font-normal text-[#edeeee] text-[16px] md:text-[18px] tracking-[-0.36px] leading-normal text-center max-w-[337px]">
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
