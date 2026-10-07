import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Projects from "@/components/Projects";
import SkillsAndTools from "@/components/SkillsAndTools";
import HowIWork from "@/components/HowIWork";
import ExperienceAndTraining from "@/components/ExperienceAndTraining";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F14] text-[#F1F5F9]">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Featured Case Study */}
        <FeaturedCaseStudy />

        {/* 6. Projects */}
        <Projects />

        {/* 7. Skills & Tools */}
        <SkillsAndTools />

        {/* 8. How I Work */}
        <HowIWork />

        {/* 9. Experience & Training */}
        <ExperienceAndTraining />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
