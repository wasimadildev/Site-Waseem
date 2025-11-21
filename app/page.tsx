
"use client";

import React, { useState } from "react";
import ModernNavbar from "./components/Navbar";
import PortfolioHero from "./components/Hero";
import TechnologiesTools from "./components/Technologies";
import ContactPage from "./components/Contact";
import Blog from "./components/BlogCard";

import Projects from "./components/Projects";
import Education from "./components/Education";

import Certifications from './components/Certifications';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col w-full">
      <ModernNavbar isDark={isDark} setIsDark={setIsDark} />

      {/* Add id attributes to each section */}
      <section id="home">
        <PortfolioHero isDark={isDark} />
      </section>

      <section id="projects">
        <Projects isDark={isDark} />
      </section>

      <section id="technologies">
        <TechnologiesTools isDark={isDark} />
      </section>

      <section id="education">
        <Education isDark={isDark} />
      </section>
      <section id="certifications">
        <Certifications isDark={isDark} />
      </section>
      <section id="blog">
        <Blog isDark={isDark} />
      </section>

      <section id="contact">
        <ContactPage isDark={isDark} />
      </section>
    </div>
  );
}
