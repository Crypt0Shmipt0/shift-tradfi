import Image from "next/image";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function ProblemCta() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
              Liquidated by a broken
              <br />
              <span className="text-danger">price feed?</span>
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-8 max-w-[600px]">
              Explore our leveraged stock tokens, designed for pricing integrity.
              Same leverage, no margin calls. Up to 3× exposure on major equities
              without the risk of forced liquidation.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-white text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Trade Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="w-full lg:w-[420px] h-[420px] rounded-3xl bg-section-dark shrink-0 overflow-hidden relative">
            <Image
              src="/visuals/3d-broken-cube.png"
              alt="Broken price feed visualization"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
