import { Camera, Keyboard, QrCode } from "lucide-react";

const methods = [
  {
    icon: QrCode,
    title: "امسح رمز QR",
    description: "وجّه كاميرا هاتفك نحو رمز QR الموجود على البيان المطبوع",
    tag: "بيان مطبوع",
  },
  {
    icon: Keyboard,
    title: "أدخل رمز التحقّق",
    description: "اكتب الرمز الظاهر على البيان (مثال: MEN-2026-0847)",
    tag: "بيان رقمي أو مطبوع",
  },
  {
    icon: Camera,
    title: "ارفع صورة البيان",
    description: "التقط صورة أو ارفع لقطة شاشة — سيقرأ النظام الرمز تلقائيًا",
    tag: "نفس الهاتف",
  },
];

export function Solution() {
  return (
    <section className="py-20 px-6 bg-navy/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            الحل: بيان — تحقّق من كل بيان
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نظام تحقّق بسيط يستبدل الختم الأحمر القابل للتزوير برمز QR
            ورمز تحقّق رقمي فريد لكل بيان.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, i) => (
            <div
              key={method.title}
              className="relative bg-card border border-border rounded-2xl p-6 group hover:border-gold/30 transition-colors"
            >
              <div className="absolute -top-3 start-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                {method.tag}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4 mt-2">
                <method.icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gold font-bold">{i + 1}</span>
                <h3 className="font-bold font-heading text-lg">{method.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3 rounded-full transition-colors"
          >
            جرّب الآن ↓
          </a>
        </div>
      </div>
    </section>
  );
}
