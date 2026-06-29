import { HugeiconsIcon } from "@hugeicons/react";
import { BubbleChatIcon } from "@hugeicons/core-free-icons";
import { shareUrl, shareText, FacebookIcon } from "@/lib/share";
import { QrPattern } from "@/components/qr-pattern";

export function MiniShare() {
  return (
    <section className="py-10 px-6 bg-ochre/5 border-y border-ochre/10 relative overflow-hidden">
      <QrPattern variant="dark" />
      <div className="max-w-2xl mx-auto text-center relative">
        <p className="font-heading font-bold text-navy text-lg mb-4">
          جرّبتها؟ ابعثها لعائلتك
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ابعث في واتساب (يفتح في تبويب جديد)"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors"
          >
            <HugeiconsIcon icon={BubbleChatIcon} className="h-5 w-5" aria-hidden="true" />
            واتساب
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شارك في فيسبوك (يفتح في تبويب جديد)"
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors"
          >
            <FacebookIcon />
            فيسبوك
          </a>
        </div>
      </div>
    </section>
  );
}
