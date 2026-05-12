"use client";

import { motion, useReducedMotion } from "motion/react";
import { getLiveTickers } from "@/lib/market-data/mock";

export function LiveTicker() {
  const tickers = getLiveTickers();
  const reduced = useReducedMotion();
  // Duplicate the list once for seamless loop
  const loop = [...tickers, ...tickers];

  return (
    <div className="relative w-full bg-[#0e0e10] border-y border-white/[0.06] overflow-hidden py-3 md:py-4">
      <div
        className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#0e0e10] to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#0e0e10] to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        className="flex items-center gap-8 md:gap-12 whitespace-nowrap will-change-transform"
        animate={reduced ? {} : { x: ["0%", "-50%"] }}
        transition={
          reduced
            ? {}
            : { duration: 40, ease: "linear", repeat: Infinity }
        }
        aria-label="Live SHIFT token prices"
      >
        {loop.map((t, i) => (
          <span
            key={`${t.ticker}-${i}`}
            className="inline-flex items-center gap-3 shrink-0"
          >
            <span className="font-[var(--font-mono)] font-semibold text-white text-[14px] md:text-[15px] tracking-wide">
              {t.ticker}
            </span>
            <span className="font-[var(--font-mono)] text-[#a8a8a8] text-[13px] md:text-[14px]">
              {t.price}
            </span>
            <span
              className={`font-[var(--font-mono)] text-[12px] md:text-[13px] ${
                t.positive ? "text-[#01b95a]" : "text-[#c4162f]"
              }`}
            >
              {t.change}
            </span>
            <span className="text-white/20 px-3">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
