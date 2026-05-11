import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-[120px]" aria-label="How it works">
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
            From prime brokers, to your Web3 wallet
          </h2>
          <p
            className="font-[var(--font-grotesk)] font-medium lowercase text-[#8d8d8d] tracking-[-0.64px] leading-[1.04] w-full"
            style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}
          >
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        {/* Partners + App mockups row */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-0 lg:px-[80px] gap-12">
          {/* Left -- partner logo cards */}
          <div className="flex flex-col gap-[40px] items-center justify-center shrink-0">
            <div
              className="flex items-center justify-center rounded-[12px] bg-[#777] w-[250px] h-[80px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/partners/alpaca.svg"
                alt="Alpaca"
                className="h-[46px] w-[160px] object-contain"
                loading="lazy"
              />
            </div>
            <div
              className="flex items-center justify-center rounded-[12px] bg-[#777] w-[250px] h-[80px]"
            >
              <span
                className="font-[var(--font-grotesk)] font-bold text-white tracking-wider uppercase text-xl md:text-[22px]"
              >
                DekaBank
              </span>
            </div>
          </div>

          {/* Right -- app mockups */}
          <div className="flex items-end shrink-0">
            <div className="relative w-[600px] lg:w-[955px] h-[340px] lg:h-[540px] mr-[-100px] lg:mr-[-224px]">
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
            className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[24px] tracking-[0.48px] px-[32px] py-[14px] rounded-full capitalize transition-all duration-200 hover:bg-black/90 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
          >
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
