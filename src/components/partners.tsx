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
    <section className="bg-white">
      {/* Background image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/visuals/partners-bg.png" alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px] py-16">
        <h2 className="font-[var(--font-grotesk)] font-medium text-center text-foreground mb-16" style={{ fontSize: 48, letterSpacing: "-0.96px" }}>
          Built for the Next Financial EcoSystem
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5] transition-colors hover:border-gray-300"
              style={{ width: "100%", height: 80 }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={48}
                className="h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
