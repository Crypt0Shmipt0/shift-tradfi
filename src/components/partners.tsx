import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
  isPng?: boolean;
  /** Max display width in px */
  w: number;
  /** Max display height in px */
  h: number;
};

const PARTNERS: Partner[] = [
  { name: "Alpaca", logo: "/partners/alpaca.svg", w: 160, h: 46 },
  { name: "Jupiter", logo: "/partners/jupiter.svg", w: 155, h: 48 },
  { name: "Solana", logo: "/partners/solana.svg", w: 250, h: 80 },
  { name: "BNB Chain", logo: "/partners/bnb.svg", w: 137, h: 48 },
  { name: "Wallet", logo: "/partners/wallet.svg", w: 250, h: 80 },
  { name: "Chainlink", logo: "/partners/chainlink.png", isPng: true, w: 188, h: 48 },
  { name: "Orca", logo: "/partners/orca.svg", w: 163, h: 42 },
  { name: "Birdeye", logo: "/partners/birdeye.png", isPng: true, w: 154, h: 48 },
  { name: "Cointelegraph", logo: "/partners/cointelegraph.svg", w: 189, h: 48 },
  { name: "Kamino", logo: "/partners/kamino.svg", w: 154, h: 48 },
  { name: "SNZ Holdings", logo: "/partners/snz.png", isPng: true, w: 250, h: 80 },
  { name: "PRIM3", logo: "/partners/prim3.svg", w: 250, h: 80 },
];

export function Partners() {
  return (
    <section id="partners" className="bg-[#0a0a0a] overflow-hidden" aria-label="Partners and integrations">
      {/* Decorative banner image — object-position top clips half-tokens cleanly at bottom edge */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(200px, 24.93vw, 359px)" }}>
        <Image
          src="/visuals/partners-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
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
              className="relative flex items-center justify-center rounded-[12px] w-[250px] h-[80px]"
            >
              {/* Card bg */}
              <div className="absolute inset-0 bg-[#444] rounded-[12px]" aria-hidden="true" />
              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-[12px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]" aria-hidden="true" />

              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200" style={{ filter: "brightness(0) invert(1)" }}>
                {p.isPng ? (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={p.w}
                    height={p.h}
                    sizes={`${p.w}px`}
                    className="object-contain"
                    style={{ width: p.w, height: p.h, maxWidth: p.w, maxHeight: p.h }}
                    loading="lazy"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="object-contain"
                    style={{ width: p.w, height: p.h, maxWidth: p.w, maxHeight: p.h }}
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
