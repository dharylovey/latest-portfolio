'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Personal Portfolio",
//   description: "Explore the digital world of Dharyl Almora's portfolio, where creativity meets innovation. With a passion for design and development, Dharyl showcases a diverse range of projects, from sleek web designs to interactive user experiences. Dive into a world of captivating visuals and seamless functionality, crafted with meticulous attention to detail and a drive for excellence.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let [activeSection, setActiveSection] = useState("about");

  let links = ["about", "skills", "project", "contact"];

  useEffect(() => {
    let about = document.getElementById("about");
    // let experience = document.getElementById('experience')
    let myskills = document.getElementById("skills");
    let project = document.getElementById("project");
    let contact = document.getElementById("contact");

    let sections = [about, myskills, project, contact];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "about") {
            setActiveSection("about");
          }
          // if (entry.target.id == 'experience'){
          //   setActiveSection('experience')
          // }
          if (entry.target.id == "skills") {
            setActiveSection("skills");
          }
          if (entry.target.id == "project") {
            setActiveSection("project");
          }
          if (entry.target.id == "contact") {
            setActiveSection("contact");
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar links={links} activeSection={activeSection} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
