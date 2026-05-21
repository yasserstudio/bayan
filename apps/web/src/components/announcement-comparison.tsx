const qrGrid = Array.from({ length: 49 }, (_, i) => {
  const dark = [0,1,2,3,4,5,6,7,13,14,21,28,35,36,37,38,39,40,41,42,43,44,45,46,47,48,8,10,12,16,18,20,22,24,26,30,32,34].includes(i);
  return <div key={i} className={dark ? "bg-navy" : "bg-transparent"} />;
});

function DocHeader() {
  return (
    <div className="text-center mb-3 md:mb-4">
      <div className="w-7 h-7 md:w-9 md:h-9 mx-auto mb-1.5 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
          <text x="50" y="45" textAnchor="middle" fontSize="18" fill="currentColor">★</text>
          <text x="50" y="62" textAnchor="middle" fontSize="7" fill="currentColor">ج . ج</text>
        </svg>
      </div>
      <p className="text-[7px] md:text-[9px] font-bold leading-tight text-navy">
        الجمهورية الجزائرية الديمقراطية الشعبية
      </p>
      <p className="text-[6px] md:text-[8px] leading-tight text-navy/70 mt-0.5">
        وزارة التربية الوطنية
      </p>
      <div className="w-8 md:w-12 h-px bg-navy/20 mx-auto mt-1.5 md:mt-2" />
    </div>
  );
}

function DocRefLine() {
  return (
    <div className="flex justify-between text-[5px] md:text-[6px] text-navy/50 mb-2 md:mb-3 px-1">
      <span>الرقم: 312 / و.ت.و / 2026</span>
      <span>الجزائر في 25 مارس 2026</span>
    </div>
  );
}

function DocBody() {
  return (
    <div className="text-[5.5px] md:text-[7px] leading-[1.7] text-navy/70 space-y-1.5 md:space-y-2 px-1">
      <p>
        رصدت خلية اليقظة الإلكترونية لوزارة التربية الوطنية على مواقع التواصل
        الاجتماعي بعض المنشورات المُعلنة على أنها صادرة عن الوزارة حول موضوعات
        مختلفة منها:
      </p>
      <p className="pr-2 md:pr-3">
        – منشور بعنوان &quot;بخصوص الامتحانات الرسمية لمادة الفلسفة ودرء الغش المدرسي&quot;
      </p>
      <p>
        وإذ تؤكد وزارة التربية الوطنية أن هذه المنشورات هي منشورات غير صادرة
        عنها، بل هي منشورات مُضلّلة وخادعة، فإنها تدعو المواطنين إلى التحقّق من
        صحة أي بيان قبل تداوله.
      </p>
      <p>
        وتهيب الوزارة بالمواطنين الكرام إلى عدم نشر أو مشاركة أي وثيقة دون
        التأكّد من مصدرها الرسمي، وتذكّرهم بأن نشر الأخبار الكاذبة يُعرّض
        صاحبه للمتابعة القانونية.
      </p>
    </div>
  );
}

function DocSignature() {
  return (
    <div className="mt-auto pt-3 md:pt-4 text-[5px] md:text-[6.5px] text-navy/50 text-start px-1">
      <p>عن وزير التربية الوطنية</p>
      <p className="mt-0.5">مدير الاتصال والأنشطة التربوية</p>
    </div>
  );
}

export function AnnouncementComparison() {
  return (
    <div className="flex items-start justify-center gap-4 md:gap-8 max-w-2xl mx-auto" aria-hidden="true">
      {/* Forgeable version */}
      <div className="flex-1 max-w-[240px] md:max-w-[280px] flex flex-col items-center">
        <div className="w-full aspect-[1/1.414] bg-white rounded-lg shadow-lg border border-black/5 p-3 md:p-5 flex flex-col relative rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
          <DocHeader />
          <p className="text-center font-bold text-[9px] md:text-[11px] text-navy mb-2 md:mb-3">
            بيــان
          </p>
          <DocRefLine />
          <DocBody />
          <DocSignature />

          {/* Red stamp overlay */}
          <div className="absolute bottom-6 start-4 md:bottom-8 md:start-6 w-12 h-12 md:w-16 md:h-16 rotate-[-12deg] opacity-70">
            <div className="w-full h-full rounded-full border-[2.5px] md:border-[3px] border-red-500 flex items-center justify-center">
              <div className="w-[78%] h-[78%] rounded-full border border-red-500/60 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-red-500 text-[4px] md:text-[5.5px] font-bold block leading-none">
                    وزارة التربية
                  </span>
                  <span className="text-red-500 text-[3px] md:text-[4px] block leading-none mt-0.5">
                    الوطنية
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scribble signature */}
          <div className="absolute bottom-4 end-4 md:bottom-6 md:end-6 opacity-30">
            <svg width="40" height="16" viewBox="0 0 40 16" className="md:w-[50px]">
              <path d="M2 12 C8 2, 14 14, 20 8 S30 2, 38 6" fill="none" stroke="#0F2B3C" strokeWidth="1" />
            </svg>
          </div>
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
      <div className="flex-1 max-w-[240px] md:max-w-[280px] flex flex-col items-center">
        <div className="w-full aspect-[1/1.414] bg-white rounded-lg shadow-lg border border-gold/30 p-3 md:p-5 flex flex-col relative ring-1 ring-gold/10">
          <DocHeader />
          <p className="text-center font-bold text-[9px] md:text-[11px] text-navy mb-2 md:mb-3">
            بيــان
          </p>
          <DocRefLine />
          <DocBody />
          <DocSignature />

          {/* QR code */}
          <div className="absolute bottom-4 start-3 md:bottom-6 md:start-5 flex flex-col items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 grid grid-cols-7 grid-rows-7 gap-[0.5px] md:gap-[1px] p-0.5 md:p-1 bg-white border border-navy/10 rounded-sm shadow-sm">
              {qrGrid}
            </div>
            <span className="text-[4px] md:text-[5px] font-mono text-navy/50 mt-0.5">
              MEN-2026-0312
            </span>
          </div>

          {/* Verified badge */}
          <div className="absolute top-2 start-2 md:top-3 md:start-3">
            <div className="flex items-center gap-0.5 bg-gold/10 rounded-full px-1.5 py-0.5">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[4px] md:text-[5px] font-bold text-gold">موثّق</span>
            </div>
          </div>
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
