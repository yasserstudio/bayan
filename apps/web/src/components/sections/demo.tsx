"use client";

import { useState } from "react";
import { CheckCircle, Search, XCircle } from "lucide-react";
import { findAnnouncement, type Announcement } from "@/data/announcements";

type VerifyState = "idle" | "loading" | "found" | "not-found";

export function Demo() {
  const [code, setCode] = useState("");
  const [state, setState] = useState<VerifyState>("idle");
  const [result, setResult] = useState<Announcement | null>(null);

  function handleVerify() {
    const trimmed = code.trim();
    if (!trimmed) return;

    setState("loading");
    setTimeout(() => {
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

  return (
    <section id="demo" className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            جرّب التحقّق الآن
          </h2>
          <p className="text-muted-foreground text-lg">
            أدخل رمز التحقّق من البيان — جرّب{" "}
            <button
              type="button"
              onClick={() => { setCode("MEN-2026-0847"); setState("idle"); setResult(null); }}
              className="text-gold font-bold hover:underline cursor-pointer"
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
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              placeholder="MEN-2026-0847"
              className="flex-1 bg-background border border-input rounded-xl px-4 py-3 text-center font-mono text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
            <button
              type="button"
              onClick={handleVerify}
              disabled={state === "loading" || !code.trim()}
              className="bg-gold hover:bg-gold-light disabled:opacity-50 text-navy font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">تحقّق</span>
            </button>
          </div>

          {state === "loading" && (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-3 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">جارٍ البحث...</p>
            </div>
          )}

          {state === "found" && result && (
            <div className="border border-green-200 bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 shrink-0" />
                <div>
                  <p className="font-bold text-green-800 text-lg">بيان رسمي موثّق ✓</p>
                  <p className="text-green-700 text-sm">هذا البيان موجود في قاعدة البيانات الرسمية</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الرمز</span>
                  <span className="font-mono font-bold" dir="ltr">{result.code}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الجهة</span>
                  <span className="font-bold">{result.ministry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">العنوان</span>
                  <span className="font-bold">{result.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">التاريخ</span>
                  <span dir="ltr">{result.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الحالة</span>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">
                    ساري المفعول
                  </span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {result.content}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-4 text-sm text-green-700 hover:underline cursor-pointer"
              >
                ← جرّب رمزًا آخر
              </button>
            </div>
          )}

          {state === "not-found" && (
            <div className="border border-red-200 bg-red-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="h-8 w-8 text-red-500 shrink-0" />
                <div>
                  <p className="font-bold text-red-800 text-lg">بيان غير موجود ✕</p>
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
                className="text-sm text-red-700 hover:underline cursor-pointer"
              >
                ← جرّب رمزًا آخر
              </button>
            </div>
          )}

          {state === "idle" && (
            <div className="text-center py-4">
              <p className="text-muted-foreground text-sm">
                رموز تجريبية:{" "}
                <button
                  type="button"
                  onClick={() => setCode("MEN-2026-0847")}
                  className="font-mono text-gold hover:underline cursor-pointer"
                  dir="ltr"
                >
                  MEN-2026-0847
                </button>
                {" · "}
                <button
                  type="button"
                  onClick={() => setCode("MES-2026-0132")}
                  className="font-mono text-gold hover:underline cursor-pointer"
                  dir="ltr"
                >
                  MES-2026-0132
                </button>
                {" · "}
                <button
                  type="button"
                  onClick={() => setCode("MIN-2026-0045")}
                  className="font-mono text-gold hover:underline cursor-pointer"
                  dir="ltr"
                >
                  MIN-2026-0045
                </button>
              </p>
              <p className="text-muted-foreground/60 text-xs mt-2">
                جرّب أيضًا رمزًا خاطئًا لرؤية نتيجة &quot;غير موجود&quot;
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-muted-foreground/60 text-xs mt-4">
          هذه نسخة تجريبية ببيانات توضيحية — النسخة الفعلية ستعمل مع
          البيانات الرسمية
        </p>
      </div>
    </section>
  );
}
