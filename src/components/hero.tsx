import Image from "next/image";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function Hero() {
  return (
    <section className="relative pt-[72px] bg-white">
      {/* Hero image — bull & bear 3D art */}
      <div className="relative w-full h-[450px] md:h-[650px] overflow-hidden">
        <Image
          src="/visuals/hero-bulls.png"
          alt="Bull and Bear"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
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
