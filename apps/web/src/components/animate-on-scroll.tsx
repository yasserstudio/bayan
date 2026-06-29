"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
}

const noopSubscribe = () => () => {};

/** False during SSR and the first client render; true once mounted. */
function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export function AnimateOnScroll({ children, className = "" }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  // Only hide-then-reveal once mounted on the client and motion is allowed —
  // otherwise content renders fully visible (no JS / reduced motion).
  const ready = hydrated && !reduceMotion;

  useEffect(() => {
    if (!ready) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        ready
          ? {
              opacity: 0,
              transform: "translateY(16px)",
              transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
