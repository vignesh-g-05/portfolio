"use client";

import About from "@/features/about";
import Contact from "@/features/contact";
import Experience from "@/features/experience";
import Footer from "@/features/footer";
import Header from "@/features/header";
import Hero from "@/features/hero";
import Projects from "@/features/projects";
import Skills from "@/features/skills";

export default function Page() {
  return (
    <main className="mx-auto mb-20 flex max-w-300 flex-col gap-20 px-5 md:px-8 lg:px-10">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
