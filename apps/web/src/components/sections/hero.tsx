import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, ArrowLeft01Icon, ArrowDown01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { QrPattern } from "@/components/qr-pattern";

const qrDots = Array.from({ length: 9 }, (_, i) => (
  <div key={i} className="bg-gold/70 rounded-[1px]" />
));

export function Hero() {
  return (
    <section data-hero className="min-h-dvh md:h-dvh py-12 md:py-0 relative bg-navy text-white flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-light)_0%,_var(--color-navy)_70%)]" />
      <QrPattern variant="light" />

      <div className="absolute top-0 inset-x-0 z-20 bg-white/5 backdrop-blur-sm border-b border-white/10 py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <HugeiconsIcon icon={Alert02Icon} className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
          <span className="text-white/70">
            هذا مشروع مستقل ماشي موقع حكومي — يوري فكرة تقنية ببيانات توضيحية
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-4 md:mb-8 backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse motion-reduce:animate-none" aria-hidden="true" />
          <span>نسخة تجريبية — مفهوم تقني</span>
        </div>

        <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-6">
          الختم راح.
          <br />
          <span className="text-gold">الحقيقة ما تروحش.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-3 leading-relaxed">
          كل يوم بيانات مزوّرة تطلع في فيسبوك وواتساب — وحتى واحد يعرف واش يصدّق.
        </p>
        <p className="text-lg md:text-xl text-gold/90 font-bold max-w-2xl mx-auto mb-6 md:mb-10">
          بيان يخلّيك تعرف الحقيقة في ثوانٍ.
        </p>

        <p className="sr-only">مقارنة بين الختم الأحمر اللي يتزوّر بسهولة ورمز QR اللي ما يتزوّرش</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 md:mb-12" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-32 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 p-3">
              <div className="w-10 h-10 rounded-full border-2 border-red-400/60 flex items-center justify-center">
                <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5 text-red-400" />
              </div>
              <span className="text-xs text-white/50">الختم القديم</span>
            </div>
            <span className="text-xs text-white/40">يتزوّر بسهولة</span>
          </div>

          <HugeiconsIcon icon={ArrowLeft01Icon} className="h-6 w-6 text-gold hidden sm:block" />
          <HugeiconsIcon icon={ArrowDown01Icon} className="h-6 w-6 text-gold sm:hidden" />

          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-32 rounded-lg bg-gold/10 border border-gold/30 flex flex-col items-center justify-center gap-2 p-3">
              <div className="w-10 h-10 rounded border border-gold/50 grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                {qrDots}
              </div>
              <span className="text-xs text-gold">رمز QR</span>
            </div>
            <span className="text-xs text-green-400">ما يتزوّرش</span>
          </div>
        </div>

        <a
          href="#demo"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3 rounded-full transition-colors text-lg"
        >
          جرّب التحقّق دروك
          <HugeiconsIcon icon={ArrowDown01Icon} className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
