import Image from "next/image";

const PARTNERS: { name: string; logo: string; isPng?: boolean }[] = [
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
    <section id="partners" className="bg-black" aria-label="Partners and integrations">
      {/* Decorative banner image */}
      <div className="relative w-full overflow-hidden h-48 sm:h-64 md:h-80 lg:h-[400px]">
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

      <div
        className="mx-auto px-6 md:px-16 lg:px-[128px] py-16"
        style={{ maxWidth: 1440 }}
      >
        <h2
          className="font-[var(--font-grotesk)] font-medium text-center text-white mb-16 tracking-[-0.96px]"
          style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
        >
          Built for the Next Financial EcoSystem
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] h-20 transition-all duration-200 hover:border-mint/40 hover:bg-[#1f1f1f]"
            >
              {p.isPng ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={160}
                  height={48}
                  sizes="160px"
                  className="h-7 w-auto object-contain"
                  loading="lazy"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-7 w-auto object-contain"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
