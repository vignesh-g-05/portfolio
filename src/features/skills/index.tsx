import type { Skill } from "@/constants/icons";
import SkillCard from "./components/skill-card";

type TechStack = {
  icon: Skill;
  color: string;
  category: string;
};

const techStacks: TechStack[] = [
  {
    icon: "react",
    color: "bg-[#61DAFB]/20",
    category: "Frontend",
  },
  {
    icon: "nextjs",
    color: "bg-white/20",
    category: "Full-Stack",
  },
  {
    icon: "nodejs",
    color: "bg-[#689F63]/30",
    category: "Backend",
  },
  {
    icon: "express",
    color: "bg-black/20",
    category: "Framework",
  },
  {
    icon: "mongodb",
    color: "bg-[#599636]/30",
    category: "Database",
  },
  {
    icon: "typescript",
    color: "bg-[#3178C6]/20",
    category: "Language",
  },
  {
    icon: "tailwindcss",
    color: "bg-[#0EA5E9]/20",
    category: "Styling",
  },
  {
    icon: "git",
    color: "bg-[#F1502F]/20",
    category: "Version\u{00A0}Control",
  },
];

const Skills = () => {
  return (
    <section className="space-y-5">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">Skills</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Object.values(techStacks).map((skill) => (
          <SkillCard
            key={skill.icon}
            icon={skill.icon}
            color={skill.color}
            category={skill.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
