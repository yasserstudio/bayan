import { Clock, ShieldAlert, Users } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { AnnouncementComparison } from "@/components/announcement-comparison";
import { QrPattern } from "@/components/qr-pattern";

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
    <section className="h-dvh flex flex-col justify-center px-6 bg-background overflow-hidden relative" aria-labelledby="problem-heading">
      <QrPattern variant="dark" />
      <div className="max-w-5xl mx-auto w-full relative">
        <AnimateOnScroll>
          <div className="text-center mb-4">
            <h2 id="problem-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-2">
              المشكل: بيانات مزوّرة في كل بلاصة
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              بيانات وزارية مزوّرة تطلع كل يوم في فيسبوك وواتساب
              — وحتى واحد عندو كيفاش يتأكّد منها.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {impacts.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-3 text-center h-full">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-1.5">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="font-bold font-heading text-sm mb-0.5">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <AnnouncementComparison />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
