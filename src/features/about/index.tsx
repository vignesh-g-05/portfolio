const About = () => {
  return (
    <section
      className="flex flex-col items-center gap-8 md:flex-row md:items-start"
      aria-labelledby="about-heading"
    >
      <div className="space-y-5">
        <h2
          id="about-heading"
          className="font-heading text-2xl font-bold md:text-3xl"
        >
          About
        </h2>

        <p>
          I’m a <b>full-stack developer</b> at <b>TechMaxima</b>.
        </p>

        <p>
          I build and maintain <b>ChatMaxima Widget</b> and <b>ChatExpress</b>,
          working across the entire stack — frontend, backend, testing, and
          deployment.
        </p>

        <p>
          While building these systems, I adopted technologies like Next.js and
          Socket.IO to develop real-time features and infrastructure.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="/images/about.png"
          alt="Illustration of a developer coding at a cozy desk"
          className="max-w-70 drop-shadow-2xl transition-transform duration-200 hover:-translate-y-1"
        />
      </div>
    </section>
  );
};

export default About;
