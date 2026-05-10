type CellValue = "yes" | "no" | string;

const ROWS: {
  feature: string;
  shift: CellValue;
  tokenized: CellValue;
  perps: CellValue;
  tradfi: CellValue;
}[] = [
  { feature: "24/7 Trading Availability", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Leveraged Trading", shift: "up to x5", tokenized: "no", perps: "Unlimited", tradfi: "up to x300" },
  { feature: "Permissionless Tokens", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Self Custody", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Transferrable", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "DeFi Compatible", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Asset Holder Protection", shift: "yes", tokenized: "yes", perps: "no", tradfi: "yes" },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return <span className="text-[#26c8b8]" style={{ fontSize: 20 }}>{"\u25C6"}</span>;
  if (value === "no")
    return <span className="text-[#ef4444] font-bold" style={{ fontSize: 16 }}>{"\u2715"}</span>;
  return (
    <span className="font-[var(--font-inter)] text-white/70" style={{ fontSize: 14 }}>
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="relative bg-black text-white overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
      {/* Subtle teal gradient background (replaces missing chevron image) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(38,200,184,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: 1440, paddingLeft: 128, paddingRight: 128 }}>
        <div className="text-center mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white"
            style={{ fontSize: 48, letterSpacing: "-0.96px" }}
          >
            Why SHIFT Wins
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full" style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="text-left py-4 px-5" style={{ width: 280 }} />
                <th className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white"
                    style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}
                  >
                    SHIFT
                  </div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70"
                    style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}
                  >
                    Other Tokenized
                  </div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70"
                    style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}
                  >
                    Perps
                  </div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div
                    className="inline-block rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70"
                    style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}
                  >
                    TradFi Brokers
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature} className="border-b border-white/5">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[#26c8b8]/60" style={{ fontSize: 14 }}>{"\u25C8"}</span>
                      <span
                        className="font-[var(--font-inter)] font-medium text-white"
                        style={{ fontSize: 14 }}
                      >
                        {r.feature}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center bg-white/[0.02]">
                    <CellContent value={r.shift} />
                  </td>
                  <td className="py-4 px-5 text-center">
                    <CellContent value={r.tokenized} />
                  </td>
                  <td className="py-4 px-5 text-center">
                    <CellContent value={r.perps} />
                  </td>
                  <td className="py-4 px-5 text-center">
                    <CellContent value={r.tradfi} />
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
