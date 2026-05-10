const STATS = [
  { prefix: "+$", value: "37m", label: "TVL", sub: "(AUM)" },
  { prefix: "#", value: "3", label: "RWA Issuer", sub: "for retail" },
  { prefix: "+", value: "120", label: "Investors", sub: "Private Sale" },
] as const;

/* Simple SVG laurel branch */
function Laurel({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="36"
      height="120"
      viewBox="0 0 36 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={flip ? "scale-x-[-1]" : undefined}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M18 10 Q18 60 18 110" stroke="#021c24" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Leaves */}
      {[20, 35, 50, 65, 80].map((y) => (
        <ellipse
          key={y}
          cx="10"
          cy={y}
          rx="9"
          ry="5.5"
          fill="none"
          stroke="#021c24"
          strokeWidth="1.5"
          opacity="0.45"
          transform={`rotate(-20 10 ${y})`}
        />
      ))}
    </svg>
  );
}

export function Milestones() {
  return (
    <section id="milestones" className="bg-white" aria-label="Key milestones">
      <div className="mx-auto px-6 md:px-16 lg:px-[60px] py-16" style={{ maxWidth: 1440 }}>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <Laurel />
              <div className="text-center">
                <div className="font-[var(--font-inter)] font-light text-[#021c24] tabular-nums">
                  <span className="text-2xl">{s.prefix}</span>
                  <span style={{ fontSize: "clamp(20px, 3.5vw, 32px)" }}>{s.value}</span>
                </div>
                <div className="font-[var(--font-inter)] font-normal text-[#021c24] text-lg">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="font-[var(--font-inter)] font-normal text-[#021c24] text-xs">
                    {s.sub}
                  </div>
                )}
              </div>
              <Laurel flip />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
