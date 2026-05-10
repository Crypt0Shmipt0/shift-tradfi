export type Token = {
  ticker: string;
  name: string;
  underlying: string;
  direction: "long" | "short";
  leverage: number;
  image: string;
  comingSoon?: boolean;
};

export const TOKENS: Token[] = [
  { ticker: "TSL2L", name: "TESLA Long ×2", underlying: "TSLL", direction: "long", leverage: 2, image: "/tokens/tsl2l.png" },
  { ticker: "TSL1S", name: "TESLA Short ×1", underlying: "TSLS", direction: "short", leverage: 1, image: "/tokens/tsl1s.png" },
  { ticker: "SPX3L", name: "S&P 500 Long ×3", underlying: "SPXL", direction: "long", leverage: 3, image: "/tokens/spx3l.png" },
  { ticker: "SPX3S", name: "S&P 500 Short ×3", underlying: "SPXS", direction: "short", leverage: 3, image: "/tokens/spx3s.png" },
  { ticker: "SOX3L", name: "Semiconductors Long ×3", underlying: "SOXL", direction: "long", leverage: 3, image: "/tokens/sox3l.png" },
  { ticker: "SOX3S", name: "Semiconductors Short ×3", underlying: "SOXS", direction: "short", leverage: 3, image: "/tokens/sox3s.png" },
  { ticker: "URA2L", name: "Uranium Long ×2", underlying: "URAA", direction: "long", leverage: 2, image: "/tokens/ura2l.png", comingSoon: true },
];

export const LIVE_TOKENS = TOKENS.filter((t) => !t.comingSoon);
