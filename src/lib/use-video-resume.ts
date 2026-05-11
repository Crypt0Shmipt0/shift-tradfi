"use client";

import { useEffect, type RefObject } from "react";

/**
 * Pauses a video when it scrolls out of view and resumes when it returns.
 * Handoff issue #5 — the hero video previously didn't restart on scroll-back.
 *
 * @param ref       Ref to the <video> element
 * @param threshold Fraction of the element that must be visible to play (0-1)
 */
export function useVideoResume(
  ref: RefObject<HTMLVideoElement | null>,
  threshold = 0.25
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
}
