const STATS = [
  { value: "+$37m", label: "TVL (AUM)" },
  { value: "#3", label: "RWA Issuer", sub: "for retail" },
  { value: "+120", label: "Investors", sub: "Private Sale" },
];

function Laurel({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="28" height="60" viewBox="0 0 28 60" fill="none"
      className={`text-gray-300 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden
    >
      <path d="M14 5c-4 8-10 16-12 30 4-6 8-10 12-14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M14 15c-3 6-7 12-9 24 3-5 6-9 9-12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M14 25c-2 5-5 10-6 20 2-4 4-8 6-10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function Milestones() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="flex items-center justify-center gap-12 md:gap-20 py-12">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <Laurel />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                  {s.value}
                </div>
                <div className="text-sm text-text-light mt-1">{s.label}</div>
                {s.sub && <div className="text-xs text-text-light/60">{s.sub}</div>}
              </div>
              <Laurel flip />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
