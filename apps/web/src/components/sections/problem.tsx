import { Clock, ShieldAlert, Users } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "تزوير في دقائق",
    description: "الختم الأحمر يمكن تقليده بسهولة باستخدام أدوات بسيطة أو الذكاء الاصطناعي",
  },
  {
    icon: ShieldAlert,
    title: "لا توجد آلية تحقّق",
    description: "لا يملك المواطن طريقة بسيطة وسريعة للتأكد من صحة أي بيان",
  },
  {
    icon: Users,
    title: "قرارات خاطئة يوميًا",
    description: "آلاف المواطنين يتخذون قرارات بناءً على بيانات مزوّرة منتشرة على فيسبوك",
  },
];

export function Problem() {
  return (
    <section className="py-20 px-6 bg-background" aria-labelledby="problem-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-4">
            المشكلة: بيانات مزوّرة في كل مكان
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            بيانات وزارية مزوّرة تنتشر يوميًا على مواقع التواصل الاجتماعي
            — ولا يملك المواطن أي وسيلة للتحقّق من صحتها.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {impacts.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold font-heading text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy/5 border border-navy/10 rounded-2xl p-8 text-center">
          <p className="text-navy font-heading font-bold text-xl mb-2">
            هل تستطيع التمييز بين البيان الحقيقي والمزوّر؟
          </p>
          <p className="text-muted-foreground text-sm">
            في أغلب الحالات، لا أحد يستطيع — وهذا بالضبط هو المشكل.
          </p>
        </div>
      </div>
    </section>
  );
}
