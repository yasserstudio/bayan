import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Building02Icon, Globe02Icon, QrCodeIcon, UserCheck01Icon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { QrPattern } from "@/components/qr-pattern";

const steps = [
  {
    icon: Building02Icon,
    label: "الوزارة تنشر البيان",
    description: "عبر المنصة الرقمية الرسمية تاعها",
  },
  {
    icon: QrCodeIcon,
    label: "النظام يولّد رمز QR",
    description: "رمز فريد لكل بيان + رمز تحقّق",
  },
  {
    icon: Globe02Icon,
    label: "البيان يتنشر مع الرمز",
    description: "بلا ختم أحمر — غير الرمز الرقمي",
  },
  {
    icon: UserCheck01Icon,
    label: "المواطن يتأكّد فورًا",
    description: "يمسح، يدخّل الرمز، ولا يرفع صورة",
  },
];

const faqs = [
  {
    q: "واش بيان موقع تاع الحكومة؟",
    a: "لا، بيان مشروع مستقل — ماشي موقع حكومي رسمي. هذي فكرة تقنية نقترحوها باش الحكومة تقدر تتبنّاها وتحمي المواطنين من التزوير.",
  },
  {
    q: "هذا غير ديمو — كيفاش يفيدني دوك؟",
    a: "الديمو يوريك كيفاش النظام يخدم. دوك الأهم هو إنك تفهم الفكرة وتشاركها — كل ما بزاف ناس عرفوها، كل ما قربنا من التطبيق الحقيقي.",
  },
  {
    q: "واش المعلومات تاعي في أمان؟",
    a: "بيان ما يجمعش حتى معلومة شخصية. ما كاينش تسجيل، ما كاينش كوكيز تتبّع. تدخل، تتحقّق، وتخرج.",
  },
  {
    q: "وقتاش تخرج النسخة الكاملة؟",
    a: "النسخة الثانية غادي تخدم ببيانات حقيقية من المواقع الرسمية تاع الوزارات. نخدمو عليها دوك — تابعونا باش تكونو أول ناس يعرفو.",
  },
];

export function Proposal() {
  return (
    <section className="min-h-dvh md:h-dvh py-12 md:py-0 flex flex-col justify-center px-6 bg-background overflow-hidden relative" aria-labelledby="proposal-heading">
      <QrPattern variant="dark" />
      <div className="max-w-7xl mx-auto w-full relative">
        <AnimateOnScroll>
          <div className="text-center mb-5">
            <h2 id="proposal-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-2">
              كيفاش الحكومة تقدر تتبنّى هذا النظام
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              مقترح مفتوح وبسيط — ما يحتاجش بنية تحتية معقّدة
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.label}>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-2">
                    <HugeiconsIcon icon={step.icon} className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -start-2 w-5 h-5 rounded-full bg-ochre text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold font-heading text-sm mb-0.5">{step.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <HugeiconsIcon icon={ArrowLeft01Icon} className="h-5 w-5 text-ochre mt-1.5 hidden sm:block" aria-hidden="true" />
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="space-y-1.5">
            {faqs.map((faq) => (
              <details key={faq.q} name="faq" className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-3 cursor-pointer font-heading font-bold text-navy text-sm hover:bg-muted/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-ochre text-lg shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-3 pb-3 text-muted-foreground text-xs leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
