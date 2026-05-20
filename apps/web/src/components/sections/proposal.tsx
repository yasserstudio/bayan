import { ArrowLeft, Building2, Globe, QrCode, UserCheck } from "lucide-react";

const steps = [
  {
    icon: Building2,
    label: "الوزارة تنشر البيان",
    description: "عبر المنصة الرقمية الرسمية",
  },
  {
    icon: QrCode,
    label: "النظام يُولّد رمز QR",
    description: "رمز فريد لكل بيان + رمز تحقّق",
  },
  {
    icon: Globe,
    label: "البيان يُنشر مع الرمز",
    description: "بدلاً من الختم الأحمر القابل للتزوير",
  },
  {
    icon: UserCheck,
    label: "المواطن يتحقّق فورًا",
    description: "عبر المسح أو الإدخال أو رفع الصورة",
  },
];

export function Proposal() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            كيف يمكن للحكومة تبنّي هذا النظام
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مقترح مفتوح وبسيط — لا يحتاج بنية تحتية معقّدة ويمكن تطبيقه
            تدريجيًا
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-navy text-white flex items-center justify-center mb-3">
                  <step.icon className="h-7 w-7" />
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
                <ArrowLeft className="h-5 w-5 text-gold mt-3 hidden lg:block rotate-180" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 bg-navy/5 border border-navy/10 rounded-2xl p-8 text-center">
          <p className="text-navy font-heading font-bold text-lg mb-2">
            هذا مقترح مفتوح ومجاني
          </p>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            بيان مشروع مستقل يطرح فكرة تقنية لخدمة المصلحة العامة.
            الحكومة والمؤسسات الرسمية مدعوّة للاستلهام من هذا النظام
            وتطويره أو تبنّيه بالشكل الذي تراه مناسبًا.
          </p>
        </div>
      </div>
    </section>
  );
}
