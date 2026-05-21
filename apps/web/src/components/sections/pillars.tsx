import { BookOpen, Flag, QrCode, Shield } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const pillars = [
  {
    icon: QrCode,
    title: "تحقّق",
    description: "امسح رمز QR ولا دخّل رمز التحقّق ولا ارفع صورة البيان",
    status: "متوفّر في الديمو",
    available: true,
  },
  {
    icon: BookOpen,
    title: "الدليل الرسمي",
    description: "تصفّح كل البيانات الحكومية الرسمية في بلاصة وحدة",
    status: "جاي في النسخة الثانية",
    available: false,
  },
  {
    icon: Flag,
    title: "بلّغ",
    description: "بلّغ على بيان مشبوه وعاون في حماية المجتمع",
    status: "جاي في النسخة الثانية",
    available: false,
  },
  {
    icon: Shield,
    title: "وعي رقمي",
    description: "نصائح عملية باش تحمي روحك من التضليل الرقمي",
    status: "متوفّر هنا تحت",
    available: true,
  },
];

export function Pillars() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-navy/[0.02] overflow-hidden" aria-labelledby="pillars-heading">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="pillars-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              4 حوايج باش نحميو رواحنا
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              بيان ماشي غير أداة تحقّق — هي منظومة كاملة ضد التضليل
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {pillars.map((pillar) => (
            <AnimateOnScroll key={pillar.title}>
              <div
                className={`rounded-2xl p-5 text-center border transition-colors h-full ${
                  pillar.available
                    ? "bg-card border-gold/20 hover:border-gold/40"
                    : "bg-card border-border opacity-75"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${
                    pillar.available
                      ? "bg-gold/10 text-gold"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold font-heading text-base mb-1">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {pillar.description}
                </p>
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full ${
                    pillar.available
                      ? "bg-navy/10 text-navy font-bold"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {pillar.status}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
