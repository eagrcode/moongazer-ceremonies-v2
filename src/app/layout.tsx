import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "MoonGazer Ceremonies",
  description:
    "Dee Robinson Independent Celebrant - located on the border of Cambridgeshire and Lincolnshire, offering bespoke ceremonies and funerals services across Hertfordshire, Bedfordshire, Norfolk, Suffolk, Northamptonshire, Rutland, and Essex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-raleway">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
