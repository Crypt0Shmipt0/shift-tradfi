import { APP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" aria-label="Hero">
      {/* Video background section - dark with video at 50% opacity */}
      <div className="relative bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Abstract financial data visualization background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        >
          <source src="/visuals/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Spacer for video area - matches Figma 810px hero image height */}
        <div className="relative z-10" style={{ height: "clamp(400px, 56.25vw, 810px)" }} />

        {/* Bottom gradient fade from video to white */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10" aria-hidden="true" />
      </div>

      {/* White text section below video - matches Figma node 3036:1403 */}
      <div className="bg-white">
        <div
          className="mx-auto text-center px-6 md:px-16 lg:px-[60px]"
          style={{ maxWidth: 1440 }}
        >
          {/* Header block: 48px gap between heading group and buttons */}
          <div className="flex flex-col items-center gap-[48px]">
            {/* Text group: 40px gap between heading and subtitle */}
            <div className="flex flex-col items-center gap-[40px] w-full">
              <h1
                className="font-[var(--font-grotesk)] font-medium leading-[1.04] tracking-[-1.92px] w-full"
                style={{ fontSize: "clamp(36px, 6.67vw, 96px)" }}
              >
                <span className="text-[#8d8d8d]">The home of tokenized</span>
                <br />
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
            <div className="flex items-center justify-center gap-[20px] flex-wrap pb-[80px]">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] rounded-full transition-all duration-200 hover:bg-black/90 hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
                style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
              >
                Launch App
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-[#edeeee] text-black font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] rounded-full transition-all duration-200 hover:bg-[#e0e1e1] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
                style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
