import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Demo } from "@/components/sections/demo";
import { Solution } from "@/components/sections/solution";
import { Pillars } from "@/components/sections/pillars";
import { Proposal } from "@/components/sections/proposal";
import { ShareCta } from "@/components/sections/share-cta";
import { FullPageScroll } from "@/components/full-page-scroll";

export default function Home() {
  return (
    <main>
      <a href="#demo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded-full focus:font-bold">
        تخطّ إلى التحقّق
      </a>
      <FullPageScroll sectionCount={7}>
        <Hero />
        <Problem />
        <Solution />
        <Demo />
        <Pillars />
        <Proposal />
        <ShareCta />
      </FullPageScroll>
    </main>
  );
}
