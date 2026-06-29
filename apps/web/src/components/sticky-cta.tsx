"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden p-3 bg-navy/95 backdrop-blur-sm border-t border-white/10">
      <a
        href="#demo"
        className="flex items-center justify-center gap-2 bg-ochre hover:bg-ochre-light text-navy font-bold py-3 rounded-full transition-colors w-full text-sm"
      >
        جرّب التحقّق دوك
        <HugeiconsIcon icon={ArrowDown01Icon} className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
