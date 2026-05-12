"use client";

/**
 * Motion primitives for SHIFT TradFi.
 * All components honor `prefers-reduced-motion`.
 * Kept under 250 lines, no external deps beyond `motion` (Framer Motion v12).
 */

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ElementType,
  type ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* useMotionOk — SSR-safe prefers-reduced-motion hook                          */
/* -------------------------------------------------------------------------- */

function subscribeReducedMotion(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot(): boolean {
  return false;
}

export function useMotionOk(): boolean {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  return !reduced;
}

/* -------------------------------------------------------------------------- */
/* Reveal — fade + rise on viewport enter                                      */
/* -------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
};

export function Reveal({ children, delay = 0, as, className }: RevealProps) {
  const motionOk = useMotionOk();
  if (!motionOk) {
    const Tag = (as ?? "div") as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }
  const Component = motion[(as ?? "div") as keyof typeof motion] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}

/* -------------------------------------------------------------------------- */
/* RevealStagger / RevealItem — coordinated child reveals                      */
/* -------------------------------------------------------------------------- */

type RevealStaggerProps = {
  children: ReactNode;
  staggerChildren?: number;
  as?: ElementType;
  className?: string;
};

const staggerParent = (stagger: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealStagger({
  children,
  staggerChildren = 0.08,
  as,
  className,
}: RevealStaggerProps) {
  const motionOk = useMotionOk();
  if (!motionOk) {
    const Tag = (as ?? "div") as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }
  const Component = motion[(as ?? "div") as keyof typeof motion] as typeof motion.div;
  return (
    <Component
      className={className}
      variants={staggerParent(staggerChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  as,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const motionOk = useMotionOk();
  if (!motionOk) {
    const Tag = (as ?? "div") as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }
  const Component = motion[(as ?? "div") as keyof typeof motion] as typeof motion.div;
  return (
    <Component className={className} variants={staggerChild}>
      {children}
    </Component>
  );
}

/* -------------------------------------------------------------------------- */
/* CountUp — animate 0 → target on viewport enter                              */
/* -------------------------------------------------------------------------- */

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
};

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1500,
  format,
  className,
}: CountUpProps) {
  const motionOk = useMotionOk();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState<string>(() =>
    motionOk ? `${prefix}${format ? format(0) : "0"}${suffix}` : `${prefix}${format ? format(to) : String(to)}${suffix}`,
  );

  useEffect(() => {
    if (!motionOk) {
      setDisplay(`${prefix}${format ? format(to) : String(to)}${suffix}`);
      return;
    }
    if (!inView) return;

    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = to * eased;
      setDisplay(
        `${prefix}${format ? format(current) : Math.round(current).toString()}${suffix}`,
      );
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, motionOk, to, duration, prefix, suffix, format]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Magnetic — subtle mouse pull on hover (disabled on touch / reduced-motion)  */
/* -------------------------------------------------------------------------- */

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function Magnetic({ children, strength = 0.25, className }: MagneticProps) {
  const motionOk = useMotionOk();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      if (!motionOk) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(relX * strength);
      y.set(relY * strength);
    },
    [motionOk, strength, x, y],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  if (!motionOk) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.5 }}
    >
      {children}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* ScrollProgress — fixed 2px top progress bar                                 */
/* -------------------------------------------------------------------------- */

export function ScrollProgress({ className }: { className?: string }) {
  const motionOk = useMotionOk();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!motionOk) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={
        className ??
        "fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-cyan"
      }
      style={{ scaleX }}
    />
  );
}
