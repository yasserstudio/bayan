import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, BookOpen01Icon, ViewIcon, Flag02Icon, Globe02Icon, QrCodeIcon, Share08Icon, Shield01Icon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { QrPattern } from "@/components/qr-pattern";

const pillars = [
  {
    icon: QrCodeIcon,
    title: "تحقّق",
    description: "امسح رمز QR ولا دخّل رمز التحقّق ولا ارفع صورة البيان",
    status: "متوفّر في الديمو",
    available: true,
  },
  {
    icon: BookOpen01Icon,
    title: "الدليل الرسمي",
    description: "تصفّح كل البيانات الحكومية الرسمية في بلاصة وحدة",
    status: "جاي في النسخة الثانية",
    available: false,
  },
  {
    icon: Flag02Icon,
    title: "بلّغ",
    description: "بلّغ على بيان مشبوه وعاون في حماية المجتمع",
    status: "جاي في النسخة الثانية",
    available: false,
  },
  {
    icon: Shield01Icon,
    title: "وعي رقمي",
    description: "نصائح عملية باش تحمي روحك من التضليل الرقمي",
    status: "متوفّر هنا تحت",
    available: true,
  },
];

const tips = [
  {
    icon: ViewIcon,
    title: "تأكّد من المصدر",
    description: "ما تصدّقش كل حاجة تشوفها في فيسبوك — روح شوف الموقع الرسمي تاع الوزارة.",
  },
  {
    icon: Alert02Icon,
    title: "ردّ بالك من الاستعجال",
    description: "\"آخر أجل غدوة!\" — البيانات المزوّرة ديما تخلعك. الرسمية تعطيك الوقت.",
  },
  {
    icon: Share08Icon,
    title: "ما تشاركش قبل ما تتأكّد",
    description: "كي تشارك بيان مزوّر تضرّ ناس آخرين. تأكّد الأول وبعدها شارك.",
  },
  {
    icon: Globe02Icon,
    title: "ابحث في الموقع الرسمي",
    description: "أغلب الوزارات تنشر بياناتها في مواقعها الرسمية. ابحث مباشرة قبل ما تصدّق.",
  },
];

export function Pillars() {
  return (
    <section className="min-h-dvh md:h-dvh py-12 md:py-0 flex flex-col justify-center px-6 bg-sand/50 overflow-hidden relative" aria-labelledby="pillars-heading">
      <QrPattern variant="dark" />
      <div className="max-w-7xl mx-auto w-full relative">
        <AnimateOnScroll>
          <div className="text-center mb-5">
            <h2 id="pillars-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-2">
              4 حوايج باش نحميو رواحنا
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              بيان ماشي غير أداة تحقّق — هي منظومة كاملة ضد التضليل
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-6">
          {pillars.map((pillar) => (
            <AnimateOnScroll key={pillar.title}>
              <div
                className={`rounded-xl p-4 text-center border transition-colors h-full ${
                  pillar.available
                    ? "bg-card border-ochre/20 hover:border-ochre/40"
                    : "bg-card border-dashed border-ochre/30"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                    pillar.available
                      ? "bg-ochre/10 text-ochre"
                      : "bg-ochre/5 text-ochre/70"
                  }`}
                >
                  <HugeiconsIcon icon={pillar.icon} className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold font-heading text-sm mb-0.5">{pillar.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-1.5">
                  {pillar.description}
                </p>
                <span
                  className={`inline-block text-[11px] px-2.5 py-0.5 rounded-full ${
                    pillar.available
                      ? "bg-navy/10 text-navy font-bold"
                      : "bg-ochre/15 text-ochre font-bold"
                  }`}
                >
                  {pillar.status}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-bold font-heading text-base text-navy text-center mb-3">
              نصائح سريعة باش تحمي روحك
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {tips.map((tip, i) => (
                <div key={tip.title} className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-ochre/10 text-ochre flex items-center justify-center shrink-0 mt-0.5">
                    <HugeiconsIcon icon={tip.icon} className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-sm">
                      <span className="text-navy font-bold me-1">{i + 1}.</span>
                      {tip.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
