"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Search, XCircle } from "lucide-react";
import { announcements, findAnnouncement, type Announcement } from "@/data/announcements";

type VerifyState = "idle" | "loading" | "found" | "not-found";

const statusLabels: Record<Announcement["status"], { label: string; className: string }> = {
  active: { label: "ساري المفعول", className: "bg-green-100 text-green-700" },
  expired: { label: "منتهي الصلاحية", className: "bg-yellow-100 text-yellow-700" },
  revoked: { label: "ملغى", className: "bg-red-100 text-red-700" },
};

export function Demo() {
  const [code, setCode] = useState("");
  const [state, setState] = useState<VerifyState>("idle");
  const [result, setResult] = useState<Announcement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function handleVerify() {
    const trimmed = code.trim();
    if (!trimmed) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    setState("loading");
    timerRef.current = setTimeout(() => {
      const found = findAnnouncement(trimmed);
      if (found) {
        setResult(found);
        setState("found");
      } else {
        setResult(null);
        setState("not-found");
      }
    }, 800);
  }

  function handleReset() {
    setCode("");
    setState("idle");
    setResult(null);
  }

  function handleSuggest(value: string) {
    setCode(value);
    setState("idle");
    setResult(null);
  }

  return (
    <section id="demo" className="py-20 px-6 bg-background" aria-labelledby="demo-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="demo-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            جرّب التحقّق الآن
          </h2>
          <p className="text-muted-foreground text-lg">
            أدخل رمز التحقّق من البيان — جرّب{" "}
            <button
              type="button"
              onClick={() => handleSuggest("MEN-2026-0847")}
              className="text-navy font-bold hover:underline cursor-pointer"
            >
              MEN-2026-0847
            </button>
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              dir="ltr"
              aria-label="رمز التحقّق"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              placeholder="MEN-2026-0847"
              maxLength={20}
              className="flex-1 bg-background border border-input rounded-xl px-4 py-3 text-center font-mono text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
            <button
              type="button"
              onClick={handleVerify}
              disabled={state === "loading" || !code.trim()}
              aria-label="تحقّق"
              className="bg-gold hover:bg-gold-light disabled:opacity-50 text-navy font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">تحقّق</span>
            </button>
          </div>

          <div aria-live="polite" aria-atomic="true" aria-busy={state === "loading"}>
            {state === "loading" && (
              <div className="text-center py-8" role="status">
                <div className="w-8 h-8 border-3 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-3 motion-reduce:animate-none" aria-hidden="true" />
                <p className="text-muted-foreground text-sm">جارٍ البحث...</p>
              </div>
            )}

            {state === "found" && result && (
              <div className="border border-green-200 bg-green-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-green-800 text-lg">بيان رسمي موثّق</p>
                    <p className="text-green-700 text-sm">هذا البيان موجود في قاعدة البيانات الرسمية</p>
                  </div>
                </div>

                <dl className="bg-white rounded-lg p-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">الرمز</dt>
                    <dd className="font-mono font-bold" dir="ltr">{result.code}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">الجهة</dt>
                    <dd className="font-bold">{result.ministry}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">العنوان</dt>
                    <dd className="font-bold">{result.title}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">التاريخ</dt>
                    <dd dir="ltr">{result.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">الحالة</dt>
                    <dd className={`inline-flex items-center gap-1 ${statusLabels[result.status].className} px-2 py-0.5 rounded-full text-xs font-bold`}>
                      {statusLabels[result.status].label}
                    </dd>
                  </div>
                  <div className="pt-2 border-t">
                    <dd className="text-muted-foreground text-xs leading-relaxed">
                      {result.content}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 text-sm text-green-700 hover:underline cursor-pointer min-h-[44px] inline-flex items-center gap-1"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  جرّب رمزًا آخر
                </button>
              </div>
            )}

            {state === "not-found" && (
              <div className="border border-red-200 bg-red-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-8 w-8 text-red-500 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-red-800 text-lg">بيان غير موجود</p>
                    <p className="text-red-700 text-sm">
                      لم يتم العثور على بيان بهذا الرمز — قد يكون مزوّرًا
                    </p>
                  </div>
                </div>
                <p className="text-red-700 text-sm mb-4">
                  إذا وصلك هذا البيان عبر مواقع التواصل الاجتماعي، لا تشاركه
                  وتحقّق من المصدر الرسمي.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm text-red-700 hover:underline cursor-pointer min-h-[44px] inline-flex items-center gap-1"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  جرّب رمزًا آخر
                </button>
              </div>
            )}
          </div>

          {state === "idle" && (
            <div className="text-center py-4">
              <p className="text-muted-foreground text-sm">
                رموز تجريبية:{" "}
                {announcements.map((a, i) => (
                  <span key={a.code}>
                    {i > 0 && " · "}
                    <button
                      type="button"
                      onClick={() => setCode(a.code)}
                      aria-label={`تعبئة رمز ${a.code}`}
                      className="font-mono text-navy font-bold hover:underline cursor-pointer"
                      dir="ltr"
                    >
                      {a.code}
                    </button>
                  </span>
                ))}
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                جرّب أيضًا رمزًا خاطئًا لرؤية نتيجة &quot;غير موجود&quot;
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-4">
          هذه نسخة تجريبية ببيانات توضيحية — النسخة الفعلية ستعمل مع
          البيانات الرسمية
        </p>
      </div>
    </section>
  );
}
