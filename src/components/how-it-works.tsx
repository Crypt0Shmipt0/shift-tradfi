import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div
        className="mx-auto px-6 md:px-16 lg:px-[128px]"
        style={{ maxWidth: 1440 }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-[#021c24] mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
          >
            From prime brokers, to your Web3 wallet
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal italic text-[#9ca3af]"
            style={{ fontSize: 20 }}
          >
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left -- partner logo cards */}
          <div className="flex flex-col gap-4 shrink-0">
            <div
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5]"
              style={{ width: 250, height: 80 }}
            >
              <img
                src="/partners/alpaca.svg"
                alt="Alpaca"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5]"
              style={{ width: 250, height: 80 }}
            >
              <span
                className="font-[var(--font-grotesk)] font-bold text-[#5a5a5a] tracking-wider uppercase"
                style={{ fontSize: 22 }}
              >
                DekaBank
              </span>
            </div>
          </div>

          {/* Right -- app mockups */}
          <div className="flex-1 relative">
            <div className="relative w-full" style={{ height: 500 }}>
              <Image
                src="/visuals/app-desktop.png"
                alt="SHIFT trading app on desktop"
                fill
                className="object-contain object-center"
              />
              <div className="absolute right-4 bottom-0" style={{ width: 160, height: 330 }}>
                <Image
                  src="/visuals/app-phone.png"
                  alt="SHIFT trading app on mobile"
                  fill
                  className="object-contain"
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
            className="inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-[#021c24]/90"
            style={{
              fontSize: 18,
              letterSpacing: "0.36px",
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 14,
              paddingBottom: 14,
              borderRadius: 100,
            }}
          >
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
