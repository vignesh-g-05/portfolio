import Terminal from "./components/terminal";
import HeroDetails from "./components/hero-details";

const Hero = () => {
  return (
    <section
      aria-label="Introduction"
      className="mt-30 grid items-center gap-10 md:min-h-screen lg:mt-0 lg:grid-cols-2"
    >
      <HeroDetails />
      <Terminal />
    </section>
  );
};

export default Hero;
