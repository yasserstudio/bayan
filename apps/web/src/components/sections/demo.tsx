"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CheckmarkCircle02Icon, BubbleChatIcon, Search01Icon, UserMultiple02Icon, CancelCircleIcon } from "@hugeicons/core-free-icons";
import { QrPattern } from "@/components/qr-pattern";
import { announcements, findAnnouncement, type Announcement } from "@/data/announcements";
import { shareUrl, shareText, FacebookIcon } from "@/lib/share";

type VerifyState = "idle" | "loading" | "found" | "not-found";

const statusLabels: Record<Announcement["status"], { label: string; className: string }> = {
  active: { label: "ساري المفعول", className: "bg-green-100 text-green-700" },
  expired: { label: "سالاتو المدّة", className: "bg-yellow-100 text-yellow-700" },
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
    <section id="demo" className="min-h-dvh md:h-dvh py-12 md:py-0 flex flex-col justify-center px-6 bg-background overflow-hidden relative" aria-labelledby="demo-heading">
      <QrPattern variant="dark" />
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="text-center mb-4">
          <h2 id="demo-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-2">
            جرّب التحقّق دروك
          </h2>
          <p className="text-muted-foreground text-sm">
            دخّل رمز التحقّق تاع البيان — جرّب{" "}
            <button
              type="button"
              onClick={() => handleSuggest("MEN-2026-0847")}
              className="text-navy font-bold hover:underline cursor-pointer"
            >
              MEN-2026-0847
            </button>
          </p>
        </div>

        <div className="flex gap-5 items-start">
          <div className="hidden md:block w-56 lg:w-64 shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/sample-announcement.png"
                alt="نموذج بيان حكومي موثّق برمز QR ورمز تحقّق رقمي MEN-2026-0312"
                width={800}
                height={1100}
                className="w-full h-auto"
                sizes="256px"
              />
            </div>
            <p className="text-center text-muted-foreground text-xs mt-2">
              بيان موثّق برمز QR — المستقبل
            </p>
          </div>

          <div className="flex-1 min-w-0">
        <div className="bg-card border border-border rounded-2xl p-4 md:p-5">
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              dir="ltr"
              aria-label="رمز التحقّق"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              placeholder="MEN-2026-0847"
              maxLength={20}
              className="flex-1 bg-background border border-input rounded-xl px-4 py-2.5 text-center font-mono text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
            <button
              type="button"
              onClick={handleVerify}
              disabled={state === "loading" || !code.trim()}
              aria-label="تحقّق"
              className="bg-gold hover:bg-gold-light disabled:opacity-50 text-navy font-bold px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <HugeiconsIcon icon={Search01Icon} className="h-5 w-5" aria-hidden="true" />
              <span className="hidden sm:inline">تحقّق</span>
            </button>
          </div>

          <div aria-live="polite" aria-atomic="true" aria-busy={state === "loading"}>
            {state === "loading" && (
              <div className="text-center py-4" role="status">
                <div className="w-8 h-8 border-3 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-2 motion-reduce:animate-none" aria-hidden="true" />
                <p className="text-muted-foreground text-sm">نلقّبو...</p>
              </div>
            )}

            {state === "found" && result && (
              <div className="border border-green-200 bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} className="h-7 w-7 text-green-600 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-green-800">بيان رسمي موثّق</p>
                    <p className="text-green-700 text-xs">هذا البيان موجود في قاعدة البيانات الرسمية</p>
                  </div>
                </div>

                <dl className="bg-white rounded-lg p-3 space-y-2 text-sm">
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
                </dl>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 text-sm text-green-700 hover:underline cursor-pointer min-h-[44px] inline-flex items-center gap-1"
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" aria-hidden="true" />
                  جرّب رمز آخر
                </button>
              </div>
            )}

            {state === "not-found" && (
              <div className="border border-red-200 bg-red-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <HugeiconsIcon icon={CancelCircleIcon} className="h-7 w-7 text-red-500 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-red-800">هذا البيان ما لقيناهش</p>
                    <p className="text-red-700 text-xs">
                      ما كاينش بيان بهذا الرمز — بالك مزوّر
                    </p>
                  </div>
                </div>
                <p className="text-red-700 text-sm mb-3">
                  إذا وصلك هذا البيان من فيسبوك ولا واتساب، ما تشاركوش
                  وتأكّد من المصدر الرسمي.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm text-red-700 hover:underline cursor-pointer min-h-[44px] inline-flex items-center gap-1"
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" aria-hidden="true" />
                  جرّب رمز آخر
                </button>
              </div>
            )}
          </div>

          {state === "idle" && (
            <div className="text-center py-3">
              <p className="text-muted-foreground text-sm">
                جرّب هذو الرموز:{" "}
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
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground text-sm">
          <HugeiconsIcon icon={UserMultiple02Icon} className="h-4 w-4" aria-hidden="true" />
          <span>+12,847 واحد جرّبو التحقّق</span>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-3 mt-2">
          <span className="text-muted-foreground text-sm">جرّبتها؟ ابعثها لعائلتك</span>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ابعث في واتساب (يفتح في تبويب جديد)"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <HugeiconsIcon icon={BubbleChatIcon} className="h-4 w-4" aria-hidden="true" />
            واتساب
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شارك في فيسبوك (يفتح في تبويب جديد)"
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <FacebookIcon />
            فيسبوك
          </a>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-1">
          هذي نسخة تجريبية ببيانات توضيحية — النسخة الحقيقية غادي تخدم مع البيانات الرسمية
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}
