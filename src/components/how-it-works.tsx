import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

const STEPS = [
  {
    num: "01",
    title: "Prime Brokerage",
    desc: "Leveraged ETFs are acquired through regulated brokerage rails (Alpaca Markets) and held in segregated custody.",
  },
  {
    num: "02",
    title: "On-Chain Verification",
    desc: "Chainlink Proof-of-Reserves continuously verifies 1:1 backing on-chain. Tokens cannot be minted beyond verified reserves.",
  },
  {
    num: "03",
    title: "Tokenization",
    desc: "The SHIFT Solana program mints SPL Series Tokens against verified backing. Standard wallet-native assets.",
  },
  {
    num: "04",
    title: "Your Wallet",
    desc: "Trade on Jupiter 24/7. Self-custodied. No exchange account, no margin, no liquidation engine.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From prime brokers, to your Web3 wallet
          </h2>
          <p className="text-muted text-lg">
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="relative p-6 rounded-2xl border border-card-border bg-card/60 hover:border-mint/30 transition-colors group"
            >
              <div className="text-5xl font-bold text-mint/15 group-hover:text-mint/25 transition-colors mb-4 font-mono">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Flow line */}
        <div className="hidden lg:flex items-center justify-center gap-2 mb-12">
          {["Alpaca", "→", "Chainlink PoR", "→", "SHIFT Protocol", "→", "Your Wallet"].map(
            (label, i) => (
              <span
                key={i}
                className={`text-sm font-mono ${
                  label === "→" ? "text-mint" : "text-muted"
                }`}
              >
                {label}
              </span>
            ),
          )}
        </div>

        <div className="text-center">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Trade Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
