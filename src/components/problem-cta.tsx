import Image from "next/image";
import { Reveal } from "@/lib/motion";

export function ProblemCta() {
  return (
    <section
      id="problem"
      className="bg-off-white"
      aria-label="Problem statement"
    >
      <div
        className="mx-auto flex items-center justify-center px-6 md:px-16 lg:px-[120px] py-[80px] md:py-[100px] lg:py-[120px]"
        style={{ maxWidth: 1440 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 w-full">
          {/* Left copy */}
          <Reveal className="flex flex-col gap-[40px] items-start max-w-[772px]">
            {/* Text block: 18px gap */}
            <div className="flex flex-col gap-[18px] items-start w-full">
              <h2
                className="font-[var(--font-grotesk)] font-medium text-[#021c24] leading-[1.1] tracking-[-0.96px] w-full"
                style={{ fontSize: "clamp(28px, 3.33vw, 48px)" }}
              >
                Why the next leverage cycle will be tokenized.
              </h2>
              <p
                className="font-[var(--font-inter)] font-medium leading-normal text-[#021c24]/70 tracking-[-0.36px] w-full max-w-[680px]"
                style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
              >
                Onchain settlement, broker-dealer custody, and Chainlink-attested reserves — built so leveraged equity exposure can finally live in a wallet without the fragility of perp DEX architecture.
              </p>
            </div>

            {/* CTA button — dark pill on light card */}
            <a
              href="https://shiftrwa.xyz/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] rounded-full transition-colors duration-200 hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
              style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
            >
              Read the brief
            </a>
          </Reveal>

          {/* Right visual: framed jar with broken chart + warning — thematically matches headline */}
          <Reveal delay={0.15} className="shrink-0 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/visuals/broken-feed-warning.webp"
              alt="Liquidation warning — broken price feed visualization"
              width={420}
              height={420}
              sizes="(max-width: 768px) 280px, 420px"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
