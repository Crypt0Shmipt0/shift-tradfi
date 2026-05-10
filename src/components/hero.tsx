import Image from "next/image";

const APP_URL = "https://app.shiftrwa.xyz";

export function Hero() {
  return (
    <section className="relative bg-white" style={{ paddingTop: 148 }}>
      {/* Hero image — bull & bear 3D art */}
      <div className="relative w-full overflow-hidden" style={{ height: 810 }}>
        <Image
          src="/visuals/hero-bulls.png"
          alt="Bull and Bear"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Headline */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px] text-center pb-16">
        <h1 className="font-[var(--font-grotesk)] font-medium leading-[1.05] mb-6" style={{ fontSize: 96, letterSpacing: "-1.92px" }}>
          <span className="text-gray-text">The home of tokenized</span>
          <br />
          <span className="text-foreground">Leveraged Stocks</span>
        </h1>
        <p
          className="font-[var(--font-inter)] font-normal uppercase text-foreground mb-10"
          style={{ fontSize: 20, letterSpacing: "2px" }}
        >
          ALL THE LEVERAGE OF PERPS, WITHOUT THE RISKS OF LIQUIDATIONS
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-foreground/90"
            style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full bg-off-white text-foreground font-[var(--font-inter)] font-medium transition-colors hover:bg-off-white/80"
            style={{ fontSize: 18, paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
