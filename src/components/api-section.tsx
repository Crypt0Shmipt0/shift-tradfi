import Image from "next/image";

export function ApiSection() {
  return (
    <section id="api" className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto" style={{ maxWidth: 1440, paddingLeft: 128, paddingRight: 128 }}>
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left copy */}
          <div className="flex-1">
            <h2
              className="font-[var(--font-grotesk)] font-medium text-[#021c24] leading-tight mb-4"
              style={{ fontSize: 48, letterSpacing: "-0.96px" }}
            >
              One API
              <br />
              <span className="text-[#8d8d8d]">Hundreds of stocks</span>
            </h2>
            <p
              className="font-[var(--font-inter)] font-normal text-[#8d8d8d] mb-8"
              style={{ fontSize: 18, maxWidth: 500 }}
            >
              Integrate tokenized equity issuance and trading directly into your
              application via a single unified API.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-[#021c24]/90"
              style={{
                fontSize: 18,
                letterSpacing: "0.36px",
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 14,
                paddingBottom: 14,
                borderRadius: 100,
              }}
            >
              Read API Docs
            </a>
          </div>

          {/* Right cards */}
          <div className="w-full lg:w-[520px] shrink-0 space-y-5">
            {/* Mint/Burn card */}
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 280 }}>
              <Image
                src="/visuals/chart-globe.png"
                alt="Mint and Burn via API"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white mb-2"
                  style={{ fontSize: 24 }}
                >
                  Mint/Burn via API
                </h3>
                <p
                  className="font-[var(--font-inter)] font-normal text-white/70 leading-relaxed"
                  style={{ fontSize: 14, maxWidth: 300 }}
                >
                  Seamless issuance and redemption of tokenized equities via API,
                  with deterministic flows aligned to underlying asset settlement.
                </p>
              </div>
            </div>

            {/* Trading RFQ card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                minHeight: 260,
                background: "linear-gradient(135deg, #111820 0%, #0a1a2a 50%, #021c24 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white mb-2"
                  style={{ fontSize: 24 }}
                >
                  Trading RFQ
                </h3>
                <p
                  className="font-[var(--font-inter)] font-normal text-white/70 leading-relaxed"
                  style={{ fontSize: 14, maxWidth: 300 }}
                >
                  Request quotes on demand with low-latency pricing, enabling
                  precise execution in dynamic market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
