'use client'
import About from "@/components/About";
// import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import ContactForm from "@/components/contacts/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Project />
      <ContactForm />
    </div>
  );
}
