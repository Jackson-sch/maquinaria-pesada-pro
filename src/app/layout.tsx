import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Maquinaria Pro",
  description: "Calculadora de rendimiento y combustible",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Maquinaria Pro",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Watermark */}
        <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.03] select-none">
          <div className="w-[200%] h-[200%] flex flex-wrap content-center justify-center gap-12 -rotate-12">
            {Array.from({ length: 100 }).map((_, i) => (
              <span
                key={i}
                className="text-4xl font-black uppercase text-black whitespace-nowrap"
              >
                Jackson Sebastian
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
