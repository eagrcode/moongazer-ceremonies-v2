import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "MoonGazer Ceremonies",
  description:
    "Dee Robinson Independent Celebrant - located on the border of Cambridgeshire and Lincolnshire, offering services across Hertfordshire, Bedfordshire, Norfolk, Suffolk, Northamptonshire, Rutland, and Essex.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
