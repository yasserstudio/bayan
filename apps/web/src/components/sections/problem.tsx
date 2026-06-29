import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, ShieldQuestionMarkIcon, UserMultiple02Icon } from "@hugeicons/core-free-icons";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { AnnouncementComparison } from "@/components/announcement-comparison";
import { QrPattern } from "@/components/qr-pattern";

const evidence = [
  {
    src: "/evidence/ennahar-interior-ministry.png",
    alt: "تغريدة النهار TV: وزارة الداخلية تفنّد بيانات مزوّرة منتشرة على مواقع التواصل",
    caption: "النهار TV — وزارة الداخلية تفنّد بيانات مزوّرة",
  },
  {
    src: "/evidence/interior-ministry-fake-cars.png",
    alt: "منشور وزارة الداخلية: تفنيد بيان مزوّر حول استيراد السيارات المستعملة",
    caption: "وزارة الداخلية — بيان مزوّر حول السيارات",
  },
];

const impacts = [
  {
    icon: Clock01Icon,
    title: "تزوير في 3 دقائق",
    description: "الختم الأحمر يتزوّر في 3 دقائق بأدوات مجانية ولا بالذكاء الاصطناعي",
  },
  {
    icon: ShieldQuestionMarkIcon,
    title: "ما كاينش كيفاش تتحقّق",
    description: "المواطن ما عندوش حتى طريقة بسيطة باش يتأكّد واش البيان صحيح ولا لا",
  },
  {
    icon: UserMultiple02Icon,
    title: "+27 مليون على فيسبوك",
    description: "+37 مليون جزائري أونلاين — البيانات المزوّرة توصل بزاف ناس وكل واحد يشاركها بلا ما يتأكّد",
  },
];

export function Problem() {
  return (
    <section className="min-h-dvh md:h-dvh py-12 md:py-0 flex flex-col justify-center px-6 bg-background overflow-hidden relative" aria-labelledby="problem-heading">
      <QrPattern variant="dark" />
      <div className="max-w-7xl mx-auto w-full relative">
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
                  <HugeiconsIcon icon={item.icon} className="h-4 w-4" aria-hidden="true" />
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

        <AnimateOnScroll>
          <div className="mt-6 md:mt-4">
            <p className="text-center text-muted-foreground text-xs mb-3">
              أدلّة حقيقية — وزارات تفنّد بيانات مزوّرة كل يوم
            </p>
            <div className="flex justify-center gap-3 md:gap-4">
              {evidence.map((item) => (
                <figure key={item.src} className="w-[140px] sm:w-[180px] md:w-[200px]">
                  <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 200px"
                    />
                  </div>
                  <figcaption className="text-center text-muted-foreground text-[10px] mt-1.5 leading-tight">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
