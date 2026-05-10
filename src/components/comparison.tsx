import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

const ROWS: { feature: string; shift: CellValue; tokenized: CellValue; perps: CellValue; tradfi: CellValue }[] = [
  { feature: "24/7 Trading", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Leveraged trading", shift: "Up to ×5", tokenized: "no", perps: "Unlimited", tradfi: "Up to ×300" },
  { feature: "Permissionless tokens", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Self custody", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Transferable", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "DeFi compatible", shift: "yes", tokenized: "yes", perps: "no", tradfi: "no" },
  { feature: "Asset holder protection", shift: "yes", tokenized: "yes", perps: "no", tradfi: "yes" },
  { feature: "No liquidation risk", shift: "yes", tokenized: "no", perps: "no", tradfi: "no" },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes")
    return <Check className="h-4 w-4 text-mint mx-auto" />;
  if (value === "no")
    return <X className="h-4 w-4 text-danger/60 mx-auto" />;
  if (value === "partial")
    return <Minus className="h-4 w-4 text-muted mx-auto" />;
  return <span className="text-xs text-muted">{value}</span>;
}

export function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why SHIFT wins
          </h2>
          <p className="text-muted text-lg max-w-[600px]">
            The only tokenized leveraged equity product with zero liquidation risk,
            full self-custody, and DeFi composability.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-muted w-[280px]" />
                <th className="py-4 px-4 text-sm font-bold text-mint text-center">SHIFT</th>
                <th className="py-4 px-4 text-sm font-medium text-muted text-center">Other Tokenized</th>
                <th className="py-4 px-4 text-sm font-medium text-muted text-center">Perps</th>
                <th className="py-4 px-4 text-sm font-medium text-muted text-center">TradFi Brokers</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature} className="border-b border-card-border/40 hover:bg-card/40 transition-colors">
                  <td className="py-4 px-4 text-sm text-foreground font-medium">
                    {r.feature}
                  </td>
                  <td className="py-4 px-4 text-center bg-mint/[0.03]">
                    <CellIcon value={r.shift} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellIcon value={r.tokenized} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellIcon value={r.perps} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellIcon value={r.tradfi} />
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
