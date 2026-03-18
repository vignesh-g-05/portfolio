import Hero from "./features/hero";
import Header from "./features/header";
import Skills from "./features/skills";
import Projects from "./features/projects";
import Experience from "./features/experience";
import About from "./features/about";
import Contact from "./features/contact";
import Footer from "./features/footer";

export default function App() {
  return (
    <main className="mx-auto mb-20 flex max-w-275 flex-col gap-20 px-5 md:px-8 lg:px-10">
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
