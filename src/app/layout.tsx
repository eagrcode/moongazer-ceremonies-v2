import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Dancing_Script, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "MoonGazer Ceremonies",
  description:
    "Dee Robinson Independent Celebrant - located on the border of Cambridgeshire and Lincolnshire, offering bespoke ceremonies and funeral services across Hertfordshire, Bedfordshire, Norfolk, Suffolk, Northamptonshire, Rutland, and Essex.",
};

const DancingFont = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
  preload: true,
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${DancingFont.variable} ${PoppinsFont.variable}`}>
      <body>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-QVJL4WV2LD" />
      </body>
    </html>
  );
}
