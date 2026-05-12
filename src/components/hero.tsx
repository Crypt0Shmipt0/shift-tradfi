"use client";

import { useRef } from "react";
import Image from "next/image";
import { APP_URL, BOOK_CALL_URL } from "@/lib/constants";
import { useVideoResume } from "@/lib/use-video-resume";
import { CountUp, Magnetic, Reveal } from "@/lib/motion";

// Stats embedded in hero per Figma node 3036:1403 — they were factored
// into a standalone Milestones section by mistake; restore to the Hero.
const STATS: {
  prefix: string;
  value: string;
  label: string;
  sub?: string;
  showCount: boolean;
  countTo?: number;
  suffix?: string;
}[] = [
  { prefix: "+$", value: "37m", label: "TVL (AUM)", showCount: true, countTo: 37, suffix: "m" },
  { prefix: "#", value: "3", label: "RWA Issuer", sub: "by AUM", showCount: false },
  { prefix: "+", value: "120", label: "Investors", sub: "Private Sale", showCount: true, countTo: 120, suffix: "" },
];

// Gold filter matrix — maps near-white laurel asset to ~#C9A961 gold tint.
const GOLD_FILTER =
  "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(515%) hue-rotate(7deg) brightness(96%) contrast(86%)";

// "Backed by" microstrip — uses existing partner logos as backers.
// EY is rendered as styled inline text (no public SVG available).
const BACKERS: Array<
  | { kind: "img"; src: string; alt: string; isPng: boolean; h: number; w?: number }
  | { kind: "text"; label: string; h: number }
> = [
  { kind: "img", src: "/partners/alpaca.svg", alt: "Alpaca", isPng: false, h: 22 },
  { kind: "img", src: "/partners/chainlink.svg", alt: "Chainlink", isPng: false, h: 22 },
  { kind: "img", src: "/partners/dekabank.png", alt: "DekaBank", isPng: true, h: 18, w: 130 },
  { kind: "img", src: "/partners/snz.png", alt: "SNZ Holdings", isPng: true, h: 30, w: 100 },
  { kind: "text", label: "EY", h: 22 },
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

      {/* Layer B+ — subtle Wall Street city silhouette behind stat trio (decorative) */}
      <div
        className="absolute inset-x-0 bottom-0 z-[5] h-[50%] opacity-[0.15] pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/visuals/city-skyline.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority={false}
        />
      </div>

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
          <Magnetic strength={0.2}>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[16px] md:text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
              style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
            >
              Launch App
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-cyan text-white font-[var(--font-inter)] font-medium text-[16px] md:text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-cyan-deep focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
              style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
            >
              Book a Call
            </a>
          </Magnetic>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center bg-[#edeeee] text-[#021c24] font-[var(--font-inter)] font-medium text-[16px] md:text-[18px] tracking-[0.36px] rounded-full transition-colors hover:bg-[#e0e1e1] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
          >
            Learn More
          </a>
        </div>

        {/* "Backed by" microstrip — sits between CTAs and stat trio */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <span className="font-[var(--font-mono)] uppercase text-[10px] md:text-[11px] tracking-[0.2em] text-[#6b7280]">
            Backed by
          </span>
          <div className="flex items-center justify-center gap-[clamp(20px,4vw,48px)] opacity-60 flex-wrap">
            {BACKERS.map((b) => {
              if (b.kind === "text") {
                return (
                  <span
                    key={b.label}
                    className="font-[var(--font-grotesk)] font-bold leading-none tracking-tight"
                    style={{
                      fontSize: `${b.h}px`,
                      letterSpacing: "-0.05em",
                      color: "#021c24",
                    }}
                  >
                    {b.label}
                  </span>
                );
              }
              return b.isPng ? (
                <Image
                  key={b.alt}
                  src={b.src}
                  alt={b.alt}
                  width={b.w!}
                  height={b.h}
                  style={{ height: `${b.h}px`, width: "auto", filter: "brightness(0)" }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={b.alt}
                  src={b.src}
                  alt={b.alt}
                  style={{ height: `${b.h}px`, width: "auto", filter: "brightness(0)" }}
                />
              );
            })}
          </div>
        </div>

        {/* Stat trio — 3-in-a-row at ALL viewports. Mobile portrait sizes
            scaled ~30% down from tablet+ so the line stays tight at 375px. */}
        <Reveal delay={0.2}>
          <div
            className="grid grid-cols-3 items-center justify-items-center gap-x-[clamp(6px,2vw,80px)] xl:gap-x-[100px] pt-[12px] md:pt-[24px] w-full max-w-[920px]"
            role="list"
            aria-label="Key milestones"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                role="listitem"
                className="flex items-center justify-center gap-[3px] sm:gap-[5px] md:gap-[10px]"
              >
                {/* Left laurel — gold-tinted */}
                <div className="relative w-[18px] h-[42px] sm:w-[26px] sm:h-[60px] md:w-[32px] md:h-[72px] shrink-0">
                  <Image
                    src="/visuals/laurel.png"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 18px, (max-width: 768px) 26px, 32px"
                    className="object-contain"
                    style={{ filter: GOLD_FILTER }}
                    aria-hidden="true"
                  />
                </div>

                {/* Stat content — JetBrains Mono bold; mobile portrait 30% smaller */}
                <div className="flex flex-col items-center justify-center text-[#021c24] whitespace-nowrap px-0.5">
                  <div className="font-[var(--font-mono)] font-bold leading-none tracking-tight">
                    <span className="text-[14px] sm:text-[20px] md:text-[24px]">{s.prefix}</span>
                    {s.showCount && s.countTo !== undefined ? (
                      <span className="text-[22px] sm:text-[32px] md:text-[40px]">
                        <CountUp to={s.countTo} />
                        {s.suffix}
                      </span>
                    ) : (
                      <span className="text-[22px] sm:text-[32px] md:text-[40px]">{s.value}</span>
                    )}
                  </div>
                  <div className="font-[var(--font-inter)] font-semibold text-[10px] sm:text-[13px] md:text-[15px] text-[#021c24] leading-[1.35] mt-1">
                    {s.label}
                  </div>
                  {s.sub && (
                    <div className="font-[var(--font-inter)] font-medium text-[9px] sm:text-[11px] md:text-[12px] text-[#6b7280] leading-[1.35]">
                      {s.sub}
                    </div>
                  )}
                </div>

                {/* Right laurel (mirrored) — gold-tinted */}
                <div className="relative w-[18px] h-[42px] sm:w-[26px] sm:h-[60px] md:w-[32px] md:h-[72px] shrink-0 -scale-x-100">
                  <Image
                    src="/visuals/laurel.png"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 18px, (max-width: 768px) 26px, 32px"
                    className="object-contain"
                    style={{ filter: GOLD_FILTER }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
