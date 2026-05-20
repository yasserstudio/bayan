import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "./globals.css";

const siteTitle = "بيان — تحقّق من البيانات الحكومية الجزائرية";
const siteDescription =
  "منصة مستقلة للتحقق من البيانات الحكومية الجزائرية. امسح رمز QR أو ارفع صورة البيان للتحقق من صحته في ثوانٍ.";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://bayan.yasser.studio"),
  title: siteTitle,
  description: siteDescription,
  keywords: ["بيان", "التحقق من البيانات الحكومية", "الجزائر", "وثيقة رسمية", "تزوير"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${geist.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-cairo antialiased">
        {children}
      </body>
    </html>
  );
}
