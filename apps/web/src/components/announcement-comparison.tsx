import Image from "next/image";

export function AnnouncementComparison() {
  return (
    <div className="flex items-start justify-center gap-4 md:gap-8 max-w-2xl mx-auto" aria-hidden="true">
      {/* Forgeable version */}
      <div className="flex-1 max-w-[220px] md:max-w-[260px] flex flex-col items-center">
        <div className="w-full rounded-lg shadow-lg overflow-hidden border border-black/5 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/traditional-announcement.jpeg"
            alt=""
            width={800}
            height={1132}
            className="w-full h-auto"
            sizes="(max-width: 768px) 220px, 260px"
          />
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-3 h-3 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <span className="text-sm font-bold text-red-500">يتزوّر بسهولة</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 self-center hidden sm:flex flex-col items-center gap-1">
        <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M5 12l5-5M5 12l5 5" />
        </svg>
      </div>

      {/* Bayan verified version */}
      <div className="flex-1 max-w-[220px] md:max-w-[260px] flex flex-col items-center">
        <div className="w-full rounded-lg shadow-lg overflow-hidden border border-gold/30 ring-1 ring-gold/10">
          <Image
            src="/sample-announcement.png"
            alt=""
            width={800}
            height={1100}
            className="w-full h-auto"
            sizes="(max-width: 768px) 220px, 260px"
          />
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
            <svg className="w-3 h-3 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gold">ما يتزوّرش</span>
        </div>
      </div>
    </div>
  );
}
