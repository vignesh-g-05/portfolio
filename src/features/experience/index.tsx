const Experience = () => {
  return (
    <section className="space-y-5" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="font-heading text-2xl font-bold md:text-3xl"
      >
        Experience
      </h2>
      <article className="bg-card border-border/40 space-y-4 p-6">
        <a
          href="https://techmaxima.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <img
            src="/icons/companies/techmaxima.png"
            className="size-10 rounded-lg md:size-12"
            alt="TechMaxima company logo"
          />

          <div>
            <h3 className="font-heading text-lg font-bold">TechMaxima</h3>
            <p className="text-muted-foreground flex flex-wrap gap-1 text-sm">
              <b>Software Developer</b>
              <span>•</span>
              <span>Jul 2025 - Present</span>
            </p>
          </div>
        </a>

        <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
          <li>
            Developed 2 SaaS applications and a real-time backend service using
            WebSockets
          </li>
          <li>
            Refactored complex application logic to improve performance and
            maintainability
          </li>
          <li>
            Built and integrated real-time features using Next.js and Socket.IO
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;
