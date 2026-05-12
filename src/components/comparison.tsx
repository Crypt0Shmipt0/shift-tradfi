import { RevealStagger, RevealItem } from "@/lib/motion";

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
  { feature: "Leveraged Trading", shift: "up to ×3", tokenized: "no", perps: "Unlimited", tradfi: "up to ×300" },
  { feature: "Permissionless Tokens", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Self Custody", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Transferable", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "DeFi Compatible", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Independent Reserves Attestation", shift: "yes", tokenized: "no", perps: "no", tradfi: "yes" },
  { feature: "Big-Four Auditor", shift: "yes", tokenized: "no", perps: "no", tradfi: "yes" },
];

const COLUMNS = ["SHIFT", "Other Tokenized", "Perps", "TradFi Brokers"] as const;

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return (
      <div className="flex items-center justify-center" role="img" aria-label="Yes">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="#0BB4D4"/></svg>
      </div>
    );
  if (value === "no")
    return (
      <div className="flex items-center justify-center" role="img" aria-label="No">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/></svg>
      </div>
    );
  return (
    <span className="font-[var(--font-inter)] font-medium text-[#edeeee] text-[16px] text-center whitespace-nowrap">
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparison" className="bg-dark-bg text-white py-[80px] md:py-[100px] lg:py-[120px]" aria-label="Feature comparison">
      <div className="mx-auto px-6 md:px-16 lg:px-[120px]" style={{ maxWidth: 1440 }}>
        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center text-center mb-[48px] md:mb-[64px]">
          <h2
            className="font-[var(--font-grotesk)] font-medium text-white leading-[1.1] tracking-[-0.96px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            How SHIFT compares
          </h2>
          <p
            className="font-[var(--font-inter)] font-medium text-[#a8a8a8] leading-normal tracking-[-0.36px] lowercase max-w-[680px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
          >
            perps, brokers, and other tokenized issuers — head to head.
          </p>
        </div>

        {/* ───────────────────  Desktop / tablet table  ─────────────────── */}
        <div
          className="hidden md:block overflow-x-auto"
          tabIndex={0}
          role="region"
          aria-label="Scrollable comparison table"
        >
          <div style={{ minWidth: 900 }}>
            {/* Column headers — grid */}
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: "1.6fr 1.2fr 1fr 1fr 1fr" }}
            >
              <div aria-hidden="true" />
              {COLUMNS.map((col) => {
                const isShift = col === "SHIFT";
                return (
                  <div
                    key={col}
                    className={`rounded-xl p-5 text-center ${
                      isShift
                        ? "bg-[#0a2530] border border-[#0BB4D4]/50"
                        : "bg-[#151515]"
                    }`}
                  >
                    <p
                      className={`font-[var(--font-inter)] font-medium text-[13px] uppercase tracking-[1px] inline-flex items-center justify-center ${
                        isShift ? "text-[#0BB4D4]" : "text-[#a8a8a8]"
                      }`}
                    >
                      {isShift && (
                        <span
                          className="inline-block w-[6px] h-[6px] rounded-full bg-gold mr-2"
                          aria-hidden="true"
                        />
                      )}
                      {col}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Data rows — staggered reveal. Single parent grid defines the
                column widths globally; each row participates via subgrid so
                cells align across rows regardless of feature-label length. */}
            <RevealStagger
              staggerChildren={0.04}
              className="grid gap-3 mt-3 grid-cols-[1.6fr_1.2fr_1fr_1fr_1fr]"
            >
              {ROWS.map((r) => (
                <RevealItem
                  key={r.feature}
                  className="grid col-span-5 gap-3 grid-cols-subgrid"
                >
                  <Row row={r} />
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>

        {/* ───────────────────  Mobile cards  ─────────────────── */}
        <ul className="md:hidden flex flex-col gap-3" role="list" aria-label="Comparison (mobile)">
          {ROWS.map((r) => (
            <li key={r.feature} className="bg-[#151515] rounded-2xl p-5 flex flex-col gap-4">
              {/* Feature heading */}
              <div className="flex gap-3 items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#26c8b8" />
                </svg>
                <h3 className="font-[var(--font-inter)] font-semibold text-white text-[16px] capitalize leading-tight">
                  {r.feature}
                </h3>
              </div>
              {/* Divider */}
              <div className="h-px bg-white/10" />
              {/* Value list — SHIFT first, visually emphasized */}
              <dl className="flex flex-col gap-2.5">
                {[
                  { label: "SHIFT", value: r.shift, isShift: true },
                  { label: "Other Tokenized", value: r.tokenized, isShift: false },
                  { label: "Perps", value: r.perps, isShift: false },
                  { label: "TradFi Brokers", value: r.tradfi, isShift: false },
                ].map(({ label, value, isShift }) => (
                  <div key={label} className="flex items-center justify-between">
                    <dt className={`font-[var(--font-inter)] text-[14px] capitalize ${isShift ? "text-[#0BB4D4] font-semibold" : "text-[#8d8d8d] font-medium"}`}>
                      {label}
                    </dt>
                    <dd className="ml-3 flex items-center">
                      <CellContent value={value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ row }: { row: ComparisonRow }) {
  return (
    <>
      <div className="bg-[#151515] rounded-xl p-5 flex gap-[18px] items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0" aria-hidden="true">
          <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="#26c8b8" opacity="0.6" />
        </svg>
        <span className="font-[var(--font-inter)] font-medium text-white text-[16px] md:text-[17px] capitalize whitespace-nowrap">
          {row.feature}
        </span>
      </div>
      <div className="bg-[#0a2530] border border-[#0BB4D4]/50 rounded-xl p-5 flex items-center justify-center">
        <CellContent value={row.shift} />
      </div>
      <div className="bg-[#151515] rounded-xl p-5 flex items-center justify-center">
        <CellContent value={row.tokenized} />
      </div>
      <div className="bg-[#151515] rounded-xl p-5 flex items-center justify-center">
        <CellContent value={row.perps} />
      </div>
      <div className="bg-[#151515] rounded-xl p-5 flex items-center justify-center">
        <CellContent value={row.tradfi} />
      </div>
    </>
  );
}
