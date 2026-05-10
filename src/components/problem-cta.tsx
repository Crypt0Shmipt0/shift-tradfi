import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function ProblemCta() {
  return (
    <section className="bg-[#151515] px-6 md:px-16 lg:px-[120px]" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left copy */}
          <div className="flex-1">
            <h2
              className="font-[var(--font-grotesk)] font-medium text-white leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.96px" }}
            >
              Liquidated by a broken price feed?
            </h2>
            <p
              className="font-[var(--font-inter)] font-medium leading-snug mb-10"
              style={{ fontSize: "clamp(16px, 2.5vw, 20px)", letterSpacing: "-0.64px", color: "#edeeee" }}
            >
              Explore our leveraged stock tokens, designed for pricing integrity.
              Same leverage, no margin calls.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#021c24] font-[var(--font-inter)] font-medium transition-colors hover:bg-white/90"
              style={{ fontSize: 24, paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, borderRadius: 100 }}
            >
              Trade Now
            </a>
          </div>

          {/* Right visual */}
          <div className="shrink-0 w-full max-w-[420px] aspect-square">
            <Image
              src="/visuals/broken-cube.png"
              alt="Broken price feed visualization"
              width={420}
              height={420}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
