import { Clock, Shield, Zap, Eye, Puzzle, Lock } from "lucide-react";

const CARDS = [
  {
    icon: Clock,
    title: "24/7 Market Access",
    desc: "Trade equities anytime, without market-hour constraints.",
  },
  {
    icon: Shield,
    title: "Fully Backed Exposure",
    desc: "1:1 asset-backed tokens with real underlying exposure.",
  },
  {
    icon: Zap,
    title: "Embedded Leverage",
    desc: "Access leveraged positions without margin or liquidation risk.",
  },
  {
    icon: Eye,
    title: "Onchain Transparency",
    desc: "Real-time visibility into supply, flows, and asset backing.",
  },
  {
    icon: Puzzle,
    title: "DeFi Composability",
    desc: "Use tokenized equities as collateral or integrate across DeFi.",
  },
  {
    icon: Lock,
    title: "Institutional-Grade Security",
    desc: "Audited infrastructure designed for secure, compliant operation.",
  },
];

export function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Equities redesigned for Web3
          </h2>
          <p className="text-muted text-lg max-w-[700px]">
            Institutional-grade equity exposure with onchain transparency, built
            for continuous markets and capital efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex gap-5 p-6 rounded-2xl border border-card-border bg-card/40 hover:border-mint/30 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
                <c.icon className="h-5 w-5 text-mint" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
