import Image from "next/image";

const APP_URL = "https://app.shiftrwa.xyz";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px]">
        <div className="text-center mb-16">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-foreground mb-4"
            style={{ fontSize: 48, letterSpacing: "-0.96px" }}
          >
            From prime brokers, to your Web3 wallet
          </h2>
          <p
            className="font-[var(--font-inter)] font-normal italic text-gray-text"
            style={{ fontSize: 20 }}
          >
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left — partner logos */}
          <div className="flex flex-col gap-4 shrink-0">
            <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5]" style={{ width: 250, height: 80 }}>
              <Image src="/partners/alpaca.png" alt="Alpaca" width={160} height={46} className="h-8 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#f5f5f5]" style={{ width: 250, height: 80 }}>
              <span className="font-[var(--font-inter)] font-semibold text-gray-text" style={{ fontSize: 16 }}>DekaBank</span>
            </div>
          </div>

          {/* Right — app mockup */}
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

        <div className="text-center mt-12">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-foreground/90"
            style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
          >
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
