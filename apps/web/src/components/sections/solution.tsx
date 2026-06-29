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
      <div className="max-w-7xl mx-auto w-full relative grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14 items-center">
        <AnimateOnScroll>
          <div className="text-center md:text-start">
            <h2 id="solution-heading" className="text-3xl md:text-5xl font-extrabold font-heading text-navy mb-4 leading-[1.1]">
              الحل: بيان
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0 mb-6">
              نظام بسيط يبدّل الختم الأحمر اللي يتزوّر برمز QR
              ورمز تحقّق رقمي فريد لكل بيان.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre-light text-white hover:text-navy font-bold px-8 py-3 rounded-full transition-colors"
            >
              جرّب دوك ↓
            </a>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {methods.map((method, i) => (
            <AnimateOnScroll key={method.title}>
              <div className="group flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-ochre/40 transition-colors">
                <span className="font-heading font-extrabold text-4xl text-ochre/25 leading-none w-9 shrink-0 tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="w-11 h-11 rounded-lg bg-ochre/10 text-ochre flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={method.icon} className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3 className="font-bold font-heading text-base md:text-lg">{method.title}</h3>
                    <span className="text-[11px] font-bold text-ochre bg-ochre/10 px-2 py-0.5 rounded-full">
                      {method.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
