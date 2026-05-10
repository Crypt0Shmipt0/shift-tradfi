import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function Hero() {
  return (
    <section className="relative pt-[72px]">
      {/* Hero image area — dark gradient placeholder for bull/bear 3D art */}
      <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-gradient-to-b from-[#0a1a22] via-[#071520] to-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(38,200,184,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Placeholder for bull/bear 3D illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted/30 text-sm font-mono">
            [Bull &amp; Bear 3D Illustration]
          </div>
        </div>
      </div>

      {/* Headline overlay */}
      <div className="max-w-[1440px] mx-auto section-padding -mt-[200px] relative z-10 text-center pb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          The home of tokenized
          <br />
          <span className="bg-gradient-to-r from-mint to-accent bg-clip-text text-transparent">
            Leveraged Stocks
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-[700px] mx-auto mb-10">
          Trade tokenized stocks and leveraged equity tokens 24/7 — non-liquidatable,
          fully backed, and composable across DeFi.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Launch App
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-card-border text-foreground text-sm font-semibold hover:border-mint/50 hover:text-mint transition-colors"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
