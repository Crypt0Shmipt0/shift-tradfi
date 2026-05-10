import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto section-padding text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Start trading
            <br />
            <span className="bg-gradient-to-r from-mint to-accent bg-clip-text text-transparent">
              onchain equities
            </span>{" "}
            today
          </h2>
          <p className="text-muted text-lg mb-10 max-w-[500px] mx-auto">
            All you need is a Solana wallet and USDC. No application, no KYC, no waiting.
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
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-card-border text-foreground text-sm font-semibold hover:border-mint/50 hover:text-mint transition-colors"
            >
              View Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
