import Image from "next/image";

const PARTNERS = [
  { name: "Alpaca", logo: "/partners/alpaca.png" },
  { name: "Jupiter", logo: "/partners/jupiter.png" },
  { name: "Chainlink", logo: "/partners/chainlink.png" },
  { name: "Solana", logo: "/partners/solana.png" },
  { name: "DEKA", logo: null },
  { name: "SNZ Holdings", logo: "/partners/snz.png" },
  { name: "Orca", logo: "/partners/orca.png" },
  { name: "Birdeye", logo: "/partners/birdeye.png" },
  { name: "PRIM3 VC", logo: "/partners/prim3.svg" },
  { name: "DEXTools", logo: null },
  { name: "Cointelegraph Accelerator", logo: "/partners/cointelegraph.png" },
  { name: "Meteora", logo: "/partners/meteora.png" },
];

export function Partners() {
  return (
    <section className="py-20 md:py-28 bg-white">
      {/* Partners background image */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden mb-10">
        <Image
          src="/visuals/partners-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="max-w-[1440px] mx-auto section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Built for the Next Financial Ecosystem
        </h2>
        <p className="text-text-light text-center max-w-[700px] mx-auto mb-16">
          Backed by leading infrastructure providers, exchanges, and institutional investors
          across DeFi and traditional finance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-20 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors px-6"
            >
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={44}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-sm font-medium text-text-light/50">{p.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
