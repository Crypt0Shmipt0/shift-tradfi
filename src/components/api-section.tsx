import Image from "next/image";

export function ApiSection() {
  return (
    <section id="api" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px]">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            <h2
              className="font-[var(--font-grotesk)] font-medium text-foreground leading-tight mb-4"
              style={{ fontSize: 48, letterSpacing: "-0.96px" }}
            >
              One API
              <br />
              <span className="text-gray-text">Hundreds of stocks</span>
            </h2>
            <p className="font-[var(--font-inter)] font-normal text-gray-text mb-8 max-w-[500px]" style={{ fontSize: 18 }}>
              Integrate tokenized equity issuance and trading directly into your application via a single unified API.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-foreground/90"
              style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
            >
              Read API Docs
            </a>
          </div>

          <div className="w-full lg:w-[520px] space-y-5 shrink-0">
            <div className="relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image
                src="/visuals/api-mint-burn.png"
                alt="Mint and Burn via API"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-[var(--font-grotesk)] font-medium text-white mb-2" style={{ fontSize: 24 }}>Mint/Burn via API</h3>
                <p className="font-[var(--font-inter)] font-normal text-white/70 leading-relaxed max-w-[300px]" style={{ fontSize: 14 }}>
                  Seamless issuance and redemption of tokenized equities via API, with
                  deterministic flows aligned to underlying asset settlement.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="/visuals/api-rfq.png"
                alt="Trading RFQ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-[var(--font-grotesk)] font-medium text-white mb-2" style={{ fontSize: 24 }}>Trading RFQ</h3>
                <p className="font-[var(--font-inter)] font-normal text-white/70 leading-relaxed max-w-[300px]" style={{ fontSize: 14 }}>
                  Request quotes on demand with low-latency pricing, enabling precise
                  execution in dynamic market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
