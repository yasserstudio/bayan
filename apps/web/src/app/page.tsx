import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Demo } from "@/components/sections/demo";
import { Pillars } from "@/components/sections/pillars";
import { Proposal } from "@/components/sections/proposal";
import { Tips } from "@/components/sections/tips";
import { ShareCta } from "@/components/sections/share-cta";
import { Footer } from "@/components/sections/footer";
import { Disclaimer } from "@/components/disclaimer";

export default function Home() {
  return (
    <main>
      <Disclaimer />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Pillars />
      <Proposal />
      <Tips />
      <ShareCta />
      <Footer />
    </main>
  );
}
