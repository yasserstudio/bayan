import type { Metadata, Viewport } from "next";
import { Cairo, Geist } from "next/font/google";
import "./globals.css";

const siteTitle = "بيان — اتأكّد من البيانات الحكومية الجزائرية";
const siteDescription =
  "موقع مستقل باش تتأكّد من البيانات الحكومية الجزائرية. امسح رمز QR ولا ارفع صورة البيان باش تعرف واش صحيح في ثوانٍ.";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "بيان",
      url: "https://bayan.yasser.studio",
      description: siteDescription,
      inLanguage: "ar-DZ",
    },
    {
      "@type": "Organization",
      name: "Yasser Studio",
      url: "https://yasser.studio",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "واش بيان موقع تاع الحكومة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "لا، بيان مشروع مستقل — ماشي موقع حكومي رسمي. هذي فكرة تقنية نقترحوها باش الحكومة تقدر تتبنّاها وتحمي المواطنين من التزوير.",
          },
        },
        {
          "@type": "Question",
          name: "هذا غير ديمو — كيفاش يفيدني دروك؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "الديمو يوريك كيفاش النظام يخدم. دروك الأهم هو إنك تفهم الفكرة وتشاركها — كل ما بزاف ناس عرفوها، كل ما قربنا من التطبيق الحقيقي.",
          },
        },
        {
          "@type": "Question",
          name: "واش المعلومات تاعي في أمان؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "بيان ما يجمعش حتى معلومة شخصية. ما كاينش تسجيل، ما كاينش كوكيز تتبّع. تدخل، تتحقّق، وتخرج.",
          },
        },
        {
          "@type": "Question",
          name: "وقتاش تخرج النسخة الكاملة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "النسخة الثانية غادي تخدم ببيانات حقيقية من المواقع الرسمية تاع الوزارات. نخدمو عليها دروك.",
          },
        },
      ],
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0F2B3C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bayan.yasser.studio"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "بيان",
    "التحقق من البيانات الحكومية",
    "الجزائر",
    "بيان مزور",
    "تحقق من بيان حكومي",
    "واش البيان صحيح",
    "بيانات مزورة الجزائر",
    "وثيقة رسمية",
    "تزوير",
  ],
  authors: [{ name: "Yasser", url: "https://yasser.studio" }],
  creator: "Yasser Studio",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://bayan.yasser.studio",
    siteName: "بيان",
    locale: "ar_DZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "بيان — اتأكّد من البيانات الحكومية الجزائرية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${geist.variable}`}>
      <body className="h-dvh overflow-hidden bg-background text-foreground font-cairo antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
