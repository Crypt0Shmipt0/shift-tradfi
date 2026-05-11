"use client";

import { useRef } from "react";
import Image from "next/image";
import { APP_URL } from "@/lib/constants";
import { useVideoResume } from "@/lib/use-video-resume";

// Stats embedded in hero per Figma node 3036:1403 — they were factored
// into a standalone Milestones section by mistake; restore to the Hero.
const STATS: { prefix: string; value: string; label: string; sub?: string }[] = [
  { prefix: "+$", value: "37m", label: "TVL (AUM)" },
  { prefix: "#", value: "3", label: "RWA Issuer", sub: "for retail" },
  { prefix: "", value: "+120", label: "Investors", sub: "Private Sale" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useVideoResume(videoRef);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[640px] md:min-h-[780px] overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Layer A — video background at 60% opacity per Tomer's spec */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/visuals/hero-poster.jpg"
        aria-label="Abstract financial data visualization background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60"
      >
        <source src="/visuals/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Layer B — subtle white wash for headline contrast */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-white/45 via-white/35 to-white/25"
        aria-hidden="true"
      />

      {/* Layer C — text content. pt-[140px] clears the fixed 124px nav. */}
      <div
        className="relative z-20 mx-auto flex flex-col items-center gap-[32px] md:gap-[44px] pt-[140px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[180px] lg:pb-[100px] px-6 md:px-16 lg:px-[60px]"
        style={{ maxWidth: 1440 }}
      >
        {/* Heading + subtitle */}
        <div className="flex flex-col items-center gap-[20px] md:gap-[32px] w-full text-center">
          <h1
            className="flex flex-col items-center font-[var(--font-grotesk)] font-medium leading-[1.04] tracking-[-0.04em] text-center max-w-[900px] mx-auto"
            style={{ fontSize: "clamp(28px, 6.2vw, 88px)" }}
          >
            <span className="text-[#8d8d8d]">The Home of Tokenized</span>
            <span className="text-[#021c24]">Leveraged Stocks</span>
          </h1>

          <p
            className="font-[var(--font-inter)] font-normal leading-[1.4] text-[#021c24] tracking-[0.12em] md:tracking-[2px] uppercase max-w-[640px]"
            style={{ fontSize: "clamp(11px, 1.25vw, 18px)" }}
          >
            Leverage without liquidation. Equities without market hours.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-[16px] md:gap-[20px] flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[16px] md:text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center bg-[#edeeee] text-[#021c24] font-[var(--font-inter)] font-medium text-[16px] md:text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-[#e0e1e1] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
          >
            Learn More
          </a>
        </div>

        {/* Stat trio — stacks vertically <640px (each stat gets own row),
            3-up at sm+. Laurels sized SHORTER than content stack so they
            bracket cleanly without dominating or merging across stats. */}
        <div
          className="flex flex-col sm:grid sm:grid-cols-3 items-center justify-items-center gap-y-[18px] gap-x-[clamp(16px,4vw,64px)] pt-[12px] md:pt-[24px] w-full max-w-[860px]"
          role="list"
          aria-label="Key milestones"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              role="listitem"
              className="flex items-center justify-center gap-[6px] md:gap-[10px]"
            >
              {/* Left laurel — shorter than stat content so it brackets cleanly */}
              <div className="relative w-[26px] h-[60px] md:w-[32px] md:h-[72px] shrink-0">
                <Image
                  src="/visuals/laurel.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 26px, 32px"
                  className="object-contain"
                  style={{ filter: "brightness(0)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Stat content — bold per Tomer */}
              <div className="flex flex-col items-center justify-center text-[#021c24] whitespace-nowrap px-1">
                <div className="font-[var(--font-inter)] font-bold leading-none tracking-tight">
                  <span className="text-[20px] md:text-[24px]">{s.prefix}</span>
                  <span className="text-[32px] md:text-[40px]">{s.value}</span>
                </div>
                <div className="font-[var(--font-inter)] font-semibold text-[13px] md:text-[15px] text-[#021c24] leading-[1.35] mt-1.5">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="font-[var(--font-inter)] font-medium text-[11px] md:text-[12px] text-[#6b7280] leading-[1.35]">
                    {s.sub}
                  </div>
                )}
              </div>

              {/* Right laurel (mirrored) */}
              <div className="relative w-[26px] h-[60px] md:w-[32px] md:h-[72px] shrink-0 -scale-x-100">
                <Image
                  src="/visuals/laurel.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 26px, 32px"
                  className="object-contain"
                  style={{ filter: "brightness(0)" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
