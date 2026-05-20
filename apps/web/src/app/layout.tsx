import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "بيان — تحقّق من البيانات الحكومية الجزائرية",
  description:
    "منصة مستقلة للتحقق من البيانات الحكومية الجزائرية. امسح رمز QR أو ارفع صورة البيان للتحقق من صحته في ثوانٍ.",
  openGraph: {
    title: "بيان — تحقّق من البيانات الحكومية الجزائرية",
    description:
      "منصة مستقلة للتحقق من البيانات الحكومية الجزائرية. امسح رمز QR أو ارفع صورة البيان للتحقق من صحته في ثوانٍ.",
    url: "https://bayan.yasser.studio",
    siteName: "بيان",
    locale: "ar_DZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "بيان — تحقّق من البيانات الحكومية الجزائرية",
    description:
      "منصة مستقلة للتحقق من البيانات الحكومية الجزائرية.",
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
