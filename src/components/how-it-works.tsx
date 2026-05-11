import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-[80px] md:py-[100px] lg:py-[120px]" aria-label="How it works">
      <div
        className="mx-auto px-6 md:px-16 lg:px-[128px] flex flex-col gap-[80px] items-center"
        style={{ maxWidth: 1440 }}
      >
        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center text-center w-full">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-black tracking-[-0.96px] leading-[1.1] w-full"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            From prime brokers to your Web3 wallet
          </h2>
          <p
            className="font-[var(--font-inter)] font-medium lowercase text-[#6b7280] tracking-[-0.36px] leading-normal w-full"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
          >
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        {/* Partners + App mockups row */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-0 lg:px-[80px] gap-12">
          {/* Left -- partner logo cards: light surface (#edeeee) inside light section, black logos */}
          <div className="flex flex-col gap-[40px] items-center justify-center shrink-0">
            <div
              className="flex items-center justify-center rounded-[12px] bg-[#edeeee] border border-black/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] w-[250px] h-[80px]"
            >
              <div
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
                style={{ filter: "brightness(0)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partners/alpaca.svg"
                  alt="Alpaca"
                  className="h-[46px] w-[160px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="flex items-center justify-center rounded-[12px] bg-[#edeeee] border border-black/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.6)] w-[250px] h-[80px]"
            >
              <div
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
                style={{ filter: "brightness(0)" }}
              >
                <Image
                  src="/partners/dekabank.png"
                  alt="DekaBank"
                  width={200}
                  height={28}
                  sizes="200px"
                  className="h-[28px] w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right -- app mockups */}
          <div className="flex items-end shrink-0">
            <div className="relative w-[600px] lg:w-[955px] h-[340px] lg:h-[540px] mr-0 lg:mr-[-120px] xl:mr-[-224px]">
              <Image
                src="/visuals/app-desktop.webp"
                alt="SHIFT trading app on desktop"
                fill
                sizes="(max-width: 1024px) 600px, 955px"
                className="object-contain object-center"
                loading="lazy"
              />
            </div>
            <div className="relative w-[120px] lg:w-[229px] h-[250px] lg:h-[468px]">
              <Image
                src="/visuals/app-phone.webp"
                alt="SHIFT trading app on mobile"
                fill
                sizes="(max-width: 1024px) 120px, 229px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-start">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] px-[32px] py-[14px] rounded-full capitalize transition-colors hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
          >
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
