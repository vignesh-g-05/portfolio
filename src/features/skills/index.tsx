import SkillCard from "./components/skill-card";

const skills = [
  {
    label: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-[#61DAFB]/20",
    category: "Frontend",
  },
  {
    label: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "bg-white/20",
    category: "Full-Stack",
  },
  {
    label: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-[#689F63]/30",
    category: "Backend",
  },
  {
    label: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "bg-white/70",
    category: "Backend Framework",
  },
  {
    label: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-[#599636]/30",
    category: "Database",
  },
  {
    label: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "bg-[#3178C6]/20",
    category: "Language",
  },
  {
    label: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "bg-[#0EA5E9]/20",
    category: "Styling",
  },
  {
    label: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
