import { HugeiconsIcon } from "@hugeicons/react";
import { Camera01Icon, KeyboardIcon, QrCodeIcon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { QrPattern } from "@/components/qr-pattern";

const methods = [
  {
    icon: QrCodeIcon,
    title: "امسح رمز QR",
    description: "وجّه كاميرا تليفونك على رمز QR اللي على البيان المطبوع",
    tag: "بيان مطبوع",
  },
  {
    icon: KeyboardIcon,
    title: "دخّل رمز التحقّق",
    description: "اكتب الرمز اللي باين على البيان (مثال: MEN-2026-0847)",
    tag: "بيان رقمي ولا مطبوع",
  },
  {
    icon: Camera01Icon,
    title: "ارفع صورة البيان",
    description: "صوّر البيان ولا ارفع سكرين — النظام يقرا الرمز وحدو",
    tag: "نفس التليفون",
  },
];

export function Solution() {
  return (
    <section className="min-h-dvh md:h-dvh py-12 md:py-0 flex flex-col justify-center px-6 bg-navy/[0.02] overflow-hidden relative" aria-labelledby="solution-heading">
      <QrPattern variant="dark" />
      <div className="max-w-7xl mx-auto w-full relative">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="solution-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              الحل: بيان — اتأكّد من كل بيان
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نظام بسيط يبدّل الختم الأحمر اللي يتزوّر برمز QR
              ورمز تحقّق رقمي فريد لكل بيان.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {methods.map((method, i) => (
            <AnimateOnScroll key={method.title}>
              <div className="relative bg-card border border-border rounded-xl p-5 pt-6 group hover:border-ochre/30 transition-colors h-full">
                <div className="absolute -top-3 start-4 bg-ochre text-navy text-xs font-bold px-3 py-1 rounded-full">
                  {method.tag}
                </div>
                <div className="w-12 h-12 rounded-xl bg-ochre/10 text-ochre flex items-center justify-center mb-3 mt-2">
                  <HugeiconsIcon icon={method.icon} className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-navy/60 font-bold">{i + 1}</span>
                  <h3 className="font-bold font-heading text-lg">{method.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre-light text-navy font-bold px-8 py-3 rounded-full transition-colors"
            >
              جرّب دوك ↓
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
