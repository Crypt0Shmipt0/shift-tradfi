export function ApiSection() {
  return (
    <section id="api" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-foreground">
              One API
              <br />
              <span className="text-text-light">Hundreds of stocks</span>
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-[500px]">
              Trade all your favorite stocks, and eliminate risks of margin and liquidation
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-white text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Read API Docs
            </a>
          </div>

          <div className="w-full lg:w-[520px] space-y-5 shrink-0">
            <div className="relative rounded-2xl bg-section-dark p-8 min-h-[260px] overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3">Mint/Burn via API</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-[300px]">
                Seamless issuance and redemption of tokenized equities via API, with
                deterministic flows aligned to underlying asset settlement.
              </p>
              {/* 3D globe placeholder */}
              <div className="absolute bottom-4 right-4 text-mint/10 text-6xl">◈</div>
            </div>
            <div className="relative rounded-2xl bg-section-dark p-8 min-h-[240px] overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3">Trading RFQ</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-[300px]">
                Request quotes on demand with low-latency pricing, enabling precise
                execution in dynamic market conditions.
              </p>
              {/* 3D chart placeholder */}
              <div className="absolute bottom-4 right-4 text-accent/10 text-6xl">◇</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
