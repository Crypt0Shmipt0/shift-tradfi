type CellValue = "yes" | "no" | string;

const ROWS: { feature: string; shift: CellValue; tokenized: CellValue; perps: CellValue; tradfi: CellValue }[] = [
  { feature: "24/7 Trading Availability", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Leveraged Trading", shift: "up to ×5", tokenized: "no", perps: "Unlimited", tradfi: "up to ×300" },
  { feature: "Permissionless Tokens", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Self Custody", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Transferrable", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "DeFi Compatible", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Asset Holder Protection", shift: "yes", tokenized: "yes", perps: "no", tradfi: "yes" },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return <span className="text-mint text-lg">◆</span>;
  if (value === "no")
    return <span className="text-danger text-sm font-bold">✕</span>;
  return <span className="text-sm text-white/70">{value}</span>;
}

export function Comparison() {
  return (
    <section id="comparison" className="relative py-20 md:py-28 bg-section-dark text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img src="/visuals/shift-chevron-bg.png" alt="" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why SHIFT Wins
          </h2>
          <p className="text-white/50 text-lg italic max-w-[600px] mx-auto">
            Trade all your favorite stocks, and eliminate risks of margin and liquidation
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-5 w-[280px]" />
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold">SHIFT</div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-white/70">Other Tokenized</div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-white/70">Perps</div>
                </th>
                <th className="py-4 px-5 text-center">
                  <div className="inline-block px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-white/70">TradFi Brokers</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature}>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <span className="text-mint/60 text-sm">◈</span>
                      <span className="text-sm font-medium">{r.feature}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center bg-white/[0.02] rounded-lg">
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
