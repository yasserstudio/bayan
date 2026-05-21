import { AnimateOnScroll } from "@/components/animate-on-scroll";

const faqs = [
  {
    q: "واش بيان موقع تاع الحكومة؟",
    a: "لا، بيان مشروع مستقل — ماشي موقع حكومي رسمي. هذي فكرة تقنية نقترحوها باش الحكومة تقدر تتبنّاها وتحمي المواطنين من التزوير.",
  },
  {
    q: "هذا غير ديمو — كيفاش يفيدني دروك؟",
    a: "الديمو يوريك كيفاش النظام يخدم. دروك الأهم هو إنك تفهم الفكرة وتشاركها — كل ما بزاف ناس عرفوها، كل ما قربنا من التطبيق الحقيقي.",
  },
  {
    q: "واش المعلومات تاعي في أمان؟",
    a: "بيان ما يجمعش حتى معلومة شخصية. ما كاينش تسجيل، ما كاينش كوكيز تتبّع. تدخل، تتحقّق، وتخرج.",
  },
  {
    q: "وقتاش تخرج النسخة الكاملة؟",
    a: "النسخة الثانية غادي تخدم ببيانات حقيقية من المواقع الرسمية تاع الوزارات. نخدمو عليها دروك — تابعونا باش تكونو أول ناس يعرفو.",
  },
  {
    q: "كيفاش نبلّغ على بيان مزوّر؟",
    a: "في النسخة الحالية ما كاينش نظام تبليغ. في النسخة الجاية غادي تقدر تبلّغ مباشرة وتساعد في حماية المجتمع.",
  },
];

export function Faq() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-navy/[0.02] overflow-hidden" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto w-full">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              أسئلة يسقسوها الناس
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <AnimateOnScroll key={faq.q}>
              <details name="faq" className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer font-heading font-bold text-navy text-sm hover:bg-muted/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-gold text-lg shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
