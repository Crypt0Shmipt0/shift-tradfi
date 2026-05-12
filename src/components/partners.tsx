import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";

type Partner = {
  name: string;
  logo: string;
  isPng?: boolean;
  /** Source intrinsic width */
  w: number;
  /** Source intrinsic height */
  h: number;
  /** Optical-height multiplier — compensates for assets with internal padding
   *  (multi-line wordmarks, taglines) so every logo LOOKS the same size inside
   *  the uniform card chrome. 1.0 = base, > 1 = render taller. */
  scale?: number;
};

/** Card chrome: EVERY tile is exactly this size. */
const CARD_W = "w-[156px] md:w-[180px]";
const CARD_H = "h-[64px] md:h-[72px]";
/** Base logo height inside the card (px). Per-logo `scale` adjusts optically. */
const LOGO_H = 26;
const LOGO_H_MD = 30;

const ISSUANCE_INFRA: Partner[] = [
  { name: "Alpaca",    logo: "/partners/alpaca.svg",    w: 160, h: 46, scale: 1.0 },
  { name: "Chainlink", logo: "/partners/chainlink.svg", w: 248, h: 63, scale: 1.0 },
  { name: "Solana",    logo: "/partners/solana.svg",    w: 250, h: 80, scale: 0.95 },
  { name: "BNB Chain", logo: "/partners/bnb.svg",       w: 137, h: 48, scale: 1.0 },
  { name: "Wallet",    logo: "/partners/wallet.svg",    w: 250, h: 80, scale: 0.95 },
  { name: "PRIM3",     logo: "/partners/prim3.svg",     w: 250, h: 80, scale: 0.9 },
];

const ECOSYSTEM_LIQUIDITY: Partner[] = [
  { name: "Jupiter",       logo: "/partners/jupiter.svg",       w: 155, h: 48, scale: 1.0 },
  { name: "Orca",          logo: "/partners/orca.svg",          w: 163, h: 42, scale: 1.0 },
  { name: "Birdeye",       logo: "/partners/birdeye.png",       w: 154, h: 48, scale: 1.25, isPng: true },
  { name: "Kamino",        logo: "/partners/kamino.svg",        w: 154, h: 48, scale: 1.0 },
  { name: "Cointelegraph", logo: "/partners/cointelegraph.svg", w: 189, h: 48, scale: 1.15 },
  { name: "SNZ Holdings",  logo: "/partners/snz.png",           w: 250, h: 80, scale: 1.5, isPng: true },
];

function PartnerCard({ p, loadingMode }: { p: Partner; loadingMode: "eager" | "lazy" }) {
  const scale = p.scale ?? 1;
  const heightSm = LOGO_H * scale;
  const heightMd = LOGO_H_MD * scale;
  const widthMd = Math.round((p.w / p.h) * heightMd);
  return (
    <div
      className={`relative flex items-center justify-center rounded-[12px] shrink-0 ${CARD_W} ${CARD_H}`}
    >
      {/* Card chrome — identical for every partner */}
      <div
        className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#1f1f1f] to-[#161616] border border-white/[0.06]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-[12px] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.05)]"
        aria-hidden="true"
      />

      {/* Logo — per-partner optical scale so visible logos appear equal-sized */}
      <div
        className="relative z-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
        style={{ filter: "brightness(0) invert(1)" }}
      >
        {p.isPng ? (
          <Image
            src={p.logo}
            alt={p.name}
            width={widthMd}
            height={Math.round(heightMd)}
            sizes={`${widthMd}px`}
            style={
              {
                "--lh-sm": `${heightSm}px`,
                "--lh-md": `${heightMd}px`,
              } as React.CSSProperties
            }
            className="w-auto object-contain h-[var(--lh-sm)] md:h-[var(--lh-md)]"
            loading={loadingMode}
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={p.logo}
            alt={p.name}
            style={
              {
                "--lh-sm": `${heightSm}px`,
                "--lh-md": `${heightMd}px`,
              } as React.CSSProperties
            }
            className="w-auto object-contain h-[var(--lh-sm)] md:h-[var(--lh-md)]"
            loading={loadingMode}
          />
        )}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section
      id="partners"
      className="bg-dark-bg overflow-hidden"
      aria-label="Partners and integrations"
    >
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
        <Reveal>
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
        </Reveal>

        {/* Two categorized rows */}
        <RevealStagger staggerChildren={0.05}>
          {/* Group 1: Issuance & Infrastructure */}
          <div className="flex flex-col gap-[20px] mb-[48px] md:mb-[64px]">
            <RevealItem>
              <p className="font-[var(--font-mono)] uppercase text-[11px] tracking-[0.2em] text-cyan text-center">
                Issuance &amp; Infrastructure
              </p>
            </RevealItem>
            <div className="flex flex-wrap items-center justify-center gap-[12px] md:gap-[20px]">
              {ISSUANCE_INFRA.map((p) => (
                <RevealItem key={p.name}>
                  <PartnerCard p={p} loadingMode="eager" />
                </RevealItem>
              ))}
            </div>
          </div>

          {/* Group 2: Ecosystem & Liquidity */}
          <div className="flex flex-col gap-[20px]">
            <RevealItem>
              <p className="font-[var(--font-mono)] uppercase text-[11px] tracking-[0.2em] text-cyan text-center">
                Ecosystem &amp; Liquidity
              </p>
            </RevealItem>
            <div className="flex flex-wrap items-center justify-center gap-[12px] md:gap-[20px]">
              {ECOSYSTEM_LIQUIDITY.map((p) => (
                <RevealItem key={p.name}>
                  <PartnerCard p={p} loadingMode="lazy" />
                </RevealItem>
              ))}
            </div>
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}
