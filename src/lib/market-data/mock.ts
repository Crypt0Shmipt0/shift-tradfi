/**
 * Deterministic mock market-data adapter.
 * SSR-safe: same input → same output, no Date.now() / Math.random() at module scope.
 * Swap with a real adapter (CoinGecko / on-chain oracle) without changing call sites.
 */

import { LIVE_TOKENS } from "@/data/tokens";

export type Sparkpoint = { t: number; price: number };

/** mulberry32 PRNG — small, fast, deterministic. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Cheap string hash → seed. */
function hashString(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Hardcoded base prices — keep in sync with markets-table.tsx placeholders. */
const PLACEHOLDER_PRICES: Record<
  string,
  { price: string; priceNum: number; change: string; positive: boolean }
> = {
  TSL2L: { price: "$175.60", priceNum: 175.6, change: "+2.41%", positive: true },
  TSL1S: { price: "$42.77", priceNum: 42.77, change: "-1.85%", positive: false },
  SPX3L: { price: "$563.22", priceNum: 563.22, change: "+0.84%", positive: true },
  SPX3S: { price: "$89.33", priceNum: 89.33, change: "-0.74%", positive: false },
  SOX3L: { price: "$142.18", priceNum: 142.18, change: "+3.15%", positive: true },
  SOX3S: { price: "$38.45", priceNum: 38.45, change: "-2.87%", positive: false },
};

/**
 * Build a deterministic sparkline series for a ticker.
 * Walks `points` steps with a slight upward/downward bias derived from the change %.
 */
export function getSparkline(ticker: string, points = 12): Sparkpoint[] {
  const meta = PLACEHOLDER_PRICES[ticker];
  const base = meta?.priceNum ?? 100;
  const trendBias = meta?.positive ? 0.0035 : -0.0035;

  const rand = mulberry32(hashString(ticker));
  const series: Sparkpoint[] = [];

  // Start ~3% below current and walk toward current price.
  let price = base * (1 - (meta?.positive ? 0.028 : -0.028));

  for (let i = 0; i < points; i++) {
    // Noise step in [-0.012, +0.012], plus bias toward final direction.
    const noise = (rand() - 0.5) * 0.024;
    price = price * (1 + noise + trendBias);
    series.push({ t: i, price: Number(price.toFixed(2)) });
  }

  // Pin the last point to the canonical price for visual continuity.
  series[series.length - 1] = { t: points - 1, price: base };
  return series;
}

export type LiveTicker = {
  ticker: string;
  price: string;
  change: string;
  positive: boolean;
};

/** Returns the 6 live tickers in `tokens.ts` order with hardcoded price/change. */
export function getLiveTickers(): LiveTicker[] {
  return LIVE_TOKENS.map((t) => {
    const meta = PLACEHOLDER_PRICES[t.ticker];
    return {
      ticker: t.ticker,
      price: meta?.price ?? "$0.00",
      change: meta?.change ?? "+0.00%",
      positive: meta?.positive ?? true,
    };
  });
}
