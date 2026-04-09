import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calendaar — Your Premium Calendar",
  description: "A premium interactive calendar for planning your time beautifully.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}>
      <body className="h-screen overflow-auto flex flex-col bg-[#020617] text-white font-sans relative">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-indigo-500/[0.04] blur-[80px] rounded-full animate-spin-slow" />
          <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-amber-500/[0.03] blur-[80px] rounded-full animate-spin-slow [animation-delay:-4s]" />
          <div className="absolute inset-0 opacity-[0.03] app-bg-mesh" />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay app-bg-noise" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
