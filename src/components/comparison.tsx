type CellValue = "yes" | "no" | string;

const ROWS: { feature: string; shift: CellValue; tokenized: CellValue; perps: CellValue; tradfi: CellValue }[] = [
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
    return <span className="text-mint" style={{ fontSize: 20 }}>{"\u25C6"}</span>;
  if (value === "no")
    return <span className="text-danger font-bold" style={{ fontSize: 16 }}>{"\u2715"}</span>;
  return <span className="font-[var(--font-inter)] text-white/70" style={{ fontSize: 14 }}>{value}</span>;
}

export function Comparison() {
  return (
    <section id="comparison" className="relative py-20 md:py-28 bg-dark-bg text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img src="/visuals/shift-chevron-bg.png" alt="" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-[128px]">
        <div className="text-center mb-12">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white mb-4"
            style={{ fontSize: 48, letterSpacing: "-0.96px" }}
          >
            Why SHIFT Wins
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-5 w-[280px]" />
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white" style={{ fontSize: 14 }}>SHIFT</div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70" style={{ fontSize: 14 }}>Other Tokenized</div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70" style={{ fontSize: 14 }}>Perps</div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 font-[var(--font-inter)] font-semibold text-white/70" style={{ fontSize: 14 }}>TradFi Brokers</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature} className="border-b border-white/5">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="text-mint/60" style={{ fontSize: 14 }}>{"\u25C8"}</span>
                      <span className="font-[var(--font-inter)] font-medium text-white" style={{ fontSize: 14 }}>{r.feature}</span>
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
