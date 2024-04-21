'use client';
import React, {useEffect, useState} from 'react'
import Navbar from '@/components/Navbar'

export default function NavbarLayout() {
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
    <>
      <Navbar links={links} activeSection={activeSection} />
    </>
  )
}
