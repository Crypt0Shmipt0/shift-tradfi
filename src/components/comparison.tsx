import Image from "next/image";

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
      <div className="flex items-center justify-center">
        <Image src="/diamond-teal.png" alt="Yes" width={24} height={24} className="w-6 h-6" />
      </div>
    );
  if (value === "no")
    return (
      <div className="flex items-center justify-center">
        <Image src="/x-red.png" alt="No" width={16} height={16} className="w-4 h-4" />
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
                    <Image src="/diamond-teal.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0" aria-hidden="true" />
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
