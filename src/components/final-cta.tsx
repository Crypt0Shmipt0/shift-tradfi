import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="cta" className="relative bg-[#0a0a0a] text-white overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: 560 }} aria-label="Call to action">
      {/* SHIFT wordmark watermark — official brand asset (Horizontal Lockup White)
          positioned to bleed off the bottom of the section at ~140% width and low opacity,
          matching Figma node 3039:319 visual intent. */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden flex items-end justify-center" aria-hidden="true">
        <Image
          src="/visuals/cta-wordmark.png"
          alt=""
          width={3407}
          height={1120}
          sizes="(min-width: 1440px) 1800px, 125vw"
          className="w-[125%] max-w-none h-auto opacity-[0.18]"
          style={{ transform: "translateY(18%)" }}
          loading="lazy"
        />
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
