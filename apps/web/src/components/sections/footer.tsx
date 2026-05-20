export function Footer() {
  return (
    <footer className="py-10 px-6 bg-navy border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div>
          <h3 className="text-white font-heading font-extrabold text-2xl mb-1">
            بيان
          </h3>
          <p className="text-white/50 text-sm">تحقّق من كل بيان</p>
        </div>

        <div className="text-white/30 text-xs space-y-1">
          <p>
            مبادرة من{" "}
            <a
              href="https://yasser.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              yasser.studio
            </a>
          </p>
          <p>مشروع مستقل — ليس موقعًا حكوميًا رسميًا</p>
          <p dir="ltr" className="font-sans">
            Projet indépendant — ne représente aucun organisme gouvernemental
          </p>
        </div>

        <div className="pt-4 border-t border-white/5 text-white/20 text-xs">
          © {new Date().getFullYear()} بيان
        </div>
      </div>
    </footer>
  );
}
