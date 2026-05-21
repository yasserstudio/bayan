import { ArrowRight, Building2, Globe, QrCode, UserCheck } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const steps = [
  {
    icon: Building2,
    label: "الوزارة تنشر البيان",
    description: "عبر المنصة الرقمية الرسمية تاعها",
  },
  {
    icon: QrCode,
    label: "النظام يولّد رمز QR",
    description: "رمز فريد لكل بيان + رمز تحقّق",
  },
  {
    icon: Globe,
    label: "البيان يتنشر مع الرمز",
    description: "بلا ختم أحمر — غير الرمز الرقمي",
  },
  {
    icon: UserCheck,
    label: "المواطن يتأكّد فورًا",
    description: "يمسح، يدخّل الرمز، ولا يرفع صورة",
  },
];

export function Proposal() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-background overflow-hidden" aria-labelledby="proposal-heading">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="proposal-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              كيفاش الحكومة تقدر تتبنّى هذا النظام
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مقترح مفتوح وبسيط — ما يحتاجش بنية تحتية معقّدة ويقدر يتطبّق بالتدريج
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.label}>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-navy text-white flex items-center justify-center mb-2">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -start-2 w-6 h-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold font-heading text-sm mb-1">{step.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-gold mt-2 hidden lg:block" aria-hidden="true" />
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6 text-center">
            <p className="text-navy font-heading font-bold text-lg mb-1">
              هذا مقترح مفتوح ومجاني
            </p>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
              بيان مشروع مستقل يقترح فكرة تقنية لخدمة الصالح العام.
              الحكومة والمؤسسات الرسمية مرحبا بيهم يستلهمو من هذا النظام
              ويطوّروه ولا يتبنّوه كيما يشوفو مناسب.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
