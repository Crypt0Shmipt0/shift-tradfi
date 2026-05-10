import Image from "next/image";

const CARDS = [
  { title: "24/7 Market Access", desc: "Trade equities anytime, without market-hour constraints.", icon: "/tokens/3d/apple.png" },
  { title: "Fully Backed Exposure", desc: "1:1 asset-backed tokens with real underlying exposure.", icon: "/tokens/3d/tesla-large.png" },
  { title: "Embedded Leverage", desc: "Access leveraged positions without margin or liquidation risk.", icon: "/tokens/3d/nvidia.png" },
  { title: "Onchain Transparency", desc: "Real-time visibility into supply, flows, and asset backing.", icon: "/tokens/3d/coinbase.png" },
  { title: "DeFi Composability", desc: "Use tokenized equities as collateral or integrate across DeFi.", icon: "/tokens/3d/meta.png" },
  { title: "Institutional-Grade Security", desc: "Audited infrastructure designed for secure, compliant operation.", icon: "/tokens/3d/intel.png" },
];

export function Advantages() {
  return (
    <section className="bg-black text-white p-6 md:p-16 lg:p-[120px]">
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
          >
            Equities redesigned for Web3
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal text-[#9ca3af]"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)", letterSpacing: "-0.64px" }}
          >
            institutional-grade equity exposure with onchain transparency
          </p>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-[#151515] px-6 md:px-10 py-10 md:py-[60px]"
              style={{
                borderRadius: 12,
                boxShadow: "0 4px 2px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={c.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded object-contain"
                  aria-hidden="true"
                />
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white"
                  style={{ fontSize: "clamp(20px, 3.5vw, 32px)", letterSpacing: "-0.64px" }}
                >
                  {c.title}
                </h3>
              </div>
              <p
                className="font-[var(--font-inter)] font-normal text-[#9ca3af] leading-relaxed"
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
            href="https://dune.com/shiftrwa/shift-rwa"
            target="_blank"
            rel="noopener noreferrer"
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
