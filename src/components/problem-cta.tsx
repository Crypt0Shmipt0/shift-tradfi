import Image from "next/image";
import { APP_URL } from "@/lib/constants";

export function ProblemCta() {
  return (
    <section
      id="problem"
      className="bg-[#151515]"
      aria-label="Problem statement"
    >
      <div
        className="mx-auto flex items-center justify-center px-6 md:px-16 lg:px-[120px] py-[40px]"
        style={{ maxWidth: 1440 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          {/* Left copy */}
          <div className="flex flex-col gap-[40px] items-start max-w-[772px]">
            {/* Text block: 18px gap */}
            <div className="flex flex-col gap-[18px] items-start w-full">
              <h2
                className="font-[var(--font-grotesk)] font-medium text-white leading-[1.1] tracking-[-0.96px] w-full"
                style={{ fontSize: "clamp(28px, 3.33vw, 48px)" }}
              >
                Liquidated by a broken price feed?
              </h2>
              <p
                className="font-[var(--font-inter)] font-medium leading-normal text-[#edeeee] tracking-[-0.64px] w-full"
                style={{ fontSize: "clamp(20px, 2.22vw, 32px)" }}
              >
                Explore our leveraged stocks tokens, designed for price integrity and low liquidation risk, with up to 300% Leverage.
              </p>
            </div>

            {/* CTA button */}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-[var(--font-inter)] font-medium text-[24px] tracking-[0.48px] rounded-full transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
              style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
            >
              Trade Now
            </a>
          </div>

          {/* Right visual: 420x420 */}
          <div className="shrink-0 w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
            <Image
              src="/visuals/broken-cube.png"
              alt="Broken price feed visualization"
              width={420}
              height={420}
              sizes="(max-width: 768px) 280px, 420px"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
