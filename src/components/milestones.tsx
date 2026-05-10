import Image from "next/image";

const STATS = [
  { value: "+$37m", label: "TVL (AUM)" },
  { value: "#3", label: "RWA Issuer", sub: "for retail" },
  { value: "+120", label: "Investors", sub: "Private Sale" },
];

export function Milestones() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex items-center justify-center gap-12 md:gap-20 py-12">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <Image src="/visuals/laurel-left.png" alt="" width={36} height={120} className="h-20 w-auto" aria-hidden />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                  {s.value}
                </div>
                <div className="text-sm text-text-light mt-1">{s.label}</div>
                {s.sub && <div className="text-xs text-text-light/60">{s.sub}</div>}
              </div>
              <Image src="/visuals/laurel-right.png" alt="" width={36} height={120} className="h-20 w-auto" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
