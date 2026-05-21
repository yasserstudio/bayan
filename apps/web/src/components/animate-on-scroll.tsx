"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function AnimateOnScroll({ children, className = "" }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    setReady(true);

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

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        el.style.opacity = "1";
        el.style.transform = "none";
        observer.disconnect();
      }
    };
    mq.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", handleChange);
    };
  }, []);

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
