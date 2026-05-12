import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";

type FaqEntry = {
  q: string;
  a: string;
};

const FAQ_ENTRIES: FaqEntry[] = [
  {
    q: "How can leverage exist with zero liquidation risk?",
    a: "SHIFT positions are SPL tokens on Solana, not collateralized margin positions. There is literally no liquidation engine in the protocol. No oracle dependency for liquidations — you can never lose more than you put in, and you can never be force-closed at the bottom of a wick.",
  },
  {
    q: "Who audits the reserves?",
    a: "EY (Cyprus) — a Big-Four firm — provides independent audit of reserve attestations and protocol financials, paired with on-chain Chainlink Proof-of-Reserves for real-time verifiability.",
  },
  {
    q: "What does bi-directional mean?",
    a: "Every market has both a long and an inverse side. TSL2L is 2× Tesla upside; TSL1S is the corresponding short. No margin account, no borrowing — just trade between two SPL tokens in your wallet.",
  },
  {
    q: "Is SHIFT custodial? Do I need to KYC?",
    a: "No to both. SHIFT is fully non-custodial — your wallet, your keys, your tokens. We don't run KYC because we never take custody. Restricted geographies are blocked at the interface level.",
  },
  {
    q: "What's the regulatory framework?",
    a: "Live leveraged series tokens are issued as Marshall Islands LLC membership interests under the DAO Act — restricted to qualified/professional investors. The spot pipeline is structured as Asset-Referenced Tokens (ARTs) under EU MiCAR, with DekaBank custody and Austrian Tier-1 legal counsel.",
  },
  {
    q: "What fees do you charge?",
    a: "0.10% protocol fee per trade. Network gas in SOL (fractions of a cent). Rewards-badge holders get up to 50% fee rebates.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-white py-[80px] md:py-[100px] lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[920px] px-6 md:px-8 lg:px-10">
        <Reveal className="flex flex-col gap-[18px]">
          <span className="font-mono uppercase tracking-wider text-cyan text-[12px]">
            FAQ
          </span>
          <h2
            className="font-grotesk font-medium tracking-tight text-[#021c24]"
            style={{ fontSize: "clamp(28px, 4.2vw, 48px)", lineHeight: 1.08 }}
          >
            Questions institutions ask first
          </h2>
          <p
            className="text-[#6b7280] max-w-[680px]"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.5 }}
          >
            How the protocol actually works — and what&apos;s audited,
            custodied, and regulated.
          </p>
        </Reveal>

        <RevealStagger
          staggerChildren={0.06}
          className="mt-[48px] md:mt-[64px] flex flex-col gap-4"
        >
          {FAQ_ENTRIES.map(({ q, a }) => (
            <RevealItem key={q}>
              <details className="group rounded-2xl border border-black/[0.06] bg-white open:bg-[#f9fafb] transition-colors">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 md:px-7 md:py-6">
                  <span className="font-grotesk font-medium text-[18px] md:text-[20px] text-[#021c24] flex-1">
                    {q}
                  </span>
                  <svg
                    className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0BB4D4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-6 md:px-7 pb-5 md:pb-6 -mt-1">
                  <p className="text-[15px] md:text-[16px] leading-[1.55] text-[#6b7280] max-w-[760px]">
                    {a}
                  </p>
                </div>
              </details>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

export default Faq;
