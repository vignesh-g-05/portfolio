import Hero from "./features/hero";
import Header from "./features/header";

export default function App() {
  return (
    <main className="mx-auto flex max-w-275 flex-col gap-20 px-5 py-10 pt-20 md:px-8 lg:px-10">
      <Header />
      <Hero />
    </main>
  );
}
