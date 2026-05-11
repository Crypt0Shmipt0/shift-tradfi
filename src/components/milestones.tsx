import Image from "next/image";

// Single-line numeral (prefix + value baseline-locked), tighter laurels, secondary label
const STATS: { prefix: string; value: string; label: string; sub?: string }[] = [
  { prefix: "+$", value: "37m", label: "TVL (AUM)" },
  { prefix: "#", value: "3", label: "RWA Issuer", sub: "for retail" },
  { prefix: "", value: "+120", label: "Investors", sub: "Private Sale" },
];

export function Milestones() {
  return (
    <section
      id="milestones"
      className="relative bg-white overflow-hidden"
      aria-label="Key milestones"
    >
      <div
        className="mx-auto px-6 md:px-16 lg:px-[60px] py-[80px] md:py-[100px] lg:py-[120px]"
        style={{ maxWidth: 1440 }}
      >
        <div className="flex items-center justify-center flex-wrap gap-[24px] md:gap-[40px]">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-[4px] w-[211px]">
              {/* Left laurel — tightened proportions */}
              <div className="relative w-[28px] h-[88px] shrink-0">
                <Image
                  src="/visuals/laurel.png"
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Stat content — unified numeral baseline */}
              <div className="flex flex-col items-center justify-center text-[#021c24] whitespace-nowrap">
                <div className="font-[var(--font-inter)] font-light text-[40px] md:text-[48px] leading-none tracking-tight">
                  {s.prefix}{s.value}
                </div>
                <div className="font-[var(--font-inter)] font-normal text-[15px] md:text-[16px] text-[#6b7280] leading-[1.4] mt-2">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="font-[var(--font-inter)] font-normal text-[12px] text-[#6b7280] leading-[1.4]">
                    {s.sub}
                  </div>
                )}
              </div>

              {/* Right laurel (mirrored) */}
              <div className="relative w-[28px] h-[88px] shrink-0 -scale-x-100">
                <Image
                  src="/visuals/laurel.png"
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
