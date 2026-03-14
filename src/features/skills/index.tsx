import SkillCard from "./components/skill-card";

const skills = [
  {
    label: "React",
    src: "/icons/skills/react.svg",
    color: "bg-[#61DAFB]/20",
    category: "Frontend",
  },
  {
    label: "Next.js",
    src: "/icons/skills/nextjs.svg",
    color: "bg-white/20",
    category: "Full-Stack",
  },
  {
    label: "Node.js",
    src: "/icons/skills/nodejs.svg",
    color: "bg-[#689F63]/30",
    category: "Backend",
  },
  {
    label: "Express",
    src: "/icons/skills/express.svg",
    color: "bg-white/70",
    category: "Backend Framework",
  },
  {
    label: "MongoDB",
    src: "/icons/skills/mongodb.svg",
    color: "bg-[#599636]/30",
    category: "Database",
  },
  {
    label: "TypeScript",
    src: "/icons/skills/typescript.svg",
    color: "bg-[#3178C6]/20",
    category: "Language",
  },
  {
    label: "Tailwind",
    src: "/icons/skills/tailwindcss.svg",
    color: "bg-[#0EA5E9]/20",
    category: "Styling",
  },
  {
    label: "Git",
    src: "/icons/skills/git.svg",
    color: "bg-[#F1502F]/20",
    category: "Version Control",
  },
];

const Skills = () => {
  return (
    <section className="space-y-5">
      <h3 className="font-heading text-3xl font-bold">Skills</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Object.values(skills).map((skill) => (
          <SkillCard
            label={skill.label}
            src={skill.src}
            key={skill.label}
            color={skill.color}
            category={skill.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
