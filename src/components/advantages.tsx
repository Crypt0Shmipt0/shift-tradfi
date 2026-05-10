const CARDS = [
  { title: "24/7 Market Access", desc: "Trade equities anytime, without market-hour constraints." },
  { title: "Fully Backed Exposure", desc: "1:1 asset-backed tokens with real underlying exposure." },
  { title: "Embedded Leverage", desc: "Access leveraged positions without margin or liquidation risk." },
  { title: "Onchain Transparency", desc: "Real-time visibility into supply, flows, and asset backing." },
  { title: "DeFi Composability", desc: "Use tokenized equities as collateral or integrate across DeFi." },
  { title: "Institutional-Grade Security", desc: "Audited infrastructure designed for secure, compliant operation." },
];

export function Advantages() {
  return (
    <section className="bg-black text-white" style={{ padding: 120 }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Heading */}
        <div className="mb-16">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4"
            style={{ fontSize: 48, letterSpacing: "-0.96px" }}
          >
            Equities redesigned for Web3
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal text-[#8d8d8d]"
            style={{ fontSize: 32, letterSpacing: "-0.64px" }}
          >
            institutional-grade equity exposure with onchain transparency
          </p>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-[#151515]"
              style={{
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 60,
                paddingBottom: 60,
                borderRadius: 12,
                boxShadow: "0 4px 2px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src="/icon-flame.svg" alt="" className="w-6 h-6" aria-hidden="true" />
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white"
                  style={{ fontSize: 32, letterSpacing: "-0.64px" }}
                >
                  {c.title}
                </h3>
              </div>
              <p
                className="font-[var(--font-inter)] font-normal text-[#8d8d8d] leading-relaxed"
                style={{ fontSize: 18 }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#edeeee] text-[#021c24] font-[var(--font-inter)] font-medium transition-colors hover:bg-[#edeeee]/80"
            style={{
              fontSize: 18,
              letterSpacing: "0.36px",
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 14,
              paddingBottom: 14,
              borderRadius: 100,
            }}
          >
            View Analytics
          </a>
        </div>
      </div>
    </section>
  );
}
