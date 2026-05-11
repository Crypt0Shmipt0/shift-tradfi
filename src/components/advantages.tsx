const CARDS = [
  { title: "24/7 Market Access", desc: "Trade equities anytime, without market-hour constraints." },
  { title: "Fully Backed Exposure", desc: "1:1 asset-backed tokens with real underlying exposure." },
  { title: "Embedded Leverage", desc: "Access leveraged positions without margin or liquidation risk." },
  { title: "Onchain Transparency", desc: "Real-time visibility into supply, flows, and asset backing." },
  { title: "DeFi Composability", desc: "Use tokenized equities as collateral or integrate across DeFi." },
  { title: "Institutional-Grade Security", desc: "Audited infrastructure designed for secure, compliant operation." },
] as const;

/* Flame icon matching Figma design */
function FlameIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
      <path
        d="M18 3C18 3 24 9.5 24 16C24 18.5 23 21 21 23C21 23 23 19 20 15C20 15 19 21 15 25C15 25 18 21 15 16C15 16 13 20 13 23C11 21 10 18.5 10 16C10 9.5 18 3 18 3Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export function Advantages() {
  return (
    <section id="advantages" className="bg-[#0a0a0a] text-white py-[120px] px-6 md:px-16 lg:px-[120px]" aria-label="Platform advantages">
      <div className="mx-auto flex flex-col gap-[80px] items-center" style={{ maxWidth: 1440 }}>
        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center text-center w-full">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white tracking-[-0.96px] leading-[1.1] w-full"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            Equities redesigned for Web3
          </h2>
          <p
            className="font-[var(--font-grotesk)] font-medium lowercase text-[#8d8d8d] tracking-[-0.64px] leading-normal w-full"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
          >
            Institutional-grade equity exposure with onchain transparency, built for continuous markets and capital efficiency.
          </p>
        </div>

        {/* Card grid -- 3 rows of 2 */}
        <div className="flex flex-col gap-[20px] items-start w-full">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex flex-col md:flex-row flex-wrap gap-[18px] items-start justify-center w-full">
              {CARDS.slice(row * 2, row * 2 + 2).map((c) => (
                <article
                  key={c.title}
                  className="bg-[#151515] flex-1 min-w-0 flex flex-col gap-[18px] items-end px-[40px] py-[60px] rounded-[12px] transition-all duration-300 hover:bg-[#1a1a1a]"
                  style={{ boxShadow: "0px 4px 2px rgba(0,0,0,0.25)" }}
                >
                  <div className="flex items-center gap-[12px] w-full">
                    <FlameIcon />
                    <h3
                      className="font-[var(--font-grotesk)] font-medium text-white capitalize tracking-[-0.64px] leading-[1.04] whitespace-nowrap"
                      style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p
                      className="font-[var(--font-inter)] font-normal text-[#8d8d8d] text-[18px] capitalize leading-normal tracking-[-0.36px] max-w-[337px]"
                    >
                      {c.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://dune.com/shiftrwa/shift-rwa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#edeeee] text-black font-[var(--font-inter)] font-medium text-[24px] tracking-[0.48px] capitalize px-[32px] py-[14px] rounded-full transition-all duration-200 hover:bg-[#edeeee]/80 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          View Analytics
        </a>
      </div>
    </section>
  );
}
