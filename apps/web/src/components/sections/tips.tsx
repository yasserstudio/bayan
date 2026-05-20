import { AlertTriangle, Eye, Globe, Link2, Lock, MessageSquareWarning, Share2 } from "lucide-react";

const tips = [
  {
    icon: Eye,
    title: "تحقّق من المصدر",
    description:
      "لا تثق في أي بيان منشور على فيسبوك أو واتساب — ارجع دائمًا للموقع الرسمي للوزارة أو الجهة المعنية.",
  },
  {
    icon: Link2,
    title: "افحص الروابط قبل النقر",
    description:
      "تأكّد أن الرابط ينتهي بـ .gov.dz أو النطاق الرسمي المعروف. الروابط المختصرة أو الغريبة غالبًا مشبوهة.",
  },
  {
    icon: AlertTriangle,
    title: "احذر من الاستعجال",
    description:
      "البيانات المزوّرة تعتمد على خلق حالة ذعر — \"آخر أجل غدًا!\" أو \"قرار فوري!\". البيانات الرسمية تمنح مهلة كافية.",
  },
  {
    icon: MessageSquareWarning,
    title: "قارن مع مصادر متعددة",
    description:
      "إذا لم تجد البيان على الموقع الرسمي ولا في وسائل الإعلام الموثوقة، فهو على الأرجح مزوّر.",
  },
  {
    icon: Share2,
    title: "لا تشارك قبل التحقّق",
    description:
      "مشاركة بيان مزوّر تضرّ الآخرين. تأكّد أولاً ثم شارك — هذا أبسط شكل من أشكال المسؤولية الرقمية.",
  },
  {
    icon: Lock,
    title: "فعّل المصادقة الثنائية",
    description:
      "حساباتك على مواقع التواصل تُستخدم أحيانًا لنشر بيانات مزوّرة بدون علمك. فعّل 2FA لحماية حساباتك.",
  },
  {
    icon: Globe,
    title: "ابحث في الموقع الرسمي",
    description:
      "معظم الوزارات الجزائرية تنشر بياناتها على مواقعها الرسمية. ابحث عن الخبر مباشرة قبل تصديقه.",
  },
];

export function Tips() {
  return (
    <section className="py-20 px-6 bg-navy/[0.02]" aria-labelledby="tips-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="tips-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            وعي رقمي: كيف تحمي نفسك
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نصائح عملية يمكنك تطبيقها الآن لحماية نفسك وعائلتك من
            البيانات المزوّرة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, i) => (
            <div
              key={tip.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-gold/20 transition-colors"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
