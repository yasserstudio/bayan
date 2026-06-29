"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function FullPageScroll({ children, sectionCount }: { children: ReactNode; sectionCount: number }) {
  const [active, setActive] = useState(0);
  const animating = useRef(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const touchY = useRef(0);
  const noMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navigate = useCallback((direction: 1 | -1) => {
    if (animating.current) return;
    setActive((prev) => {
      const next = prev + direction;
      if (next < 0 || next >= sectionCount) return prev;
      animating.current = true;
      setTimeout(() => { animating.current = false; }, 900);
      return next;
    });
  }, [sectionCount]);

  const goTo = useCallback((index: number) => {
    if (animating.current) return;
    setActive((prev) => {
      const clamped = Math.max(0, Math.min(sectionCount - 1, index));
      if (clamped === prev) return prev;
      animating.current = true;
      setTimeout(() => { animating.current = false; }, 900);
      return clamped;
    });
  }, [sectionCount]);

  useEffect(() => {
    if (!isDesktop) return;
    const el = wrapper.current;
    if (!el) return;

    let acc = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      if (animating.current) return;
      acc += e.deltaY;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => { acc = 0; }, 200);
      if (acc > 60) { acc = 0; navigate(1); }
      else if (acc < -60) { acc = 0; navigate(-1); }
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [navigate, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const el = wrapper.current;
    if (!el) return;
    const onStart = (e: TouchEvent) => { touchY.current = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const diff = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      navigate(diff > 0 ? 1 : -1);
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => { el.removeEventListener("touchstart", onStart); el.removeEventListener("touchend", onEnd); };
  }, [navigate, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); navigate(1); }
      else if (e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); navigate(-1); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest("a[href^='#']");
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || !wrapper.current) return;
      const slider = wrapper.current.firstElementChild;
      if (!slider) return;
      const idx = Array.from(slider.children).findIndex(
        (s) => (s as HTMLElement).id === hash.slice(1) || s.querySelector(hash)
      );
      if (idx >= 0) { e.preventDefault(); goTo(idx); }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [goTo, isDesktop]);

  const isHero = active === 0;
  const isLast = active === sectionCount - 1;
  const isDark = isHero || isLast;

  if (!isDesktop) {
    return <div>{children}</div>;
  }

  return (
    <div ref={wrapper} className="h-dvh overflow-hidden relative">
      <div
        style={{
          transform: `translateY(-${active * 100}dvh)`,
          transition: noMotion ? "none" : "transform 800ms cubic-bezier(0.76, 0, 0.24, 1)",
          willChange: "transform",
        }}
      >
        {children}
      </div>

      {/* Dot navigation */}
      <nav
        aria-label="أقسام الصفحة"
        className="fixed start-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-0.5"
      >
        {Array.from({ length: sectionCount }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`القسم ${i + 1} من ${sectionCount}`}
            aria-current={i === active ? "step" : undefined}
            className="min-w-[28px] min-h-[28px] flex items-center justify-center cursor-pointer"
          >
            <span className={`block rounded-full transition-all duration-300 ${
              i === active
                ? "w-2.5 h-2.5 bg-gold"
                : isDark
                  ? "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                  : "w-1.5 h-1.5 bg-navy/25 hover:bg-navy/50"
            }`} />
          </button>
        ))}
        <span className={`text-xs font-mono mt-1 tabular-nums ${isDark ? "text-white/60" : "text-navy/40"}`}>
          {active + 1}/{sectionCount}
        </span>
      </nav>

      {/* Scroll hint on hero */}
      {isHero && (
        <div className="fixed bottom-8 inset-x-0 z-50 flex flex-col items-center animate-bounce motion-reduce:animate-none pointer-events-none">
          <span className="text-white/50 text-xs mb-1">اسحب للأسفل</span>
          <ChevronDown className="h-5 w-5 text-white/40" />
        </div>
      )}
    </div>
  );
}
