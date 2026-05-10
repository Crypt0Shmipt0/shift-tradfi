import { APP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="relative bg-black overflow-hidden" aria-label="Hero">
      {/* Video background */}
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

      {/* Content */}
      <div
        className="relative z-10 mx-auto text-center px-6 md:px-16 lg:px-[128px] pt-48 md:pt-64 pb-24 md:pb-36"
        style={{ maxWidth: 1440 }}
      >
        <h1
          className="font-[var(--font-grotesk)] font-medium leading-[1.05] mb-6 tracking-[-1.92px]"
          style={{ fontSize: "clamp(36px, 8vw, 96px)" }}
        >
          <span className="text-white/60">The home of tokenized</span>
          <br />
          <span className="text-white">Leveraged Stocks</span>
        </h1>

        <p
          className="font-[var(--font-inter)] font-normal uppercase mb-10 text-white/80 tracking-[2px]"
          style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
        >
          ALL THE LEVERAGE OF PERPS, WITHOUT THE RISKS OF LIQUIDATIONS
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black font-[var(--font-inter)] font-medium text-lg tracking-[0.36px] px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center border border-white/30 text-white font-[var(--font-inter)] font-medium text-lg tracking-[0.36px] px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 hover:border-white/50 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom gradient fade to white (matches milestones section below) */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10" aria-hidden="true" />
    </section>
  );
}
