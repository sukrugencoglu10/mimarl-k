import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio — Modern Mimarlık & Tasarım",
  description:
    "Vizyoner projeler, zamansız tasarım. Modern mimarlık ve iç tasarım alanında yaratıcı çözümler sunuyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={outfit.variable}>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
