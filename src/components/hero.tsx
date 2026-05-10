import { APP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative bg-black overflow-hidden" style={{ paddingTop: 148 }}>
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="Abstract financial data visualization background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.5 }}
      >
        <source src="/visuals/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div
        className="relative z-10 mx-auto text-center px-6 md:px-16 lg:px-[128px]"
        style={{ maxWidth: 1440, paddingTop: 200, paddingBottom: 120 }}
      >
        <h1
          className="font-[var(--font-grotesk)] font-medium leading-[1.05] mb-6"
          style={{ fontSize: "clamp(36px, 8vw, 96px)", letterSpacing: "-1.92px" }}
        >
          <span style={{ color: "rgba(255,255,255,0.6)" }}>The home of tokenized</span>
          <br />
          <span className="text-white">Leveraged Stocks</span>
        </h1>

        <p
          className="font-[var(--font-inter)] font-normal uppercase mb-10"
          style={{ fontSize: "clamp(14px, 2vw, 20px)", letterSpacing: "2px", color: "rgba(255,255,255,0.8)" }}
        >
          ALL THE LEVERAGE OF PERPS, WITHOUT THE RISKS OF LIQUIDATIONS
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black font-[var(--font-inter)] font-medium transition-colors hover:bg-white/90"
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
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center border border-white/30 text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-white/10"
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
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
