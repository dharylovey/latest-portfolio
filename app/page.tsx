'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
