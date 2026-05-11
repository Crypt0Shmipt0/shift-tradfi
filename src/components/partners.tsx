import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
  isPng?: boolean;
  /** Source intrinsic width (used by next/image) */
  w: number;
  /** Source intrinsic height (used by next/image) */
  h: number;
  /** TARGET visual height in px — tuned per-logo for consistent optical weight.
   *  Default ~28-32px; SNZ + Birdeye bumped per Tomer's feedback. */
  displayH: number;
};

const PARTNERS: Partner[] = [
  { name: "Alpaca",        logo: "/partners/alpaca.svg",        w: 160, h: 46,  displayH: 28 },
  { name: "Jupiter",       logo: "/partners/jupiter.svg",       w: 155, h: 48,  displayH: 28 },
  { name: "Solana",        logo: "/partners/solana.svg",        w: 250, h: 80,  displayH: 24 },
  { name: "BNB Chain",     logo: "/partners/bnb.svg",           w: 137, h: 48,  displayH: 28 },
  { name: "Wallet",        logo: "/partners/wallet.svg",        w: 250, h: 80,  displayH: 26 },
  { name: "Chainlink",     logo: "/partners/chainlink.svg",     w: 248, h: 63,  displayH: 28 },
  { name: "Orca",          logo: "/partners/orca.svg",          w: 163, h: 42,  displayH: 28 },
  { name: "Birdeye",       logo: "/partners/birdeye.png",       w: 154, h: 48,  displayH: 38, isPng: true },
  { name: "Cointelegraph", logo: "/partners/cointelegraph.svg", w: 189, h: 48,  displayH: 32 },
  { name: "Kamino",        logo: "/partners/kamino.svg",        w: 154, h: 48,  displayH: 28 },
  { name: "SNZ Holdings",  logo: "/partners/snz.png",           w: 250, h: 80,  displayH: 44, isPng: true },
  { name: "PRIM3",         logo: "/partners/prim3.svg",         w: 250, h: 80,  displayH: 28 },
];

export function Partners() {
  return (
    <section id="partners" className="bg-dark-bg overflow-hidden" aria-label="Partners and integrations">
      {/* Decorative banner image — object-position top clips half-tokens cleanly at bottom edge */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(240px, 28vw, 400px)" }}>
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
        className="mx-auto px-6 md:px-16 lg:px-[80px] py-[80px] md:py-[100px] lg:py-[120px]"
        style={{ maxWidth: 1440 }}
      >
        {/* Text block: 40px gap between title and subtitle */}
        <div className="flex flex-col items-center gap-[40px] mb-[40px]">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-center text-white leading-[1.1] tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 3.33vw, 48px)" }}
          >
            Built for the next financial system
          </h2>

          <p
            className="font-[var(--font-inter)] font-normal text-center text-[#edeeee] text-[18px] leading-normal tracking-[-0.36px] max-w-[900px]"
          >
            Backed by leading infrastructure providers, exchanges, and institutional investors across DeFi and traditional finance.
          </p>
        </div>

        {/* Logo grid: 2-up mobile, 3-up tablet, 4-up desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[24px] lg:gap-[40px] justify-items-center w-full">
          {PARTNERS.map((p, i) => {
            const loadingMode = i < 8 ? "eager" : "lazy";
            // Compute scaled width to preserve aspect ratio at the target visual height
            const renderedWidth = Math.round((p.w / p.h) * p.displayH);
            return (
              <div
                key={p.name}
                className="relative flex items-center justify-center rounded-[12px] w-full max-w-[250px] h-[72px] md:h-[80px]"
              >
                {/* Card bg — deep near-black with subtle gradient + inner highlight */}
                <div
                  className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#1f1f1f] to-[#161616] border border-white/[0.06]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 rounded-[12px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.05)]"
                  aria-hidden="true"
                />

                {/* Logo — per-partner target height (uniform optical weight) */}
                <div
                  className="relative z-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                  style={{ filter: "brightness(0) invert(1)" }}
                >
                  {p.isPng ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={renderedWidth}
                      height={p.displayH}
                      sizes={`${renderedWidth}px`}
                      style={{ height: `${p.displayH}px`, width: "auto" }}
                      className="object-contain"
                      loading={loadingMode}
                    />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{ height: `${p.displayH}px`, width: "auto" }}
                      className="object-contain"
                      loading={loadingMode}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
