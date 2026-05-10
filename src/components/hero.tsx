import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function Hero() {
  return (
    <section className="relative pt-[72px] bg-white">
      {/* Hero image area — gradient bg for bull/bear 3D art */}
      <div className="relative w-full h-[450px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f2a] via-[#0a1a22] to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white/20 text-sm font-mono">
            [Bull &amp; Bear 3D Illustration]
          </div>
        </div>
      </div>

      {/* Headline — white bg, dark text */}
      <div className="max-w-[1440px] mx-auto section-padding text-center pb-4">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight mb-6 text-foreground">
          The home of tokenized
          <br />
          <span className="text-[#2d3748]">Leveraged Stocks</span>
        </h1>
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-text-light mb-10">
          All the leverage of perps, without the risks of liquidations
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-white text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Launch App
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-300 text-foreground text-sm font-semibold hover:border-foreground transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
