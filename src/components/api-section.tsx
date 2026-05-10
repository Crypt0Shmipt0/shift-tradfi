import { Code, Zap } from "lucide-react";

const CARDS = [
  {
    icon: Code,
    title: "Mint / Burn via API",
    desc: "Seamless issuance and redemption of tokenized equities via API, with deterministic flows aligned to underlying asset settlement.",
  },
  {
    icon: Zap,
    title: "Trading RFQ",
    desc: "Request quotes on demand with low-latency pricing, enabling precise execution in dynamic market conditions.",
  },
];

export function ApiSection() {
  return (
    <section id="api" className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              One API
              <br />
              <span className="text-muted">Hundreds of stocks</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-[500px]">
              Integrate leveraged tokenized equities into your platform. Programmatic
              mint, burn, and RFQ endpoints for institutional-grade access.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Read API Docs
            </a>
          </div>

          <div className="w-full lg:w-[520px] space-y-5 shrink-0">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl border border-card-border bg-card/60 hover:border-mint/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
                    <c.icon className="h-5 w-5 text-mint" />
                  </div>
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
