import Hero from "./features/hero";
import Header from "./features/header";
import Skills from "./features/skills";

export default function App() {
  return (
    <main className="mx-auto flex max-w-275 flex-col gap-20 px-5 md:px-8 lg:px-10">
      <Header />
      <Hero />
      <Skills />
    </main>
  );
}
