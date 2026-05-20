"use client";

import { Check, Copy, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const shareUrl = "https://bayan.yasser.studio";
const shareText = "بيان — تحقّق من البيانات الحكومية الجزائرية قبل ما تشاركها 🔍";

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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

  function handleCopy() {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="py-20 px-6 bg-navy text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
          شارك بيان مع من تعرف
        </h2>
        <p className="text-white/70 text-lg mb-2">
          إذا ماكانش في بيان، ماشي رسمي
        </p>
        <p className="text-white/50 text-sm mb-10">
          كل مشاركة تساهم في حماية شخص من التضليل
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ch.color} text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors`}
            >
              <ch.Icon className="h-5 w-5" />
              {ch.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-400" />
              تم النسخ!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              انسخ الرابط
            </>
          )}
        </button>
      </div>
    </section>
  );
}
