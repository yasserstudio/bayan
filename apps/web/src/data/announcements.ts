export type Announcement = {
  code: string;
  ministry: string;
  ministryPrefix: string;
  title: string;
  content: string;
  date: string;
  status: "active" | "expired" | "revoked";
  category: string;
};

export const ministries = [
  { prefix: "MEN", name: "وزارة التربية الوطنية", nameEn: "Ministry of National Education" },
  { prefix: "MES", name: "وزارة التعليم العالي والبحث العلمي", nameEn: "Ministry of Higher Education" },
  { prefix: "MIN", name: "وزارة الداخلية والجماعات المحلية", nameEn: "Ministry of Interior" },
  { prefix: "MTR", name: "وزارة العمل والتشغيل والضمان الاجتماعي", nameEn: "Ministry of Labor" },
] as const;

export const announcements: Announcement[] = [
  {
    code: "MEN-2026-0847",
    ministry: "وزارة التربية الوطنية",
    ministryPrefix: "MEN",
    title: "فتح التسجيلات للامتحانات المهنية بعنوان سنة 2026",
    content:
      "تُعلم وزارة التربية الوطنية عن فتح التسجيلات للامتحانات المهنية بعنوان سنة 2026 للالتحاق بمختلف الرتب الإدارية التابعة للأسلاك الخاصة بالتربية الوطنية، وذلك في الفترة الممتدة من 07 إلى 31 ماي 2026، بعدد إجمالي يُقدّر بـ 8704 منصبًا ماليًا. وسيتم تسيير مختلف مراحل هذه العملية حصريًا عبر المنصة الرقمية الرسمية لوزارة التربية الوطنية.",
    date: "2026-05-06",
    status: "active",
    category: "توظيف",
  },
  {
    code: "MES-2026-0132",
    ministry: "وزارة التعليم العالي والبحث العلمي",
    ministryPrefix: "MES",
    title: "نتائج مسابقة الدكتوراه للسنة الجامعية 2026-2027",
    content:
      "تُعلم وزارة التعليم العالي والبحث العلمي أنه سيتم الإعلان عن نتائج مسابقة الدكتوراه للسنة الجامعية 2026-2027 عبر الموقع الرسمي للوزارة ومواقع المؤسسات الجامعية ابتداءً من يوم 15 جوان 2026. يُرجى من جميع المترشحين الاطلاع على النتائج حصريًا عبر القنوات الرسمية.",
    date: "2026-05-10",
    status: "active",
    category: "امتحانات",
  },
  {
    code: "MIN-2026-0045",
    ministry: "وزارة الداخلية والجماعات المحلية",
    ministryPrefix: "MIN",
    title: "تمديد آجال تجديد بطاقة التعريف الوطنية البيومترية",
    content:
      "تُعلم وزارة الداخلية والجماعات المحلية المواطنين أنه تقرر تمديد آجال تجديد بطاقة التعريف الوطنية البيومترية إلى غاية 31 ديسمبر 2026. يُدعى المواطنون الذين لم يقوموا بعد بتجديد بطاقاتهم إلى التقرب من مقر البلدية التابعين لها لإتمام الإجراءات.",
    date: "2026-04-20",
    status: "active",
    category: "إجراءات إدارية",
  },
];

export function findAnnouncement(code: string): Announcement | undefined {
  return announcements.find(
    (a) => a.code.toLowerCase() === code.toLowerCase()
  );
}
