import Image from "next/image";

const CARDS = [
  { title: "24/7 Market Access", desc: "Trade equities anytime, without market-hour constraints.", icon: "/tokens/3d/apple.png" },
  { title: "Fully Backed Exposure", desc: "1:1 asset-backed tokens with real underlying exposure.", icon: "/tokens/3d/tesla-large.png" },
  { title: "Embedded Leverage", desc: "Access leveraged positions without margin or liquidation risk.", icon: "/tokens/3d/nvidia.png" },
  { title: "Onchain Transparency", desc: "Real-time visibility into supply, flows, and asset backing.", icon: "/tokens/3d/coinbase.png" },
  { title: "DeFi Composability", desc: "Use tokenized equities as collateral or integrate across DeFi.", icon: "/tokens/3d/meta.png" },
  { title: "Institutional-Grade Security", desc: "Audited infrastructure designed for secure, compliant operation.", icon: "/tokens/3d/intel.png" },
] as const;

export function Advantages() {
  return (
    <section id="advantages" className="bg-black text-white px-6 md:px-16 lg:px-[128px] py-16 md:py-24" aria-label="Platform advantages">
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4 tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            Equities redesigned for Web3
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal text-[#9ca3af] tracking-[-0.64px]"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
          >
            Institutional-grade equity exposure with onchain transparency
          </p>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="bg-dark-card px-6 md:px-10 py-10 md:py-[60px] rounded-xl shadow-[0_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0_8px_16px_rgba(38,200,184,0.08)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={c.icon}
                  alt=""
                  width={36}
                  height={36}
                  sizes="36px"
                  className="w-9 h-9 rounded object-contain"
                  aria-hidden="true"
                  loading="lazy"
                />
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white tracking-[-0.64px]"
                  style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
                >
                  {c.title}
                </h3>
              </div>
              <p
                className="font-[var(--font-inter)] font-normal text-[#a3aab5] leading-relaxed text-lg"
              >
                {c.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://dune.com/shiftrwa/shift-rwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-off-white text-[#021c24] font-[var(--font-inter)] font-medium text-lg tracking-[0.36px] px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-off-white/80 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Analytics
          </a>
        </div>
      </div>
    </section>
  );
}
