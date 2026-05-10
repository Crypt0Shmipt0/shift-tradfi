import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-20" aria-label="How it works">
      <div
        className="mx-auto px-6 md:px-16 lg:px-[128px]"
        style={{ maxWidth: 1440 }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-[#021c24] mb-4 tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            From prime brokers, to your Web3 wallet
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal italic text-gray-text text-lg md:text-xl"
          >
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left -- partner logo cards */}
          <div className="flex flex-col gap-4 shrink-0">
            <div
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5] w-full sm:w-[250px] h-20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/partners/alpaca.svg"
                alt="Alpaca"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5] w-full sm:w-[250px] h-20"
            >
              <span
                className="font-[var(--font-grotesk)] font-bold text-[#5a5a5a] tracking-wider uppercase text-xl md:text-[22px]"
              >
                DekaBank
              </span>
            </div>
          </div>

          {/* Right -- app mockups */}
          <div className="flex-1 relative">
            <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
              <Image
                src="/visuals/app-desktop.png"
                alt="SHIFT trading app on desktop"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center"
                loading="lazy"
              />
              <div className="absolute right-2 md:right-4 bottom-0 w-20 h-40 sm:w-28 sm:h-56 md:w-40 md:h-[330px]">
                <Image
                  src="/visuals/app-phone.png"
                  alt="SHIFT trading app on mobile"
                  fill
                  sizes="160px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-lg tracking-[0.36px] px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-[#021c24]/90 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
          >
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
