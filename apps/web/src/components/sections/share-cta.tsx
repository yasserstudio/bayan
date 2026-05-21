"use client";

import { Check, Copy, MessageCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { shareUrl, shareText, FacebookIcon } from "@/lib/share";
import { QrPattern } from "@/components/qr-pattern";

function XIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const channels = [
  {
    name: "فيسبوك",
    color: "bg-[#1877F2] hover:bg-[#166FE5]",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
    Icon: FacebookIcon,
  },
  {
    name: "واتساب",
    color: "bg-[#25D366] hover:bg-[#20BD5A]",
    href: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
    Icon: MessageCircle,
  },
  {
    name: "تيليغرام",
    color: "bg-[#0088CC] hover:bg-[#007AB8]",
    href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    Icon: Send,
  },
  {
    name: "إكس",
    color: "bg-[#000] hover:bg-[#222]",
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    Icon: XIcon,
  },
];

export function ShareCta() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  }

  return (
    <section className="h-dvh flex flex-col justify-center bg-navy text-white overflow-hidden relative" aria-labelledby="share-heading">
      <QrPattern variant="light" />
      <div className="max-w-3xl mx-auto text-center px-6 flex-1 flex flex-col justify-center relative">
        <h2 id="share-heading" className="text-3xl md:text-4xl font-extrabold font-heading mb-3">
          ابعث بيان لمن تعرف
        </h2>
        <p className="text-white/70 text-lg mb-2">
          كل يوم بيانات مزوّرة جداد يطلعو — مشاركتك اليوم تحمي واحد غدوة
        </p>
        <p className="text-white/60 text-sm mb-8">
          ابعثها في قروب العائلة
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`شارك على ${ch.name} (يفتح في تبويب جديد)`}
              className={`${ch.color} text-white px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-colors`}
            >
              <ch.Icon aria-hidden="true" className="h-5 w-5" />
              {ch.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm transition-colors cursor-pointer mx-auto"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-400" aria-hidden="true" />
              تم النسخ!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden="true" />
              انسخ الرابط
            </>
          )}
        </button>
      </div>

      <footer className="border-t border-white/5 py-6 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-white/60 text-sm">اتأكّد من كل بيان</p>
          <div className="text-white/40 text-xs space-y-0.5">
            <p>
              مبادرة من{" "}
              <a
                href="https://yasser.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                yasser.studio
              </a>
              {" "}— مشروع مستقل ماشي موقع حكومي
            </p>
            <p dir="ltr" className="font-sans">
              Projet indépendant — ne représente aucun organisme gouvernemental
            </p>
          </div>
          <p className="text-white/30 text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} بيان
          </p>
        </div>
      </footer>
    </section>
  );
}
