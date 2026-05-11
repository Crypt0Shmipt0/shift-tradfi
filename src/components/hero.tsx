"use client";

import { useRef } from "react";
import { APP_URL } from "@/lib/constants";
import { useVideoResume } from "@/lib/use-video-resume";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useVideoResume(videoRef);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[720px] overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Layer A — video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/visuals/hero-poster.jpg"
        aria-label="Abstract financial data visualization background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/visuals/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Layer B — gradient scrim for WCAG AA contrast on headline */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/75 via-white/55 to-white/45" aria-hidden="true" />

      {/* Layer C — text content */}
      <div
        className="relative z-20 mx-auto flex flex-col items-center gap-[48px] py-[120px] px-6 md:px-16 lg:px-[60px]"
        style={{ maxWidth: 1440 }}
      >
        {/* Text group: 40px gap between heading and subtitle */}
        <div className="flex flex-col items-center gap-[40px] w-full text-center">
          <h1
            className="flex flex-col items-center font-[var(--font-grotesk)] font-medium leading-[1.04] tracking-[-1.92px] text-center max-w-[900px] mx-auto"
            style={{ fontSize: "clamp(36px, 6.67vw, 96px)" }}
          >
            <span className="text-[#8d8d8d]">The home of tokenized</span>
            <span className="text-[#021c24]">Leveraged Stocks</span>
          </h1>

          <p
            className="font-[var(--font-inter)] font-normal leading-[1.1] text-[#021c24] tracking-[2px] uppercase"
            style={{ fontSize: "clamp(14px, 1.39vw, 20px)" }}
          >
            All the leverage of perps, without the RISKs of LIQUIDATIONs
          </p>
        </div>

        {/* Action buttons: 20px gap */}
        <div className="flex items-center justify-center gap-[20px] flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center bg-[#edeeee] text-[#021c24] font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-[#e0e1e1] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
