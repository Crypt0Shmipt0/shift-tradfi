const STATS = [
  { value: "+$37m", label: "TVL (AUM)" },
  { value: "#3", label: "RWA Issuer", sub: "for retail" },
  { value: "+120", label: "Investors", sub: "Private Sale" },
];

export function Milestones() {
  return (
    <section className="max-w-[1440px] mx-auto section-padding">
      <div className="flex items-center justify-center gap-8 md:gap-16 py-10 border-y border-card-border">
        {STATS.map((s, i) => (
          <div key={i} className="flex items-center gap-6">
            {i > 0 && (
              <div className="hidden md:block w-px h-16 bg-card-border" />
            )}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                {s.value}
              </div>
              <div className="text-sm text-muted mt-1">{s.label}</div>
              {s.sub && (
                <div className="text-xs text-muted/60">{s.sub}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
