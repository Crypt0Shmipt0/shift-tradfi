const CARDS = [
  { title: "24/7 Market Access", desc: "Trade equities anytime, without market-hour constraints." },
  { title: "Fully Backed Exposure", desc: "1:1 asset-backed tokens with real underlying exposure." },
  { title: "Embedded Leverage", desc: "Access leveraged positions without margin or liquidation risk." },
  { title: "Onchain Transparency", desc: "Real-time visibility into supply, flows, and asset backing." },
  { title: "DeFi Composability", desc: "Use tokenized equities as collateral or integrate across DeFi." },
  { title: "Institutional-Grade Security", desc: "Audited infrastructure designed for secure, compliant operation." },
] as const;

/* Sparkle/diamond icon — shares the brand-mark family as comparison.tsx's mint diamond. */
function SparkIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z"
        fill="#26c8b8"
        opacity="0.85"
      />
    </svg>
  );
}

export function Advantages() {
  return (
    <section
      id="advantages"
      className="bg-dark-bg text-white py-[80px] md:py-[100px] lg:py-[120px] px-6 md:px-16 lg:px-[120px]"
      aria-label="Platform advantages"
    >
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
            className="font-[var(--font-inter)] font-medium text-[#a8a8a8] tracking-[-0.36px] leading-normal w-full max-w-[680px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
          >
            Institutional rails. Onchain transparency. Built for continuous markets.
          </p>
        </div>

        {/* 2-col card grid, left-aligned content per Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] w-full">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="bg-[#151515] border border-white/[0.04] flex flex-col gap-[18px] items-start px-[24px] py-[36px] md:px-[32px] md:py-[40px] rounded-[12px] transition-colors duration-200 hover:bg-[#1a1a1a]"
            >
              <div className="flex items-center gap-[14px] w-full">
                <SparkIcon />
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white capitalize tracking-[-0.64px] leading-[1.04]"
                  style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
                >
                  {c.title}
                </h3>
              </div>
              <p
                className="font-[var(--font-inter)] font-normal text-[#a8a8a8] text-[16px] md:text-[18px] leading-normal tracking-[-0.36px] max-w-[420px]"
              >
                {c.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://dune.com/shiftrwa/shift-rwa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#edeeee] text-[#021c24] font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] capitalize px-[32px] py-[14px] rounded-full transition-colors duration-200 hover:bg-[#edeeee]/80 focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        >
          Open Dune Dashboard
        </a>
      </div>
    </section>
  );
}
