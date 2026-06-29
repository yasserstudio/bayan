import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";

export function Disclaimer() {
  return (
    <div className="bg-ochre/10 border-b border-ochre/20 py-2 px-4 text-center text-sm text-navy">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
        <HugeiconsIcon icon={Alert02Icon} className="h-4 w-4 text-ochre shrink-0" aria-hidden="true" />
        <span>
          هذا مشروع مستقل ماشي موقع حكومي — يوري فكرة تقنية ببيانات توضيحية
        </span>
      </div>
    </div>
  );
}
