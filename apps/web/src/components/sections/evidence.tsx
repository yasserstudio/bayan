import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
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

export function Evidence() {
  return (
    <section className="min-h-dvh md:h-dvh py-12 md:py-0 flex flex-col justify-center px-6 bg-background overflow-hidden relative" aria-labelledby="evidence-heading">
      <QrPattern variant="dark" />
      <div className="max-w-7xl mx-auto w-full relative">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="evidence-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-2">
              أدلّة حقيقية
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              ماشي خيال — وزارات جزائرية تفنّد بيانات مزوّرة منتشرة كل يوم في فيسبوك وواتساب
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {evidence.map((item) => (
              <figure key={item.src} className="w-[200px] sm:w-[240px] md:w-[280px]">
                <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
                  />
                </div>
                <figcaption className="text-center text-muted-foreground text-xs mt-2 leading-tight">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
