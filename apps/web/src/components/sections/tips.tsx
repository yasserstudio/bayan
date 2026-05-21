import { AlertTriangle, Eye, Globe, Share2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const tips = [
  {
    icon: Eye,
    title: "تأكّد من المصدر",
    description:
      "ما تصدّقش كل حاجة تشوفها في فيسبوك — روح شوف الموقع الرسمي تاع الوزارة.",
  },
  {
    icon: AlertTriangle,
    title: "ردّ بالك من الاستعجال",
    description:
      "\"آخر أجل غدوة!\" ولا \"قرار فوري!\" — البيانات المزوّرة ديما تخلعك. الرسمية تعطيك الوقت.",
  },
  {
    icon: Share2,
    title: "ما تشاركش قبل ما تتأكّد",
    description:
      "كي تشارك بيان مزوّر تضرّ ناس آخرين. تأكّد الأول وبعدها شارك.",
  },
  {
    icon: Globe,
    title: "ابحث في الموقع الرسمي",
    description:
      "أغلب الوزارات تنشر بياناتها في مواقعها الرسمية. ابحث مباشرة قبل ما تصدّق.",
  },
];

export function Tips() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-navy/[0.02] overflow-hidden" aria-labelledby="tips-heading">
      <div className="max-w-4xl mx-auto w-full">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="tips-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              وعي رقمي: كيفاش تحمي روحك
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نصائح عملية تقدر تطبّقها دروك باش تحمي روحك وعائلتك من البيانات المزوّرة
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <AnimateOnScroll key={tip.title}>
              <div className="bg-card border border-border rounded-xl p-5 hover:border-gold/20 transition-colors h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-0.5">
                    <tip.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading text-sm mb-1">
                      <span className="text-navy font-bold me-1">{i + 1}.</span>
                      {tip.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
