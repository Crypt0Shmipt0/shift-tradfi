const APP_URL = "https://app.shiftrwa.xyz";

export function Hero() {
  return (
    <section className="relative bg-black overflow-hidden" style={{ paddingTop: 148 }}>
      {/* Video background behind everything */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.7 }}
      >
        <source src="/visuals/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content over video */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-[128px] text-center" style={{ paddingTop: 200, paddingBottom: 120 }}>
        <h1 className="font-[var(--font-grotesk)] font-medium leading-[1.05] mb-6" style={{ fontSize: 96, letterSpacing: "-1.92px" }}>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>The home of tokenized</span>
          <br />
          <span className="text-white">Leveraged Stocks</span>
        </h1>
        <p
          className="font-[var(--font-inter)] font-normal uppercase mb-10"
          style={{ fontSize: 20, letterSpacing: "2px", color: "rgba(255,255,255,0.8)" }}
        >
          ALL THE LEVERAGE OF PERPS, WITHOUT THE RISKS OF LIQUIDATIONS
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white text-black font-[var(--font-inter)] font-medium transition-colors hover:bg-white/90"
            style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-white/30 text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-white/10"
            style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom gradient fade to white (next section) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
