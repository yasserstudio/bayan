import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, ArrowLeft01Icon, ArrowDown01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { QrPattern } from "@/components/qr-pattern";

const qrDots = Array.from({ length: 9 }, (_, i) => (
  <div key={i} className="bg-ochre/70 rounded-[1px]" />
));

export function Hero() {
  return (
    <section data-hero className="min-h-dvh md:h-dvh py-12 md:py-0 relative bg-navy text-white flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-light)_0%,_var(--color-navy)_70%)]" />
      <QrPattern variant="light" />

      <div className="absolute top-0 inset-x-0 z-20 bg-white/10 border-b border-white/10 py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <HugeiconsIcon icon={Alert02Icon} className="h-4 w-4 text-ochre shrink-0" aria-hidden="true" />
          <span className="text-white/70">
            هذا مشروع مستقل ماشي موقع حكومي — يوري فكرة تقنية ببيانات توضيحية
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-12 items-center text-center md:text-start">
        <div>
          <div className="hero-rise inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-ochre animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            <span>نسخة تجريبية — مفهوم تقني</span>
          </div>

          <h1 id="hero-heading" className="hero-rise text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-[1.08] mb-6" style={{ animationDelay: "0.08s" }}>
            الختم راح.
            <br />
            <span className="text-ochre-light">الحقيقة ما تروحش.</span>
          </h1>

          <p className="hero-rise text-lg md:text-xl text-white/60 max-w-xl mx-auto md:mx-0 mb-3 leading-relaxed" style={{ animationDelay: "0.16s" }}>
            كل يوم بيانات مزوّرة تطلع في فيسبوك وواتساب — وحتى واحد يعرف واش يصدّق.
          </p>
          <p className="hero-rise text-lg md:text-xl text-ochre-light/90 font-bold max-w-xl mx-auto md:mx-0 mb-8" style={{ animationDelay: "0.22s" }}>
            بيان يخلّيك تعرف الحقيقة في ثوانٍ.
          </p>

          <p className="sr-only">مقارنة بين الختم الأحمر اللي يتزوّر بسهولة ورمز QR اللي ما يتزوّرش</p>

          <a
            href="#demo"
            className="hero-rise inline-flex items-center gap-2 bg-ochre hover:bg-ochre-light text-white hover:text-navy font-bold px-8 py-3 rounded-full transition-colors text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            جرّب التحقّق دوك
            <HugeiconsIcon icon={ArrowDown01Icon} className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 md:gap-7" aria-hidden="true">
          <div className="hero-card-a flex flex-col items-center gap-2">
            <div className="w-24 h-32 md:w-28 md:h-36 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 p-3 rotate-[-5deg]">
              <div className="w-10 h-10 rounded-full border-2 border-red-400/60 flex items-center justify-center">
                <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5 text-red-400" />
              </div>
              <span className="text-xs text-white/50">الختم القديم</span>
            </div>
            <span className="text-xs text-white/60">يتزوّر بسهولة</span>
          </div>

          <HugeiconsIcon icon={ArrowLeft01Icon} className="hero-rise h-6 w-6 text-ochre-light shrink-0" style={{ animationDelay: "0.6s" }} />

          <div className="hero-card-b flex flex-col items-center gap-2">
            <div className="w-24 h-32 md:w-28 md:h-36 rounded-lg bg-ochre/10 border border-ochre/40 flex flex-col items-center justify-center gap-2 p-3 rotate-[5deg]">
              <div className="w-10 h-10 rounded border border-ochre/50 grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                {qrDots}
              </div>
              <span className="text-xs text-ochre-light">رمز QR</span>
            </div>
            <span className="text-xs text-green-400">ما يتزوّرش</span>
          </div>
        </div>
      </div>
    </section>
  );
}
