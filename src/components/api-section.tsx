import Image from "next/image";

export function ApiSection() {
  return (
    <section id="api" className="bg-white py-16 md:py-20" aria-label="API integration">
      <div className="mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left copy */}
          <div className="flex-1">
            <h2
              className="font-[var(--font-grotesk)] font-medium text-[#021c24] leading-tight mb-4 tracking-[-0.96px]"
              style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              One API
              <br />
              <span className="text-gray-text">Hundreds of stocks</span>
            </h2>
            <p
              className="font-[var(--font-inter)] font-normal text-gray-text mb-8 text-lg max-w-[500px]"
            >
              Integrate tokenized equity issuance and trading directly into your
              application via a single unified API.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-lg tracking-[0.36px] px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-[#021c24]/90 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2"
            >
              Read API Docs
            </a>
          </div>

          {/* Right cards */}
          <div className="w-full lg:w-[520px] shrink-0 space-y-5">
            {/* Mint/Burn card */}
            <article className="relative rounded-2xl overflow-hidden min-h-[240px] md:min-h-[280px] group">
              <Image
                src="/visuals/chart-globe.png"
                alt="Mint and Burn via API"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white mb-2 text-xl md:text-2xl"
                >
                  Mint/Burn via API
                </h3>
                <p
                  className="font-[var(--font-inter)] font-normal text-white/70 leading-relaxed text-sm max-w-[300px]"
                >
                  Seamless issuance and redemption of tokenized equities via API,
                  with deterministic flows aligned to underlying asset settlement.
                </p>
              </div>
            </article>

            {/* Trading RFQ card */}
            <article
              className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-[260px]"
              style={{
                background: "linear-gradient(135deg, #111820 0%, #0a1a2a 50%, #021c24 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  className="font-[var(--font-grotesk)] font-medium text-white mb-2 text-xl md:text-2xl"
                >
                  Trading RFQ
                </h3>
                <p
                  className="font-[var(--font-inter)] font-normal text-white/70 leading-relaxed text-sm max-w-[300px]"
                >
                  Request quotes on demand with low-latency pricing, enabling
                  precise execution in dynamic market conditions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
