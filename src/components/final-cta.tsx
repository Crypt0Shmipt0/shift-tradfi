import { APP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="cta" className="relative bg-black text-white overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: 560 }} aria-label="Call to action">
      {/* SHIFT wordmark watermark — CSS-rendered to match Figma node 3039:319 bg layer.
          Figma's exported image asset comes back empty from the MCP, so we render the wordmark
          directly as oversized text positioned to bleed off the bottom. */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="block font-[var(--font-grotesk)] font-bold text-white/[0.08] tracking-[-0.04em] whitespace-nowrap text-center"
          style={{ fontSize: "clamp(220px, 32vw, 460px)", lineHeight: "0.78", transform: "translateY(15%)" }}
        >
          SHIFT
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10 items-center justify-center text-center px-6 md:px-16 w-full max-w-[720px]">
        <div className="flex flex-col gap-[18px] items-center w-full">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white leading-[1.1] tracking-[-0.96px] text-[32px] md:text-[48px] w-full"
          >
            Start trading now
          </h2>
          <p
            className="font-[var(--font-inter)] font-medium text-[#8d8d8d] leading-normal lowercase tracking-[-0.64px] text-[20px] md:text-[32px] w-full"
          >
            Access tokenized stocks with 24/7 markets, transparency, and capital efficiency.
          </p>
        </div>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-black font-[var(--font-inter)] font-medium text-[20px] md:text-[24px] capitalize tracking-[0.48px] px-8 py-[14px] rounded-full transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Trade Now
        </a>
      </div>
    </section>
  );
}
