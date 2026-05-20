import { AlertTriangle } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="bg-gold/10 border-b border-gold/20 py-2 px-4 text-center text-sm text-navy">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
        <span>
          هذا مشروع مستقل وليس موقعًا حكوميًا رسميًا — يعرض مفهومًا
          تقنيًا ببيانات توضيحية
        </span>
      </div>
    </div>
  );
}
