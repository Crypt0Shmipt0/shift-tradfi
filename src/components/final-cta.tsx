import Image from "next/image";
import { APP_URL, BOOK_CALL_URL } from "@/lib/constants";
import { Reveal, Magnetic } from "@/lib/motion";

export function FinalCta() {
  return (
    <section id="cta" className="relative bg-dark-bg text-white overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[100px]" style={{ minHeight: "clamp(420px, 50vh, 560px)" }} aria-label="Call to action">
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
      <Reveal className="relative z-10 flex flex-col gap-10 items-center justify-center text-center px-6 md:px-16 w-full max-w-[720px]">
        <div className="flex flex-col gap-[18px] items-center w-full">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white leading-[1.1] tracking-[-0.96px] text-[32px] md:text-[48px] w-full"
          >
            Start trading now
          </h2>
          <p
            className="font-[var(--font-inter)] font-medium text-[#a8a8a8] leading-normal lowercase tracking-[-0.36px] w-full"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
          >
            tokenized equities. 24/7 markets. zero liquidations.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Magnetic strength={0.2}>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#021c24] font-[var(--font-inter)] font-medium text-[18px] capitalize tracking-[0.36px] px-8 py-[14px] rounded-full transition-colors duration-200 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Launch App
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cyan text-white font-[var(--font-inter)] font-medium text-[18px] capitalize tracking-[0.36px] px-8 py-[14px] rounded-full transition-colors duration-200 hover:bg-cyan-deep focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book a Call
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
