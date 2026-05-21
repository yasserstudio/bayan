export function QuranQuote() {
  return (
    <section className="h-dvh flex flex-col justify-center px-6 bg-navy/[0.03]" aria-label="آية قرآنية">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="relative">
          <span className="absolute -top-10 md:-top-8 start-0 text-5xl md:text-7xl text-gold/20 font-serif leading-none select-none" aria-hidden="true">
            &#x201D;
          </span>
          <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy leading-relaxed mb-6">
            يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا
          </p>
          <cite className="text-muted-foreground text-base not-italic">
            سورة الحجرات — الآية 6
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
