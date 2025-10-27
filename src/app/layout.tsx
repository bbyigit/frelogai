import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRELOG AI",
  description: "Akıllı Taşıma Sistemleri • Rail & Road • Canlı Takip • Saha IoT • Harita Entegrasyonu",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
