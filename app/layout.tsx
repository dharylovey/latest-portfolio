import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import NavbarLayout from "@/components/NavbarLayout";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Dharyl Portfolio",
  description: "Explore the digital world of Dharyl Almora's portfolio.",
  authors: {
    name: "Dharyl Almora", 
    url: "https://dharyl-portfolio.beta.vercel.app/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarLayout />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
