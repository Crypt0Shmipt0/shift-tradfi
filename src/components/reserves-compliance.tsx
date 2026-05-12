import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";

/**
 * Reserves · Custody · Compliance
 *
 * Light section (white bg, dark text) placed between Advantages and MarketsTable.
 * Credibility-backbone proof block: Chainlink PoR, Alpaca broker-dealer custody,
 * Marshall Islands ART regulatory framework.
 */
export function ReservesCompliance() {
  return (
    <section
      id="reserves"
      className="bg-white py-[80px] md:py-[100px] lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8 lg:px-10">
        {/* Hero row: text left, vault right (stacks on mobile with vault first
            so the visual anchors above the headline at small viewports) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <Reveal className="flex flex-col items-start gap-4 max-w-[640px] flex-1">
            <span className="font-mono text-[12px] uppercase tracking-wider text-cyan">
              Reserves · Custody · Compliance
            </span>
            <h2
              className="font-grotesk font-medium tracking-tight text-[#021c24]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              Every token, verifiably backed
            </h2>
            <p
              className="text-[#6b7280]"
              style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.5 }}
            >
              Big-Four auditor sign-off, independent custody, on-chain reserve proofs,
              and a regulatory framework built for cross-border issuance.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="shrink-0">
            <Image
              src="/visuals/reserves-vault.webp"
              alt="Crystalline reserve vault — verifiably backed tokens visualization"
              width={1024}
              height={1024}
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 340px"
              className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] object-contain"
              loading="lazy"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan text-center pt-[48px] pb-[24px]">
            Institutional-grade infrastructure stack
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 — Chainlink PoR */}
          <RevealItem>
            <article className="flex flex-col items-start gap-3 rounded-2xl border border-black/[0.06] bg-white px-7 py-8 md:px-8 md:py-10 transition-colors hover:bg-[#f9fafb] h-full">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-tint"
              >
                {/* Chainlink hex mark */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#0BB4D4"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Chainlink"
                >
                  <path d="M12 1.5 2.7 6.75v10.5L12 22.5l9.3-5.25V6.75L12 1.5Zm6.45 14.1L12 19.2l-6.45-3.6V8.4L12 4.8l6.45 3.6v7.2Z" />
                </svg>
              </div>
              <h3 className="font-grotesk text-[20px] font-medium text-[#021c24]">
                Chainlink Proof-of-Reserves
              </h3>
              <p className="text-[15px] leading-[1.55] text-[#6b7280]">
                Reserve balances are attested on-chain by Chainlink&apos;s independent
                oracle network — every mint and burn is verifiable in real time.
              </p>
              <a
                href="https://chain.link/proof-of-reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan font-medium text-[14px] hover:underline mt-3"
              >
                View Chainlink PoR →
              </a>
            </article>
          </RevealItem>

          {/* Column 2 — EY (Cyprus) Independent Audit (premium gold top border) */}
          <RevealItem>
            <article className="flex flex-col items-start gap-3 rounded-2xl border border-black/[0.06] border-t-2 border-t-gold bg-white px-7 py-8 md:px-8 md:py-10 transition-colors hover:bg-[#f9fafb] h-full">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#021c24]"
              >
                <Image
                  src="/partners/ey.webp"
                  alt="EY"
                  width={600}
                  height={502}
                  className="h-7 w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <h3 className="font-grotesk text-[20px] font-medium text-[#021c24]">
                EY (Cyprus) — Independent Audit
              </h3>
              <p className="text-[15px] leading-[1.55] text-[#6b7280]">
                Reserve attestations and protocol financials are audited by EY (Cyprus)
                — pairing on-chain Chainlink proofs with a Big-Four sign-off for
                institutional counterparties.
              </p>
            </article>
          </RevealItem>

          {/* Column 3 — Alpaca (Broker-Dealer) */}
          <RevealItem>
            <article className="flex flex-col items-start gap-3 rounded-2xl border border-black/[0.06] bg-white px-7 py-8 md:px-8 md:py-10 transition-colors hover:bg-[#f9fafb] h-full">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-tint"
              >
                {/* Shield / badge */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0BB4D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Shield"
                >
                  <path d="M12 2.5 4 5.5v6.2c0 4.6 3.3 8.5 8 9.8 4.7-1.3 8-5.2 8-9.8V5.5l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-grotesk text-[20px] font-medium text-[#021c24]">
                Alpaca Markets (Broker-Dealer)
              </h3>
              <p className="text-[15px] leading-[1.55] text-[#6b7280]">
                Mint/burn flows route through a FINRA-registered US broker-dealer with
                $40M+ in RWA liquidity, segregated client accounts, and 24/5 market
                access.
              </p>
            </article>
          </RevealItem>

          {/* Column 4 — Marshall Islands LLC · MiCAR ART (DekaBank custody) */}
          <RevealItem>
            <article className="flex flex-col items-start gap-3 rounded-2xl border border-black/[0.06] bg-white px-7 py-8 md:px-8 md:py-10 transition-colors hover:bg-[#f9fafb] h-full">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-tint"
              >
                {/* Document with seal */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0BB4D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Document with seal"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
                  <path d="M14 2v6h6" />
                  <circle cx="12" cy="15" r="2.5" />
                  <path d="m10.6 17 -.9 3 2.3-1.4 2.3 1.4-.9-3" />
                </svg>
              </div>
              <h3 className="font-grotesk text-[20px] font-medium text-[#021c24]">
                Marshall Islands LLC · MiCAR ART
              </h3>
              <p className="text-[15px] leading-[1.55] text-[#6b7280]">
                Live leveraged series tokens issued as Marshall Islands LLC membership
                interests; spot pipeline (DekaBank custody) issued under the EU MiCAR
                Asset-Referenced Tokens framework — a regulated, transparent wrapper
                purpose-built for tokenized exposure.
              </p>
            </article>
          </RevealItem>
        </RevealStagger>

        <Reveal>
          <div className="flex justify-center pt-[48px] md:pt-[56px]">
            <a
              href="https://shiftrwa.xyz/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan font-medium text-[15px] hover:underline"
            >
              Read the technical brief →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ReservesCompliance;
