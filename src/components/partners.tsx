import Image from "next/image";

const PARTNERS: { name: string; logo: string; isPng?: boolean }[] = [
  { name: "Alpaca", logo: "/partners/alpaca.svg" },
  { name: "Jupiter", logo: "/partners/jupiter.svg" },
  { name: "Solana", logo: "/partners/solana.svg" },
  { name: "BNB Chain", logo: "/partners/bnb.svg" },
  { name: "Wallet", logo: "/partners/wallet.svg" },
  { name: "Chainlink", logo: "/partners/chainlink.svg" },
  { name: "Orca", logo: "/partners/orca.svg" },
  { name: "Birdeye", logo: "/partners/birdeye.png", isPng: true },
  { name: "Cointelegraph", logo: "/partners/cointelegraph.svg" },
  { name: "Kamino", logo: "/partners/kamino.svg" },
  { name: "Meteora", logo: "/partners/meteora.svg" },
  { name: "PRIM3", logo: "/partners/prim3.svg" },
];

export function Partners() {
  return (
    <section id="partners" className="bg-black" aria-label="Partners and integrations">
      {/* Decorative banner image */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(200px, 24.93vw, 359px)" }}>
        <Image
          src="/visuals/partners-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Partners content */}
      <div
        className="mx-auto px-6 md:px-16 lg:px-[80px] py-[120px]"
        style={{ maxWidth: 1440 }}
      >
        {/* Text block: 40px gap between title and subtitle */}
        <div className="flex flex-col items-center gap-[40px] mb-[40px]">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-center text-white leading-[1.1] tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 3.33vw, 48px)" }}
          >
            Built for the Next Financial EcoSystem
          </h2>

          <p
            className="font-[var(--font-inter)] font-normal text-center text-[#edeeee] text-[18px] leading-normal tracking-[-0.36px] max-w-[900px]"
          >
            Backed by leading infrastructure providers, exchanges, and institutional investors across DeFi and traditional finance.
          </p>
        </div>

        {/* Logo grid: 4 columns, 40px gap, 250px wide cards, 80px tall */}
        <div className="flex flex-wrap items-start justify-center gap-[40px]">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="relative flex items-center justify-center rounded-[12px] w-[250px] h-[80px] transition-all duration-200 hover:brightness-110"
            >
              {/* Card bg */}
              <div className="absolute inset-0 bg-[#444] rounded-[12px]" aria-hidden="true" />
              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-[12px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" aria-hidden="true" />

              {/* Logo */}
              <div className="relative z-10">
                {p.isPng ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={154}
                    height={48}
                    sizes="154px"
                    className="h-[48px] w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-[48px] w-auto object-contain max-w-[160px]"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
