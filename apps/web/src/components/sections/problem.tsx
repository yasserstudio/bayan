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
          <div className="text-center mb-8">
            <h2 id="problem-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              المشكل: بيانات مزوّرة في كل بلاصة
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              بيانات وزارية مزوّرة تطلع كل يوم في فيسبوك وواتساب
              — وحتى واحد عندو كيفاش يتأكّد منها.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {impacts.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-5 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold font-heading text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6 text-center">
            <p className="text-navy font-heading font-bold text-xl mb-1">
              واش تقدر تفرّق بين البيان الصحيح والمزوّر؟
            </p>
            <p className="text-muted-foreground text-sm">
              في أغلب الحالات، حتى واحد ما يقدر — وهذا هو المشكل بالضبط.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
