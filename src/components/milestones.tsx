import Image from "next/image";

const STATS = [
  { prefix: "+$", value: "37m", label: "TVL", sub: "(AUM)" },
  { prefix: "#", value: "3", label: "RWA Issuer", sub: "for retail" },
  { prefix: "+", value: "120", label: "Investors", sub: "Private Sale" },
];

export function Milestones() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto" style={{ paddingLeft: 60, paddingRight: 60 }}>
        <div className="flex items-center justify-center py-16" style={{ gap: 40 }}>
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <Image src="/visuals/laurel-left.png" alt="" width={36} height={120} className="w-auto" style={{ height: 120 }} aria-hidden />
              <div className="text-center">
                <div className="font-[var(--font-inter)] font-light text-foreground tabular-nums">
                  <span style={{ fontSize: 24 }}>{s.prefix}</span>
                  <span style={{ fontSize: 32 }}>{s.value}</span>
                </div>
                <div className="font-[var(--font-inter)] font-normal text-foreground" style={{ fontSize: 18 }}>{s.label}</div>
                {s.sub && <div className="font-[var(--font-inter)] font-normal text-foreground" style={{ fontSize: 12 }}>{s.sub}</div>}
              </div>
              <Image src="/visuals/laurel-right.png" alt="" width={36} height={120} className="w-auto" style={{ height: 120 }} aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
