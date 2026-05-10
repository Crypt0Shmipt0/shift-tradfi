import Image from "next/image";

const PARTNERS = [
  { name: "Alpaca", logo: "/partners/alpaca.svg" },
  { name: "Jupiter", logo: "/partners/jupiter.svg" },
  { name: "Chainlink", logo: "/partners/chainlink.svg" },
  { name: "Solana", logo: "/partners/solana.svg" },
  { name: "BNB Chain", logo: "/partners/bnb.svg" },
  { name: "Orca", logo: "/partners/orca.svg" },
  { name: "Birdeye", logo: "/partners/birdeye.png", isPng: true },
  { name: "PRIM3", logo: "/partners/prim3.svg" },
  { name: "Kamino", logo: "/partners/kamino.svg" },
  { name: "Cointelegraph", logo: "/partners/cointelegraph.svg" },
  { name: "Meteora", logo: "/partners/meteora.svg" },
  { name: "Wallet", logo: "/partners/wallet.svg" },
];

export function Partners() {
  return (
    <section className="bg-black">
      {/* Decorative banner image */}
      <div className="relative w-full overflow-hidden" style={{ height: 400 }}>
        <Image
          src="/visuals/partners-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div
        className="mx-auto px-6 md:px-16 lg:px-[128px]"
        style={{ maxWidth: 1440, paddingTop: 64, paddingBottom: 64 }}
      >
        <h2
          className="font-[var(--font-grotesk)] font-medium text-center text-white mb-16"
          style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
        >
          Built for the Next Financial EcoSystem
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] transition-colors hover:border-[#3a3a3a]"
              style={{ width: "100%", height: 80 }}
            >
              {p.isPng ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={48}
                  className="h-7 w-auto object-contain"
                />
              ) : (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-7 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
