import Image from "next/image";

// Figma 3015:1275: TVL and RWA Issuer use mixed prefix (24px) + value (32px);
// Investors renders "+120" as uniform 32px (no smaller prefix glyph).
const STATS: { prefix: string; value: string; label: string; sub?: string }[] = [
  { prefix: "+$", value: "37m", label: "TVL (AUM)" },
  { prefix: "#", value: "3", label: "RWA Issuer", sub: "for retail" },
  { prefix: "", value: "+120", label: "Investors", sub: "Private Sale" },
];

export function Milestones() {
  return (
    <section id="milestones" className="bg-white" aria-label="Key milestones">
      <div
        className="mx-auto px-6 md:px-16 lg:px-[60px]"
        style={{ maxWidth: 1440 }}
      >
        <div className="flex items-center justify-center flex-wrap gap-[40px]">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-[6px] w-[211px]">
              {/* Left laurel */}
              <div className="relative w-[36px] h-[120px] shrink-0">
                <Image
                  src="/visuals/laurel.png"
                  alt=""
                  fill
                  sizes="36px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Stat content */}
              <div className="flex flex-col items-center justify-center text-[#021c24] whitespace-nowrap">
                <div className="font-[var(--font-inter)] font-light">
                  <span className="text-[24px] leading-normal">{s.prefix}</span>
                  <span className="text-[32px] leading-normal">{s.value}</span>
                </div>
                <div className="font-[var(--font-inter)] font-normal text-[18px] leading-[1.53]">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="font-[var(--font-inter)] font-normal text-[12px] leading-[1.53]">
                    {s.sub}
                  </div>
                )}
              </div>

              {/* Right laurel (flipped) */}
              <div className="relative w-[36px] h-[120px] shrink-0 -scale-x-100">
                <Image
                  src="/visuals/laurel.png"
                  alt=""
                  fill
                  sizes="36px"
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
