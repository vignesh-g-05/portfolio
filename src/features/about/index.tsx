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
          Full-stack developer at{" "}
          <span className="font-semibold">TechMaxima</span>, building and
          maintaining real-world applications used in production.
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed">
          I work on products like{" "}
          <span className="text-foreground font-medium">ChatMaxima Widget</span>{" "}
          and <span className="text-foreground font-medium">ChatExpress</span>,
          handling frontend, backend APIs, and real-time features.
        </p>

        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="bg-primary mt-1 size-1.5 rounded-full" />
            Built UI-heavy applications using Next.js
          </li>

          <li className="flex items-start gap-2">
            <span className="bg-primary mt-1 size-1.5 rounded-full" />
            Developed backend APIs and real-time systems with Express &
            Socket.IO
          </li>

          <li className="flex items-start gap-2">
            <span className="bg-primary mt-1 size-1.5 rounded-full" />
            Worked across deployment, testing, and production maintenance
          </li>
        </ul>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="/images/about.png"
          alt="Developer working on systems"
          className="max-w-72 drop-shadow-2xl transition-transform duration-200 hover:-translate-y-1"
        />
      </div>
    </section>
  );
};

export default About;
