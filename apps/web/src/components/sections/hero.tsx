import { ArrowLeft, ChevronDown, X } from "lucide-react";

const qrDots = Array.from({ length: 9 }, (_, i) => (
  <div key={i} className="bg-gold/70 rounded-[1px]" />
));

export function Hero() {
  return (
    <section className="relative bg-navy text-white min-h-[80vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-light)_0%,_var(--color-navy)_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-8 backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse motion-reduce:animate-none" aria-hidden="true" />
          <span>نسخة تجريبية — مفهوم تقني</span>
        </div>

        <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-6">
          الختم راح.
          <br />
          <span className="text-gold">الحقيقة ما تروحش.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          بيان يساعدك تتحقّق من البيانات الحكومية الجزائرية في ثوانٍ —
          امسح رمز QR أو أدخل رمز التحقّق أو ارفع صورة البيان.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16" aria-hidden="true">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-32 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 p-3">
              <div className="w-10 h-10 rounded-full border-2 border-red-400/60 flex items-center justify-center">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <span className="text-xs text-white/50">الختم القديم</span>
            </div>
            <span className="text-xs text-white/40">قابل للتزوير</span>
          </div>

          <ArrowLeft className="h-6 w-6 text-gold" />

          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-32 rounded-lg bg-gold/10 border border-gold/30 flex flex-col items-center justify-center gap-2 p-3">
              <div className="w-10 h-10 rounded border border-gold/50 grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
                {qrDots}
              </div>
              <span className="text-xs text-gold">رمز QR</span>
            </div>
            <span className="text-xs text-gold/70">غير قابل للتزوير</span>
          </div>
        </div>

        <a
          href="#demo"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3 rounded-full transition-colors text-lg"
        >
          جرّب التحقّق الآن
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
