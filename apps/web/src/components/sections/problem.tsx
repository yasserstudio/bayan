import Image from "next/image";
import { Clock, ShieldAlert, Users } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const impacts = [
  {
    icon: Clock,
    title: "تزوير في 3 دقائق",
    description: "الختم الأحمر يتزوّر في 3 دقائق بأدوات مجانية ولا بالذكاء الاصطناعي",
  },
  {
    icon: ShieldAlert,
    title: "ما كاينش كيفاش تتحقّق",
    description: "المواطن ما عندوش حتى طريقة بسيطة باش يتأكّد واش البيان صحيح ولا لا",
  },
  {
    icon: Users,
    title: "+27 مليون على فيسبوك",
    description: "+37 مليون جزائري أونلاين — البيانات المزوّرة توصل بزاف ناس وكل واحد يشاركها بلا ما يتأكّد",
  },
];

export function Problem() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-background overflow-hidden" aria-labelledby="problem-heading">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll>
          <blockquote className="text-center mb-6">
            <p className="text-xl md:text-2xl font-heading font-bold text-navy/80 leading-relaxed">
              &ldquo;يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا&rdquo;
            </p>
            <cite className="text-muted-foreground text-sm not-italic">
              سورة الحجرات — الآية 6
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="text-center mb-5">
            <h2 id="problem-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-2">
              المشكل: بيانات مزوّرة في كل بلاصة
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              بيانات وزارية مزوّرة تطلع كل يوم في فيسبوك وواتساب
              — وحتى واحد عندو كيفاش يتأكّد منها.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {impacts.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-4 text-center h-full">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold font-heading text-base mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <figure className="max-w-xs mx-auto bg-card border border-border rounded-xl overflow-hidden">
            <div className="relative aspect-[16/10] bg-muted">
              <Image
                src="/evidence/ennahar-interior-ministry.png"
                alt="تغريدة النهار TV: وزارة الداخلية تفنّد بيانات مزوّرة منتشرة على مواقع التواصل"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
            <figcaption className="p-3 text-center">
              <p className="text-muted-foreground text-xs">
                وزارة الداخلية تفنّد بيانات مزوّرة — الدليل حقيقي
              </p>
            </figcaption>
          </figure>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
