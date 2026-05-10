type CellValue = "yes" | "no" | string;

interface ComparisonRow {
  feature: string;
  shift: CellValue;
  tokenized: CellValue;
  perps: CellValue;
  tradfi: CellValue;
}

const ROWS: ComparisonRow[] = [
  { feature: "24/7 Trading Availability", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Leveraged Trading", shift: "up to x5", tokenized: "no", perps: "Unlimited", tradfi: "up to x300" },
  { feature: "Permissionless Tokens", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Self Custody", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Transferrable", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "DeFi Compatible", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Asset Holder Protection", shift: "yes", tokenized: "yes", perps: "no", tradfi: "yes" },
];

function DiamondIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 1L15 8L8 15L1 8L8 1Z" fill={color} />
    </svg>
  );
}

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return (
      <span role="img" className="inline-flex items-center justify-center" aria-label="Yes">
        <DiamondIcon color="#26c8b8" />
      </span>
    );
  if (value === "no")
    return (
      <span role="img" className="inline-flex items-center justify-center" aria-label="No">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 2L12 12M12 2L2 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  return (
    <span className="font-[var(--font-inter)] text-white/70 text-sm">
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="relative bg-black text-white overflow-hidden py-16 md:py-20" aria-label="Feature comparison">
      {/* Subtle teal gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(38,200,184,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        <div className="text-center mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            Why SHIFT Wins
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 px-6" tabIndex={0} role="region" aria-label="Scrollable comparison table">
          <table className="w-full" style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th scope="col" className="text-left py-4 px-5 w-[280px]">
                  <span className="sr-only">Feature</span>
                </th>
                <th scope="col" className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg font-[var(--font-inter)] font-semibold text-white text-sm px-5 py-2.5"
                    style={{ backgroundColor: "rgba(38,200,184,0.15)", border: "1px solid rgba(38,200,184,0.4)" }}
                  >
                    SHIFT
                  </div>
                </th>
                <th scope="col" className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70 text-sm px-5 py-2.5"
                  >
                    Other Tokenized
                  </div>
                </th>
                <th scope="col" className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70 text-sm px-5 py-2.5"
                  >
                    Perps
                  </div>
                </th>
                <th scope="col" className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70 text-sm px-5 py-2.5"
                  >
                    TradFi Brokers
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature} className="border-b border-white/5 transition-colors duration-150 hover:bg-white/[0.02]">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <DiamondIcon color="rgba(38,200,184,0.5)" />
                      <span
                        className="font-[var(--font-inter)] font-medium text-white text-sm"
                      >
                        {r.feature}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center border-x" style={{ backgroundColor: "rgba(38,200,184,0.04)", borderColor: "rgba(38,200,184,0.15)" }}>
                    <div className="inline-flex items-center justify-center rounded-lg px-4 py-3" style={{ backgroundColor: "rgba(38,200,184,0.08)" }}>
                      <CellContent value={r.shift} />
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <div className="inline-flex items-center justify-center bg-[#1a1a1a] rounded-lg px-4 py-3">
                      <CellContent value={r.tokenized} />
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <div className="inline-flex items-center justify-center bg-[#1a1a1a] rounded-lg px-4 py-3">
                      <CellContent value={r.perps} />
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <div className="inline-flex items-center justify-center bg-[#1a1a1a] rounded-lg px-4 py-3">
                      <CellContent value={r.tradfi} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
