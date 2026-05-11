import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex scroll-mt-40 flex-col gap-8 md:flex-row md:items-start md:justify-between"
    >
      <div className="max-w-xl space-y-5">
        <h2
          id="about-heading"
          className="font-heading text-2xl font-bold md:text-3xl"
        >
          About
        </h2>

        <p className="text-foreground text-sm leading-relaxed">
          Software Developer at{" "}
          <span className="font-semibold">TechMaxima</span>, working across
          production applications including CRM widgets, real-time systems, and
          voice platforms.
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Experienced in improving large legacy codebases, building scalable UI
          systems, and shipping frontend and backend features used in live
          products.
        </p>

        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="bg-primary mt-1 size-1.5 rounded-full" />
            Modernized and refactored legacy applications with large TypeScript
            codebases
          </li>

          <li className="flex items-start gap-2">
            <span className="bg-primary mt-1 size-1.5 rounded-full" />
            Built multilingual, real-time, and voice-enabled product features
          </li>

          <li className="flex items-start gap-2">
            <span className="bg-primary mt-1 size-1.5 rounded-full" />
            Worked across frontend, backend, testing, and production maintenance
          </li>
        </ul>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/about.png"
          alt="Developer working on systems"
          className="max-w-72 drop-shadow-2xl transition-transform duration-200 hover:-translate-y-1"
        />
      </div>
    </section>
  );
};

export default About;
