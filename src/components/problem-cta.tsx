import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function ProblemCta() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Liquidated by a broken
              <br />
              <span className="text-danger">price feed?</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-[600px]">
              Explore our leveraged stock tokens, designed for pricing integrity.
              Same leverage, no margin calls. Up to 3× exposure on major equities
              without the risk of forced liquidation.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Trade Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          {/* 3D visual placeholder */}
          <div className="w-full lg:w-[420px] h-[420px] rounded-3xl bg-card border border-card-border flex items-center justify-center shrink-0">
            <span className="text-muted/30 text-sm font-mono">[3D Visual]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
