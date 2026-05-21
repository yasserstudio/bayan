import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const evidence = [
  {
    id: "ennahar-interior",
    image: "/evidence/ennahar-interior-ministry.png",
    alt: "تغريدة النهار TV: وزارة الداخلية تفنّد بيانات مزوّرة منتشرة على مواقع التواصل",
    source: "النهار TV — @ennaharonline",
    summary: "وزارة الداخلية تفنّد بيانات مزوّرة منتشرة على مواقع التواصل حول استيراد السيارات المستعملة",
  },
];

export function Stories() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-background overflow-hidden" aria-labelledby="stories-heading">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 id="stories-heading" className="text-3xl md:text-4xl font-extrabold font-heading text-navy mb-3">
              المشكل حقيقي — هاك الدليل
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              الوزارات والإعلام يفنّدو بيانات مزوّرة كل يوم — هذي ماشي نظرية، هذا الواقع
            </p>
          </div>
        </AnimateOnScroll>

        <div className={evidence.length === 1 ? "max-w-sm mx-auto" : "grid md:grid-cols-2 gap-4"}>
          {evidence.map((item) => (
            <AnimateOnScroll key={item.id}>
              <figure className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="text-foreground text-sm leading-relaxed mb-1">
                    {item.summary}
                  </p>
                  <p className="text-muted-foreground text-xs" dir="ltr">
                    {item.source}
                  </p>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
