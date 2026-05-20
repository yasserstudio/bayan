import { BookOpen, Flag, QrCode, Shield } from "lucide-react";

const pillars = [
  {
    icon: QrCode,
    title: "تحقّق",
    titleEn: "Verify",
    description: "امسح رمز QR أو أدخل رمز التحقّق أو ارفع صورة البيان",
    status: "متوفر في النسخة التجريبية",
    available: true,
  },
  {
    icon: BookOpen,
    title: "الدليل الرسمي",
    titleEn: "Directory",
    description: "تصفّح جميع البيانات الحكومية الرسمية في مكان واحد",
    status: "قريبًا في النسخة الثانية",
    available: false,
  },
  {
    icon: Flag,
    title: "بلّغ",
    titleEn: "Report",
    description: "بلّغ عن بيان مشبوه وساهم في حماية المجتمع",
    status: "قريبًا في النسخة الثانية",
    available: false,
  },
  {
    icon: Shield,
    title: "وعي رقمي",
    titleEn: "Tips",
    description: "نصائح عملية لحماية نفسك من التضليل الرقمي",
    status: "متوفر أدناه",
    available: true,
  },
];

export function Pillars() {
  return (
    <section className="py-20 px-6 bg-navy/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            أربعة محاور لحماية المواطن
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            بيان ليس فقط أداة تحقّق — بل منظومة متكاملة لمكافحة التضليل
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`rounded-2xl p-6 text-center border transition-colors ${
                pillar.available
                  ? "bg-card border-gold/20 hover:border-gold/40"
                  : "bg-card border-border opacity-75"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  pillar.available
                    ? "bg-gold/10 text-gold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold font-heading text-lg mb-1">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {pillar.description}
              </p>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full ${
                  pillar.available
                    ? "bg-gold/10 text-gold font-bold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {pillar.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
