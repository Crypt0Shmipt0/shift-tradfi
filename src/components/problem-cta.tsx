import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function ProblemCta() {
  return (
    <section id="problem" className="bg-[#151515] px-6 md:px-16 lg:px-[120px] py-16 md:py-24" aria-label="Problem statement">
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left copy */}
          <div className="flex-1">
            <h2
              className="font-[var(--font-grotesk)] font-medium text-white leading-tight mb-6 tracking-[-0.96px]"
              style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              Liquidated by a broken price feed?
            </h2>
            <p
              className="font-[var(--font-inter)] font-medium leading-snug mb-10 text-off-white tracking-[-0.64px]"
              style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
            >
              Explore our leveraged stock tokens, designed for pricing integrity.
              Same leverage, no margin calls.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#021c24] font-[var(--font-inter)] font-medium text-xl md:text-2xl px-10 py-4 rounded-full transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
            >
              Trade Now
            </a>
          </div>

          {/* Right visual */}
          <div className="shrink-0 w-full max-w-[280px] md:max-w-[420px] aspect-square">
            <Image
              src="/visuals/broken-cube.png"
              alt="Broken price feed visualization"
              width={420}
              height={420}
              sizes="(max-width: 768px) 280px, 420px"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
