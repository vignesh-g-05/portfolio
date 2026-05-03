const experience = [
  {
    company: "TechMaxima",
    role: "Software Developer",
    duration: "Jul 2025 - present",
    description:
      "Built and maintained full-stack applications, handling UI, APIs, and testing in production.",
  },
];

const Experience = () => {
  return (
    <div className="space-y-4">
      {experience.map((exp) => (
        <div key={exp.company} className="space-y-1">
          <p>
            <span className="text-primary font-bold">◆ {exp.role}</span>{" "}
            <span>@</span> <span className="text-chart-2">{exp.company}</span>
          </p>
          <p className="text-chart-3 ml-8">{exp.duration}</p>

          <p className="ml-8 text-xs text-white">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
