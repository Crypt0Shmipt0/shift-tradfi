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

const COLUMNS = ["SHIFT", "Other Tokenized", "Perps", "TradFi Brokers"] as const;

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return (
      <div className="flex items-center justify-center" role="img" aria-label="Yes">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="#26c8b8"/></svg>
      </div>
    );
  if (value === "no")
    return (
      <div className="flex items-center justify-center" role="img" aria-label="No">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/></svg>
      </div>
    );
  return (
    <span className="font-[var(--font-inter)] font-medium text-[#edeeee] text-[18px] text-center">
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="bg-black text-white py-[120px]" aria-label="Feature comparison">
      <div className="mx-auto px-6 md:px-16 lg:px-[120px]" style={{ maxWidth: 1440 }}>
        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center text-center mb-[80px]">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white leading-[1.1] tracking-[-0.96px] text-[32px] md:text-[48px]"
          >
            Why SHIFT Wins
          </h2>
          <p className="font-[var(--font-grotesk)] font-medium text-[#8d8d8d] leading-[1.04] tracking-[-0.64px] lowercase text-[20px] md:text-[32px]">
            trade all your favorite stocks, and eliminate risks of margin and liquidation
          </p>
        </div>

        {/* Table grid */}
        <div className="flex flex-col gap-3 overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable comparison table">
          <div style={{ minWidth: 900 }}>
            {/* Column headers */}
            <div className="flex gap-5 items-end mb-3">
              {/* Feature column - empty header */}
              <div className="flex-1 p-5 rounded-xl" />
              {/* Data columns */}
              <div className="flex flex-1 gap-5">
                {COLUMNS.slice(0, 2).map((col) => (
                  <div key={col} className="flex-1 bg-[#151515] rounded-xl p-5">
                    <p className="font-[var(--font-inter)] font-medium text-white text-[18px] text-center capitalize">
                      {col}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 gap-5">
                {COLUMNS.slice(2).map((col) => (
                  <div key={col} className="flex-1 bg-[#151515] rounded-xl p-5">
                    <p className="font-[var(--font-inter)] font-medium text-white text-[18px] text-center capitalize">
                      {col}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data rows */}
            {ROWS.map((r) => (
              <div key={r.feature} className="flex gap-5 mb-3">
                {/* Feature label */}
                <div className="flex-1 bg-[#151515] rounded-xl p-5">
                  <div className="flex gap-[18px] items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true"><path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#26c8b8" opacity="0.6"/></svg>
                    <span className="font-[var(--font-inter)] font-medium text-white text-[18px] capitalize whitespace-nowrap">
                      {r.feature}
                    </span>
                  </div>
                </div>
                {/* SHIFT + Other Tokenized */}
                <div className="flex flex-1 gap-5">
                  <div className="flex-1 bg-[#151515] rounded-xl p-5 flex items-center justify-center">
                    <CellContent value={r.shift} />
                  </div>
                  <div className="flex-1 bg-[#151515] rounded-xl p-5 flex items-center justify-center">
                    <CellContent value={r.tokenized} />
                  </div>
                </div>
                {/* Perps + TradFi */}
                <div className="flex flex-1 gap-5">
                  <div className="flex-1 bg-[#151515] rounded-xl p-5 flex items-center justify-center">
                    <CellContent value={r.perps} />
                  </div>
                  <div className="flex-1 bg-[#151515] rounded-xl p-5 flex items-center justify-center">
                    <CellContent value={r.tradfi} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
