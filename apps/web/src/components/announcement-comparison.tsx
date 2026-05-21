const qrGrid = Array.from({ length: 25 }, (_, i) => {
  const dark = [0,1,2,3,4,5,6,10,12,14,18,19,20,21,22,23,24].includes(i);
  return <div key={i} className={dark ? "bg-navy" : "bg-transparent"} />;
});

function DocHeader() {
  return (
    <div className="text-center mb-2">
      <div className="w-6 h-6 mx-auto mb-1 rounded-full border border-current opacity-40 flex items-center justify-center">
        <span className="text-[6px]">★</span>
      </div>
      <p className="text-[7px] md:text-[8px] font-bold leading-tight">الجمهورية الجزائرية الديمقراطية الشعبية</p>
      <p className="text-[6px] md:text-[7px] leading-tight">وزارة التربية الوطنية</p>
    </div>
  );
}

function DocBody() {
  return (
    <div className="text-[5px] md:text-[6px] leading-relaxed text-navy/70 space-y-1">
      <p>
        رصدت خلية اليقظة الإلكترونية لوزارة التربية الوطنية على مواقع التواصل
        الاجتماعي بعض المنشورات المُعلنة على أنها صادرة عن وزارة التربية الوطنية
        حول موضوعات مختلفة منها:
      </p>
      <p>
        - منشور بعنوان &quot;بخصوص الامتحانات الرسمية لمادة الفلسفة ودرء الغش المدرسي&quot;
      </p>
      <p>
        وإذ تؤكد وزارة التربية الوطنية أن هذه المنشورات هي منشورات غير صادرة
        عنها، بل هي منشورات مُضلّلة وخادعة.
      </p>
    </div>
  );
}

export function AnnouncementComparison() {
  return (
    <div className="flex items-stretch gap-3 md:gap-5 max-w-md mx-auto" aria-hidden="true">
      {/* Original with red stamp */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white rounded-lg shadow-md p-3 md:p-4 flex-1 rotate-[-1deg] border border-black/5 relative">
          <DocHeader />
          <p className="text-center font-bold text-[9px] md:text-[10px] text-navy mb-2">بيــان</p>
          <DocBody />

          {/* Red stamp */}
          <div className="absolute bottom-3 start-3 w-10 h-10 md:w-12 md:h-12">
            <div className="w-full h-full rounded-full border-2 border-red-500/70 flex items-center justify-center relative">
              <div className="w-[80%] h-[80%] rounded-full border border-red-500/50 flex items-center justify-center">
                <span className="text-red-500/60 text-[4px] md:text-[5px] font-bold text-center leading-none">وزارة التربية</span>
              </div>
            </div>
          </div>

          {/* Handwritten date */}
          <p className="text-[5px] text-navy/40 mt-2 italic">25 مارس 2026</p>
        </div>
        <p className="text-center text-xs text-red-500/80 font-bold mt-2">يتزوّر بسهولة</p>
      </div>

      {/* Bayan version with QR */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white rounded-lg shadow-md p-3 md:p-4 flex-1 border border-gold/20 relative">
          <DocHeader />
          <p className="text-center font-bold text-[9px] md:text-[10px] text-navy mb-2">بيــان</p>
          <DocBody />

          {/* QR code */}
          <div className="absolute bottom-3 end-3 flex flex-col items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 grid grid-cols-5 grid-rows-5 gap-[1px] p-0.5 border border-navy/10 rounded-sm">
              {qrGrid}
            </div>
            <span className="text-[4px] md:text-[5px] font-mono text-navy/60 mt-0.5">MEN-2026-0312</span>
          </div>

          {/* Typed date */}
          <p className="text-[5px] text-navy/50 mt-2">الجزائر في 25 مارس 2026</p>
        </div>
        <p className="text-center text-xs text-gold font-bold mt-2">ما يتزوّرش</p>
      </div>
    </div>
  );
}
