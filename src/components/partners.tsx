const PARTNERS = [
  { name: "Alpaca", logo: "/logos/alpaca.svg" },
  { name: "Jupiter", logo: "/logos/jupiter.svg" },
  { name: "Chainlink", logo: "/logos/chainlink.svg" },
  { name: "Solana", logo: "/logos/solana.svg" },
  { name: "DEKA", logo: "/logos/deka.svg" },
  { name: "SNZ Holdings", logo: "/logos/snz.svg" },
  { name: "Orca", logo: "/logos/orca.svg" },
  { name: "Birdeye", logo: "/logos/birdeye.svg" },
  { name: "PRIM3 VC", logo: "/logos/prim3.svg" },
  { name: "DEXTools", logo: "/logos/dextools.svg" },
  { name: "Cointelegraph", logo: "/logos/cointelegraph.svg" },
  { name: "Meteora", logo: "/logos/meteora.svg" },
];

export function Partners() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Built for the Next Financial Ecosystem
        </h2>
        <p className="text-muted text-center max-w-[700px] mx-auto mb-16">
          Backed by leading infrastructure providers, exchanges, and institutional investors
          across DeFi and traditional finance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-20 rounded-xl border border-card-border bg-card/40 hover:border-mint/30 transition-colors px-6"
            >
              {/* Logo placeholder — replace with actual SVGs */}
              <span className="text-sm font-medium text-muted/70">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
