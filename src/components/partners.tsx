import Image from "next/image";

const PARTNERS = [
  { name: "Alpaca", logo: "/partners/fig-alpaca.png" },
  { name: "Jupiter", logo: "/partners/fig-jupiter.png" },
  { name: "Chainlink", logo: "/partners/fig-chainlink.png" },
  { name: "Solana", logo: "/partners/fig-solana.png" },
  { name: "BNB Chain", logo: "/partners/fig-bnb.png" },
  { name: "SNZ Holdings", logo: "/partners/fig-snz.png" },
  { name: "Orca", logo: "/partners/fig-orca.png" },
  { name: "Birdeye", logo: "/partners/fig-birdeye.png" },
  { name: "PRIM3", logo: "/partners/fig-prim3.png" },
  { name: "Kamino", logo: "/partners/fig-kamino.png" },
  { name: "Cointelegraph Accelerator", logo: "/partners/fig-cointelegraph.png" },
  { name: "Wallet", logo: "/partners/fig-wallet.png" },
];

export function Partners() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden mb-10">
        <Image src="/visuals/partners-bg.png" alt="" fill className="object-cover" aria-hidden />
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
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={48}
                className="h-7 w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
